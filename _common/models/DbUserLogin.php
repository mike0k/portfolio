<?php

namespace common\models;

use Yii;
use yii\helpers\Json;

/**
 * This is the model class for table "db_user_login".
 *
 * @property integer $id
 * @property integer $created
 * @property integer $updated
 * @property string  $status
 * @property integer $attempts
 * @property integer $userId
 * @property string  $ipAddress
 * @property string  $device
 */
class DbUserLogin extends \common\components\ActiveRecord {
    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_user_login';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['created', 'updated', 'status', 'ipAddress'], 'required'],
            [['created', 'updated', 'attempts', 'userId'], 'integer'],
            [['device'], 'string'],
            [['status', 'ipAddress'], 'string', 'max' => 45],
            [['ipAddress'], 'ip'],
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
            'status' => 'Status',
            'attempts' => 'Attempts',
            'userId' => 'User ID',
            'ipAddress' => 'Ip Address',
            'device' => 'Device',
        ];
    }

    public function getUser () {
        return $this->hasOne(DbUser::className(), ['id' => 'userId']);
    }

    public function getSearchAttrs () {
        return array(
            'ipAddress',
        );
    }

    public function getSearchOrder () {
        return [
            'updated ASC',
            'ipAddress ASC',
            'status ASC',
            'device ASC',
        ];
    }

    public function ban ($id = null) {
        $valid = false;
        if (!empty($id)) {
            $model = DbUserLogin::findOne($id);
        }

        if (empty($model)) {
            //get the ip and device details
            $model = new DbUserLogin();
            $model->setDefaults();
        }

        //check for previous attempts
        $models = DbUserLogin::find()
            ->filterWhere([
                'ipAddress' => $model->ipAddress,
            ])->all();
        if (!empty($models)) {
            foreach ($models as $model) {
                $model->status = 'ban';
                $valid = $model->save();
            }
        }

        return $valid;
    }

    public function isBanned () {
        $valid = false;

        //get the ip and device details
        $model = new DbUserLogin();
        $model->setDefaults();

        //check for previous attempts
        $count = DbUserLogin::find()
            ->filterWhere([
                'ipAddress' => $model->ipAddress,
                //'device' => $model->device,
                'status' => 'ban',
            ])->count();

        //return false if ip address is banned
        if (!empty($count)) {
            $valid = true;
        }

        return $valid;
    }

    public function hasLoginAccess () {
        $valid = true;

        //get the ip and device details
        $model = new DbUserLogin();
        $model->setDefaults();

        //check for previous attempts
        $count = DbUserLogin::find()
            ->filterWhere([
                'ipAddress' => $model->ipAddress,
                //'device' => $model->device,
                'status' => 'inactive',
            ])->andWhere(['>=', 'attempts', 2])
            ->andWhere(['>', 'updated', strtotime('-12 hours')])
            ->count();

        //return false if ip address has multiple attempts from any number of devices
        if (!empty($count)) {
            $valid = false;
        }

        return $valid;
    }

    public function hasSiteAccess () {
        $valid = true;

        //get the ip and device details
        $model = new DbUserLogin();
        $model->setDefaults();

        //check for previous attempts
        $count = DbUserLogin::find()
            ->filterWhere([
                'ipAddress' => $model->ipAddress,
                'device' => $model->device,
                'status' => 'active',
            ])->count();

        //return false if active device & ip address are missing
        if (empty($count)) {
            $valid = false;
        }

        return $valid;
    }

    public function logAttempt ($success = false, $userId = null) {
        //get the ip and device details
        $model = new DbUserLogin();
        $model->setDefaults();

        //check for previous attempts
        $duplicate = DbUserLogin::find()
            ->filterWhere([
                'ipAddress' => $model->ipAddress,
                'device' => $model->device,
            ])->one();
        if (!empty($duplicate)) {
            $model = $duplicate;
            if ($model->status == 'ban') {
                return false;
            }
        }

        //reset attempts is 12 hours have passed since last attempt
        if (!empty($model->updated) && $model->updated < strtotime('-12 hours')) {
            $model->attempts = 0;
        }


        if ($success) {
            //reset attempts on successful login
            $model->status = 'active';
            $model->attempts = 0;
            $model->userId = $userId;
        } else {
            //increment attempts on failed login
            $model->status = 'inactive';
            $model->attempts = $model->attempts + 1;
        }

        return $model->save();
    }

    public function logout ($id = null) {
        $valid = false;
        if (!empty($id)) {
            $model = DbUserLogin::findOne($id);
        }

        if (empty($model)) {
            //get the ip and device details
            $model = new DbUserLogin();
            $model->setDefaults();

            //check for previous attempts
            $model = DbUserLogin::find()
                ->filterWhere([
                    'ipAddress' => $model->ipAddress,
                    'device' => $model->device,
                    'status' => 'active',
                ])->one();
        }

        if (!empty($model)) {
            $model->status = 'inactive';
            $valid = $model->save();
        }

        return $valid;
    }

    public function listStatus () {
        return [
            'active' => 'Active',
            'inactive' => 'Inactive',
            'ban' => 'Banned',
        ];
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->status)) {
            $this->attempts = 'inactive';
        }

        if (empty($this->device)) {
            $this->device = $_SERVER['HTTP_USER_AGENT'];
        }

        if (empty($this->attempts)) {
            $this->attempts = 0;
        }
    }

    public function getDeviceDetails () {
        return $this->getBrowser($this->device, true);
    }

    public function getLocation(){
        $parts = [];
        $ip = $this->ipAddress;
        $details = json_decode(file_get_contents('http://ipinfo.io/'.$ip.'/json'));

        if(!empty($details->city)){
            $parts[] = $details->city;
        }

        if(!empty($details->region)){
            $parts[] = $details->region;
        }

        if(!empty($details->country) && $details->country != 'GB'){
            $parts[] = $details->country;
        }

        return implode(', ', $parts);
    }

    private function getBrowser () {
        $agent = (!empty($this->device) ? $this->device : $_SERVER['HTTP_USER_AGENT']);
        $bname = 'Unknown';
        $platform = 'Unknown';
        $version = "";
        $osIcon = 'fa-question';

        //First get the platform?
        if (preg_match('/linux/i', $agent)) {
            $platform = 'linux';
        } elseif (preg_match('/macintosh|mac os x/i', $agent)) {
            $platform = 'mac';
        } elseif (preg_match('/windows|win32/i', $agent)) {
            $platform = 'windows';
        }

        // Next get the name of the useragent yes seperately and for good reason
        if (preg_match('/MSIE/i', $agent) && !preg_match('/Opera/i', $agent)) {
            $bname = 'Internet Explorer';
            $ub = "MSIE";
            $osIcon = 'fa-edge';
        } elseif (preg_match('/Trident/i', $agent)) { // this condition is for IE11
            $bname = 'Internet Explorer';
            $ub = "rv";
            $osIcon = 'fa-edge';
        } elseif (preg_match('/Firefox/i', $agent)) {
            $bname = 'Mozilla Firefox';
            $ub = "Firefox";
            $osIcon = 'fa-firefox';
        } elseif (preg_match('/Chrome/i', $agent)) {
            $bname = 'Google Chrome';
            $ub = "Chrome";
            $osIcon = 'fa-chrome';
        } elseif (preg_match('/Safari/i', $agent)) {
            $bname = 'Apple Safari';
            $ub = "Safari";
            $osIcon = 'fa-safari';
        } elseif (preg_match('/Opera/i', $agent)) {
            $bname = 'Opera';
            $ub = "Opera";
            $osIcon = 'fa-opera';
        }

        // finally get the correct version number
        // Added "|:"
        $known = array('Version', $ub, 'other');
        $pattern = '#(?<browser>' . join('|', $known) .
            ')[/|: ]+(?<version>[0-9.|a-zA-Z.]*)#';
        if (!preg_match_all($pattern, $agent, $matches)) {
            // we have no matching number just continue
        }

        // see how many we have
        $i = count($matches['browser']);
        if ($i != 1) {
            //we will have two since we are not using 'other' argument yet
            //see if version is before or after the name
            if (strripos($agent, "Version") < strripos($agent, $ub)) {
                $version = $matches['version'][0];
            } else {
                $version = $matches['version'][1];
            }
        } else {
            $version = $matches['version'][0];
        }

        // check if we have a number
        if ($version == null || $version == "") {
            $version = "?";
        }

        return array(
            'name' => $bname,
            'version' => $version,
            'mobile' => preg_match('/Mobile/i', $agent),
            'platform' => $platform,
            'platform-icon' => $osIcon,
            'pattern' => $pattern,
            'userAgent' => $agent,
        );
    }

}
