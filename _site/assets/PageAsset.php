<?php

namespace site\assets;

use Yii;
use common\components\AssetBundle;

class PageAsset extends AssetBundle {

    public $depends = [
        'site\assets\AppAsset',
    ];

    public function init () {
        parent::init();

        $this->css = [
            'css/index' . (YII_DEBUG ? '' : '.min') . '.css',
        ];

        $this->js = [
            'js/index' . (YII_DEBUG ? '' : '.min') . '.js',
        ];


        if (file_exists(Yii::getAlias('@webroot') . '/js/' . Yii::$app->controller->id . '/' . Yii::$app->controller->action->id . '.js')) {
            $this->js[] = 'js/' . Yii::$app->controller->id . '/' . Yii::$app->controller->action->id . (YII_DEBUG ? '' : '.min') . '.js';
        }

    }
}
