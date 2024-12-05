<?php
  if(isset($_GET['page']))
  {
    echo'<ul id="menu">';
    if($_GET['page']=='home')
    {
      echo'
      <li><a id="homeCurrent"></a></li>
      <li><a id="portfolio" href="index.php?page=portfolio" title="Portfolio"></a></li>
			<li><a id="about" href="index.php?page=about" title="Infomation"></a></li>
			<li><a id="contact" href="index.php?page=contact" title="Contact"></a></li>
      ';
    }
    else if($_GET['page']=='portfolio')
    {
      if(isset($_GET['id']))
      {
        echo'
        <li><a id="home" href="index.php?page=home" title="home"></a></li>
        <li><a id="portfolio" href="index.php?page=portfolio" title="Portfolio"></a></li>
        <li><a id="about" href="index.php?page=about" title="Infomation"></a></li>
        <li><a id="contact" href="index.php?page=contact" title="Contact"></a></li>
        ';
      }
      else
      {
        echo'
        <li><a id="home" href="index.php?page=home" title="home"></a></li>
        <li><a id="portfolioCurrent"></a></li>
        <li><a id="about" href="index.php?page=about" title="Infomation"></a></li>
        <li><a id="contact" href="index.php?page=contact" title="Contact"></a></li>
        ';
      }
    }
    else if($_GET['page']=='about')
    {
      echo'
      <li><a id="home" href="index.php?page=home" title="home"></a></li>
      <li><a id="portfolio" href="index.php?page=portfolio" title="Portfolio"></a></li>
      <li><a id="aboutCurrent"></a></li>
      <li><a id="contact" href="index.php?page=contact" title="Contact"></a></li>
      ';
    }
    else if($_GET['page']=='contact')
    {
      echo'
      <li><a id="home" href="index.php?page=home" title="home"></a></li>
      <li><a id="portfolio" href="index.php?page=portfolio" title="Portfolio"></a></li>
      <li><a id="about" href="index.php?page=about" title="Infomation"></a></li>
      <li><a id="contactCurrent"></a></li>
      ';
    }
    echo'</ul>';
  }
?>