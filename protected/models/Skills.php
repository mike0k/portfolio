<?php
class Skills extends CFormModel {

	public $language=array(
		'AJAX'=>4,
		'CSS'=>5,
		'JavaScript'=>4,
		'MySQL'=>5,
		'Python'=>3,
		'PHP'=>5,
		'SSH'=>3,
		'(X)HTML(5)'=>5,
		'XML'=>4,
	);
	
	public $software=array(
		'cPanel &amp; Plesk'=>4,
		'Cubecart CMS'=>5,
		'Concrete5 CMS'=>4,
		'Domain Management'=>5,
		'Flash'=>2,
		'GIT Version Control'=>4,
		'Photoshop'=>4,
		'Wordpress CMS'=>3,
		'Yii Framework'=>5,
	);
	
	public function getData($selection){
		$data = array();
		switch($selection){
			case 'language':
				$data = $this->language;
				break;
			case 'software':
				$data = $this->software;
				break;
		}
		return $data;
	}
	
	public function buildTable($title,$selection){
		$data = $this->getData($selection);
		$html='
		<table>
			<tr>
				<td>'.$title.'</td>
				<td>Level</td>
			</tr>
		';
		foreach($data as $name=>$rating){
			$bold='';
			if($rating>3){
				$bold=' class="expert"';
			}
			$html.='
			<tr'.$bold.'>
				<td>'.$name.'</td>
				<td><div class="stars s'.$rating.'"></div></td>
			</tr>
			';
		}
		$html.='</table>';
		return $html;
	}
}