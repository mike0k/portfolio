<?php

$baseUrl = '/';
$hostUrl = 'https://www.animitemedia.com';

$config = [
    'id' => 'animite-console',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'console\controllers',
    'components' => [

    ],
];

return $config;
