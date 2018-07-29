<?php

namespace common\models;

use common\components\ActiveQuery;
use Yii;

/**
 * This is the model class for table "db_staff".
 *
 * @property string $company
 *
 */
class DbClient extends DbUser {

    public function rules () {
        return [
            [['status', 'company', 'email', 'password'], 'required'],
            [['passwordNew', 'passwordNewConfirm'], 'required', 'on' => 'password'],
            [['created', 'updated', 'lastLogin'], 'integer'],
            [['address'], 'string'],
            [['status'], 'string', 'max' => 20],
            [['firstName', 'lastName'], 'string', 'max' => 45],
            [['email', 'password', 'salt'], 'string', 'max' => 255],
            [['phone'], 'string', 'max' => 15],
            [['email'], 'email'],
            [['email','company'], 'unique'],
            [['email', 'phone'], 'trim'],
            [['passwordNew', 'passwordNewConfirm'], 'safe'],
        ];
    }

    public static function tableName () {
        return 'db_client';
    }

    public function getFullName () {
        return $this->company;
    }

    public function getName () {
        return $this->company;
    }

    public function getSearchAttrs () {
        return array(
            'company',
            'email',
        );
    }

    public function getSearchOrder () {
        return [
            'status ASC',
            'company ASC',
            'email ASC',
        ];
    }

    public function listClient () {
        $list = array();
        $clients = DbClient::find()
            ->active()
            ->orderBy('company ASC')
            ->all();
        if (!empty($clients)) {
            foreach ($clients as $client) {
                $list[$client->id] = $client->company;
            }
        }
        if (!empty($this->id) && empty($list[$this->id])) {
            $list[$this->id] = $this->company . ' (Inactive)';
        }

        return $list;
    }

}
