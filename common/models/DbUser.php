<?php

namespace common\models;

use common\components\ActiveQuery;
use Yii;

/**
 * This is the model class for table "db_user".
 *
 * @property integer             $id
 * @property integer             $created
 * @property integer             $updated
 * @property string              $status
 * @property string              $firstName
 * @property string              $lastName
 * @property string              $email
 * @property string              $password
 * @property string              $salt
 *
 * @property-read string         $fullName
 * @property-read string         $name
 */
class DbUser extends \common\components\ActiveRecord {

    public $passwordNew;
    public $passwordNewConfirm;
    public $authKey;

    public function beforeSave ($insert) {
        $this->updatePassword();

        return parent::beforeSave($insert);
    }

    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_user';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['status', 'password', 'firstName', 'lastName', 'email'], 'required'],
            [['passwordNew', 'passwordNewConfirm'], 'required', 'on' => 'password'],
            [['created', 'updated'], 'integer'],
            [['status', 'firstName', 'lastName'], 'string', 'max' => 45],
            [['email', 'password', 'salt'], 'string', 'max' => 255],
            [['email'], 'unique'],
            [['passwordNew', 'passwordNewConfirm'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels () {
        return [
            'id' => 'ID',
            'status' => 'Status',
            'password' => 'Password',
            'firstName' => 'First Name',
            'lastName' => 'Last Name',
            'email' => 'Email',
            'salt' => 'Salt',
            'updated' => 'Updated',
            'created' => 'Created',

            'passwordNew' => 'New Password',
            'passwordNewConfirm' => 'Confirm Password',
        ];
    }

    public function getFullName () {

        if (!empty($this->firstName) && !empty($this->lastName)) {
            return trim($this->firstName . ' ' . $this->lastName);
        } elseif (!empty($this->firstName)) {
            return trim($this->firstName);
        } elseif (!empty($this->lastName)) {
            return trim($this->lastName);
        } elseif (!empty($this->email)) {
            return trim($this->email);
        }
    }

    public function getHash () {
        return $this->salt . Yii::$app->params['salt'];
    }

    public function getLogins () {
        return $this->hasMany(DbUserLogin::className(), ['userId' => 'id']);
    }

    public function getName () {
        if (!empty($this->firstName)) {
            return trim($this->firstName);
        } else {
            return $this->fullName;
        }
    }

    public function getSearchAttrs () {
        return array(
            'firstName',
            'lastName',
            'email',
        );
    }

    public function getSearchOrder () {
        return [
            'status ASC',
            'firstName ASC',
            'lastName ASC',
            'email ASC',
        ];
    }

    public function setDefaults () {
        if (empty($this->password)) {
            $this->password = Yii::$app->security->generateRandomString(10);
        }

        if (empty($this->salt)) {
            $this->salt = Yii::$app->security->generateRandomString();
        }

        if (empty($this->status)) {
            $this->status = 'active';
        }

        parent::setDefaults();
    }

    public function updatePassword () {
        if (!empty($this->passwordNew)) {
            $password = $this->passwordNew . $this->hash;
            $this->password = Yii::$app->security->generatePasswordHash($password);
        }
    }


    public function validatePassword ($password) {
        $password = $password . $this->hash;

        return Yii::$app->security->validatePassword($password, $this->password);
    }
}
