<?php

namespace common\models;

use Yii;
use yii\helpers\Url;

/**
 * This is the model class for table "db_diary".
 *
 * @property integer    $id
 * @property integer    $created
 * @property integer    $updated
 * @property string     $status
 * @property string     $type
 * @property string     $refType
 * @property integer    $refId
 * @property integer    $startTime
 * @property integer    $endTime
 *
 * @property DbProperty $property
 */
class DbDiary extends \common\components\ActiveRecord {

    public function afterSave ($insert, $changedAttributes) {
        parent::afterSave($insert, $changedAttributes);
        DbVar::clear('dashboard-stats');
    }

    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_diary';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['status', 'type', 'refType', 'refId', 'startTime', 'endTime'], 'required'],
            [['created', 'updated', 'refId', 'startTime', 'endTime'], 'integer'],
            [['status', 'type', 'refType'], 'string', 'max' => 20],
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
            'type' => 'Type',
            'refType' => 'Ref Type',
            'refId' => 'Ref ID',
            'startTime' => 'Start Time',
            'endTime' => 'End Time',
        ];
    }

    public function calcEndTime () {
        if (empty($this->endTime) && !empty($this->startTime)) {
            $this->convertTime('startTime', 'int');
            $this->endTime = strtotime('+2 hour', $this->startTime);
        }

        return $this->endTime;
    }

    public function calcScheduleHours () {
        $data = array(
            'day' => array(
                'Mon' => 0,
                'Tue' => 0,
                'Wed' => 0,
                'Thu' => 0,
                'Fri' => 0,
                'Sat' => 0,
                'Sun' => 0,
            ),
            'group' => array(),
        );
        $events = DbDiary::find()->filterWhere(array('type' => 'schedule'))->all();
        if (!empty($events)) {
            foreach ($events as $event) {
                $ref = $event->ref->name;
                $day = date('D', $event->startTime);
                $hours = Yii::$app->formatter->asAge($event->startTime, $event->endTime, 'hours');

                iF (empty($data['group'][$ref])) {
                    $data['group'][$ref] = 0;
                }
                $data['group'][$ref] += $hours;
                $data['day'][$day] += $hours;
            }
        }
        ksort($data['group']);

        return $data;
    }

    public static function fake ($attrs) {
        $model = new DbDiary();
        $model->attributes = $attrs;
        $model->setDefaults();

        return $model;
    }

    public function getDuration () {
        $return = 0;
        if (!empty($this->startTime)) {
            if (empty($this->endTime)) {
                $this->calcEndTime();
            }

            if (!empty($this->endTime)) {
                $return = Yii::$app->formatter->asAge($this->startTime, $this->endTime, 'hours');
            }
        }

        return $return;
    }

    public function getProperty () {
        return $this->getRef(DbProperty::className());
    }

    public function getSearchOrder () {
        return [
            'startTime DESC',
            'endTime DESC',
            'startTime ASC',
            'type ASC',
        ];
    }

    public function listColor () {
        return array(
            'pending' => '#f57c00', //$cp-war-md
            'confirmed' => '#388e3c', //$cp-inf-md
            'cancelled' => '#d32f2f', //$cp-dan-md
        );
    }

    public function listIcon () {
        return array(
            'closingDate' => 'fa-flag text-danger',
            'entryDate' => 'fa-flag text-success',
            'message' => 'fa-comment',
            'viewing' => 'fa-users',
            'valuation' => 'fa-gbp',
        );
    }

    public function listRepeat () {
        return array(
            'month' => 'For this month',
        );
    }

    public function listSchedulePreset () {
        return array(
            'weekday' => 'Weekday',
            'weekend' => 'Weekend',
            'meeting' => 'Meeting',
            'holiday' => 'Holiday',
        );
    }

    public function listStatus () {
        return array(
            'pending' => 'Pending',
            'confirmed' => 'Confirmed',
            //'complete' => 'Complete',
            'cancelled' => 'Cancelled',
        );
    }

    public function listType () {
        return array(
            'closingDate' => 'Closing Date',
            'entryDate' => 'Entry Date',
            'message' => 'Message Board',
            'viewing' => 'Viewing',
            'valuation' => 'Valuation',
        );
    }

    /**
     * @param DbDiary[] $items
     * @return array
     */
    public function formatDiaryItems ($items = null) {
        $dataHolder = array();
        if (empty($items)) {
            $items = array($this);
        } elseif (!is_array($items)) {
            $items = array($items);
        }

        //build html for each event
        $duplicates = array();
        foreach ($items as $item) {
            if (!empty($item)) {
                $id = (!empty($item->id) ? $item->id : $item->type . $item->refId);
                if (!empty($id) && !in_array($id, $duplicates)) {
                    $duplicates[] = $id;

                    //default data
                    $titleParts = array();
                    $item->convertTime(['startTime', 'endTime'], 'integer');
                    $data = array(
                        'title' => '',
                        'id' => $item->type . '-' . $id,
                        'start' => date('c', $item->startTime),
                        'end' => date('c', $item->endTime),
                        'textColor' => '#212121',
                        'borderColor' => $this->getListLabel('listColor', $item->status),
                        'backgroundColor' => '#E6E6E6', //$cp-gry-md
                        'overlap' => false,
                        'allDay' => false,
                        'url' => (!empty($item->id) ? Url::to(['diary/edit', 'id' => $item->id]) : '#'),
                    );


                    if (date('Y-M-d', $item->startTime) != date('Y-M-d', $item->endTime) || date('G', $item->startTime) < 7) {
                        //$data['allDay'] = true;
                    }

                    //add time to title
                    if (date('H:i', $item->startTime) == '00:00') {
                        $titleParts[] = date('j M', $item->startTime);
                    } else {
                        $titleParts[] = date('H:i j M', $item->startTime);
                    }


                    //add type to title
                    if (!empty($item->type)) {
                        $data['title'] .= '<i class="fa ' . $item->getListLabel('listIcon', $item->type) . '"></i> ';
                        $titleParts[] = $item->getListLabel('listType', $item->type);
                    }

                    if ($item->refType == 'DbProperty') {
                        //cant use relations due to $this->>fake()
                        $property = DbProperty::findOne($item->refId);
                    }

                    switch ($item->type) {
                        case 'closingDate':
                        case 'entryDate':
                            if (!empty($property)) {
                                $data['title'] .= ': ' . $property->addressShort;
                                $titleParts[] = 'P: ' . $property->addressShort;
                            }
                            break;
                    }

                    //format text layout in title
                    $desc = '';
                    if (!empty($titleParts)) {
                        foreach ($titleParts as $part) {
                            if (!empty($desc)) {
                                $desc .= '<br>';
                            }
                            $desc .= $part;
                        }

                    }

                    //set tooltip
                    $data['description'] = $desc;
                    //$data['title'] = '<span class="event-tooltip" data-toggle="tooltip" data-placement="bottom" title="">'.$data['title'].'</span>';
                    $dataHolder[] = $data;
                }
            }
        }

        return $dataHolder;
    }


    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->status)) {
            $this->status = 'confirmed';
        }

        $this->calcEndTime();
    }

}
