<table class="row">
    <tbody>
    <tr>
        <th class="small-12 large-12 columns first last">
            <table>
                <tr>
                    <th>
                        <h1 class="text-center">Resetting Your Password</h1>
                        <?php echo Yii::$app->mailer->render('common/_spacer'); ?>
                        <p class="text-center">It happens. Click the link below to reset your password.</p>
                        <?php echo Yii::$app->mailer->render('common/_button', ['url' => $hash->url, 'label' => 'Reset Password']); ?>
                    </th>
                    <th class="expander"></th>
                </tr>
            </table>
        </th>
    </tr>
    </tbody>
</table>