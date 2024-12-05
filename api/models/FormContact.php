<?php

namespace api\models;


use common\components\FormModel;
use Yii;

class FormContact extends FormModel {

    public $name;
    public $company;
    public $email;
    public $phone;
    public $message;
    public $recaptcha;

    public function rules () {
        return [
            [['name', 'email', 'company', 'message', 'recaptcha'], 'required'],
            [['name', 'email', 'company'], 'string', 'max' => 255],
            [['message', 'recaptcha'], 'string', 'max' => 2000],
            [['email'], 'email'],
            //[['recaptcha'], 'validateRecaptcha'],
            [['name', 'company', 'email', 'phone', 'message', 'recaptcha'], 'safe'],
        ];
    }

    public function attributeLabels () {
        return [
            'name' => 'Your Name',
            'company' => 'Company Name',
            'email' => 'Email address',
            'phone' => 'Phone Number',
            'message' => 'Your enquiry',
            'recaptcha' => 'reCAPTCHA'
        ];
    }

    public function listPostAttrs () {
        return [
            'name',
            'company',
            'email',
            'phone',
            'message',
            'recaptcha',
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
            if (!empty($mail)) {
                $valid = true;
            }
        }

        return $valid;
    }

    public function validateRecaptcha () {
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $data = [
            'secret' => Yii::$app->params['recaptcha']['privateKey'],
            'response' => $this->recaptcha
        ];
        $options = [
            'http' => [
                'header' => 'Content-Type: application/x-www-form-urlencoded',
                'method' => 'POST',
                'content' => http_build_query($data)
            ]
        ];
        $context = stream_context_create($options);
        $verify = file_get_contents($url, false, $context);
        $response = json_decode($verify);

        if ($response->success == false) {
            $this->addError('recaptcha', 'Invalid reCAPTCHA');
        }
    }

}