<?php

namespace common\components;

use common\models\DbMailHash;
use common\models\DbMailOutbox;
use common\models\DbMedia;
use common\models\DbProperty;
use common\models\DbPropertyFinance;
use common\models\DbVar;
use common\models\FormReport;
use yii\helpers\ArrayHelper;
use yii;

class Maintenance extends Component {

    public function cleanLogs () {
        $models = DbMailHash::find()
            ->where(['<', 'expire', time()])
            ->all();
        if (!empty($models)) {
            foreach ($models as $model) {
                $model->delete();
            }
        }
    }

    public function cronCollision ($cron, $status, $force = false) {
        $ban = '24 hours';
        $life = '5 min';

        $name = 'cron-' . $cron;
        $valid = true;
        $data = [
            'status' => 'inactive',
            'count' => 0,
            'startTime' => null,
            'endTime' => null,
        ];

        //get cron collision log
        $log = DbVar::findByName($name);

        //create new log if missing
        if (empty($log)) {
            $log = DbVar::add($name, $data);
        }

        //merge log data with default data
        if (!empty($log)) {
            $data = ArrayHelper::merge($data, $log->data);
        }

        if ($data['status'] == 'disable') {
            $valid = false;
        }

        //false if cron is silenced unless it hasn't ran for 1 day
        if ($data['status'] == 'silence' && $data['startTime'] >= (strtotime('-' . $ban))) {
            $valid = false;
        }

        //false if cron is currently running unless cron has been active for more than an hour
        if ($data['status'] == 'active' && $data['startTime'] >= (strtotime('-' . $life))) {
            $valid = false;
        }

        //silence cron if it has more than 5 continuous collisions
        if (!$force && $data['count'] >= 5 && $data['startTime'] <= (strtotime('-' . $life))) {
            $status = 'silence';
        }

        //process requested status
        if ($valid || $force || ($status == 'inactive' && $data['status'] == 'active')) {
            $data['status'] = $status;
            switch ($status) {
                case 'active':
                    $data['startTime'] = time();
                    $data['endTime'] = null;
                    $data['count'] = 0;
                    break;
                case 'inactive':
                    $data['endTime'] = time();
                    $data['count'] = 0;
                    break;
            }

            $log->data = $data;
            $valid = $log->save();
        } else {
            $data['count']++;
            $log->data = $data;
            $log->save();
        }

        return $valid;
    }

    public function sendMail () {
        $models = DbMailOutbox::find()
            ->where(['status' => 'wait'])
            ->andWhere(['<=', 'runTime', time()])
            ->limit(10)
            ->all();
        if (!empty($models)) {
            $mailer = Yii::$app->mailer;
            foreach ($models as $model) {
                $mailer->sendMail($model);
            }
        }
    }

    public function syncMsProperties () {
        //get properties from MS DB
        $query = new yii\db\Query();
        $msProperties = Yii::$app->dbMs->createCommand('
            SELECT * 
            FROM db_property AS p
            LEFT JOIN db_property_finance AS pf
            ON p.id = pf.propId  
            LEFT JOIN db_property_spec AS ps 
            ON p.id = ps.propId 
            WHERE p.status = "published"
            ')->queryAll();

        $stillActive = [];
        if (!empty($msProperties)) {
            //var_dump($results);exit;
            foreach ($msProperties as $result) {
                //update the property reference to TFA format
                $reference = str_replace('MS', 'PM', $result['reference']);

                //fetch from DB is already added or add new
                $add = false;
                $model = DbProperty::findOne(['reference' => $reference]);
                if (empty($model)) {
                    $model = new DbProperty();
                    $add = true;
                }
                $model->doNotification = false;

                $model->created = $result['created'];
                $model->updated = $result['updated'];
                $model->reference = $reference;
                $model->status = 'draft'; //set status to draft to that it passes initial validation
                $model->type = 'sale';
                $model->publishDate = $result['publishDate'];
                $model->name = $result['address1'];
                $model->street = $result['address2'];
                $model->area = $result['address3'];
                $model->town = $result['town'];
                $model->postcode = $result['postcode'];
                $model->lat = $result['lat'];
                $model->lng = $result['lng'];

                if ($model->validate()) {
                    $valid = true;
                    $fatal = true;

                    if($add){
                        //add critical relations
                        $valid = $model->add();
                    }

                    //ensure relations exist
                    if($valid && (empty($model->id) || empty($model->config) || empty($model->finance) || empty($model->spec))){
                        $valid = false;
                    }

                    if($valid) {
                        $fatal = false;
                        $model->status = 'publish'; //update status from draft so that correct validation can now take place

                        //ADD SPEC DATA
                        $model->spec->typeId = $result['type'];
                        $model->spec->bathroom = $result['bathrooms'];
                        $model->spec->bedroom = $result['bedrooms'];
                        $model->spec->livingroom = $result['livingrooms'];
                        $model->spec->epc = $result['epc'];
                        $model->spec->newBuild = $result['newBuild'];
                        $model->spec->video = $result['videoUrl'];

                        //strip html from summary/description
                        $temp = str_replace('<p>', '', $result['summary']);
                        $temp = str_replace('</p>', '<br>', $temp);
                        $model->spec->summary = strip_tags(str_ireplace(["<br />", "<br>", "<br/>"], "\r\n", $temp));

                        $temp = str_replace('<p>', '', $result['description']);
                        $temp = str_replace('</p>', '<br>', $temp);
                        $model->spec->description = strip_tags(str_ireplace(["<br />", "<br>", "<br/>"], "\r\n", $temp));

                        $features = [];
                        for ($i = 1; $i <= 10; $i++) {
                            if (!empty($result['feature' . $i])) {
                                $features[] = $result['feature' . $i];
                            }

                        }
                        $model->spec->features = $features;

                        //ADD FINANCE DATA
                        $model->finance->price = $result['price'];
                        $model->finance->hrPrice = $result['hrPrice'];
                        $model->finance->salePrice = $result['salePrice'];
                        $model->finance->closingDate = $result['closingDate'];
                        $model->finance->entryDate = $result['entryDate'];

                        $msList = array(
                            'fixedPrice' => 1,
                            'from' => 2,
                            'guidePrice' => 3,
                            'offers' => 4,
                            'offersAround' => 5,
                            'offersRegion' => 6,
                            'offersOver' => 7,
                            'poa' => 8,
                            'sharedEquity' => 9,
                        );
                        foreach ($msList as $key => $val) {
                            if ($key == $result['priceType']) {
                                $model->finance->priceType = $val;
                                break;
                            }
                        }

                        //ADD CONFIG DATA
                        $model->config->jurisdiction = 'sco';
                        $model->config->vaType = 'agent';

                        //validate all models
                        if(!$model->validate()){
                            $valid = false;
                        }
                        if(!$model->config->validate()){
                            $valid = false;
                        }
                        if(!$model->finance->validate()){
                            $valid = false;
                        }
                        if(!$model->spec->validate()){
                            $valid = false;
                        }
                    }

                    //ADD MEDIA
                    if($valid) {
                        //get media from MS DB
                        $msMedias = Yii::$app->dbMs->createCommand('
                            SELECT * 
                            FROM db_property_media AS m
                            WHERE m.propId = '.$result['id'].'
                            ORDER BY m.type ASC, m.orderId ASC
                            ')->queryAll();
                        if(!empty($msMedias)){
                            $mediaTypes = [
                                'floorPlan' => 'floorplan',
                                'image' => 'photo',

                                'brochure' => 'brochure',
                                'epcDoc' => 'epc',
                                'homeReport' => 'homereport',
                            ];
                            //loop allowed media types
                            foreach($msMedias as $msMedia){
                                if(empty($lastType) || $msMedia['type'] != $lastType){
                                    $i = 0;
                                    $lastType = $msMedia['type'];
                                }
                                $i++;
                                if(array_key_exists($msMedia['type'], $mediaTypes)) {
                                    $mediaData = Yii::$app->formatter->asSerial($msMedia['data'], 'arr');
                                    if(!empty($mediaData) && !empty($mediaData['filename'])){

                                        //create the url for the remote file
                                        $dir = 'media';
                                        if(in_array($msMedia['type'], ['brochure', 'epcDoc', 'homeReport'])){
                                            $dir = 'docs';
                                        }
                                        $mediaUrl = 'https://www.millerstewart.com/'.$dir.'/property/'.$msMedia['propId'].'/'.$mediaData['filename'];

                                        //save media
                                        $media = DbMedia::find()->where([
                                            'refId' => $model->id,
                                            'refType' => $model->getClassName(),
                                            'type' => $mediaTypes[$msMedia['type']],
                                            'filename' => $mediaUrl,
                                        ])->one();
                                        if(empty($media)){
                                            $media = new DbMedia();
                                        }

                                        $media->refId = $model->id;
                                        $media->refType = $model->getClassName();
                                        $media->type = $mediaTypes[$msMedia['type']];
                                        $media->filename = $mediaUrl;
                                        $media->sortId = $msMedia['orderId'];
                                        $media->name = $media->getListLabel('listType', $media->type).' '.$i;
                                        $media->save();
                                    }
                                }
                            }
                        }
                    }
                    //validate media
                    if(empty($model->photo) || empty($model->hr)){
                        $valid = false;
                    }


                    if($valid) {
                        //property is good so save the property relations
                        $model->save();
                        $model->config->save();
                        $model->finance->save();
                        $model->spec->save();
                        $stillActive[] = $model->reference;
                    }else{
                        if(!empty($model->id)) {
                            //property failed, only delete if the critical relations are missing
                            if ($fatal) {
                                $model->delete();
                            }else{
                                $model->status = 'draft';
                                $model->save();
                            }
                        }

                        /*var_dump('failed to add');
                        var_dump($model->errors);
                        var_dump($model->config->errors);
                        var_dump($model->finance->errors);
                        var_dump($model->spec->errors);
                        var_dump($model->attributes);
                        var_dump($model->config->attributes);
                        var_dump($model->finance->attributes);
                        var_dump($model->spec->attributes);
                        var_dump($result);
                        exit;*/
                    }

                }

            }
        }

        //find existing properties that failed to update or that were not in the list from MS
        $query = DbProperty::find()->where(['LIKE', 'reference', 'PM']);
        if(!empty($stillActive)){
            $query->andWhere(['NOT IN', 'reference', $stillActive]);
        }
        $models = $query->all();
        if(!empty($models)){
            foreach($models as $model){
                //convert the reference to MS format
                $reference = str_replace('PM', 'MS', $model->reference);

                //get the current property status from MS
                $msModel = Yii::$app->dbMs->createCommand('
                    SELECT status 
                    FROM db_property AS p
                    WHERE p.reference = "'.$reference.'"
                    ')->queryOne();
                if(!empty($msModel)){
                    //update the status so long as it matches a valid status
                    if(array_key_exists($msModel['status'], DbProperty::instance()->listStatus())){
                        $model->status = $msModel['status'];
                        if(!$model->save()){
                            //set as draft if the new status validation fails
                            $model->status = 'draft';
                            $model->save();
                        }
                    }
                }else{
                    //the property must have been deleted from the MS DB so delete it from our Db as well
                    $model->delete();
                }
            }
        }
    }

}