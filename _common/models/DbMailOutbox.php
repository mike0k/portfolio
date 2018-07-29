<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "db_mail_outbox".
 *
 * @property integer $id
 * @property integer $created
 * @property integer $updated
 * @property integer $addedById
 * @property string $status
 * @property string $layout
 * @property string $sendTo
 * @property string $sendCc
 * @property string $sendBcc
 * @property string $sendFrom
 * @property string $subject
 * @property string $body
 * @property resource $attach
 * @property integer $runTime
 * @property integer $statusTime
 */
class DbMailOutbox extends \common\components\ActiveRecord {
    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_mail_outbox';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['status', 'sendTo', 'subject', 'body', 'runTime', 'statusTime'], 'required'],
            [['created', 'updated', 'addedById', 'runTime', 'statusTime'], 'integer'],
            [['sendTo', 'sendCc', 'sendBcc', 'body', 'attach'], 'string'],
            [['status', 'layout'], 'string', 'max' => 20],
            [['sendFrom', 'subject'], 'string', 'max' => 255],
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
            'addedById' => 'Added By ID',
            'status' => 'Status',
            'layout' => 'Layout',
            'sendTo' => 'To',
            'sendCc' => 'CC',
            'sendBcc' => 'BCC',
            'sendFrom' => 'Reply to',
            'subject' => 'Subject',
            'body' => 'Content',
            'attach' => 'Attachments',
            'runTime' => 'Run At',
            'statusTime' => 'Status Set',
        ];
    }

    public function getSearchAttrs () {
        return array(
            'sendTo',
            'sendCc',
            'sendBcc',
            'subject',
            'body',
        );
    }

    public function getSearchOrder () {
        return [
            'runTime DESC',
            'status ASC',
            'subject ASC',
        ];
    }

    public function listCommaAttrs () {
        return [
            'sendTo',
            'sendCc',
            'sendBcc',

        ];
    }

    public function listSerialAttrs () {
        return [
            'attach',
        ];
    }

    public function listTimeAttrs () {
        return [
            'runTime',
            'statusTime',
        ];
    }

    public function listStatus () {
        return [
            'wait' => 'Waiting',
            'sent' => 'Sent',
            'cancel' => 'Cancelled',
            'failed' => 'Failed',
        ];
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->status)) {
            $this->status = 'wait';
        }

        if ($this->getOldAttribute('status') != $this->status) {
            $this->statusTime = time();
        }
    }
}
