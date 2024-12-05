<div id="footer">
	<div class="span6 colAlt min200">
		<h1 class="logoMini">michaelkirkbright</h1>
		<h5>Copyright &copy; <?php echo date('Y'); ?> Michael Kirkbright</h5>
		<p>Hosted with <a href="http://www.animitemedia.com/">Animite Media</a>.</p>
		<div class="valid">
			<?php 
				echo CHtml::link(
					CHtml::image(
						'http://jigsaw.w3.org/css-validator/images/vcss-blue',
						'Valid CSS3',
						array(
						'height'=>21,
						'width'=>60,
						)
					),
					'http://jigsaw.w3.org/css-validator/validator?uri=http://www.michaelkirkbright.co.uk&amp;profile=css3&amp;usermedium=all&amp;warning=1&amp;vextwarning=&amp;lang=en',
					array(
						'target'=>'_blank',
					)
				); 
			?>
			<?php 
				echo CHtml::link(
					CHtml::image(
						Yii::app()->baseUrl.'/images/w3c-valid-html5.png',
						'Valid HTML 5',
						array(
						'height'=>21,
						'width'=>60,
						)
					),
					'http://validator.w3.org/check?uri=http://www.michaelkirkbright.co.uk',
					array(
						'target'=>'_blank',
					)
				); 
			?>
		</div>
	</div>
	<div class="span6 col min200">
		<h5>Modules</h5>
		<p>
			The plugin's and API's used on this site include:
			<a href="http://www.slidesjs.com/" target="_blank">SlideJs</a>, 
			<a href="http://code.google.com/apis/gears/api_geolocation.html" target="_blank">Geolocation</a>, 
			<a href="http://code.google.com/apis/maps/documentation/distancematrix/" target="_blank">Distance Matrix</a> and 
			<a href="http://code.google.com/apis/analytics/docs/gdata/gdataDeveloperGuide.html" target="_blank">Analytics Data Export</a></li>
		</ul>
	</div>
	<div class="span4 col browserScrape min200">
		<h5>Browser Usage - <?php echo date('M Y',strtotime('-2 month')); ?>.</h5>
		<table>
			<tr>
				<td><?php echo CHtml::image(Yii::app()->baseUrl.'/images/chrome.png', 'Chrome'); ?></td>
				<td><?php echo CHtml::image(Yii::app()->baseUrl.'/images/firefox.png', 'Firefox'); ?></td>
				<td><?php echo CHtml::image(Yii::app()->baseUrl.'/images/ie.png', 'Internet Explorer'); ?></td>
				<td><?php echo CHtml::image(Yii::app()->baseUrl.'/images/safari.png', 'Safari'); ?></td>
				<td></td>
			</tr>
			<tr class="browserScrapeTableBor">
				<?php
				$wikiData = MkBrowserStats::Model()->getLatest('wikipedia');
				if(!empty($wikiData)){
					echo'<td>'.$wikiData->chrome.'%</td>';
					echo'<td>'.$wikiData->firefox.'%</td>';
					echo'<td>'.$wikiData->ie.'%</td>';
					echo'<td>'.$wikiData->safari.'%</td>';
				}
				?>
				<th>World </th>
			</tr>
			<tr>
				<?php 
				$googleData = MkBrowserStats::Model()->getLatest('analytics');
				if(!empty($googleData)){
					echo'<td>'.$googleData->chrome.'%</td>';
					echo'<td>'.$googleData->firefox.'%</td>';
					echo'<td>'.$googleData->ie.'%</td>';
					echo'<td>'.$googleData->safari.'%</td>';
				}
				?>
				<th>Here</th>
			</tr>
		</table>
		<p>
			Scraped from <a href="http://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Historical_usage_share" target="_blank">Wikipedia</a> and <a href="https://www.google.com/analytics/">Google Analytics</a>
		</p>
	</div>
	<div class="clear"></div>
</div>