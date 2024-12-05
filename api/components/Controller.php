<?php

namespace api\components;

use common\models\DbUserLogin;
use yii;
use yii\filters\AccessControl;
use yii\helpers\Json;

/**
 * Base controller
 */
//class Controller extends \common\components\Controller {
class Controller extends yii\rest\ActiveController {

    public $enableCsrfValidation = false;

    public function actions () {
        return [
            'options' => [
                'class' => 'yii\rest\OptionsAction',
            ],
        ];
    }

    public static function allowedDomains () {
        if(YII_ENV == 'dev') {
            return [
                //'*', //allow all
                'http://localhost:3010', //React dev server
            ];
        }else{
            return [
                'https://www.soleproductions.co.uk',
            ];
        }
    }

    public function behaviors () {
        $behaviors = parent::behaviors();

        unset($behaviors['authenticator']);

        $behaviors['corsFilter'] = [
            'class' => Cors::className(),
            'cors' => [
                'Origin' => static::allowedDomains(),
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 3600,
            ],
        ];

        $behaviors['authenticator'] = [
            'class' => yii\filters\auth\HttpBearerAuth::className(),
            /*'class' => yii\filters\auth\CompositeAuth::className(),
            'authMethods' => [
                yii\filters\auth\HttpBasicAuth::className(),
                yii\filters\auth\HttpBearerAuth::className(),
                yii\filters\auth\QueryParamAuth::className(),
            ],*/
            'except' => [
                'options',
            ],
        ];

        return $behaviors;
    }

    public function beforeAction ($action) {
        $return = parent::beforeAction($action);

        //$this->checkAccess();
        return $return;
    }

    public function afterAction ($action, $result) {
//        if ($action->controller->id == 'viewing' && $action->id == 'index') {
//            $result = Json::encode($result);
//            $result = Yii::$app->security->encryptByKey($result, 'test');
//            $result = ['d' => base64_encode($result)];
//        }

        return parent::afterAction($action, $result);
    }

    public function getParams ($attrs = [], $type = 'post') {
        switch (strtolower($type)) {
            case 'get':
                $raw = Yii::$app->request->get();
                break;
            case 'post':
            default:
                $raw = Yii::$app->request->post();
                break;
        }

        $return = [];
        foreach ($attrs as $attr) {
            if (isset($raw[$attr])) {
                $return[$attr] = $raw[$attr];
            } else {
                $return[$attr] = null;
            }
        }

        return $return;
    }

    /*public function checkAccess ($action, $model = null, $params = []) {
        if(!empty($params['token'])){
            var_dump($params);exit;
        }
    }*/

    protected function verbs () {
        return [
            'index' => ['GET', 'POST', 'HEAD', 'OPTIONS'],
            'list' => ['POST', 'OPTIONS'],
            'view' => ['GET', 'POST', 'HEAD', 'OPTIONS'],
            'create' => ['POST', 'OPTIONS'],
            'update' => ['PUT', 'PATCH', 'OPTIONS'],
            'delete' => ['DELETE', 'OPTIONS'],
        ];
    }


}