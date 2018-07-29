<?php

Yii::setAlias('@site-url', 'http://localhost/portfolio/');

$config = [
    'bootstrap' => ['debug', 'gii'],
    'components' => [
        /*'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=localhost;dbname=animite',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8',

            // Schema cache options (for production environment)
            //'enableSchemaCache' => true,
            //'schemaCacheDuration' => 60,
            //'schemaCache' => 'cache',
        ],*/
        'reCaptcha' => [
            'name' => 'reCaptcha',
            'class' => 'himiklab\yii2\recaptcha\ReCaptcha',
            'siteKey' => '6LfPcuMSAAAAANNlpHenOty0vFfFI8PlvIR5agBX',
            'secret' => '6LfPcuMSAAAAAP_JlSvg2jTp5E5RC6eRBkug-mdf',
        ],
    ],
    'modules' => [
        'debug' => [
            'class' => 'yii\debug\Module',
        ],
        'gii' => [
            'class' => 'yii\gii\Module',
            'allowedIPs' => ['127.0.0.1', '::1'],
            'generators' => [
                'crud' => [
                    'class' => 'yii\gii\generators\crud\Generator',
                    'templates' => [
                        'Extended' => '@app/gii/extended',
                    ]
                ]
            ],
        ],
    ],
    'params' => [
        'google' => [
            'apiKey' => 'AIzaSyCJzzCI2jXQrIENxgv2PEXErdbJIlxdzHY',
            'analytics' => '',
        ],
    ],
];

return $config;
