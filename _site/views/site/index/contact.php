<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $contact site\models\FormContact */

use yii\helpers\Html;
use common\components\ActiveForm;

\site\assets\FormAsset::register($this);
?>
<h2 class="section-title">Get in Touch</h2>
<div class="row section-content">
    <div class="col-sm-4 padding-bottom-20">
        <p>Now that you have read a little about my work, please feel free to contact me to discuss any work that you might like me to get involved in. If you already have a copy of my CV then you can contact me directly via the contact details in my CV. Otherwise please use the contact form here to drop me an email and I will get back to you as soon as possible</p>
    </div>
    <div class="col-sm-8 animate-label">
        <?php $form = ActiveForm::begin([
            'id' => 'contact_form',
        ]); ?>

        <?php echo $form->field($contact, 'name')->textInput([
            'class' => 'form-control',
        ]); ?>

        <?php echo $form->field($contact, 'email')->input('email', [
            'class' => 'form-control',
        ]); ?>

        <?php echo $form->field($contact, 'message')->textarea([
            'class' => 'form-control',
            'placeholder' => '',
        ]); ?>

        <div class="captcha-center">
            <?php echo $form->field($contact, 'reCaptcha')->widget(\himiklab\yii2\recaptcha\ReCaptcha::className())->label(false); ?>
        </div>

        <div class="text-center">
            <button class="btn btn-primary btn-block" type="submit">Send <i class="fa fa-chevron-right"></i></button>
        </div>

        <?php ActiveForm::end(); ?>
    </div>
</div>
