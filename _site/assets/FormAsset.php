<?php

namespace site\assets;

use Yii;
use common\components\AssetBundle;

class FormAsset extends AssetBundle {

    public $depends = [
        'site\assets\PageAsset',
    ];

    public function init () {
        parent::init();

        $this->css = [
            //'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css',
            //'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css',
        ];

        $this->js = [
            //'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js',
            //'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js',
            //'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js',
            'js/module/form' . (YII_DEBUG ? '' : '.min') . '.js',
        ];
    }

}
