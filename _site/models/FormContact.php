<?php

namespace site\models;


use common\components\FormModel;
use himiklab\yii2\recaptcha\ReCaptchaValidator;
use Yii;

class FormContact extends FormModel {

    public $page;
    public $referrer;
    public $reCaptcha;

    public $name;
    public $company;
    public $email;
    public $phone;
    public $message;

    public function rules () {
        return [
            [['name', 'email', 'company', 'message'], 'required'],
            [['name', 'email', 'company'], 'string', 'max' => 255],
            [['message'], 'string', 'max' => 2000],
            [['email'], 'email'],
            [['reCaptcha'], 'required', 'message' => 'confirm you are not a robot'],
            [['reCaptcha'], ReCaptchaValidator::className(), 'uncheckedMessage' => 'Confirm you are not a robot'],
            [['name', 'company', 'email', 'phone', 'message'], 'safe'],
        ];
    }

    public function attributeLabels () {
        return [
            'name' => 'Your Name',
            'company' => 'Company Name',
            'email' => 'Email address',
            'phone' => 'Phone Number',
            'message' => 'Your enquiry',
        ];
    }

    public function save () {
        $valid = false;

        if ($this->validate()) {
            $mail = Yii::$app->mailer->add($this, 'site-contact', [
                'recip' => [
                    'sendFrom' => $this->email,
                ],
                //'debug' => true,
            ]);
            if(!empty($mail)){
                $valid = true;
            }
        }

        return $valid;
    }

}