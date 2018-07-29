<?php

namespace common\models;

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
 */
class DbMailHash extends \common\components\ActiveRecord {
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
            [['hash', 'expire', 'location'], 'required'],
            [['created', 'updated', 'expire', 'refId'], 'integer'],
            [['hash', 'location', 'password'], 'string', 'max' => 45],
            [['refType'], 'string', 'max' => 20],
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
        ];
    }

    public static function add ($model, $location, $expire = null) {
        $hash = DbMailHash::findOne([
            'location' => $location,
            'refType' => $model->className,
            'refId' => $model->id,
        ]);
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

    public function getRefExtension ($refType = null) {
        return $this->hasOne($this->className(), ['hash' => 'hash'])
            ->alias($this->tableName().'2')
            ->onCondition([
                $this->tableName().'2.refType' => $this->_refExtension,
            ]);
    }

    public function getUrl () {
        return \yii\helpers\Url::to(['mail-link/index', 'hash' => $this->hash], true);
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->hash)) {
            $this->hash = strtolower($this->generateRandomString('hash'));
        }

        $this->expire = strtotime('+1 week');
    }


}
