<?php

/* @var \site\models\FormContact $source */
?>

<table class="row">
    <tbody>
    <tr>
        <th class="small-12 large-12 columns first last">
            <table>
                <tr>
                    <th>
                        <h1 class="text-center">New Enquiry</h1>
                        <?php echo Yii::$app->mailer->render('common/_spacer'); ?>
                        <p>The person below has contacted us via the website contact page. Please arrange for someone to respond to them asap.</p>

                        <hr />
                        <?php echo Yii::$app->mailer->render('common/_spacer'); ?>

                        <h4>Enquiry:</h4>
                        <p>
                            <strong>Company:</strong> <?php echo (!empty($source->company) ? $source->company : '-'); ?><br>
                            <strong>Name:</strong> <?php echo (!empty($source->name) ? $source->name : '-'); ?><br>
                            <strong>Phone:</strong> <?php echo (!empty($source->phone) ? '<a href="tel:'.$source->phone.'">'.$source->phone.'</a>' : '-'); ?><br>
                            <strong>Email:</strong> <?php echo (!empty($source->email) ? '<a href="mailto:'.$source->email.'">'.$source->email.'</a>' : '-'); ?>
                        </p>
                        <p><?php echo (!empty($source->message) ? nl2br($source->message) : '-'); ?></p>

                    </th>
                    <th class="expander"></th>
                </tr>
            </table>
        </th>
    </tr>
    </tbody>
</table>