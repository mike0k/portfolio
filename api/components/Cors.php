<?php

namespace api\components;

use Yii;

class Cors extends \yii\filters\Cors {

    public function beforeAction ($action) {
        parent::beforeAction($action);

        if (Yii::$app->getRequest()->getMethod() === 'OPTIONS') {
            Yii::$app->getResponse()->getHeaders()->set('Allow', 'POST GET PUT');
            Yii::$app->end();
        }

        return true;
    }

}