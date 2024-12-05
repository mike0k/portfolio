<?php $skills = new Skills; ?>
<h2>Skills</h2>
<div class="skills">
	<div class="span8 colAlt min250">
		<?php echo $skills->buildTable('Language','language'); ?>
	</div>
	<div class="span8 colAlt min250">
		<?php echo $skills->buildTable('Software/Other','software'); ?>
	</div>
</div>