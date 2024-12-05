	<div class="contactForground">
		<div class="contactContent"> 
			<div class="contactLeft">
				<p>
					I'm currently available for freelance work. I'm based in Falkirk but am happy to work with clients anywhere in Central Scotland
					<br /><br />
					Please use this form to contact me and I will get back to you as soon as possible.
				</p>
			</div>
			<div class="contactRight">
				<form method="POST" action="index.php?page=formprocessor">
					<p>
						<label for="name" class="formLabel">Name :</label><br />
						<input id="name" class="formInput" type="text" name="name"></input>
					</p>
					<p>
						<label for="email" class="formLabel">Email :</label><br />
						<input id="email" class="formInput" type="text" name="email"></input>
					</p>
					<p>
						<label for="subject" class="formLabel">Subject :</label><br />
						<input id="subject" class="formInput" type="text" name="subject"></input>
					</p>
					<p>
						<label for="message" class="formLabel">Message :</label><br />
						<textarea id="message" class="formTextarea" rows="7" cols="32" name="message"></textarea>
					</p>
					<p>
						<input class="formButton" type="submit" name="send" value="Send"></input>
						<input class="formButton" type="reset" name="reset" value="Clear"></input>
					</p>
				</form>
			</div>
		</div>
