<?php

Yii::setAlias('@admin', dirname(dirname(__DIR__)) . '/admin');
Yii::setAlias('@admin-web', dirname(dirname(__DIR__)) . '/admin/web');

Yii::setAlias('@api', dirname(dirname(__DIR__)) . '/api');
Yii::setAlias('@api-web', dirname(dirname(__DIR__)) . '/api/web');

Yii::setAlias('@site', dirname(dirname(__DIR__)) . '/site');
Yii::setAlias('@site-web', dirname(dirname(__DIR__)) . '/site/build');

Yii::setAlias('@common', dirname(dirname(__DIR__)) . '/common');
Yii::setAlias('@console', dirname(dirname(__DIR__)) . '/console');
Yii::setAlias('@mail', dirname(dirname(__DIR__)) . '/common/mail');
Yii::setAlias('@media', dirname(dirname(__DIR__)) . '/media');

Yii::setAlias('@admin-url', env('ADMIN_URL'));
Yii::setAlias('@api-url', env('API_URL'));
Yii::setAlias('@img-url', env('IMG_URL'));
Yii::setAlias('@site-url', env('SITE_URL'));

$config = [
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm' => '@vendor/npm-asset',
    ],
    'bootstrap' => ['log'],
    'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => env('DB_DSN'),
            'username' => env('DB_USERNAME'),
            'password' => env('DB_PASSWORD'),
            'tablePrefix' => env('DB_TABLE_PREFIX'),
            'charset' => env('DB_CHARSET', 'utf8'),
            'enableSchemaCache' => YII_ENV_PROD,
        ],
        'formatter' => [
            'class' => 'common\components\Formatter',
            'currencyCode' => 'GBP',
            'dateFormat' => 'php:j M Y',
            'datetimeFormat' => 'php:j M Y H:i',
            'timeFormat' => 'php:H:i',
        ],
        'log' => [
            'traceLevel' => 3,
            'targets' => [
                [
                    'class' => 'common\components\Log',
                    'levels' => ['error','warning'],
                    'logVars' => [],
                ],
            ],
        ],
        'mailer' => [
            'class' => 'common\components\Mailer',
            'viewPath' => '@mail',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => YII_DEBUG,
            'transport' => [
                'class' => 'Swift_SmtpTransport',
                'host' => 'smtp.gmail.com',  // e.g. smtp.mandrillapp.com or smtp.gmail.com
                'username' => 'animite.mail.1@gmail.com',
                'password' => '6IoCbBxNRi8voT14FizL',
                'port' => '587', // Port 25 is a very common port too
                'encryption' => 'tls', // It is often used, check your provider or mail server specs
                /*'streamOptions' => [
                    'ssl' => [
                        'allow_self_signed' => true,
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                    ],
                ],*/
            ],

        ],

        'session' => [
            'class' => 'yii\web\DbSession',
            'sessionTable' => 'yii_session',
        ],
        'view' => [
            'class' => 'common\components\View',
        ],
    ],
    'params' => [
        'email' => [
            'debug' => 'hello@michaelkirkbright.co.uk',
            'from' => 'no-reply@michaelkirkbright.co.uk',
            'office' => 'hello@michaelkirkbright.co.uk',
        ],
        'company' => [
            'name' => 'Michael Kirkbright',
            'address' => '3 Kennet Cottages, Alloa, Clackmannanshire FK10 4DN',
            'email' => 'hello@michaelkirkbright.co.uk',
            'phone' => '07545304228',
            'lat' => 55.879256,
            'lng' => -4.312116,
        ],

        'vat' => 0.2,

        'salt' => 'Uo6WFWxgKoko0hc9skTx8a0FkPBnye6w',
    ],
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
];

return $config;
