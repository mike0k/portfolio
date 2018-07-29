<?php

Yii::setAlias('@admin', dirname(dirname(__DIR__)) . '/_admin');
Yii::setAlias('@admin-web', dirname(dirname(__DIR__)) . '/_admin/web');

Yii::setAlias('@site', dirname(dirname(__DIR__)) . '/_site');
Yii::setAlias('@site-web', dirname(dirname(__DIR__)) . '/_site/web');

Yii::setAlias('@common', dirname(dirname(__DIR__)) . '/_common');
Yii::setAlias('@console', dirname(dirname(__DIR__)) . '/_console');
Yii::setAlias('@mail', dirname(dirname(__DIR__)) . '/_common/mail');
Yii::setAlias('@media', dirname(dirname(__DIR__)) . '/media');


$config = [
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm' => '@vendor/npm-asset',
    ],
    'bootstrap' => ['log'],
    'components' => [
        'assetManager' => [
            'appendTimestamp' => true,
            'class' => 'yii\web\AssetManager',
            'bundles' => [
                'yii\bootstrap\BootstrapAsset' => [
                    'sourcePath' => null,
                    'baseUrl' => 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7',
                    'css' => [
                        'css/bootstrap.min.css'
                    ],
                    'cssOptions' => [
                        'rel' => 'preload',
                        'as' => 'style',
                        'onload' => "this.rel='stylesheet'"
                    ]
                ],
                'yii\bootstrap\BootstrapPluginAsset' => [
                    'sourcePath' => null,
                    'baseUrl' => 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7',
                    'js' => [
                        'js/bootstrap.min.js'
                    ],
                    'jsOptions' => [
                        'async' => 'async'
                    ],
                ],
                'yii\web\JqueryAsset' => [
                    'js' => [
                        YII_DEBUG ? 'jquery.min.js' : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
                    ],
                    'jsOptions' => [
                        //'async' => 'async'
                    ],
                ],
                'yii\web\YiiAsset' => [
                    'js' => [
                        YII_DEBUG ? 'yii.js' : 'yii.min.js',
                        //$baseUrl.'/js/yii'.(YII_DEBUG ? '' : '.min').'.js',
                    ],
                    'jsOptions' => [
                        'async' => 'async'
                    ],
                ],
                'yii\widgets\ActiveFormAsset' => [
                    'js' => [
                        YII_DEBUG ? 'yii.activeForm.js' : 'yii.activeForm.min.js',
                    ],
                    'jsOptions' => [
                        //'async' => 'async'
                    ],
                ],
            ],
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
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
                    'levels' => ['error', 'warning'],
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
        'email-debug' => 'michael@animitemedia.com',
        'email-from' => 'no-reply@animitemedia.com',
        'email-office' => 'michael@animitemedia.com',

        'name' => 'Animite Media',
        'address' => '',
        'email' => 'michael@animitemedia.com',
        'phone' => '07545304228',
        'lat' => 56.101651,
        'lng' => -3.731311,

        'salt' => 'pUCFyK8tHjczyS0p6IcpEffVt5iqQ7Hk',
    ],
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
];

return $config;
