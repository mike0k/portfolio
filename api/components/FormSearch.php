<?php

namespace api\components;

use common\components\FormModel;

/**
 * Class FormSearch
 * @package api\components
 *
 * @property string $search
 * @property int    $page
 * @property int    $pageSize
 * @property int    $sort
 */
class FormSearch extends FormModel {

    public $search;
    public $page;
    public $sort;

    protected $pageSize;

    public function rules () {
        return [
            [['page', 'sort'], 'integer'],
            [['search'], 'string']
        ];
    }

    public function attributeLabels () {
        return [
            'search' => 'Search',
            'sort' => 'Sort',
        ];
    }

    public function listAttrs () {
        return [
            'search' => $this->search,
            'page' => $this->page,
        ];
    }

    public function search () {
        $this->setDefaults();
        $return = [
            'items' => [],
            'page' => $this->page,
            'pages' => 0,
            'total' => 0,
        ];

        return $return;
    }

    public function setDefaults () {
        if (empty($this->pageSize)) {
            $this->pageSize = 10;
        }

        if (empty($this->page)) {
            $this->page = 1;
        }
    }

}