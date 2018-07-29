<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "db_mail_trigger".
 *
 * @property integer $id
 * @property integer $created
 * @property integer $updated
 * @property string  $status
 * @property string  $reference
 * @property string  $name
 * @property string  $group
 * @property string  $layout
 * @property string  $subject
 * @property string  $sendTo
 * @property string  $sendCc
 * @property string  $sendBcc
 * @property string  $sendFrom
 * @property string  $sendDelay
 * @property string  $attach
 */
class DbMailTrigger extends \common\components\ActiveRecord {

    private $_listDelay;


    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_mail_trigger';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['reference', 'name', 'group', 'subject', 'sendTo'], 'required'],
            [['created', 'updated'], 'integer'],
            [['sendTo', 'sendCc', 'sendBcc', 'attach'], 'string'],
            [['status', 'group', 'layout', 'sendDelay'], 'string', 'max' => 20],
            [['reference','name'], 'string', 'max' => 45],
            [['subject', 'sendFrom'], 'string', 'max' => 255],
            [['reference'], 'unique'],
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
            'reference' => 'Reference',
            'name' => 'Name',
            'group' => 'Group',
            'layout' => 'Layout',
            'subject' => 'Subject',
            'sendTo' => 'To',
            'sendCc' => 'CC',
            'sendBcc' => 'BCC',
            'sendFrom' => 'Reply to',
            'sendDelay' => 'Delay',
            'attach' => 'Attachments',
        ];
    }

    public function getSearchAttrs () {
        return array(
            'name',
            'sendTo',
            'sendCc',
            'sendBcc',
            'subject',
        );
    }

    public function getSearchOrder () {
        return [
            'status ASC',
            'group ASC',
            'name ASC',
        ];
    }

    public function listAttach () {
        return [
            'invoice' => 'Invoice',
            'statement' => 'Statement',
        ];
    }

    public function listCommaAttrs () {
        return array(
            'sendTo',
            'sendCc',
            'sendBcc',
            'attach',
        );
    }

    public function listDelay () {
        if (empty($this->_listDelay)) {
            $list = [];

            $models = DbMailTrigger::find()->select(['sendDelay'])->groupBy(['sendDelay'])->all();
            if (!empty($models)) {
                foreach ($models as $model) {
                    $list[$model->sendDelay] = $model->sendDelay;
                }
            }

            $this->_listDelay = $list;
        }

        return $this->_listDelay;
    }

    private $_listGroup;

    public function listGroup () {
        if (empty($this->_listGroup)) {
            $list = [];

            $models = DbMailTrigger::find()->select(['group'])->groupBy(['group'])->all();
            if (!empty($models)) {
                foreach ($models as $model) {
                    $list[$model->group] = $model->group;
                }
            }

            $this->_listGroup = $list;
        }

        return $this->_listGroup;
    }

    public function listLayout () {
        return [
            'main' => 'Main',
        ];
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->status)) {
            $this->status = 'active';
        }

        if (empty($this->layout)) {
            $this->layout = 'main';
        }
    }
}
