(function($) { $.fn.divgrow = function(options) { var defaults = { initialHeight: 100, moreText: "+ Show More", lessText: "- Show Less" }; var options = $.extend(defaults, options); return this.each(function() { obj = $(this); obj.css('height', options.initialHeight).css('overflow', 'hidden'); obj.after('<p class="continued">Click the expand button to view this text</p><a href="#" class="adjust"></a>'); $("a.adjust").text(options.moreText); $(".adjust").toggle(function() { var height = $(this).prevAll("div:first").attr('rel'); $(this).prevAll("div:first").animate({ height: height }, 750, function() { $(this).nextAll("p.continued:first").fadeOut(); $(this).nextAll("a.adjust:first").text(options.lessText) }) }, function() { $(this).prevAll("div:first").animate({ height: options.initialHeight }, 750, function() { $(this).nextAll("p.continued:first").fadeIn(); $(this).nextAll("a.adjust:first").text(options.moreText) }) }) }) } })(jQuery);

$('div.expander').divgrow({ 
		initialHeight: 0, 
		moreText: "Expand Text", 
		lessText: "Collapse Text" 
	});