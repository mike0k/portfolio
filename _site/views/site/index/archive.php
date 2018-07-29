<?php

/* @var $this yii\web\View */

use yii\helpers\Html;

$model = new \site\models\ModelClient();
$clients = $model->randClients();
?>
<h2 class="section-title">Archive</h2>
<div class="row section-content">
    <div class="col-sm-4 padding-bottom-20">
        <p>This is a random selection of some of the projects and websites I have been significantly involved with over my career. The sites stretch across just about every industry and purpose imaginable and vary wildly from basic static websites to large e-commerce websites.</p>
    </div>
    <div class="col-sm-8">
        <div class="row">
            <div class="carousel">
                <div class="clip col-xs-4">
                    <?php
                    $i = 1;
                    foreach($clients as $client => $filename){
                        $imgDir = Yii::$app->request->baseUrl.'img/client/general/'.$filename;
                        $thumbDir = Yii::$app->request->baseUrl.'img/client/general/thumb/'.$filename;
                        echo '
                        <div class="img-frame">
                            <a href="'.$imgDir.'" data-fancybox="archive-carousel" data-caption="'.$client.'">
                                <img src="'.Yii::$app->request->baseUrl.'img/misc/loading.gif" data-lazy="'.$thumbDir.'" alt="'.$client.'" />
                            </a>
                        </div>
                    ';
                        if($i %3 == 0 && count($clients) > $i){
                            echo '</div><div class="clip col-xs-4">';
                        }
                        $i++;
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>