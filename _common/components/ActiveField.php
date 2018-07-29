<?php


namespace common\components;

use yii\helpers\ArrayHelper;

class ActiveField extends \yii\bootstrap\ActiveField {

    /**
     * @inheritdoc
     */
    public function __construct ($config = []) {
        $config['horizontalCssClasses']['wrapper'] = 'col-sm-9';
        parent::__construct($config);
    }

    public function addon ($options = []) {
        $options = (!empty($options['addon']) ? $options['addon'] : $options);
        $options = ArrayHelper::merge([
            'btn' => false,
            'prepend' => [],
            'append' => [],
        ], $options);

        $btn = 'addon';
        if ($options['btn']) {
            $btn = 'btn';
        }

        if (!empty($options['prepend'])) {
            $this->inputTemplate = '<div class="input-group"><span class="input-group-'.$btn.'">' . $options['prepend']['content'] . '</span>{input}</div>';
        } else if (!empty($options['append'])) {
            $this->inputTemplate = '<div class="input-group">{input}<span class="input-group-'.$btn.'">' . $options['append']['content'] . '</span></div>';
        }

        return $this;
    }

    public function textarea ($options = []) {
        $this->addon($options);

        return parent::textarea($options);
    }

    public function textInput ($options = []) {
        $this->addon($options);

        return parent::textInput($options);
    }

    public function dropDownList ($items, $options = []) {
        $this->addon($options);

        return parent::dropDownList($items, $options);
    }

    public  function radioList ($items, $options = []) {

        if(!empty($options['btn'])) {
            $options['item'] = function ($index, $label, $name, $checked, $value) {

                $return = '<label class="radio-inline btn btn-primary">';
                $return .= '<input type="radio" name="' . $name . '" value="' . $value . '" '.($checked ? 'checked' : '').' />';
                $return .= '<span>' . ucwords($label) . '</span>';
                $return .= '</label>';

                return $return;
            };
        }



        return parent::radioList($items, $options);
    }

}