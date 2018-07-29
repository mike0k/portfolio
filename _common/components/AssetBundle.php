<?php

namespace common\components;

class AssetBundle extends \yii\web\AssetBundle{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [];
    public $js = [];
    public $depends = [];

    public $jsOptions = [
        'async' => 'async',
    ];

    public $cssOptions = [
        'rel' => 'preload',
        'as' => 'style',
        'onload' => "this.onload=null;this.rel='stylesheet'",
        //'onerror' => "this.onerror=null;this.rel='stylesheet'",
    ];
}