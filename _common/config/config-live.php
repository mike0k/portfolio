<?php

Yii::setAlias('@site-url', 'https://www.michaelkirkbright.co.uk/');

$config = [
    'components' => [
        /*'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=animitem_live',
            'username' => 'animitem_admin',
            'password' => 'MwD"hcPM$t+R.+e',
            'charset' => 'utf8',

            // Schema cache options (for production environment)
            //'enableSchemaCache' => true,
            //'schemaCacheDuration' => 60,
            //'schemaCache' => 'cache',
        ],*/
        'reCaptcha' => [
            'name' => 'reCaptcha',
            'class' => 'himiklab\yii2\recaptcha\ReCaptcha',
            'siteKey' => '6LelPiITAAAAALH5PPn4KqgkWKI8X-BS4L-BLB45',
            'secret' => '6LelPiITAAAAAI4Kz6SVYTsalbgnKosHx5dZyZJM',
        ],
    ],
    'params' => [
        'google' => [
            'apiKey' => 'AIzaSyDwjr3N5t_ijkr7oM_MEDXHdpswMX6IdXw',
            'analytics' => '',
        ],
    ],
];

return $config;
