<?php

/* @var $this yii\web\View */

$skills = new \site\models\ModelSkills();
?>
<h2 class="section-title">Skills</h2>
<div class="section-content">
    <div class="row skills">
        <div class="col-sm-6">
            <?= $skills->getTable('Language/Framework','language'); ?>
        </div>
        <div class="col-sm-6">
            <?= $skills->getTable('Software/Other','software'); ?>
        </div>
        <div class="clear"></div>
    </div>
</div>