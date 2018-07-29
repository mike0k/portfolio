<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace console\controllers;

use common\components\Maintenance;
use yii\console\Controller;


class CronController extends Controller {

    public $cmd;
    private $debug = true;

    public function options ($actionID) {
        return ['cmd'];
    }

    public function optionAliases () {
        return ['c' => 'cmd'];
    }

    public function actionIndex () {
        //example cPanel command: /usr/local/bin/php -q /home/animitem/public_html/crm/yii cron/index -c=min
        //example localhost command: php yii cron/index -c=min

        $valid = true;

        if($this->debug){
            print_r("Start Cron: ".$this->cmd."\n");
        }

        if(empty($this->cmd)){
            if($this->debug){
                print_r("No command given\n");
            }
            exit;
        }

        $model = new Maintenance();
        if($this->cmd != 'test') {
            $valid = $model->cronCollision($this->cmd, 'active');
            if($this->debug){
                print_r("Cron Collision: ".($valid ? "Pass" : "Fail")."\n");
            }
        }

        if ($valid) {
            switch ($this->cmd) {
                case 'min':
                    //active cron
                    $model->sendMail();
                    break;

                case 'hour':
                    //inactive cron
                    break;

                case 'day':
                    //active cron
                    $model->cleanLogs();
                    $model->syncMsProperties();
                    break;

                case 'week':
                    //inactive cron
                    break;

                case 'month':
                    //inactive cron
                    break;

                case 'test':
                    //only to be used for debugging
                    $model->syncMsProperties();
                    break;
            }

            if($this->cmd != 'test') {
                $model->cronCollision($this->cmd, 'inactive');
                if ($this->debug) {
                    print_r("End Cron: " . $this->cmd . "\n");
                }
            }
        }
    }


}
