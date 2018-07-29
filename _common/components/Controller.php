<?php

namespace common\components;

use yii;

class Controller extends yii\web\Controller {


    public function beforeAction ($action) {
        $return = parent::beforeAction($action);
        $this->honeypot();

        if(Yii::$app->request->isAjax){
            Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        }

        return $return;
    }


    protected function honeypot () {
        if (!empty($_POST) && !empty($_POST['hps']) && (!empty($_POST['name']) || !empty($_POST['email']))) {
            $this->redirect(['site/error']);
        }
    }

}