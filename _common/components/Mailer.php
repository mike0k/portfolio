<?php

namespace common\components;

use common\models\DbMailHash;
use common\models\DbMailOutbox;
use common\models\DbMailTrigger;
use yii;
use yii\helpers\ArrayHelper;
use Pelago\Emogrifier;

class Mailer extends yii\swiftmailer\Mailer {

    protected $related;
    protected $log;

    public function add ($model, $trigger, $options = []) {
        $valid = false;
        $data = $this->getOptions();
        $this->getRelated($model);

        $trigger = DbMailTrigger::find()->where(['reference' => $trigger])->one();
        if (!empty($trigger)) {
            $this->getHash($trigger);
            $temp = [
                'attach' => $this->getAttachments($trigger),
                'delay' => $this->getDelay($trigger),
                'recip' => $this->getRecip($trigger),
                'subject' => $this->getSubject($trigger),
                'body' => $this->getBody($trigger),
            ];
            $data = ArrayHelper::merge($data, $temp);
        }

        $data = ArrayHelper::merge($data, $options);
        $mail = $this->saveMail($data, $data['save']);
        if (!empty($mail)) {
            if ($mail->runTime < strtotime('+1 min') && $data['save']) {
                $valid = $this->sendMail($mail);
            } else {
                $valid = true;
            }
        }

        if(!empty($options['debug'])){
            var_dump($this->log);
        }

        return ($valid ? $mail : false);
    }

    public function sendMail ($model) {
        $this->htmlLayout = 'layouts/' . (empty($model->layout) ? 'main' : $model->layout);
        $mail = $this->compose('layouts/_content', ['content' => $model->body])
            ->setTo($model->sendTo)
            ->setSubject($model->subject)
            ->setFrom([Yii::$app->params['email-from'] => Yii::$app->params['name']]);

        if (!empty($model->sendCc)) {
            $mail->setCc($model->sendCc);
        }

        if (!empty($model->sendBcc)) {
            $mail->setBcc($model->sendBcc);
        }

        if (!empty($model->sendFrom)) {
            $mail->setReplyTo($model->sendFrom);
        }

        if (!empty($model->attach)) {
            foreach ($model->attach as $path) {
                $mail->attach($path);
            }
        }

        $valid = $mail->send();

        $model->status = 'sent';
        if (!$valid) {
            $model->status = 'failed';
        }
        $model->save();

        return $valid;
    }

    public function render ($view, $params = [], $layout = false) {
        $content = parent::render($view, $params, $layout);

        if (!empty($layout)) {
            $css = '';
            $css .= file_get_contents('https://cdnjs.cloudflare.com/ajax/libs/foundation-emails/2.2.1/foundation-emails.min.css');
            $css .= file_get_contents(Yii::getAlias('@site') . '/web/css/mail.min.css');

            $emogrifier = new Emogrifier();
            $emogrifier->disableStyleBlocksParsing();
            $emogrifier->enableCssToHtmlMapping();
            $emogrifier->setHtml($content);
            $emogrifier->setCss($css);
            $content = $emogrifier->emogrify();
        }

        return $content;
    }

    protected function getAttachments ($trigger) {
        $attachments = [];
        if (!empty($trigger->attach)) {
            foreach ($trigger->attach as $keyword) {
                switch ($keyword) {
                    case 'invoice':
                    case 'statement':
                        if (!empty($this->related['invoice']->$keyword)) {
                            foreach ($this->related['invoice']->$keyword as $file) {
                                if (file_exists($file->path)) {
                                    $this->log[] = 'Attached: ' . $file->path;
                                    $attachments[] = $file->path;
                                } else {
                                    $this->log[] = 'Missing File: ' . $file->path;
                                }
                            }
                        }
                        break;
                }
            }
        }

        return $attachments;
    }

    protected function getBody ($trigger) {
        $group = strtolower(str_replace(' ', '-', $trigger->group));

        return $this->render($group . '/' . $trigger->reference, $this->related);
    }

    protected function getDelay ($trigger) {
        $delay = '+ 2 min';
        if (!empty($trigger->sendDelay)) {
            $delay = $trigger->sendDelay;
        }
        $this->log[] = 'Delay: ' . $delay;

        return $delay;
    }

    protected function getHash($trigger){
        $this->related['hash'] = null;

        $list = DbMailHash::instance()->listTrigger();
        if(!empty($list) && !empty($list[$trigger->reference])){
            $data = $list[$trigger->reference];
            if(!empty($this->related[$data['ref']])){
                $model = $this->related[$data['ref']];
                $hash = DbMailHash::add($model, $data['action'], $data['app'], (!empty($data['expire']) ? $data['expire'] : null));
                if(!empty($hash)){
                    $this->related['hash'] = $hash;
                }
            }
        }

        return $this->related['hash'];
    }

    protected function getOptions () {
        return [
            'notification' => true,
            'debug' => false,
            'debug-email' => Yii::$app->params['email-debug'],
            'layout' => 'main',
            'save' => true,

            'attach' => [],
            'delay' => '+2 min',
            'recip' => [
                'sendTo' => [],
                'sendCc' => [],
                'sendBcc' => [],
                'sendFrom' => [],
            ],
            'subject' => '',
            'body' => '',
        ];
    }

    protected function getRecip ($trigger) {
        $types = ['sendTo', 'sendCc', 'sendBcc', 'sendFrom'];
        $recips = [];

        foreach ($types as $type) {
            $group = [];
            if (!empty($trigger) && !empty($trigger->$type)) {
                if(!is_array($trigger->$type)){
                    $trigger->$type = [$trigger->$type];
                }
                foreach ($trigger->$type as $keyword) {
                    if (!empty($keyword)) {
                        $email = $keyword = trim($keyword);

                        switch ($keyword) {
                            case 'no-reply':
                            case 'default':
                                $email = Yii::$app->params['email-from'];
                                break;

                            case 'office':
                                $email = Yii::$app->params['email-office'];
                                break;

                            default:
                                if (!empty($this->related[$keyword])) {
                                    if (is_array($this->related[$keyword])) {
                                        foreach ($this->related[$keyword] as $model) {
                                            if (!empty($model->email)) {
                                                $email = $model->email;
                                            }
                                        }
                                    } else if (!empty($this->related[$keyword]->email)) {
                                        $email = $this->related[$keyword]->email;
                                    }
                                }
                        }

                        if (!empty($email)) {
                            $validator = new yii\validators\EmailValidator();
                            if ($validator->validate($email)) {
                                $group[] = $email;
                                $this->log[] = ucfirst($type) . ': ' . $email . ' (Keyword: ' . $keyword . ')';
                            }else{
                                $this->log[] = ucfirst($type) . ': Invalid email ' . $email . ' (Keyword: ' . $keyword . ')';
                            }
                        }
                    }
                }
            }

            $recips[$type] = $group;
        }

        return $recips;
    }

    protected function getRelated ($model) {
        $this->related = [
            'source' => $model,
        ];

        switch ($model->className) {
            case 'DbContact':
                $this->related['contact'] = $model;
                break;
            case 'DbDiary':
                $this->related['diary'] = $model;
                $this->related['property'] = $model->property;

                $this->related['lead'] = $model->lead;
                if (!empty($model->lead) && in_array($model->lead->type, ['valuation', 'viewing']) && !empty($model->lead->contact)) {
                    $this->related['contact'] = $model->lead->contact;
                }

                if(!empty($model->ref)) {
                    switch ($model->refType) {
                        case 'DbContact':
                            $this->related['contact'] = $model->ref;
                            break;
                        case 'DbUser':
                            $this->related['user'] = $model->ref;
                            break;
                    }
                }

                break;
            case 'DbLead':
                $this->related['lead'] = $model;
                $this->related['contact'] = $model->contact;
                $this->related['property'] = $model->property;
                break;
            case 'DbProperty':
                $this->related['property'] = $model;
                break;
            case 'DbUser':
                $this->related['user'] = $model;
                break;
        }

        return $this->related;
    }

    protected function getSubject ($trigger) {
        $subject = $trigger->subject;
        if (!empty($subject) && preg_match_all("/\[(.*?)?\]/", $subject, $keywords)) {
            if (!empty($keywords[1])) {
                foreach ($keywords[1] as $keyword) {
                    $result = '';

                    //get keyword format (optional)
                    if (strpos($keyword, ':') !== false) {
                        $parts = explode(':', $keyword);
                        $format = $parts[0];
                        $keyword = $parts[1];
                    }

                    //get $this->>related key and model attributes names
                    $parts = explode('_', $keyword);
                    if (!empty($parts[0]) && !empty($parts[1])) {
                        $relation = $parts[0];
                        $attr = $parts[1];
                    }

                    //get the model
                    if (!empty($relation) && !empty($this->related[$relation])) {
                        if (is_array($this->related[$relation])) {
                            $model = $this->related[$relation][0];
                        } else {
                            $model = $this->related[$relation];
                        }
                    }

                    //get the result
                    if (!empty($attr) && !empty($model) && isset($model->$attr)) {
                        $methodName = 'list' . ucfirst($attr);
                        if (method_exists($model, $methodName) && is_array($model->$methodName())) {
                            $result = $model->getListLabel($methodName, $model->$attr);
                        } else {
                            $result = $model->$attr;
                        }
                    }

                    //format result (optional)
                    if (!empty($format)) {
                        $result = Yii::$app->formatter->$format($result);
                    }

                    //replace the keyword with the result
                    $subject = str_replace('[' . $keyword . ']', $result, $subject);
                }
            }
        }

        return $subject;
    }

    protected function saveMail ($options, $save = true) {
        $mail = new DbMailOutbox();

        $mail->sendTo = $options['recip']['sendTo'];
        $mail->sendCc = (!empty($options['recip']['sendCc']) ? $options['recip']['sendCc'] : null);
        $mail->sendBcc = (!empty($options['recip']['sendBcc']) ? $options['recip']['sendBcc'] : null);
        if(!empty($options['recip']['sendFrom'])){
            if(is_array($options['recip']['sendFrom'])){
                $mail->sendFrom = $options['recip']['sendFrom'][0];
            }else{
                $mail->sendFrom = $options['recip']['sendFrom'];
            }
        }

        $mail->subject = $options['subject'];
        $mail->body = $options['body'];
        $mail->attach = (!empty($options['attach']) ? $options['attach'] : null);
        $mail->layout = (!empty($options['layout']) && $options['layout'] != 'main' ? $options['layout'] : null);

        $mail->runTime = strtotime($options['delay']);
        $valid = ($save ? $mail->save() : $mail->validate());
        if(!$valid){
            $this->log[] = $mail->errors;
        }

        return ($valid ? $mail : false);
    }

}