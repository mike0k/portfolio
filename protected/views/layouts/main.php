<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<title>Michael Kirkbright ::  Web Developer and Designer :: Portfolio</title>
	<meta name="description" content="Michael Kirkbright, an information architect and front-end web developer with a passion for exceptional quality right down to the tiniest detail." />
	<meta name="author" content="Michael Kirkbright" />
	<meta name="keywords" content="michaelkirkbright, Michael Kirkbright, Kirkbright, web developer, web, developer, web development, online, client side development, front end development, quality, css, xhtml, freelance web developer, freelance, freelancing, freelance xhtml, freelance html, web standards" />

	<!-- blueprint CSS framework -->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print" />
	<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection" />
	<![endif]-->
	
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/jquery.jcarousel.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css" />
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css" />

	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
	<script>$(function(){var baseUrl='<?php echo Yii::app()->baseUrl; ?>'});</script>
	<?php Yii::app()->clientScript->registerCoreScript('jquery',CClientScript::POS_END); ?>
	<?php Yii::app()->clientScript->registerCoreScript('jquery.ui',CClientScript::POS_END); ?>
	<?php Yii::app()->clientScript->registerScriptFile(Yii::app()->baseUrl.'/js/jquery.jcarousel.min.js',CClientScript::POS_END); ?>
	<?php Yii::app()->clientScript->registerScriptFile(Yii::app()->baseUrl.'/js/jquery.slides.js',CClientScript::POS_END); ?>
	<?php Yii::app()->clientScript->registerScriptFile(Yii::app()->baseUrl.'/js/core.js',CClientScript::POS_END); ?>
	
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/grid/gridpak.css" />
	<?php Yii::app()->clientScript->registerScriptFile(Yii::app()->baseUrl.'/grid/gridpak.js',CClientScript::POS_END); ?>
	
</head>

<body>

<div class="span16" id="space">
	<div class="span13" id="pageOuter">
		<div id="page">
			<div id="pageInner">
				<div id="header">
					<h1 id="logo">michaelkirkbright</h1>
					<h2>Web Developer <span class="amp">&</span> Designer</h2>
					<div class="clear"></div>
				</div>				

				<div class="span3 colAlt min150" id="navContainer">
					<div id="navWidth"></div>
					<?php $this->renderPartial('//site/leftNav') ?>
					<div class="clear"></div>
				</div>

				<div class="span13 col min300" id="content">
					<?php echo $content; ?>
					<div class="clear"></div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
		<?php $this->renderPartial('//site/footer') ?>
	</div>
</div>

</body>
</html>
