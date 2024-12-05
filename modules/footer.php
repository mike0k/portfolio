<!-- start footer -->
<div id="footer">
  <h5>Copyright &copy; 2011 Michael Kirkbright</h5>
  <p>Hosted with <a href="http://www.animitemedia.com/">Animite Media</a>.</p>
  <div class="valid">
  <a target="_blank" href="http://jigsaw.w3.org/css-validator/validator?uri=http://www.michaelkirkbright.co.uk&amp;profile=css3&amp;usermedium=all&warning=1&amp;vextwarning=&amp;lang=en">
    <img src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS3" height="21" width="60" />
  </a>
  <a target="_blank" href="http://validator.w3.org/check?uri=http%3A%2F%2Fwww.michaelkirkbright.co.uk%2F">
  	<img src="images/w3c-valid-html5.png" alt="Valid HTML 5" height="21" width="60" />
  </a>
  </div>
  <div class="bitsandbobs">
    <h5>Modules</h5>
    <p>The plugin's and API's used on this site include:</p>
    <ul class="group">
      <li><a href="http://chrysbader.com/facebook-like-auto-growing-textarea/" target="_blank">Auto Grow</a>,</li>
      <li><a href="http://medienfreunde.com/lab/innerfade/" target="_blank">Inner Fade</a>,</li>
      <li><a href="http://sorgalla.com/projects/jcarousel/" target="_blank">jCarousel</a>,</li>
      <li><a href="http://leandrovieira.com/projects/jquery/lightbox/" target="_blank">Lightbox</a>,</li>
      <li><a href="http://code.google.com/apis/gears/api_geolocation.html" target="_blank">Geolocation</a>,</li>
      <li><a href="http://code.google.com/apis/maps/documentation/distancematrix/" target="_blank">Distance Matrix</a></li>
      <li> and <a href="http://code.google.com/apis/analytics/docs/gdata/gdataDeveloperGuide.html" target="_blank">Analytics Data Export</a></li>
    </ul>
  </div>
  <div class="browserScrape">
  	
    <?php
		$data = file_get_contents('http://en.wikipedia.org/wiki/Usage_share_of_web_browsers');
		$newlines = array("\t","\n","\r","\x20\x20","\0","\x0B");
		$content = str_replace($newlines, "", html_entity_decode($data));
		$lastmonth=date('F Y',strtotime('-2 month'));
		$regex = '/'.$lastmonth.'<\/a><\/th>(.+?)<\/tr>/i';
		preg_match($regex,$content,$row);
		preg_match_all("|(.*)%|U",$row[1],$nums);
		echo'
		<h5>Browser Usage - '.$lastmonth.'</h5>
		<table>
			<tr>
				<td><img src="/images/chrome.png" alt="Chrome" /></td>
				<td><img src="/images/firefox.png" alt="Firefox" /></td>
				<td><img src="/images/ie.png" alt="Internet Explorer" /></td>
				<td><img src="/images/safari.png" alt="Safari" /></td>
				<td></td>
			</tr>
			<tr class="browserScrapeTableBor">
				<td>'.round(strip_tags($nums[1][2]),1).'%</td>
				<td>'.round(strip_tags($nums[1][1]),1).'%</td>
				<td>'.round(strip_tags($nums[1][0]),1).'%</td>
				<td>'.round(strip_tags($nums[1][3]),1).'%</td>
				<th>World </th>
			</tr>
			<tr>
		';
		define('ga_email','michael.kirkbright@gmail.com');
		define('ga_password','leedsunited2611');
		define('ga_profile_id','34397174');
		
		require 'gapi/gapi.class.php';
		
		$ga = new gapi(ga_email,ga_password);
		
		$start_date = date('Y-m-d', strtotime('-6 month'));
		$end_date = date('Y-m-d', strtotime('-1 month'));
		$dimensions = array('browser');
		$metrics    = array('visits');
		$sort_metric='browser';
		$filter=null;
		$start_index=1;
		$max_results=5;
		
		$ga->requestReportData(ga_profile_id,$dimensions,$metrics,$sort_metric,$filter,$start_date,$end_date,$start_index,$max_results);
		foreach($ga->getResults() as $result){
			echo '<td>'.round(($result->getVisits()/$ga->getVisits())*100,1).'%</td>';
		}
		echo'
			<th>Here</th>
			</tr>
		</table>
		';
	?>
    <p>
    	Scraped from <a href="http://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Historical_usage_share" target="_blank">Wikipedia</a> and <a href="https://www.google.com/analytics/">Google Analytics</a>
    </p>
  </div>
</div>
<!-- end footer -->