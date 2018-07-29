<?php

namespace common\components;

use common\components\Component;
use common\models\DbDiary;
use common\models\DbProperty;
use site\models\DbContact;
use Yii;
use yii\helpers\ArrayHelper;

/**
 * Class Diary
 * @package common\components
 *
 * @property DbContact $contact
 * @property DbDiary $diary
 * @property DbProperty $property
 */
class Diary extends Component {

    protected $diary;
    protected $property;
    protected $contact;

    public function getEvents($start, $end, $options){
        $options = ArrayHelper::merge($this->getDefaultOptions(), $options);
        $options['start'] = Yii::$app->formatter->asTimestamp($start);
        $options['end'] = Yii::$app->formatter->asTimestamp($end);

        switch($options['type']){
            case 'viewing':
                $return = $this->typeViewing($options);
                break;

            case 'meeting':
                $return = $this->typeMeeting($options);
                break;

            case 'all':
            default:
                $return = $this->typeAll($options);
                break;
        }

        return $return;
    }

    protected function getDefaultOptions(){
        return [
            'type' => 'all',
            'models' => null,
        ];
    }

    protected function typeAll($options){
        $diary = new DbDiary();
        $diary->startTime = $options['start'];
        $diary->endTime = $options['end'];
        $return = $diary->renderDiaryItems();

        $properties = DbProperty::find()->active()->all();
        if(!empty($properties)){
            $temp = [];
            foreach($properties as $property){
                $temp = ArrayHelper::merge($temp, $property->fetchDiaryItems($options['start'], $options['end']));
            }
            $temp = DbDiary::instance()->formatDiaryItems($temp);
            $return = ArrayHelper::merge($return, $temp);
        }

        return $return;
    }

    protected function typeMeeting($options){
        $diary = new DbDiary();
        $diary->startTime = $options['start'];
        $diary->endTime = $options['end'];
        $return = $diary->renderDiaryItems();

        return $return;
    }

    protected function typeViewing($options){
        $return = [];
        $diary = new DbDiary();
        $diary->startTime = $options['start'];
        $diary->endTime = $options['end'];
        $diary->type = 'viewing';
        $propId = [0];
        if(!empty($options['models'])){
            $temp = [];
            foreach($options['models'] as $property){
                if(!is_object($property)){
                    $property = DbProperty::findOne($property);
                }
                if(!empty($property)) {
                    $propId[] = $property->id;
                    $temp = ArrayHelper::merge($temp, $property->fetchDiaryItems($options['start'], $options['end']));
                }
            }
            $temp = DbDiary::instance()->formatDiaryItems($temp);
            $return = ArrayHelper::merge($return, $temp);
        }
        $diary->propId = $propId;
        $return = ArrayHelper::merge($return, $diary->renderDiaryItems());

        return $return;
    }

}
