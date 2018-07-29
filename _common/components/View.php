<?php

namespace common\components;

use yii;

/**
 * View
 */
class View extends yii\web\View {

    public $deferCss = false;
    protected $deferredCss = [];

    public function beforeRender ($viewFile, $params) {
        $return = parent::beforeRender($viewFile, $params);

        $meta = [];
        if (!empty($params['meta'])) {
            $meta = $params['meta'];
        }
        $this->registerMetaData($meta);

        return $return;
    }

    protected function registerMetaData ($data = null) {
        $title = $action = $controller = '';
        //var_dump($data);
        if (!empty($data)) {
            foreach ($data as $key => $val) {
                if ($key == 'title') {
                    $title = $val;
                } else {
                    if ($key == 'desc') {
                        $key = 'description';
                    }
                    $this->registerMetaTag([
                        'name' => $key,
                        'content' => $val
                    ]);
                }
            }
        }

        if (!empty($title)) {
            $this->title = $title;
        } else if (empty($this->title)) {
            if (Yii::$app->controller->id != 'site') {
                $controller = Yii::$app->controller->id;
                $sep = ' ';
            }

            if (Yii::$app->controller->action->id != 'index') {
                $action = Yii::$app->controller->action->id;
            }
            $title = Yii::$app->formatter->asCamelCase($action) . ' ' . Yii::$app->formatter->asCamelCase($controller);;
            $title .= (!empty($title) ? ' | ' : '') . Yii::$app->name;
            $this->title = substr($title, 0, 69);
        }

    }


    public function registerJs ($js, $position = self::POS_END, $key = null) {
        parent::registerJs($js, $position, $key);
    }

    protected function renderHeadHtml () {
        $this->deferredCss['cssFiles'] = $this->cssFiles;
        $this->deferredCss['css'] = $this->css;

        if ($this->deferCss) {
            $this->cssFiles = null;
            $this->css = null;
        }

        $return = parent::renderHeadHtml();

        if ($this->deferCss) {
            $this->cssFiles = $this->deferredCss['cssFiles'];
            $this->css = $this->deferredCss['css'];
        }else{
            $return .= '<noscript>' . str_replace('"preload"', '"stylesheet"',$this->renderCss()) . '</noscript>';
        }

        if (YII_ENV == 'prod') {
            $return .= $this->renderAnalytics();
        }

        return $return;
    }

    protected function renderBodyEndHtml ($ajaxMode) {
        $return = parent::renderBodyEndHtml($ajaxMode);
        if ($this->deferCss) {
            $return = '<noscript id="deferred-styles">' . $this->renderCss() . '</noscript>' . $return;
        }

        return $return;
    }

    public function renderCss () {
        $lines = [];

        if (!empty($this->deferredCss['cssFiles'])) {
            $lines[] = implode("\n", $this->deferredCss['cssFiles']);
        }
        if (!empty($this->deferredCss['css'])) {
            $lines[] = implode("\n", $this->deferredCss['css']);
        }

        return empty($lines) ? '' : implode("\n", $lines);
    }

    protected function renderAnalytics () {
        $return = '
            <script async src="https://www.googletagmanager.com/gtag/js?id=' . Yii::$app->params['google']['analytics'] . '"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "' . Yii::$app->params['google']['analytics'] . '");
            </script>
        ';

        return $return;
    }

}