<?php

namespace common\models;

use Yii;
use yii\helpers\ArrayHelper;
use yii\validators\UrlValidator;
use yii\web\UploadedFile;

/**
 * This is the model class for table "db_media".
 *
 * @property integer $id
 * @property integer $created
 * @property integer $updated
 * @property string  $refType
 * @property integer $refId
 * @property string  $type
 * @property string  $filename
 * @property string  $name
 * @property string  $extension
 * @property integer $sortId
 *
 * @property string $path
 * @property string $url
 */
class DbMedia extends \common\components\ActiveRecord {

    public function beforeDelete () {
        if (file_exists($this->path)) {
            unlink($this->path);
        }

        return parent::beforeDelete();
    }

    public function beforeSave ($insert) {
        if(empty($this->oldAttributes->id)) {
            $this->deleteDuplicates();
        }
        return parent::beforeSave($insert);
    }

    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_media';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['refType', 'refId', 'type', 'filename'], 'required'],
            [['created', 'updated', 'refId', 'sortId'], 'integer'],
            [['refType', 'type'], 'string', 'max' => 20],
            [['filename'], 'string', 'max' => 255],
            [['name'], 'string', 'max' => 45],
            [['extension'], 'string', 'max' => 6],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels () {
        return [
            'id' => 'ID',
            'created' => 'Created',
            'updated' => 'Updated',
            'refType' => 'Ref Type',
            'refId' => 'Ref ID',
            'type' => 'Type',
            'filename' => 'Filename',
            'name' => 'Name',
            'extension' => 'File Type',
            'sortId' => 'Order ID',
        ];
    }

    public function allowMulti($type = null){
        $type = empty($type) ? $this->type : $type;
        $valid = false;
        $allowed = [
            'floorPlan',
            'photo',
            'video',
        ];
        if(in_array($type, $allowed)){
            $valid = true;
        }

        return $valid;
    }

    public function calcSortId () {
        $return = 1;
        if (empty($this->sortId)) {
            $order = DbMedia::find()
                ->select('max(sortId) AS sortId')
                ->filterWhere([
                    'refId' => $this->refId,
                    'refType' => $this->refType,
                    'type' => $this->type,
                ])->one();
            if (!empty($order)) {
                $return = $order->sortId + 1;
            }
        }

        return $return;
    }

    protected function deleteDuplicates(){
        if(!$this->allowMulti()){
            $models = DbMedia::find()
                ->where([
                    'refType' => $this->refType,
                    'refId' => $this->refId,
                    'type' => $this->type,
                ])->all();
            if(!empty($models)){
                foreach($models as $model){
                    $model->delete();
                }
            }
        }
    }

    public function genFilename ($prefix = '', $affix = '', $count = 0) {
        if ($count > 1000) {
            return '';
        }
        $ref = $prefix . date('Ymd-His').'-'.rand(100000, 999999) . $affix;
        $exists = DbMedia::find()->where([
            'refType' => $this->refType,
            'refId' => $this->refId,
            'filename' => $ref,
        ])->one();
        if (!empty($exists)) {
            $count++;
            $ref = $this->genFilename($prefix, $affix, $count);
        }

        return $ref;
    }

    public function getPath ($incFilename = true) {
        $return = false;
        if (!empty($this->refId) && !empty($this->type) && !$this->remote) {
            $return = Yii::getAlias('@media') . '/' . $this->refType . '/' . $this->refId . '/';
            if ($incFilename && !empty($this->filename)) {
                $return .= $this->filename;
            }
        }

        return $return;
    }

    public function getRemote(){
        return $this->extension == 'remote';
    }

    public function getTitle(){
        $return = $this->name;
        if($this->name == $this->filename){
            $return = $this->getListLabel('listType');
            if($this->allowMulti()){
                $return .= ' '.$this->sortId;
            }
        }
        return $return;
    }

    public function getUrl(){
        if($this->remote){
            return $this->filename;
        }
        return Yii::getAlias('@api-url').'/media/view/'.base64_encode('media/' . $this->filename);
    }

    public function isRemote ($filename = null) {
        $filename = empty($filename) ? $this->filename : $filename;
        $rule = new UrlValidator();
        $rule->validSchemes = ['https'];

        return $rule->validate($filename);
    }

    public function listFileFormats () {
        switch ($this->type) {
            case 'brochure':
            case 'epc':
            case 'homeReport':
                $return = array(
                    'pdf' => 'application/pdf',
                );
                break;

            case 'avatar':
            case 'floorPlan':
            case 'header':
            case 'photo':
                $return = array(
                    //'gif' => 'image/gif',
                    'jpg' => 'image/jpeg',
                    'png' => 'image/png',
                );
                break;

            default:
                $return = array(
                    //'gif' => 'image/gif',
                    'jpg' => 'image/jpeg',
                    'png' => 'image/png',

                    'doc' => 'application/msword',
                    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'odt' => 'application/vnd.oasis.opendocument.text',
                    'pdf' => 'application/pdf',
                    'txt' => 'text/plain',
                );
        }

        return $return;
    }

    public function listFileIcon () {
        return [
            'gif' => 'fa-image-o',
            'jpg' => 'fa-image-o',
            'png' => 'fa-image-o',

            'doc' => 'fa-file-word-o',
            'docx' => 'fa-file-word-o',

            'pdf' => 'fa-file-pdf-o',

            'odt' => 'fa-file-text-o',
            'txt' => 'fa-file-text-o',
        ];
    }

    public function listType ($refType = null) {
        $list = [];
        switch ($refType) {
            case 'DbCompany':
                $list = [
                    'avatar' => 'Avatar',
                ];
                break;

            case 'DbProperty':
                $list = [
                    'brochure' => 'Brochure',
                    'epc' => 'EPC',
                    'homeReport' => 'Home Report',
                    'floorPlan' => 'Floor Plan',
                    'header' => 'Header',
                    'photo' => 'Photo',
                    'video' => 'Video',
                ];
                break;

            case 'DbUser':
                $list = [
                    'avatar' => 'Avatar',
                ];
                break;

            default:
                $list = [
                    'avatar' => 'Avatar',
                    'brochure' => 'Brochure',
                    'epc' => 'EPC',
                    'homeReport' => 'Home Report',
                    'floorPlan' => 'Floor Plan',
                    'header' => 'Header',
                    'photo' => 'Photo',
                    'video' => 'Video',
                ];
                break;
        }

        return $list;
    }

    public function mediaCount () {
        $count = 0;
        if (!empty($this->refType) && !empty($this->refId)) {
            $count = $this->find()
                ->where([
                    'refType' => $this->refType,
                    'refId' => $this->refId
                ])->count();
        }

        return $count;
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->sortId)) {
            $this->sortId = $this->calcSortId();
        }

        if (empty($this->name)) {
            $this->name = $this->filename;
            if (strlen($this->name) > 45) {
                $this->name = substr($this->name, 0, 42) . '...';
            }
        }

        if ($this->isRemote()) {
            $this->extension = 'remote';
        }
        if (empty($this->extension)) {
            $this->extension = pathinfo($this->path, PATHINFO_EXTENSION);
        }
    }

    public function uploadFile ($file) {
        $valid = true;

        if (!in_array($file->type, $this->listFileFormats())) {
            $valid = false;
            $this->addError('file', 'Invalid file format. Allowed file formats: ' . implode(', ', array_keys($this->listFileFormats())));
        }

        if ($file->size >= 10000000) {
            $valid = false;
            $this->addError('file', 'File is too large. Max file size: 10Mb');
        }

        if ($this->mediaCount() > 100) {
            $valid = false;
            $this->addError('file', 'Too many uploads. Max upload limit: 100 files');
        }

        if ($valid && !empty($file)) {
            $valid = false;

            //create dir for file to be stored
            if (!file_exists($this->getPath(false))) {
                mkdir($this->getPath(false), 0775, true);
            }

            $this->extension = $file->extension;

            if ($file->saveAs($this->path)) {
                $valid = $this->save();
                if (!$valid && file_exists($this->path) && is_file($this->path)) {
                    unlink($this->path);
                }
            }
        }



        return $valid;
    }

}
