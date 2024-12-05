<?php

namespace common\models;

use common\components\ActiveRecord;
use Yii;

/**
 * This is the model class for table "db_project".
 *
 * @property int              $id
 * @property int              $created
 * @property int              $updated
 * @property string $reference
 * @property string           $status
 * @property resource|null    $sourceType
 * @property string|null      $sourceId
 * @property string           $title
 * @property string|null      $subtitle
 * @property string|null      $description
 * @property int|null         $date
 * @property float|null       $lat
 * @property float|null       $lng
 * @property string|null      $cat
 *
 * @property-read string      $embedUrl
 * @property-read DbFeedVimeo $feedVimeo
 * @property-read string      $img
 */
class DbProject extends ActiveRecord {
    /**
     * {@inheritdoc}
     */
    public static function tableName () {
        return 'db_project';
    }

    /**
     * {@inheritdoc}
     */
    public function rules () {
        return [
            [['created', 'updated', 'reference', 'status', 'title'], 'required'],
            [['created', 'updated', 'date'], 'integer'],
            [['subtitle', 'description'], 'string'],
            [['lat', 'lng'], 'number'],
            [['reference', 'status'], 'string', 'max' => 20],
            [['sourceType', 'sourceId'], 'string', 'max' => 45],
            [['title'], 'string', 'max' => 255],
            [['cat'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels () {
        return [
            'id' => 'ID',
            'created' => 'Created',
            'updated' => 'Updated',
            'reference' => 'Reference',
            'status' => 'Status',
            'sourceType' => 'Video Host',
            'sourceId' => 'Video ID',
            'title' => 'Title',
            'subtitle' => 'Short Description',
            'description' => 'Long Description',
            'date' => 'Date',
            'lat' => 'Lat',
            'lng' => 'Lng',
            'cat' => 'Category',
        ];
    }

    public function listCat () {
        return [
            1 => 'Documentary',
            2 => 'Events',
            3 => 'Promotional',
            4 => 'Wedding',
            5 => 'Other',
        ];
    }

    public function listCommaAttrs () {
        return [
            'cat',
        ];
    }

    public function listSourceType () {
        return [
            'vimeo' => 'Vimeo',
            'youtube' => 'YouTube',
        ];
    }

    public function listTimeAttrs () {
        return [
            'created',
            'updated',
            'date',
        ];
    }

    public function getEmbedUrl () {
        $url = '';
        switch ($this->sourceType) {
            case 'vimeo':
                $url = 'https://player.vimeo.com/video/' . $this->sourceId;
                break;
        }

        return $url;
    }

    public function getFeedVimeo () {
        return $this->hasOne(DbFeedVimeo::className(), ['projectId' => 'id']);
    }

    public function getImg ($size = 'md') {
        $sizes = [
            'xs' => '100x75',
            'sm' => '295x166',
            'md' => '640x360',
            'lg' => '960x540',
            'xl' => '1920x1080',

            '100x75' => '100x75',
            '200x150' => '200x150',
            '295x166' => '295x166',
            '640x360' => '640x360',
            '960x540' => '960x540',
            '1200x720' => '1200x720',
            '1920x1080' => '1920x1080',
        ];
        $size = $sizes[$size];

        $url = '';
        switch ($this->sourceType) {
            case 'vimeo':
                if(!empty($this->feedVimeo) && !empty($this->feedVimeo->pictures)){
                    $url = 'https://i.vimeocdn.com/video/'.$this->feedVimeo->pictures.'_' . $sizes[$size] . '.jpg?r=pad';
                }else{
                    $url = 'https://i.vimeocdn.com/video/default_' . $sizes[$size] . '.jpg?r=pad';
                }
                break;
        }

        return $url;
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->reference)) {
            $this->reference = $this->genReference('p');
        }

        if (empty($this->status)) {
            $this->status = 'inactive';
        }

        if (empty($this->sourceType)) {
            $this->sourceType = 'vimeo';
        }
    }
}
