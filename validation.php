<?php

	//--------------------------------------Validation functions--------------------------------------

	function check_text($text){

	  if(!preg_match("/^[a-zA-Z\ ]+$/",$text))

	  return TRUE;

	  else

	  return FALSE;

	}

	

	function check_textNum($textNum){

	  if(!preg_match("/^[a-zA-Z0-9\ ]+$/",$textNum))

	  return TRUE;

	  else

	  return FALSE;

	}

	

	function check_eAddress($eAddress){

	  if(!preg_match("/^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/",$eAddress))

	  return TRUE;

	  else

	  return FALSE;

	}

	

	for ($i=0; $i<=3; $i++){$error[$i]=null;}

	

	if(isset($_POST['name']) && !check_text($_POST['name']) && $_POST['name']!=''){$name=$_POST['name'];}

	elseif(isset($_POST['name'])){$error[0]='name'; $name=$_POST['name'];}

	else{$error[0]='name'; $name='';}

	

	if(isset($_POST['replyemail']) && !check_eAddress($_POST['replyemail']) && $_POST['name']!=''){$replyemail=$_POST['replyemail'];}

	elseif(isset($_POST['replyemail'])){$error[1]='replyemail'; $replyemail=$_POST['replyemail'];}

	else{$error[1]='replyemail'; $replyemail='';}

		

	if(isset($_POST['message']) && $_POST['message']!='' && $_POST['message']!='this box will expand as you type'){$messagePost=$_POST['message'];}

	elseif(isset($_POST['message'])){$error[2]='message'; $messagePost=$_POST['message'];}

	else{$error[2]='message'; $messagePost='this box will expand as you type';}

	

	//check to make sure of no errors

	$send=0;

	for ($i=0; $i<=3; $i++){if($error[$i]!=null){$send=$send+1;}}

	

	if($send==0){

		$to='michael.kirkbright@gmail.com';

		$subject = "Email from Portfolio";

		$message ='Name: '.$name.'<br />'.

		'Email: '.$replyemail.'<br />'.

		'Message:<br />'.$messagePost;

		$headers = "MIME-Version: 1.0" . "\r\n";

		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n".

		"From: ".$replyemail."\r\n" .

		"Reply-To:".$replyemail."\r\n";

		mail($to,$subject,$message,$headers);

		

		$name='';

		$replyemail='';

		$messagePost='';

	}

?>