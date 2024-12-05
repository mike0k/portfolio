<?php
class Scrape extends CFormModel {

	public static function getWikiBrowserUsageData(){
		$data = file_get_contents('http://en.wikipedia.org/wiki/Usage_share_of_web_browsers');
		$newlines = array("\t","\n","\r","\x20\x20","\0","\x0B");
		$content = str_replace($newlines, "", html_entity_decode($data));
		$lastmonthTxt=date('M Y',strtotime('-2 month'));
		$lastmonth=date('F Y',strtotime('-2 month'));
		$regex = '/'.$lastmonth.'<\/a><\/th>(.+?)<\/tr>/i';
		preg_match($regex,$content,$row);
		preg_match_all("|(.*)%|U",$row[1],$nums);
		
		$results = array(
			'Chrome' => round(strip_tags($nums[1][2]),1),
			'Firefox' => round(strip_tags($nums[1][1]),1),
			'Internet Explorer' => round(strip_tags($nums[1][0]),1),
			'Safari' => round(strip_tags($nums[1][3]),1),
		);
		
		return $results;
	}
	
	public static function getGoogleBrowserUsageData(){
		$gapi = new Gapi();
		
		$startDate = date('Y-m-d', strtotime('-6 month'));
		$endDate = date('Y-m-d', strtotime('-1 month'));
		$dimensions = array('browser');
		$metrics    = array('visits');
		$sort_metric='browser';
		$filter=null;
		$startIndex=1;
		$maxResults=5;
		
		$gapi->requestReportData(Yii::app()->params['googleId'],$dimensions,$metrics,$sort_metric,$filter,$startDate,$endDate,$startIndex,$maxResults);
		
		foreach($gapi->getResults() as $result){
			if($result->getBrowser()=='Chrome' || $result->getBrowser()=='Firefox' || $result->getBrowser()=='Internet Explorer' || $result->getBrowser()=='Safari'){
				$results[$result->getBrowser()] = round(($result->getVisits()/$gapi->getVisits())*100,1);
			}
		}
		
		return $results;
	}
}