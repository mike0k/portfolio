<?php

use \yii\web\Request;


Yii::setAlias('@web', dirname(dirname(__DIR__)) . '/web');
$baseUrl = str_replace('_site/web', '', (new Request)->getBaseUrl());
$hostUrl = (new Request)->getHostInfo();

$config = [
    'id' => 'portfolio-site',
    'name' => 'Michael Kirkbright: Portfolio',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'site\controllers',
    'components' => [
        'errorHandler' => [
            //'errorAction' => 'error/index',
            'errorAction' => 'site/error',
        ],
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'CRCtJXsnMHzhPUgLCNX9WFNZ6z2xhK1l',
            'baseUrl' => $baseUrl,
        ],
        'urlManager' => [
            'baseUrl' => $baseUrl,
            'hostInfo' => $hostUrl,
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                //Site
                '' => 'site/index',
                'error' => 'site/error',


                //Default
                ['pattern' => 'sitemap', 'route' => 'sitemap/default/index', 'suffix' => '.xml'],
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>/' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+(-\w+)>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+(-\w+)>/' => '<controller>/<action>',
            ],
        ],
        /*'user' => [
            'class' => 'site\components\User',
            'identityClass' => 'site\components\UserIdentity',
            'enableAutoLogin' => true,
        ],*/
    ],
    'modules' => [
        'sitemap' => [
            'class' => 'himiklab\sitemap\Sitemap',
            'urls'=> [
                [
                    'loc' => $hostUrl,
                    'changefreq' => \himiklab\sitemap\behaviors\SitemapBehavior::CHANGEFREQ_MONTHLY,
                    'priority' => 1,
                ],
            ],
            'enableGzip' => true, // default is false
            'cacheExpire' => 1, // 1 second. Default is 24 hours
        ],
    ],
    'params' => [
        'meta' => [
            'site/index' => [
                'title' => 'Michael Kirkbright ::  Web Development and Marketing :: Portfolio',
                'desc' => 'Portfolio of the Scottish Web Developer and Online Marketing Consultant, Michael Kirkbright',
            ],
        ],
    ]
];

return $config;
