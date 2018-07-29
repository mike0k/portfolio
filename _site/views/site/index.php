<?php

use yii\bootstrap\Html;

?>

<div class="page page-home">
    <section id="intro">
        <?php echo $this->render('index/intro'); ?>
    </section>
    <section id="about">
        <?php echo $this->render('index/about'); ?>
    </section>
    <section id="skills">
        <?php echo $this->render('index/skills'); ?>
    </section>
    <section id="qualifications">
        <?php echo $this->render('index/qualifications'); ?>
    </section>
    <section id="experience">
        <?php echo $this->render('index/experience'); ?>
    </section>
    <section id="cases">
        <?php echo $this->render('index/case'); ?>
    </section>
    <section id="archive">
        <?php echo $this->render('index/archive'); ?>
    </section>
    <section id="contact">
        <?php echo $this->render('index/contact', ['contact' => $contact]); ?>
    </section>
</div>