
        <!-- start get in touch -->
        <?php 
			if(isset($_POST['replyemail'])){
				include 'validation.php';
			}else{
				$name=null;
			}
		?>
        <div id="getintouch" class="section group">
          <div class="col6-2 g12r">
            <h3 class="col6-2">Get in Touch</h3>
          </div>
          <div class="col6-4 g12r">
            <p>If you need a new website or would like your existing site to be redesigned, just give me a shout &mdash; I'd love to work with you. Fill in the fields below and I'll get back to you as soon as possible.<?php /*?><br/>
              <br/>
              Alternatively, drop me a line at <a href="mailto:info@animitemedia.com.com">info@animitemedia.com</a><?php */?></p>
            <form name="git" id="gitForm" method="post" action="index.php#getintouch">
              <fieldset>
                <legend>Send me an email</legend>
                <p <?php if(!empty($error[0]) && $error[0]!=null){echo'class="error"';} ?>>
                  <label for="git_name">Name: <em>Required</em></label>
                  <br/>
                  <input tabindex="1" type="text" name="name" id="git_name" class="required" <?php if(isset($name)){echo'value="'.$name.'"';} ?> />
                </p>
                <p <?php if(!empty($error[1]) && $error[1]!=null){echo'class="error"';} ?>>
                  <label for="git_email">Email: <em>Required</em></label>
                  <br/>
                  <input tabindex="2" type="text" name="replyemail" id="git_email" class="required email" <?php if(isset($replyemail)){echo'value="'.$replyemail.'"';} ?> />
                </p>
                <p <?php if(!empty($error[2]) && $error[2]!=null){echo'class="error"';} ?>>
                  <label for="git_message">Message: <em>Required</em></label>
                  <br/>
                  <textarea tabindex="3" name="message" id="git_message" rows="10" cols="50" class="required"><?php if(isset($messagePost)){echo $messagePost;} ?>
</textarea>
                </p>
				<p <?php if(!empty($error[4]) && $error[4]!=null){echo'class="error"';} ?>>
                  <label for="git_email">I Am Human: <em>Required</em></label>
                  <br/>
                  <input tabindex="2" type="checkbox" name="iamhuman" id="git_iamhuman" class="required" value="16238" />
                </p>
                <p>
					<button tabindex="4" type="submit">Send your message</button>
                  <?php if(isset($send) && $send==0){echo'<span>Thanks, I\'ll be in touch soon.</span>';}elseif(isset($send)){echo'<span class="error" style="display: block; ">Oops, you need to fill in all of these fields.</span>';} ?>
                </p>
              </fieldset>
            </form>
            <hr class="hidden" />
          </div>
        </div>
        <!-- end get in touch --> 
