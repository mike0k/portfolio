<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "db_user_assign".
 *
 * @property integer $id
 * @property integer $created
 * @property integer $updated
 * @property integer $userId
 * @property string $type
 * @property string $refType
 * @property integer $refId
 */
class DbUserAssign extends \common\components\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'db_user_assign';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['created', 'updated', 'userId', 'refId'], 'integer'],
            [['userId', 'type', 'refType', 'refId'], 'required'],
            [['type', 'refType'], 'string', 'max' => 45],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'created' => 'Created',
            'updated' => 'Updated',
            'userId' => 'User ID',
            'type' => 'Type',
            'refType' => 'Ref Type',
            'refId' => 'Ref ID',
        ];
    }
}
