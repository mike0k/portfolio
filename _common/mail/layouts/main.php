<?php
use yii\helpers\Html;

/* @var $this \yii\web\View view component instance */
/* @var $message \yii\mail\MessageInterface the message being composed */
/* @var $content string main view render result */

$live = true;
if(empty($message)){
    $live = false;
    $message = Yii::$app->mailer->compose()->setHtmlBody($content);
}

?>
<?php $this->beginPage() ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width"/>
    <title><?= Html::encode(Yii::$app->params['name']) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<table class="body" data-made-with-foundation>
    <tr>
        <td class="float-center" align="center" valign="top">
            <center>
                <body>
                <!-- <style> -->
                <table class="body" data-made-with-foundation="">
                    <tr>
                        <td class="float-center" align="center" valign="top">
                            <center data-parsed="">

                                <?php echo Yii::$app->mailer->render('common/_spacer'); ?>

                                <table align="center" class="container float-center">
                                    <tbody>
                                    <tr>
                                        <td class="mail-layout mail-layout-firegroup">

                                            <table class="row header">
                                                <tbody>
                                                <tr>
                                                    <th class="small-12 large-12 columns first last logo">
                                                        <table>
                                                            <tr>
                                                                <th>
                                                                    <?php echo Yii::$app->mailer->render('common/_spacer'); ?>
                                                                    <a href="<?php echo Yii::$app->urlManager->baseUrl; ?>" title="<?php echo Yii::$app->params['name']; ?>">
                                                                        <?php
                                                                        $imgUrl = '/img/logo/logo-li-sm.png';
                                                                        if($live){
                                                                            $imgUrl = $message->embed(Yii::getAlias('@webroot').$imgUrl);
                                                                        }else{
                                                                            $imgUrl = Yii::getAlias('@web').$imgUrl;
                                                                        }
                                                                        ?>

                                                                        <img src="<?php echo $imgUrl; ?>"  alt="<?php echo Yii::$app->params['name']; ?> Logo" />
                                                                    </a>
                                                                </th>
                                                                <th class="expander"></th>
                                                            </tr>
                                                        </table>
                                                    </th>
                                                </tr>
                                                </tbody>
                                            </table>

                                            <?php echo Yii::$app->mailer->render('common/_spacer', ['size' => 30]); ?>
                                            <?php echo $content; ?>
                                            <?php echo Yii::$app->mailer->render('common/_spacer', ['size' => 30]); ?>

                                            <table class="row footer">
                                                <tbody>
                                                <tr>
                                                    <th class="small-12 large-12 columns first last">
                                                        <table>
                                                            <tr>
                                                                <th>
                                                                    <?php echo Yii::$app->mailer->render('common/_spacer'); ?>
                                                                    <p class="text-center">
                                                                        <small>
                                                                            <?php echo Yii::$app->params['name']; ?>
                                                                            <br>
                                                                            <?php echo Yii::$app->params['address']; ?>
                                                                        </small>
                                                                    </p>
                                                                </th>
                                                                <th class="expander"></th>
                                                            </tr>
                                                        </table>
                                                    </th>
                                                </tr>
                                                </tbody>
                                            </table>

                                            <?php echo Yii::$app->mailer->render('common/_spacer'); ?>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </center>
                        </td>
                    </tr>
                </table>
                </body>
            </center>
        </td>
    </tr>
</table>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
