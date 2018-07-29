<?php
require(__DIR__ . '/../../enviroment.php');

require(__DIR__ . '/../../vendor/autoload.php');
require(__DIR__ . '/../../vendor/yiisoft/yii2/Yii.php');

$config = yii\helpers\ArrayHelper::merge(
    require(__DIR__ . '/../../_common/config/config.php'),
    require(__DIR__ . '/../config/config.php'),
    require(__DIR__ . '/../../_common/config/config-' . (YII_ENV == 'dev' ? 'local' : 'live') . '.php'),
    require(__DIR__ . '/../config/config-' . (YII_ENV == 'dev' ? 'local' : 'live') . '.php')
);

$application = new yii\web\Application($config);
$application->run();
