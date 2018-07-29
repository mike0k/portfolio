<?php

namespace site\assets;

use Yii;
use common\components\AssetBundle;

class AppAsset extends AssetBundle {

    public $depends = [
        'yii\web\YiiAsset',
        //'yii\jui\JuiAsset',
        'yii\bootstrap\BootstrapAsset',
        'yii\bootstrap\BootstrapPluginAsset',
    ];

    public function init () {
        parent::init();

        $this->css = [
            'https://fonts.googleapis.com/css?family=Audiowide',
            'https://fonts.googleapis.com/css?family=Expletus+Sans',
            'https://fonts.googleapis.com/css?family=Exo+2:300,400,700',
            'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
            'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
            //'https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css',

            'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
        ];

        $this->js = [
            //'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js',
            //'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/loadCSS/2.0.1/cssrelpreload.min.js',

            'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
        ];

    }
}
