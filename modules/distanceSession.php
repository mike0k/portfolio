<?php
session_start();
$msg='';
if(isset($_POST['session'])){
	if($_POST['session']=='check'){
		if(!empty($_SESSION['mkDist']) && !empty($_SESSION['mkDur']) && !empty($_SESSION['mkAddr'])){
			echo '<h4>Did you know</h4><p id="userDist">You are approximately '.$_SESSION['mkDist'].' away from my neighbouthood and it would take you '.$_SESSION['mkDur'].' to walk there.</p><p id="userAddress">Your Location: '.$_SESSION['mkAddr'].'<br />Stats from <a href="http://www.google.com/maps" target="_blank">Google Maps</a></p>';
		}
	}elseif($_POST['session']=='set'){
		$_SESSION['mkDist']=$_POST['dist'];
		$_SESSION['mkDur']=$_POST['dur'];
		$_SESSION['mkAddr']=$_POST['addr'];
	}
}
?>
