<?php

namespace site\controllers;

use site\models\FormContact;
use Yii;
use site\components\Controller;

class SiteController extends Controller {

    public function actions () {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function actionIndex () {
        $model = new FormContact();
        $model->load(Yii::$app->request->get());

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            //Yii::$app->session->addFlash('success', 'Message Sent');
            return $this->redirect(['site/contact', 'sent' => 1]);
        }

        return $this->render('index', [
            'contact' => $model,
        ]);
    }

}
