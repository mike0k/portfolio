"use strict";
var siteData = $('#siteData');

//*******************************
// INIT
//*******************************
$(function () {
    //switch bootstrap hidden to jquery hide() on load
    //deferredCss();
    replaceHidden();
    initBreakpoint();
    deviceSpec();
    if (!isBreakpoint('xs')) {
        new WOW().init();
    }
    setTimeout(function(){
        $('#site-loader').fadeOut();
    }, 5000);

    $(document).on('pjax:success', function() {
        replaceHidden();
    });

    $('.toggleBtn').click(function () {
        $('.' + $(this).data('toggle')).slideToggle();
    });
});

function replaceHidden () {
    $('.hidden').hide().removeClass('hidden');
}

//*******************************
// WINDOW RESIZE
//*******************************
$(function(){
    $(window).on('resize', function(){
        initBreakpoint();
        sectionAccordion();
    });
});

function deviceSpec () {
    /*$.ajax({
     url: siteData.data('url') + '/site/deviceSpec/',
     data: 'width=' + window.screen.width + '&height=' + window.screen.height
     });*/

}

function initBreakpoint () {
    var breakPoints = ['xs', 'sm', 'md', 'lg'];
    $('.breakpoint').remove();
    $.each(breakPoints, function (key, val) {
        $('body').append('<div class="breakpoint device-' + val + ' visible-' + val + '"></div>');
    });
}

function getBreakpoint () {
    var breakPoints = ['xs', 'sm', 'md', 'lg'];
    for (var i in breakPoints) {
        if ($('.device-' + breakPoints[i]).is(':visible')) {
            return breakPoints[i];
        }
    }
}

function isBreakpoint (alias) {
    return $('.device-' + alias).is(':visible');
}


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


//////////////////////////////////////////
// NAVIGATION
//////////////////////////////////////////
$(function () {

    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        var valid = true;

        if(location.pathname.replace(/^\//,'') !== this.pathname.replace(/^\//,'') || location.hostname !== this.hostname){
            valid = false;
        }

        if(typeof $(this).data('toggle') !== 'undefined'){
            if($(this).data('toggle') === 'tab' || $(this).data('toggle') === 'collapse'){
                valid = false;
            }
        }

        if (valid) {
            var target = $(this.hash);
            target = target.length ? target : $('[id=' + this.hash.slice(1) +']');

            if (target.length) {
                var offset = target.offset().top;
                if(offset < 0 ){
                    offset = 0;
                }

                if(isBreakpoint('xs')){
                    if(target.find('.section-title:not(.active)').length > 0) {
                        target.find('.section-title').trigger('click');
                    }
                    if($(this).parents('.main-menu').length > 0){
                        $('.main-menu-toggle').trigger('click');
                    }
                }

                $('html, body').animate({
                    scrollTop: offset
                }, 500);
                window.location.hash = this.hash;
                return false;
            }
        }
    });

    $('.main-menu-toggle').click(function () {
        var $menu = $('.wrap-menu');
        if($menu.hasClass('active')){
            $(this).removeClass('active');
            $menu.removeClass('active');
        }else{
            $(this).addClass('active');
            $menu.addClass('active');
        }
    });

    sectionAccordion();
    $(document).on('click', '.section-title.init', function(){
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('section').find('.section-content').slideUp('fast');
            $(this).find('.fa').addClass('fa-caret-right').removeClass('fa-caret-down');
        } else {
            $(this).addClass('active');
            $(this).parents('section').find('.section-content').slideDown();
            $(this).find('.fa').addClass('fa-caret-down').removeClass('fa-caret-right');
            if($(this).parents('section').attr('id') === 'archive'){
                initCarousel(true);
            }
        }
    });
});

function sectionAccordion(){
    if(isBreakpoint('xs')) {
        if($('.section-title.init').length === 0) {
            $('.section-title').addClass('init').prepend('<i class="fa fa-caret-right"></i>');
        }
    }else{
        $('.section-title').removeClass('init active');
        $('.section-title .fa').remove();
        $('.section-content').removeAttr('style');
    }
}


//*******************************
// MISC
//*******************************

$(function(){
    initCarousel(false);

    lazyLoadImg();
    $(window).on('resize scroll', function() {
        lazyLoadImg();
        initCarousel(false);
    });
});

function initCarousel(forceInit){
    if (forceInit || (!$('.carousel').hasClass('active') && $('.carousel').isInViewport())) {
        $('.carousel').addClass('active');
        $('.carousel').slick({
            autoplay: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 2000
        });
    }
}

function lazyLoadImg(){
    $('img[data-src]').each(function(){
        if ($(this).isInViewport()) {
            $(this).attr('src', $(this).data('src')).removeAttr('data-src');
        }
    });
}
