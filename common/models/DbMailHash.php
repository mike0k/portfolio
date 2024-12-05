<?php

namespace common\models;

use common\components\ActiveRecord;
use Yii;

/**
 * This is the model class for table "db_mail_hash".
 *
 * @property string  $hash
 * @property integer $created
 * @property integer $updated
 * @property integer $expire
 * @property string  $location
 * @property integer $refId
 * @property string  $refType
 * @property string  $password
 *
 * @property-read integer $pin
 * @property-read DbUser $ref
 */
class DbMailHash extends \common\components\ActiveRecord {

    protected $_pin;

    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_mail_hash';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['location', 'refId', 'refType'], 'required'],
            [['created', 'updated', 'expire', 'refId'], 'integer'],
            [['password'], 'string', 'max' => 255],
            [['hash'], 'string', 'max' => 45],
            [['location', 'refType'], 'string', 'max' => 20],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels () {
        return [
            'hash' => 'Hash',
            'created' => 'Created',
            'updated' => 'Updated',
            'expire' => 'Expire',
            'location' => 'Location',
            'refId' => 'Ref ID',
            'refType' => 'Ref Type',
            'password' => 'Password',
        ];
    }

    public function listTrigger () {
        return [
            'password-reset' => array('ref' => 'user', 'action' => 'passwordReset'),
            'verify-email' => array('ref' => 'user', 'action' => 'verifyEmail'),
        ];
    }

    public static function add ($model, $location, $expire = null) {
        /*$hash = DbMailHash::findOne([
            'location' => $location,
            'refType' => $model->className,
            'refId' => $model->id,
        ]);*/
        if (empty($hash)) {
            $hash = new DbMailHash();
            $hash->location = $location;
            $hash->refType = $model->className;
            $hash->refId = $model->id;
        }
        $hash->expire = $expire;

        return ($hash->save() ? $hash : false);
    }

    public static function clear ($hash) {
        $valid = false;
        $model = DbVar::findOne(['hash' => $hash]);
        if (empty($model)) {
            $valid = $model->delete();
        }

        return $valid;
    }

    public function getUrl () {
        return Yii::getAlias('@site-url').'/mail/'.$this->hash;
        //return \yii\helpers\Url::to(['mail-link/index', 'hash' => $this->hash], true);
    }

    public function getPin(){
        return $this->_pin;
    }

    public function genHash(){
        $hash = strtolower($this->generateRandomString('hash'));
        $hash = substr($hash, 0,20);

        return $hash;
    }

    public function genPassword($pin = null){
        if(empty($pin)){
            $pin = rand(10000, 99999);
            $this->_pin = $pin;
        }
        $pin = !empty($pin) ? $pin : rand(10000, 99999);
        $password = $pin . $this->hash . Yii::$app->params['salt'];
        $password = substr($password, 0,40);

        return $password;
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->hash)) {
            $this->hash = $this->genHash();
        }

        if (empty($this->password)) {
            $password = $this->genPassword();
            $this->password = Yii::$app->security->generatePasswordHash($password);
        }

        if($this->refType == 'UserIdentity'){
            $this->refType = 'DbUser';
        }

        $this->expire = strtotime('+1 week');
    }

    public function verifyPin($pin){
        $password = $this->genPassword($pin);
        $valid = Yii::$app->security->validatePassword($password, $this->password);
        if(!$valid){
            $this->addError('password', 'Invalid Password');
        }

        return $valid;
    }
}
