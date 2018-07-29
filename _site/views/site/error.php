<?php

/* @var $this yii\web\View */
/* @var $name string */
/* @var $message string */
/* @var $exception Exception */

use yii\helpers\Html;

Yii::$app->params['menu-trans'] = true;
?>

<div class="page page-error">
    <div class="row">
        <div class="col-sm-6 col-sm-push-3">
            <div class="img-frame">
                <img src="<?php echo Yii::$app->request->baseUrl; ?>img/misc/error.gif" alt="Error" class="img-responsive" />
            </div>
        </div>
    </div>

    <div class="text-center section-30">
        <h2>
            <span>404</span>
            <br>
            Page Not Found
        </h2>
        <p>The page you are looking for could not be found.</p>
        <a class="btn btn-primary" href="<?php echo \yii\helpers\Url::to(['site/index']); ?>">Back to main site</a>
    </div>

    <?php if(YII_DEBUG){ ?>
        <div class="debug section-30">
            <h3>Error: <?= Html::encode($name) ?></h3>
            <p>Error Message: <strong><?php echo nl2br(Html::encode($message)); ?></strong></p>
            <p><?php echo nl2br(Html::encode($exception)); ?></p>
        </div>
    <?php } ?>
</div>