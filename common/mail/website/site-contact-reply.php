<table class="row viewing">
    <tbody>
    <tr>
        <th class="small-12 large-12 columns first last">
            <table>
                <tr>
                    <th>
                        <h1 class="text-center">Thanks for getting in touch</h1>
                        <p>Thank your for getting in touch. We will review your enquiry and get back to you as soon as possible.</p>
                        <p>Please find a copy of your enquiry below.</p>
                        <?php echo Yii::$app->mailer->render('common/_spacer'); ?>
                        <h2 class="text-center">
                            <?php echo $source->name; ?>
                            <br />
                            <small><?php echo $source->company; ?></small>
                        </h2>
                        <p class="text-center">
                            <a href="tel:<?php echo str_replace(' ', '', $source->phone); ?>"><?php echo Yii::$app->formatter->asPhone($source->phone); ?></a>
                            <br />
                            <a href="mailto:<?php echo $source->email; ?>"><?php echo $source->email; ?></a>
                        </p>

                        <?php echo Yii::$app->mailer->render('common/_spacer'); ?>
                        <p><?php echo nl2br($source->message); ?></p>

                    </th>
                    <th class="expander"></th>
                </tr>
            </table>
        </th>
    </tr>
    </tbody>
</table>