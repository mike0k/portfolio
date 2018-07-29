<?php

use \yii\web\Request;


Yii::setAlias('@web', dirname(dirname(__DIR__)) . '/web');
$baseUrl = str_replace('_admin/web', 'admin', (new Request)->getBaseUrl());

$config = [
    'id' => 'free-agent-console',
    'name' => 'Free Agent Console',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'console\controllers',
    'components' => [
        'urlManager' => [
            'baseUrl' => $baseUrl,
            'hostInfo' => (!YII_DEBUG ? 'https://admin.freeagent.com' : null),
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                '' => 'site/index',
                'error' => 'site/error',
                'login' => 'site/login',
                'logout' => 'site/logout',
                'forgotPassword' => 'site/forgotPassword',
                'passwordSent' => 'site/passwordSent'   ,
                'mail-link/<hash>' => 'mail-link/index',
                'media/view/<id>/<size>/<version>' => 'media/view',

                ['pattern' => 'sitemap', 'route' => 'sitemap/default/index', 'suffix' => '.xml'],
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>/' => '<controller>/<action>',
            ],
        ],
    ],
];

return $config;
