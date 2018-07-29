<?php
$type = (!empty($type) ? $type : 'office');
switch ($type){
    case 'office':
        $name = Yii::$app->params['name'];
        $phone = Yii::$app->params['phone'];
        break;
}
?>

<p class="signature">
    Regards,<br/>
    <?php echo (!empty($name) ? $name.'<br>' : ''); ?>
    <small>
        <?php echo ($name != Yii::$app->params['name'] ? Yii::$app->params['name'].'<br>' : ''); ?>
        <?php echo (!empty($phone) ? Yii::$app->formatter->asPhone($phone).'<br>' : ''); ?>
    </small>
</p>
