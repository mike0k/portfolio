<?php

namespace site\models;

use Yii;
use yii\base\Model;

class ModelSkills extends Model {

    public function getLanguage () {
        return [
            'Bootstap' => 5,
            'CSS / SASS' => 5,
            'HTML' => 5,
            'jQuery' => 5,
            'MySQL' => 5,
            'MVC' => 5,
            'PHP' => 5,
            'Yii' => 5,

            'API' => 4,
            'HTAccess' => 4,
            'JS / ES6' => 4,
            'Wordpress' => 4,
            'XML' => 4,

            'CubeCart' => 3,
            'Concrete5' => 3,
            'Python' => 3,
            'React' => 3,
            'SSH' => 3,

            'Magento' => 2,

            'Java' => 1,
        ];
    }

    public function getSoftware () {
        return [
            'cPanel &amp; WHM' => 5,
            'Composer' => 5,
            'Cron Management' => 5,
            'Domain Management' => 5,
            'Gulp' => 5,
            'SEO' => 5,

            'Apache' => 4,
            'CloudFlare' => 4,
            'GIT' => 4,
            'Google Adwords' => 4,
            'Google Analytics' => 4,
            'Photoshop' => 4,
            'Web Scraping' => 4,

            'Bower' => 3,
            'Facebook PPC' => 3,
            'Google Display Network' => 3,
            'Illustrator' => 3,
            'Social Media Management' => 3,
            'YouTube PPC' => 3,

            'Android SDK' => 2,
            'LinkedIn PPC' => 2,
            'NodeJS' => 2,
        ];
    }

    public function getTableData ($selection) {
        $data = array();
        switch ($selection) {
            case 'language':
                $data = $this->language;
                break;
            case 'software':
                $data = $this->software;
                break;
        }

        return $data;
    }

    public function getTable ($title, $selection) {
        $data = $this->getTableData($selection);
        $html = '
        <div class="table-responsive">
		<table class="table table-condensed">
			<tr>
				<th>' . $title . '</th>
				<th class="hidden-xxs">Level</th>
			</tr>
		';
        foreach ($data as $name => $rating) {
            $bold = '';
            if ($rating > 3) {
                $bold = ' class="bold"';
            }
            $html .= '
			<tr' . $bold . '>
				<td>' . $name . '<div class="stars s' . $rating . ' visible-xxs"></div></td>
				<td class="hidden-xxs"><div class="stars s' . $rating . '"></div></td>
			</tr>
			';
        }
        $html .= '</table></div>';

        return $html;
    }
}