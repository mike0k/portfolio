<?php

namespace api\controllers;

use Yii;
use yii\helpers\FileHelper;
use yii\web\HttpException;
use yii\web\Response;
use yii\helpers\ArrayHelper;

class MediaController extends \api\components\Controller {

    public $modelClass = '';

    public function behaviors () {
        $behaviors = parent::behaviors();

        $behaviors['authenticator']['except'] = ArrayHelper::merge($behaviors['authenticator']['except'], [
            'view',
        ]);

        return $behaviors;
    }

    public function actionView ($ref) {
        $valid = false;
        $path = Yii::getAlias('@media') . '/';

        //format the input
        $ref = str_replace('__', '/', $ref);
        if (preg_match('/^[a-zA-Z0-9\/\r\n+]*={0,2}$/', $ref)){
            //$ref = base64_decode($ref);
        }
        //$ref = str_replace('/', '\\', $ref);

        //check if full relative path has been given
        if (file_exists($path . $ref) && is_file($path . $ref)){
            $valid = true;
            $path = $path . $ref;
        }

        if (!$valid) {
            //check if extension has been given
            $hasExt = false;
            if (strpos($ref, '.') !== false) {
                $hasExt = true;
            }

            //search all media files for the given search term (e.g. "folder/filename.ext", "folder/filename", "filename.ext", "filename")
            $it = new \RecursiveDirectoryIterator($path);
            foreach (new \RecursiveIteratorIterator($it) as $file) {
                if (!in_array($file->getFilename(), ['.', '..'])) {
                    //append the file extension to the search term if needed
                    $needle = $ref;
                    if(!$hasExt){
                        $needle = $ref.'.'.$file->getExtension();
                    }

                    //check if the search term matches the end of the full path for this file
                    if (substr_compare($file->getPathname(), $needle, -strlen($needle)) === 0) {
                        $valid = true;
                        $path = $file->getPathname();
                        break;
                    }
                }
            }
        }

        //if a valid file was found then set the correct headers and display it
        if ($valid) {
            $mime = FileHelper::getMimeType($path);
            $response = Yii::$app->getResponse();
            $response->headers->set('Content-Type', $mime);
            $response->format = Response::FORMAT_RAW;
            if (!is_resource($response->stream = fopen($path, 'r'))) {
                throw new \yii\web\ServerErrorHttpException('file access failed: permission deny');
            }

            return $response->send();
        } else {
            throw new HttpException(404, 'Media not found');
        }
    }

}
