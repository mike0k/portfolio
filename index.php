<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Michael Kirkbright: Web Design Portfolio</title>
	<meta name="description" content="Degree qualified Web design & development based in Dundee, Scotland">
	<meta name="keywords" content="web, design, development, website, cheap, dundee, scotland, quote, designer">
	<meta http-equiv="Content-Type" content="text/html; charset=us-ascii"/>
	<link rel="stylesheet" type="text/css" href="design.css" />
</head>
	
	

<body>
<script type="text/javascript"><!--
google_ad_client = "pub-3602852462621602";
/* 728x90, created 1/6/09 */
google_ad_slot = "7007919419";
google_ad_width = 728;
google_ad_height = 90;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
<div class="wrap">
	<div class="top">
		<div class="logo">
		</div>
		<div class="menu">
			<?php include( 'inc/menu.php' ); ?>
		</div>
	</div>
	<?php
    if(isset($_GET['page']))
    {
      include( 'inc/'.$_GET['page'].'.php' );
    }
    else
    {
      header("location:index.php?page=home");
    }
  ?>
	
	</div>
</div>

<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-6903550-1");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
	
	
</html>
