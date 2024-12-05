$(function() {
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