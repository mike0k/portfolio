<?php

namespace site\assets;

use Yii;
use common\components\AssetBundle;

class MapAsset extends AssetBundle {

    public $depends = [
        'site\assets\AppAsset',
    ];

    public function init () {
        parent::init();

        $this->css = [

        ];

        $this->js = [
            'https://maps.googleapis.com/maps/api/js?key=' . Yii::$app->params['googleApiKey'] . '&sensor=false&libraries=places&region=UK',
            'https://cdnjs.cloudflare.com/ajax/libs/geocomplete/1.7.0/jquery.geocomplete.min.js',
            'js/module/map' . (YII_DEBUG ? '' : '.min') . '.js',
        ];
    }

}
