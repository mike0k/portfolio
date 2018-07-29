<?php

/* @var $this \yii\web\View */

/* @var $content string */

use yii\helpers\Html;
use site\assets\PageAsset;

PageAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="en-GB">
<?php echo $this->render('_head'); ?>
<body>

<?php $this->beginBody() ?>

<?php echo $this->render('_load'); ?>

<?php echo $this->render('_menu'); ?>

<div id="top"></div>

<div class="container">
    <div class="wrap-site">
        <div class="wrap-site-inner">

            <div class="wrap-header">
                <header class="header">
                    <div class="logo">
                        <img src="<?php echo Yii::$app->request->baseUrl; ?>img/logo/logo-md.png" alt="Michael Kirkbright Web Development & Marketing" />
                    </div>
                </header>
            </div>

            <div class="wrap-content">
                <?php echo $content ?>
            </div>

            <section class="wrap-footer">
                <footer class="footer">
                    <div class="row">
                        <div class="col-sm-6 pull-right footer-right">
                            <h4>About this site</h4>
                            <p class="text-right">The main technologies used to build this site were HTML, CSS/SASS, jQuery, PHP, Yii2, Bootstrap3, Composer, Gulp and CloudFlare. The site is also W3C compliant, has structured data, is fully mobile responsive and meets all of the necessary requirements of Google page speed. </p>
                        </div>
                        <div class="col-sm-3 pull-left footer-left">
                            <div class="logo">
                                <img src="<?php echo Yii::$app->request->baseUrl; ?>img/misc/loading.gif" data-src="<?php echo Yii::$app->request->baseUrl; ?>img/logo/logo-sm.png" alt="Michael Kirkbright Web Development & Marketing" />
                            </div>
                            <p class="copyright">
                                Copyright &copy; <?php echo date('Y'); ?> Michael Kirkbright
                                <br>
                                All rights Reserved
                            </p>
                        </div>

                    </div>
                </footer>
            </section>
        </div>
    </div>
</div>

<span class="hidden" id="siteData"
      data-url="<?php echo Yii::$app->request->baseUrl; ?>"
      data-gid="<?php echo Yii::$app->params['google']['apiKey']; ?>"
></span>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
