<?php

namespace common\models;

use Intervention\Image\ImageManagerStatic as Image;
use Yii;
use yii\helpers\Url;

/**
 * This is the model class for table "db_media".
 *
 * @property integer $id
 * @property integer $created
 * @property integer $updated
 * @property string  $refType
 * @property integer $refId
 * @property string  $type
 * @property string  $filename
 * @property string  $name
 * @property string  $extension
 * @property integer $sortId
 */
class DbMedia extends \common\components\ActiveRecord {

    public function beforeDelete () {
        if (file_exists($this->path)) {
            unlink($this->path);
            foreach ($this->listDimensions() as $key => $dimension) {
                $path = $this->getPath(true, $key);
                if (file_exists($path)) {
                    unlink($path);
                }
            }
        }

        return parent::beforeDelete();
    }

    /**
     * @inheritdoc
     */
    public static function tableName () {
        return 'db_media';
    }

    /**
     * @inheritdoc
     */
    public function rules () {
        return [
            [['created', 'updated', 'refType', 'refId', 'type', 'filename', 'name', 'extension'], 'required'],
            [['created', 'updated', 'refId', 'sortId'], 'integer'],
            [['refType', 'type'], 'string', 'max' => 20],
            [['filename', 'name'], 'string', 'max' => 255],
            [['extension'], 'string', 'max' => 4],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels () {
        return [
            'id' => 'ID',
            'created' => 'Uploaded',
            'updated' => 'Updated',
            'refType' => 'Ref Type',
            'refId' => 'Ref ID',
            'type' => 'Type',
            'filename' => 'Filename',
            'name' => 'Name',
            'extension' => 'File Type',
            'sortId' => 'Sort ID',
        ];
    }

    public function calcSortId () {
        $return = 1;
        if (empty($this->sortId)) {
            $order = DbMedia::find()
                ->select('max(sortId) AS sortId')
                ->filterWhere([
                    'refId' => $this->refId,
                    'refType' => $this->refType,
                    'type' => $this->type,
                ])->one();
            if (!empty($order)) {
                $return = $order->sortId + 1;
            }
        }

        return $return;
    }

    public function genPhotos($crop = null){
        $valid = false;
        if($this->type == 'photo'){
            $valid = true;
            $path = $this->getPath(false);
            foreach ($this->listDimensions() as $key => $dimension) {
                $dir = $path . $key . '/';
                if (!file_exists($dir)) {
                    mkdir($dir, 0775, true);
                }

                if(file_exists($dir.$this->filename)){
                    unlink($dir.$this->filename);
                }

                $img = Image::make($this->getPath());
                if(!empty($crop)){
                    $img->crop($crop['width'], $crop['height'], $crop['x'], $crop['y']);
                }
                $img->fit($dimension['width'], $dimension['height'])
                    ->save($dir.$this->filename);

                if(!file_exists($dir.$this->filename)){
                    $valid = false;
                }
            }
        }

        return $valid;
    }

    public function getPath ($incFilename = true, $size = null) {
        $return = false;
        if (!empty($this->refId) && !empty($this->refType)) {
            $return = Yii::getAlias('@media') . '/' . $this->refType . '/' . $this->refId . '/';
            if(!empty($size)){
                $return .= $size.'/';
            }
            if ($incFilename && !empty($this->filename)) {
                $return .= $this->filename;
            }
        }

        return $return;
    }

    public function getUrl ($size = null) {
        $url = ['media/view', 'id' => $this->id];
        if(!empty($size)){
            $url['size'] = $size;
        }
        $url['version'] = $this->updated;

        return Url::to($url);
    }

    public function getSearchOrder () {
        return ['type ASC', 'sortId ASC', 'name ASC', 'created DESC'];
    }

    public function listDimensions () {
        return array(
            'xs' => array('width' => 240, 'height' => 135),
            'sm' => array('width' => 480, 'height' => 270),
            'md' => array('width' => 960, 'height' => 540),
            'lg' => array('width' => 1920, 'height' => 1080),
        );
    }

    public function listFileFormats () {
        switch ($this->type) {
            case 'gif':
                $return = array(
                    'gif' => 'image/gif',
                );
                break;

            case 'photo':
                $return = array(
                    'jpg' => 'image/jpeg',
                    'png' => 'image/png',
                );
                break;

            case 'home-report':
                $return = array(
                    'pdf' => 'application/pdf',
                );

            case 'brochure':
            case 'epc':
            case 'floor-plan':
                $return = array(
                    'jpg' => 'image/jpeg',
                    'png' => 'image/png',
                    'pdf' => 'application/pdf',
                );

            case 'id':
            case 'terms':
                $return = array(
                    'jpg' => 'image/jpeg',
                    'png' => 'image/png',

                    'doc' => 'application/msword',
                    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'odt' => 'application/vnd.oasis.opendocument.text',
                    'pdf' => 'application/pdf',
                );
                break;

            case 'other':
            default:
                $return = array(
                    'gif' => 'image/gif',
                    'jpg' => 'image/jpeg',
                    'png' => 'image/png',

                    'doc' => 'application/msword',
                    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'odt' => 'application/vnd.oasis.opendocument.text',
                    'pdf' => 'application/pdf',
                    'txt' => 'text/plain',
                );
        }

        return $return;
    }

    public function listFileIcon () {
        return [
            'gif' => 'fa-file-image-o',
            'jpg' => 'fa-file-image-o',
            'png' => 'fa-file-image-o',

            'doc' => 'fa-file-word-o',
            'docx' => 'fa-file-word-o',

            'pdf' => 'fa-file-pdf-o',

            'odt' => 'fa-file-text-o',
            'txt' => 'fa-file-text-o',
        ];
    }

    public function listType ($refType = null) {
        $list = [];
        switch ($refType) {
            default:
                $list = [
                    'gif' => 'Animated Gif',
                    'disclosure' => 'Disclosure',
                    'email' => 'Email/Letter',
                    'invoice' => 'Invoice',
                    'photo' => 'Photo',
                    'quote' => 'Quote',
                    'receipt' => 'Receipt',
                    'terms' => 'Terms / Agreement',
                    'other' => 'Other',
                ];
                break;
        }

        return $list;
    }

    public function mediaCount () {
        $count = 0;
        if (!empty($this->refType) && !empty($this->refId)) {
            $count = $this->find()
                ->where([
                    'refType' => $this->refType,
                    'refId' => $this->refId
                ])->count();
        }

        return $count;
    }

    public static function noImgUrl(){
        return Yii::getAlias('@web').'/img/no-photo.png';
    }

    public function setDefaults () {
        parent::setDefaults();

        if (empty($this->sortId)) {
            $this->sortId = $this->calcSortId();
        }

        if (empty($this->name)) {
            $this->name = $this->filename;
        }

        if (empty($this->extension)) {
            $this->extension = pathinfo($this->path, PATHINFO_EXTENSION);
        }
    }

    public function uploadFile ($file) {
        $valid = true;
        $default = array(
            'attr' => '',
            'path' => '',
            'prefix' => '',
            'fileName' => null,
            'file' => null,
        );

        $return = [
            'errors' => [],
        ];


        if (!in_array($file->type, $this->listFileFormats())) {
            $valid = false;
            $return['errors'][] = 'Invalid file format. Allowed file formats: ' . implode(', ', array_keys($this->listFileFormats()));
        }

        if ($file->size >= 30000000) { //bytes
            $valid = false;
            $return['errors'][] = 'File is too large. Max file size: 30Mb';
        }

        if ($this->mediaCount() > 100) {
            $valid = false;
            $return['errors'][] = 'Too many uploads. Max upload limit: 100 files';
        }

        if ($valid && !empty($file)) {
            $valid = false;
            $path = $this->getPath(false);

            //create dir for file to be stored
            if (!file_exists($path)) {
                mkdir($path, 0775, true);
            }

            //move file from temp dir
            $temp = $filename = Yii::$app->formatter->asFileName($file->name, $file->extension);
            $i = 1;
            while (file_exists($this->getPath(false) . $temp) && $i < 100) {
                $temp = str_replace('.' . $file->extension, '-' . $i . '.' . $file->extension, $filename);
                $i++;
            }

            $this->name = $this->filename = $temp;
            $this->extension = $file->extension;
            $filePath = $this->path;

            if ($file->saveAs($filePath)) {
                $valid = $this->save();
                if (!$valid && file_exists($filePath) && is_file($filePath)) {
                    unlink($filePath);
                }

                if($valid){
                    $this->genPhotos();
                }
            }
        }

        $return['valid'] = $valid;

        return $return;
    }

}
