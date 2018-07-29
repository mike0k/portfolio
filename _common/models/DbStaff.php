<?php

namespace common\models;

use common\components\ActiveQuery;
use Yii;

/**
 * This is the model class for table "db_staff".
 *
 */
class DbStaff extends DbUser {

    public function rules () {
        return [
            [['status', 'firstName', 'email', 'password'], 'required'],
            [['passwordNew', 'passwordNewConfirm'], 'required', 'on' => 'password'],
            [['created', 'updated', 'lastLogin'], 'integer'],
            [['address'], 'string'],
            [['status'], 'string', 'max' => 20],
            [['firstName', 'lastName'], 'string', 'max' => 45],
            [['email', 'password', 'salt'], 'string', 'max' => 255],
            [['phone'], 'string', 'max' => 15],
            [['email'], 'email'],
            [['email'], 'unique'],
            [['email', 'phone'], 'trim'],
            [['passwordNew', 'passwordNewConfirm'], 'safe'],
        ];
    }

    public static function tableName () {
        return 'db_staff';
    }

}
