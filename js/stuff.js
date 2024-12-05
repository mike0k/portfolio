$(function() {
	
	//hide js warning if js works
	$('#javaoff').css('display','none');
	
	//ie update warning
	if($.browser.msie && ($.browser.version=="6.0" || $.browser.version=="7.0" || $.browser.version=="8.0")){
		$('#browseupdate').css('display','none');
	}
	
	$('a').attr('tabindex', '6');
	
	
	//canvas gadient
	var canvas = document.getElementsByTagName('canvas')[0],
    ctx = null,
    grad = null,
    body = document.getElementsByTagName('body')[0],
    color = 255;
   
	if (canvas.getContext('2d')) {
	  ctx = canvas.getContext('2d');
	  ctx.clearRect(0, 0, 600, 600);
	  ctx.save();
	  // Create radial gradient
	  grad = ctx.createRadialGradient(0,0,0,0,0,600); 
	  grad.addColorStop(0, '#F7F6F4');
	  grad.addColorStop(1, '#c7c6c4');
	
	  // assign gradients to fill
	  ctx.fillStyle = grad;
	
	  // draw 600x600 fill
	  ctx.fillRect(0,0,600,600);
	  ctx.save();
	  
	  body.onmousemove = function (event) {
		var width = window.innerWidth, 
			height = window.innerHeight, 
			x = event.clientX, 
			y = event.clientY,
			rx = 600 * x / width,
			ry = 600 * y / height;
			
		var xc = ~~(256 * x / width);
		var yc = ~~(256 * y / height);
	
		grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, 600); 
		grad.addColorStop(0, '#F7F6F4');
		grad.addColorStop(1, '#c7c6c4');
		// ctx.restore();
		ctx.fillStyle = grad;
		ctx.fillRect(0,0,600,600);
		// ctx.save();
	  };
	}
	
	
	
	
	
	//google map distance
	function success(position) {
	var userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var service = new google.maps.DistanceMatrixService();
	//var myLoc = new google.maps.LatLng(51.5001524,-0.1262362);
	var myLoc = new google.maps.LatLng(55.9412359, -3.2234230000000252);
	service.getDistanceMatrix(
	  {
		origins: [userLoc],
		destinations: [myLoc],
		travelMode: google.maps.TravelMode.WALKING
	  }, callback);

 

}
function callback(response, status) {
  if (status == google.maps.DistanceMatrixStatus.OK) {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;
    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distanceM = element.distance.value;
		var distanceKM = element.distance.text;
		var distanceMI = Math.round(element.distance.value*0.000621371192);
		if(distanceMI<1){
			distanceMI=distanceM+' Meters';
	  	}else{
			distanceMI=distanceMI+' Miles';
		}
        var duration = element.duration.text;
        var from = origins[i] ;
        var to = destinations[j];
		$('#geoDist').html('<h4>Did you know</h4><p id="userDist">You are approximately '+distanceMI+' away from my neighbouthood and it would take you '+duration+' to walk there.</p><p id="userAddress">Your Location: '+from+'<br />Stats from <a href="http://www.google.com/maps" target="_blank">Google Maps</a></p>');
		$('#geoDist').fadeIn(3000);
		$.ajax({
		  url: "/modules/distanceSession.php",
		  type: "POST",
		  data: 'session=set&dist='+distanceMI+'&dur='+duration+'&addr='+from,
		  success: function(msg){}
		});
      }
    }
  }
}
var geoDist='';
$.ajax({
	  url: "/modules/distanceSession.php",
	  type: "POST",
	  data: 'session=check',
	  success: function(msg){
	  if (msg!='') {
		  $('#geoDist').html(msg);
		  $('#geoDist').show();
	  }else if(navigator.geolocation){
		  navigator.geolocation.getCurrentPosition(success);
	  }
  }
});

	




    var top = $('#nav').offset().top - parseFloat($('#nav').css('marginTop').replace(/auto/, 0));

    

    $('.btt').hide();

    

    $('textarea').each(function() {

        $(this)

            .data('default', 'this box will expand as you type')

            .css({

                height: '114px',

                'min-height': '114px'

            });

        if($(this).val() == '' || $(this).val() == $(this).data('default')) {

            $(this)

                .data('default', 'this box will expand as you type')

                .val($(this).data('default'))

                .addClass('inactive');

        }

        $(this)

            .focus(function() {

                if($(this).val() == $(this).data('default')) $(this).val('').removeClass('inactive');

            })

            .blur(function() {

                if($(this).val() == '') $(this).val($(this).data('default')).addClass('inactive');

            })

            .autogrow();

    });

    

    $(window).scroll(function() {

        ($(this).scrollTop() >= top) ? $('#nav ul').addClass('fixed') : $('#nav ul').removeClass('fixed');

    });

    

    $('#nav a, .availability a').click(function() {

        var target = $(this.hash);

        

        if(target.length) {

            var targetOffset = target.offset().top;

            $('html, body').animate({scrollTop: targetOffset}, {'duration': 800, 'transition': 'swing'});

            return false;

        }

    });

   /* 

    $('form').submit(function() {

        var passed = true;

        var pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // http://www.dustindiaz.com/update-your-email-regexp/

    

        $('.required').each(function(i) {

            var errorFlag = false;

            var emailErrorFlag = false;

            if ($(this).val() == '') {

                errorFlag = true;

                passed = false;

            } 

            else if($(this).is('textarea')) {

                if($(this).val() == $(this).data('default')) {

                    errorFlag = true;

                    passed = false;

                }

            }

            else if ($(this).hasClass('email')) {

                if (pattern.test($(this).val()) == false) {

                    errorFlag = true;

                    emailErrorFlag = true;

                    passed = false;

                }

            }

            if($(this).is('input')) {

                $(this).blur(function() {

                    if($(this).val() != '') $(this).closest('p').removeClass('error');

                });

            }

            if($(this).is('textarea')) {

                $(this).blur(function() {

                    if($(this).val() != '' && $(this).val() != $(this).data('default')) $(this).closest('p').removeClass('error');

                });

            }

            

            if (errorFlag == true) {

                $(this).closest('p').addClass('error');

            } 

            else {

                $(this).closest('p').removeClass('error');

            }

        });

    

        if(passed) {

            alert($(this).attr('action'));

            $('button').attr('disabled', 'disabled');

			alert('1');

            formData = $(this).serialize();

			alert($(this).serialize());

            $.ajax({

                type: 'POST',

                url: $(this).attr('action'),

                data: formData+'&ajax=true',

                dataType: 'json',

                success: function(response) {

                    if(response.sent)

                        $('button+span').remove();

                        $('button')

                        .after('<span>Thanks, I\'ll be in touch soon.</span>')

                            .next('span')

                            .hide()

                            .fadeIn(1000);

                }

            })

            return false;

        }

        else {

            $('button+span').remove();

            $('button')

                .after('<span class="error">Oops, you need to fill in all of these fields.</span>')

                    .next('span')

                    .hide()

                    .fadeIn('slow');

            return false;

        }

    });

    */

});


