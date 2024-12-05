<?php
namespace api\controllers;

use api\models\DbProject;
use api\models\FormContact;
use api\models\FormSearch;
use Vimeo\Vimeo;
use Yii;
use yii\helpers\ArrayHelper;

class SiteController extends \api\components\Controller {

    public $modelClass = '';

    public function behaviors () {
        $behaviors = parent::behaviors();

        $behaviors['authenticator']['except'] = ArrayHelper::merge($behaviors['authenticator']['except'], [
            'contact',
        ]);

        return $behaviors;
    }

    public function actionContact () {
        $return = [
            'errors' => new \ArrayObject(),
            'valid' => false,
        ];
        $model = new FormContact();
        $params = $this->getParams($model->listPostAttrs());
        $model->attributes = $params;

        if ($model->save()) {
            $return['valid'] = true;
        } else {
            $return['errors'] = $model->errors;
        }

        return $return;
    }


}
