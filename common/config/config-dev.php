<?php
$config = [
    'bootstrap' => ['debug', 'gii'],
    'components' => [
        'reCaptcha' => [
            'name' => 'reCaptcha',
            'class' => 'himiklab\yii2\recaptcha\ReCaptcha',
            'siteKey' => '',
            'secret' => '',
        ],
    ],
    'modules' => [
        'debug' => [
            'class' => 'yii\debug\Module',
        ],
        'gii' => [
            'class' => 'yii\gii\Module',
            'allowedIPs' => ['127.0.0.1', '::1'],
            'generators' => [
                'crud' => [
                    'class' => 'yii\gii\generators\crud\Generator',
                    'templates' => [
                        'Extended' => '@app/gii/extended',
                    ]
                ]
            ],
        ],
    ],
    'params' => [
        'google' => [
            'apiKey' => 'AIzaSyCJzzCI2jXQrIENxgv2PEXErdbJIlxdzHY',
            'apiKey-server' => 'AIzaSyDrpdGf0zs6kvb35eB7XSYlg1vCF86fL4M',
        ],
        'recaptcha' => [
            'publicKey' => '6LfPcuMSAAAAANNlpHenOty0vFfFI8PlvIR5agBX',
            'privateKey' => '6LfPcuMSAAAAAP_JlSvg2jTp5E5RC6eRBkug-mdf',
        ],
        //Animite
        /*'vimeo' => [
            'clientId' => 'dbef0f41a660832194d7d19cdddccaa5c221d708',
            'clientSecret' => 'YYDe4nId07TuAcipoxitZ5iCXTZRYtGzooYnX+NGqMbYcezBVTeDTyzZSYIAuBB2oQUZLEMsycPgA7gvfS+8GcaaV21rxd9EqaHT0ALU0ZLRzx7f5YeowFRo2cLh2vVs',
            'accessToken' => '77eb8a6e98b0928232ae1a8ccc2cae20',
        ]*/
    ],
];

return $config;
