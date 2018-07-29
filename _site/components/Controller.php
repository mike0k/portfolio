<?php

namespace site\components;

use yii;
use yii\filters\AccessControl;

/**
 * Base controller
 */
class Controller extends \common\components\Controller {


    public function beforeAction ($action) {
        $page = Yii::$app->controller->id.'/'.Yii::$app->controller->action->id;
        $safeIP = [
        ];

        if($page != 'site/maintenance' && YII_ENV == 'prod' && !in_array($_SERVER['REMOTE_ADDR'], $safeIP)) {
            //$this->redirect(['site/maintenance']);
        }

        Yii::$app->params['menu-trans'] = false;

        return parent::beforeAction($action);
    }

    public function render ($view, $params = []) {
        $params['meta'] = $this->getMetaData();
        return parent::render($view, $params);
    }

    public function getMetaData($url = null){
        $meta = [
            'title' => '',
            'desc' => '',
        ];
        if(empty($url)){
            $url = Yii::$app->controller->id.'/'.Yii::$app->controller->action->id;
        }

        $pages = Yii::$app->params['meta'];
        if(!empty($pages[$url])){
            $meta = yii\helpers\ArrayHelper::merge($meta, $pages[$url]);
        }

        return $meta;
    }



}