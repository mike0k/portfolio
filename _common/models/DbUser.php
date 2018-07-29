<?php

namespace common\models;

use common\components\ActiveQuery;
use Yii;

/**
 * This is the model class for table "db_user".
 *
 * @property integer $id
 * @property integer $created
 * @property integer $updated
 * @property string  $status
 * @property string  $firstName
 * @property string  $lastName
 * @property string  $email
 * @property string  $phone
 * @property string  $address
 * @property integer $lastLogin
 * @property string  $password
 * @property string  $salt
 */
class DbUser extends \common\components\ActiveRecord {

    public $passwordNew;
    public $passwordNewConfirm;
    public $authKey;

    public function beforeSave ($insert) {
        $this->updatePassword();

        return parent::beforeSave($insert);
    }

    public function attributeLabels () {
        return [
            'id' => 'ID',
            'status' => 'Status',
            'password' => 'Password',
            'company' => 'Company',
            'firstName' => 'First Name',
            'lastName' => 'Last Name',
            'email' => 'Email',
            'phone' => 'Phone',
            'address' => 'Address',
            'lastLogin' => 'Last Login',
            'salt' => 'Salt',
            'updated' => 'Updated',
            'created' => 'Created',

            'passwordNew' => 'New Password',
            'passwordNewConfirm' => 'Confirm Password',
        ];
    }

    public function getLogins () {
        return $this->hasMany(DbUserLogin::className(), ['userId' => 'id']);
    }

    public function getSearchAttrs () {
        return array(
            ['firstName', 'lastName'],
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
        return Yii::$app->params['salt'] . $this->salt;
    }

    public function getName () {
        if (!empty($this->firstName)) {
            return trim($this->firstName);
        } else {
            return $this->fullName;
        }
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
        if (!empty($this->passwordNew) || !empty($this->passwordNewConfirm)) {
            $this->passwordNew = str_replace(' ', '', $this->passwordNew);
            $this->passwordNewConfirm = str_replace(' ', '', $this->passwordNewConfirm);

            $valid = true;

            if ($valid && (empty($this->passwordNew) || empty($this->passwordNewConfirm) || strlen($this->passwordNewConfirm) < 4 || strlen($this->passwordNewConfirm) > 24)) {
                $valid = false;
                $this->addError('passwordConfirm', 'Password must be at least 4 characters long');
            }

            if ($valid && $this->passwordNew != $this->passwordNewConfirm) {
                $valid = false;
                $this->addError('passwordConfirm', 'Passwords do not match, please retype them');
            }

            if ($valid) {
                $password = $this->hash . $this->passwordNew;
                $this->password = Yii::$app->security->generatePasswordHash($password);
            }
        }
    }


    public function validatePassword ($password) {
        return Yii::$app->security->validatePassword($this->hash . $password, $this->password);
    }
}
