<div id="intro">
	<div class="span11 colAlt min150">
		<?php $this->renderPartial('intro') ?>
	</div>
	<div class="span5 col min150">
		<?php $this->renderPartial('availability') ?>
	</div>
	<div class="groupSep"></div>
</div>


<div id="about">
	<div class="span6 colAlt min250">
		<?php $this->renderPartial('avatar') ?>
	</div>
	<div class="span10 colAlt">
		<?php $this->renderPartial('bio') ?>
	</div>
	<div class="groupSep"></div>
</div>


<div id="skills">
	<?php $this->renderPartial('skills') ?>
	<?php $this->renderPartial('qualifications') ?>
	<div class="groupSep"></div>
</div>

<div id="caseStudies">
	<?php $this->renderPartial('caseStudies') ?>
	<div class="groupSep"></div>
</div>


<div id="getintouch">
	<?php $this->renderPartial('contact') ?>
</div>