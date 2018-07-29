<?php
use yii\helpers\Html;

?>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="<?= Yii::$app->request->hostInfo.Yii::$app->request->url; ?>"/>
    <meta name="author" content="Animite Media"/>
    <meta name="robots" content="index">
    <?= Html::csrfMetaTags() ?>

    <title><?= Html::encode($this->title) ?></title>
    <?php
    /*if(!empty($this->metaTags)){
        foreach($this->metaTags as $tag){
            echo $tag;
        }
    }*/
    ?>

    <?php
    echo '<style>';
    require('css/loader.min.css');
    echo '</style>';
    $this->head()
    ?>

    <?php $faviVersion = '?v=2'; ?>
    <link rel="apple-touch-icon" sizes="57x57" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-57x57.png<?= $faviVersion; ?>">
    <link rel="apple-touch-icon" sizes="60x60" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-60x60.png<?= $faviVersion; ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-72x72.png<?= $faviVersion; ?>">
    <link rel="apple-touch-icon" sizes="76x76" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-76x76.png<?= $faviVersion; ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-114x114.png<?= $faviVersion; ?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-120x120.png<?= $faviVersion; ?>">
    <link rel="apple-touch-icon" sizes="144x144" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-144x144.png<?= $faviVersion; ?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-152x152.png<?= $faviVersion; ?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/apple-icon-180x180.png<?= $faviVersion; ?>">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?= Yii::$app->request->baseUrl; ?>img/favicon/android-icon-192x192.png<?= $faviVersion; ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/favicon-32x32.png<?= $faviVersion; ?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/favicon-96x96.png<?= $faviVersion; ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/favicon-16x16.png<?= $faviVersion; ?>">
    <link rel="manifest" href="<?= Yii::$app->request->baseUrl; ?>img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#232E33">
    <meta name="msapplication-TileImage" content="<?= Yii::$app->request->baseUrl; ?>img/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#232E33">

    <meta property="og:locale" content="en_GB"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Michael Kirkbright: Web Dev Portfolio"/>
    <meta property="og:url" content="https://www.michaelkirkbright.co.uk"/>
    <meta property="og:site_name" content="Michael Kirkbright: Web Dev Portfolio"/>
    <meta property="og:image" content="https://www.michaelkirkbright.co.uk/img/logo/logo-md.png"/>

</head>