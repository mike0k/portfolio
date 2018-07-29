<?php
use yii\bootstrap\Html;
?>

<div id="site-loader">
    <div>
        <div class="logo">
            <?php echo Html::img(Yii::$app->request->baseUrl . 'img/misc/loading.gif', ['alt' => 'Loading']); ?>
        </div>
    </div>
</div>