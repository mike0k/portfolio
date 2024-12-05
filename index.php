<?php session_start();?>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Michael Kirkbright ::  Web Developer and Designer :: Portfolio</title>
<meta name="author" content="Michael Kirkbright" />
<meta name="keywords" content="michaelkirkbright, Michael Kirkbright, Kirkbright, web developer, web, developer, web development, online, client side development, front end development, quality, css, xhtml, freelance web developer, freelance, freelancing, freelance xhtml, freelance html, web standards" />
<meta name="description" content="Michael Kirkbright, an information architect and front-end web developer with a passion for exceptional quality right down to the tiniest detail." />
<meta name="robots" content="noindex, nofollow" />
<link rel="stylesheet" type="text/css" media="screen, projection" href="design.css" />
<link rel="stylesheet" type="text/css" href="/skins/tango/skin.css" />
<link rel="icon" href="images/favicon.ico" type="image/x-icon" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.innerfade.js"></script>
<script type="text/javascript" src="js/jquery.autogrow.js"></script>
<script type="text/javascript" src="js/jquery.lightbox.js"></script>
<script type="text/javascript" src="js/jquery.jcarousel.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="js/stuff.js"></script>

</head>
<body>
<canvas height="600" width="600"></canvas>
<!--<div id="browseupdate">
	<p>You are running an old version of Internet Explorer that doesn't support certain elements on this site, click here to <a href="http://windows.microsoft.com/en-GB/internet-explorer/products/ie/home"  target="_blank">update your browser</a></p>
</div>
<div id="javaoff">
	<p>Your browser is not currently running JavaScript. Some features will not fuction correctly and will hide content.</p>
</div>-->
<div class="borderSite" id="left" style="display:block;"></div>
<div class="borderSite" id="right" style="display:block;"></div>
<div class="borderSite" id="top" style="display:block;"></div>
<div class="borderSite" id="bottom" style="display:block;"></div>
<div id="container_top">
<div id="container_outer">
  <div id="container">
    <div id="container_inner" class="group"> 
      
      <?php include 'modules/header.php'; ?>
      
      <?php include 'modules/nav.php'; ?>
      
      <?php include 'modules/mainText.php'; ?>
      
      <?php include 'modules/skills.php'; ?>
      
      <?php include 'modules/caseStudies.php'; ?>
      
	  <?php //include 'modules/snapshots.php'; ?>
      
      <?php include 'modules/contact.php'; ?>
      
    </div>
    <!-- end container_inner --> 
  </div>
  <!-- end container --> 
</div>
<!-- end container_outer --> 

<?php include 'modules/footer.php'; ?>
    </div></div>
<!-- Analytics Tracker --> 
<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-6903550-5']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
</body>
</html>