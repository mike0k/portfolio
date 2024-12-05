<?php	
  if(isset($_GET['id']))
  {
    include( 'inc/work/'.$_GET['id'].'.php' );
  }
  else
  {
  echo'
	<div class="portForground">
		<div class="portContent" id="portContent"> 
		<h1>Commercial</h1>
			<div class="portRow">
			  <div class="portColContainer">
				  <div class="portCol1">
					  <div class="picBack">
						  <a href="index.php?page=portfolio&id=luxurylending"><img  border="0" class="picFront" src="images/work/luxurylending.gif" /></a>
						</div>
            <p><a href="index.php?page=portfolio&id=luxurylending">Luxury Lending</a> is a financial site set up on a affiliate basis.</p>
					</div>
					<div class="portCol2">
						<div class="picBack">
							<a href="index.php?page=portfolio&id=superglass"><img  border="0" class="picFront" src="images/work/superglass.jpg" /></a>
						</div>
            <p><a href="index.php?page=portfolio&id=superglass">Superglass Insulation</a> is a major European supplier of glass insulation.</p>
					</div>
				</div>
				<div class="portCol3">
					<div class="picBack">
            <a href="index.php?page=portfolio&id=dundeecollege"><img border="0" class="picFront" src="images/work/dundeeCollege.jpg" /></a>
          </div>
					<p><a href="index.php?page=portfolio&id=dundeecollege">Dundee College</a> approached me to design the bulk of their new websites content.</p>
				</div>
			</div>
			<div class="portLine">
			</div>
			<h1>Projects</h1>
			<div class="portRow">
				<div class="portColContainer">
					<div class="portCol1">
            <div class="picBack">
              <a href="index.php?page=portfolio&id=odetro"><img border="0" class="picFront" src="images/work/odetro.jpg" /></a>
             </div>
            <p><a href="index.php?page=portfolio&id=odetro">Odetro Picture Community</a> is a picture community site which was designed to be usable for mobile devices.</p>
          </div>
					<div class="portCol2">
						<div class="picBack">
              <a href="index.php?page=portfolio&id=ppl"><img  border="0" class="picFront" src="images/work/ppl.jpg" /></a>
            </div>
						<p><a href="index.php?page=portfolio&id=ppl">PPL</a> was designed to be a light-weight social networking site aimed at the teenagers.</p>
					</div>
				</div>
				<div class="portCol3">
          <div class="picBack">
            <a href="index.php?page=portfolio&id=gauldrygallop"><img border="0" class="picFront" src="images/work/gauldrygallop.jpg" /></a>
           </div>
          <p><a href="index.php?page=portfolio&id=gauldrygallop">Gauldry Gallop</a> was a collaboration with another designer to create a site for an orienteering event</p>
        </div>
			</div>
		</div>
	';
	}
?>