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

	
	if(!empty($_POST['iamhuman']) && $_POST['iamhuman']!=16238){
		$error[3] = 'iamhuman';
	}

	//check to make sure of no errors

	$send=0;

	for ($i=0; $i<=3; $i++){if($error[$i]!=null){$send=$send+1;}}

	

	if($send==0){

		//$to='michael.kirkbright@gmail.com';

		$subject = "Email from Portfolio";

		$message ='Name: '.$name.'<br />'.

		'Email: '.$replyemail.'<br />'.

		'Message:<br />'.$messagePost;

		$headers = "MIME-Version: 1.0" . "\r\n";

		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n".

		"From: fuck@you.com\r\n" .

		"Reply-To:".$replyemail."\r\n";
		
		
		$to=$replyemail;
		$message = 'If this was a genuine email then I appologies for this but this website is hidden from search engines so you are more than likely a spammer and almost all the emails I get from this form are spam. I cold easily add in a captcha form to stop this and I will do but until then you can have your steaming piece of shit back. Its assholes like you building scripts like this that give our indusrty a bad name, shame on you! People can clearly see this is spam and so ignore it, so why bother, the only thing you do is cause more hassle for the industry you work in \r\n\r\n'.$messagePost;

		mail($to,$subject,$message,$headers);

		

		$name='';

		$replyemail='';

		$messagePost='';

	}

?>