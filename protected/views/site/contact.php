<div class="contact">
	<?php 
		$model=new ContactForm;
		$form=$this->beginWidget('CActiveForm', array(
			'id'=>'contact-form',
			'action'=>'site/contact',
			'enableClientValidation'=>true,
			'clientOptions'=>array(
				'validateOnSubmit'=>true,
			),
		)); ?>
	<div class="span5 colAlt min150">
		<h3>Get in Touch</h3>
		<?php echo $form->error($model,'name'); ?>
		<?php echo $form->error($model,'email'); ?>
		<?php echo $form->error($model,'body'); ?>
		<?php echo $form->error($model,'verifyCode'); ?>
	</div>
	<div class="span11 col">
		<p>If you need a new website or would like your existing site to be redesigned, just give me a shout &mdash; I'd love to work with you. Fill in the fields below and I'll get back to you as soon as possible.</p>
		
		<div class="row">
			<label for="ContactForm_name" class="span4">Name:<br /><span class="required">REQUIRED</span></label>
			<?php echo $form->textField($model,'name',array('class'=>'span12', 'placeholder'=>'Your Name')); ?>
		</div>
		<div class="clear"></div>
		<div class="row">
			<label for="ContactForm_email" class="span4">Email:<br /><span class="required">REQUIRED</span></label>
			<?php echo $form->textField($model,'email',array('class'=>'span12', 'placeholder'=>'Your@Email.com')); ?>
		</div>
		<div class="clear"></div>
		<div class="row">
			<label for="ContactForm_body" class="span4">Message:<br /><span class="required">REQUIRED</span></label>
			<?php echo $form->textArea($model,'body',array('class'=>'span12 min150')); ?>
			<div class="clear"></div>
		</div>
		<div class="clear"></div>
		<?php if(CCaptcha::checkRequirements()): ?>
			<label for="ContactForm_captcha" class="span4">Verification:<br /><span class="required">REQUIRED</span></label>
			<div class='row buttons verification' style='text-align: center;'>
				<?php $this->widget('CCaptcha',array('buttonType'=>'button','imageOptions'=>array('style'=>''))); ?>
			</div>
			<div class="row" style="padding-top:0px;">
				<?php echo $form->textField($model,'verifyCode',array('class'=>'span12', 'style'=>'float:right;', 'placeholder'=>'Enter Code Here')); ?>
			</div>
		<?php endif; ?>
		
		<div class="buttons">
			<?php echo CHtml::submitButton('Send'); ?>
		</div>
	</div>
	<?php $this->endWidget(); ?>
	<div class="clear"></div>
</div>