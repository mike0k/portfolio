<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "db_project".
 *
 * @property integer          $id
 * @property integer          $created
 * @property integer          $updated
 * @property string           $status
 * @property integer          $clientId
 * @property string           $name
 *
 * @property DbClient         $client
 */
class DbProject extends \common\components\ActiveRecord {

    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_project';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['status', 'clientId'], 'required'],
            [['created', 'updated', 'clientId'], 'integer'],
            [['status'], 'string', 'max' => 20],
            [['name'], 'string', 'max' => 45],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels () {
        return [
            'id' => 'ID',
            'clientId' => 'Client',
            'name' => 'Name',
            'status' => 'Status',
            'updated' => 'Updated',
            'created' => 'Created',
        ];
    }

    public function getClient () {
        return $this->hasOne(DbClient::className(), ['id' => 'clientId']);
    }

    public function getMedia () {
        return $this->hasMany(DbMedia::className(), ['refId' => 'id'])
            ->onCondition(['refType' => $this->className]);
    }

    public function getSearchAttrs () {
        return array(
            'name',
            'client.company',
        );
    }

    public function getSearchOrder () {
        return [
            'status ASC',
            'client.company ASC',
            'name ASC',
        ];
    }

    public function listProjects ($group = false) {
        $clients = $list = [];
        $projects = DbProject::find()
            ->active()
            ->orderBy('name ASC')
            ->all();
        if (!empty($projects)) {
            foreach ($projects as $project) {
                if ($group) {
                    if (empty($clients[$project->clientId])) {
                        $clients[$project->clientId] = $project->client->name;
                        $list[$clients[$project->clientId]] = [];
                    }
                    $list[$clients[$project->clientId]][$project->id] = $project->name;
                } else {
                    $list[$project->id] = $project->name;
                }
            }
        }
        if (!empty($this->id) && empty($list[$this->id])) {
            if ($group) {
                if (empty($clients[$this->clientId])) {
                    $clients[$this->clientId] = $this->client->name;
                    $list[$clients[$this->clientId]] = [];
                }
                $list[$clients[$this->clientId]][$this->id] = $this->name . ' (Inactive)';
            } else {
                $list[$this->id] = $this->name . ' (Inactive)';
            }
        }
        if ($group) {
            ksort($list);
        }

        return $list;
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->status)) {
            $this->status = 'active';
        }
    }

}
