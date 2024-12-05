<?php
  if($_POST['name']!='' && $_POST['email']!='' && $_POST['message']!='')
  {
    $to = "michael.kirkbright@gmail.com";
    $subject = "Odetro: Portfolio";
    $subject2 = "Email Conformaition - Michael Kirkbright";
    $sub=$_POST['subject'];
    $message = $_POST['message'];
    $message2 = "Thank you for your email, I will get to you as soon as i can"s;
    $tel=$_POST['name'];
    $from = $_POST['email'];
    $name = $_POST['name'];
    $headers = 'From: '.$name;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers);
    echo '
    <div class="contactForground">
      <div class="contactContent"> 
        <div class="contactLeft">
          <p>
            Thank you for your message, I will try and get back to you as soon as possible.
            <br /><br />
            You are about to be redirected to the home page.
          </p>
        </div>
      </div>
		</div>
		';
    header( 'refresh: 5; url=index.php?page=home' );
  }
  else
  {
    echo '
    <div class="contactForground">
      <div class="contactContent"> 
        <div class="contactLeft">
          <p>
            Sorry, there was a problem sending you message, please remember to fill out all the fields.
            <br /><br />
            Your are about to be redirected to the contact page
          </p>
        </div>
      </div>
		</div>
		';
    header( 'refresh: 5; url=index.php?page=contact' );
  }
?>