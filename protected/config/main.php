<?php
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'Portfolio',
	'preload'=>array('log'),
	'import'=>array(
		'application.models.*',
		'application.components.*',
	),
	'components'=>array(
		'user'=>array(
			'allowAutoLogin'=>true,
		),	
		'db'=>array(
			'connectionString' => 'mysql:host=localhost;dbname=michaelk_portfolio',
			'emulatePrepare' => true,
			'username' => 'michaelk_mike',
			'password' => 'leedsunited2611',
			'charset' => 'utf8',
		),
		'errorHandler'=>array(
            'errorAction'=>'site/error',
        ),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
			),
		),
	),
	'params'=>array(
		'adminEmail'=>'michael.kirkbright@gmail.com',
		'googleEmail'=>'michael.kirkbright@gmail.com',
		'googlePassword'=>'juejveufgr2611',
		'googleId'=>34397174,
	),
);