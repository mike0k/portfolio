  
        <!-- start skills -->
        <div id="skills" class="section group">
          <div class="col6-6">
            <h2>Skills</h2>
            <div class="skills">
            <div class="skillsLeft">
            <!--languages-->
            <?php
			function buildTableConts($conts,$title){
				$table='
				<table>
					<tr>
						<td>'.$title.'</td>
						<td>Level</td>
					</tr>
				';
            	foreach($conts as $row){
					$cell=explode('|',$row);
					if(intval($cell[1])>3){
						$bold=' class="expert"';
					}else{
						$bold='';
					}
					$table.='
					<tr'.$bold.'>
						<td>'.$cell[0].'</td>
						<td><div class="stars s'.$cell[1].'"></div></td>
					</tr>
					';
				}
				$table.='</table>';
				return $table;
            }
			$langs=array(
				'AJAX|4',
				'CSS|5',
				'JavaScript|4',
				'MySQL|5',
				'Python|3',
				'PHP|5',
				'SSH|3',
				'(X)HTML(5)|5',
				'XML|4'
			);
			echo buildTableConts($langs,'Language');
            
			echo'
			  </div>
              <div class="skillsRight">
              <!--software/other-->
			';
			
			$software=array(
				'cPanel &amp; Plesk|4',
				'Cubecart CMS|5',
				'Concrete5 CMS|4',
				'Domain Management|5',
				'Flash|2',
				'GIT Version Control|4',
				'Photoshop|4',
				'Wordpress CMS|3',
				'Yii Framework|5'
			);
			echo buildTableConts($software,'Software/Other');
			?>
              </div>
            </div>
            <div class="clear"></div>
            <h2>Qualifications</h2>
            <div class="quali">
              <table>
                <tr>
                  <th>Year</th>
                  <th>Qualification</th>
                  <th>Institute</th>
                </tr>
                <tr class="expert">
                  <td>2005-2009</td>
                  <td>BSc Honours Degree: Web Design &amp; Development</td>
                  <td>Abertay University</td>
                </tr>
                <tr>
                  <td>2006-2007</td>
                  <td>Cisco Networking CCNA1</td>
                  <td>Abertay University</td>
                </tr>
                <tr>
                  <td>2004-2005</td>
                  <td>HNC Multimedia: Web Design &amp; Development</td>
                  <td>Falkirk College</td>
                </tr>
                <tr>
                  <td>2003-2004</td>
                  <td>HNC Computer Programming</td>
                  <td>Falkirk College</td>
                </tr>
              </table>
            </div>
            <hr class="hidden" />
          </div>
        </div>
        <!-- end skills --> 
