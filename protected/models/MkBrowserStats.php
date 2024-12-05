<?php class MkBrowserStats extends CActiveRecord{

	public static function model($className=__CLASS__){
		return parent::model($className);
	}

	public function tableName(){
		return 'mk_browser_stats';
	}

	public function rules(){
		return array(
			array('chrome, firefox, ie, safari, updated, created', 'numerical', 'integerOnly'=>true),
			array('version', 'length', 'max'=>255),
			array('id, version, chrome, firefox, ie, safari, updated, created', 'safe', 'on'=>'search'),
		);
	}

	public function relations(){
		return array(
		);
	}

	public function attributeLabels(){
		return array(
			'id' => 'ID',
			'version' => 'Version',
			'chrome' => 'Chrome',
			'firefox' => 'Firefox',
			'ie' => 'Ie',
			'safari' => 'Safari',
			'updated' => 'Updated',
			'created' => 'Created',
		);
	}

	public function search(){
		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('version',$this->version);
		$criteria->compare('chrome',$this->chrome);
		$criteria->compare('firefox',$this->firefox);
		$criteria->compare('ie',$this->ie);
		$criteria->compare('safari',$this->safari);
		$criteria->compare('updated',$this->updated);
		$criteria->compare('created',$this->created);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
	
	public function getLatest($version=null){
		$criteria=new CDbCriteria;
		if(!empty($version)){
			$criteria->compare('version',$version);
		}else{
			$criteria->compare('version',$this->version);
		}
		$criteria->order = 'updated DESC';
		$criteria->limit = 1;
		return $this->find($criteria);
	}
}