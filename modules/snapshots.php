        
        <!-- start snapshot -->
        <div id="snapshot2" class="section group">
          <div class="col6-6">
            <div class="col6-2 g12r">
              <h2>Snapshots</h2>
	          <p>All of the projects here were constructed by my colleges and I as a team however these are a selection of projects where I have played a large part in the development, functionality, and project management.</p>
            </div>
            <div class="col6-4">
            <ul id="mycarousel" class="lightbox jcarousel-skin-tango">
            <?php			
				$xmlstr = simplexml_load_file('teamwork.xml');
				//$imgInfoXml = new SimpleXMLElement($xmlstr);
				$teamImg = array();
				$name = array();
				$description = array();
				$directory='images/port/resized/';
				$handler = opendir($directory);
				while ($file = readdir($handler)) {
					if ($file != "." && $file != "..") {
						if (!isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) && (strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) != filemtime('/home/michaelk/public_html/images/port/resized/'.$file))) {
					  		$teamImg[] = $file;
							foreach($xmlstr as $site){
								if($site['filename']==$file){
									$name[]=$site->name;
									$description[]=$site->description;
								}
					  		}
						}
				  	}
				}
				closedir($handler);
				$li=1;
				$tr=1;
				$end=0;
				for($i=0; $i<count($teamImg); $i++){
					$title=preg_replace('/.jpg/i', '', $teamImg[$i]); 
					$title=preg_replace('/_/i', ' ', $title); 
					
					if($i+1==count($teamImg)){
						$end=1;
					}
					
					if($li==1){
					echo '<li><table>';	
					}
					if($tr==1){
						echo'<tr>';
					}
					
					echo'
					<td>
						<div class="framediv">
						<div class="imgdiv">
						<a href="resize_image.php?image='.$teamImg[$i].'&amp;new_width=600" title="Click to Enlarge"><img src="resize_image.php?image='.$teamImg[$i].'&amp;new_width=120&amp;new_height=120" alt="Snapshots" /></a>
						</div>
						</div>
					</td>
					';
					
					if($tr==3|| $end==1){
						echo'</tr>';
						$tr=1;
					}else{
						$tr++;
					}
					
					if($li==9 || $end==1){
						echo'</table></li>';
						$li=1;
					}else{
						$li++;
					}
				}
			?>
            </ul>
            </div>
            <hr class="hidden" />
          </div>
        </div>
        <!-- end snapshot --> 
