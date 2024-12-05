$(function(){

	var $nav   = $("#nav"),
        $window    = $(window),
        offset     = $nav.offset();
	
	function setNavPosition(){
		if($window.scrollTop() > offset.top){
            $nav.addClass('fixed');
        }else{
            $nav.removeClass('fixed');
        }
	}
	
	setNavPosition()
    $window.scroll(function() {
        setNavPosition()
    });
	
	$('#nav a').click(function(event){
		event.preventDefault();
		$('html,body').stop();
		var id = $(this).attr('href');
		var tag = $(id);
		$('html,body').animate({scrollTop: tag.offset().top},2000,'easeOutQuart');
	});
	
	$('#caseStudiesSlider').slides({
		container: 'sliderBox',
		paginationClass: 'caseStudiesNav',
		generatePagination: true,
		play: 5000,
		pause: 2500,
		hoverPause: true,
		effect: 'fade',
		crossfade: true,
		fadeEasing: "easeOutQuad",
		fadeSpeed: 1000,
		randomize: true,
	});
	/*$('ul#caseStudiesImg').innerfade({ 
		speed: 1500,
		timeout: 7000,
		type: 'sequence',
		containerheight: 	'130px',
		slide_timer_on: 	'yes',
		slide_ui_parent: 	'caseStudiesImg',
		slide_ui_text:		'caseStudiesText',
		pause_button_id: 	'null',
		slide_nav_id:		'caseStudiesNav'
	});*/
	
});