$(function () {

    animateLabelToggle(false);
    $('.animate-label .form-control').on('focus', function () {
        animateLabelToggle(true, $(this));
    }).on('blur', function () {
        animateLabelToggle(false, $(this));
    }).on('input', function () {
        animateLabelToggle(true, $(this));
        if($(this).is("textarea")){
            textareaHeight($(this));
        }
    });

    $('.animate-label textarea.form-control').each(function () {
        textareaHeight($(this));
    });

    toggleRadioBtn();
    $('.radio-btns .btn').click(function () {
        toggleRadioBtn();
    });
});

function animateLabelToggle (active, $obj) {
    if(typeof $obj !== 'undefined'){
        if (active || $obj.val() !== '') {
            $obj.parents('.form-group').removeClass('form-group-empty');
        } else {
            $obj.parents('.form-group').addClass('form-group-empty');
        }
    }else{
        $('.animate-label .form-group').each(function () {
            if ($(this).find('.form-control').val() === '') {
                $(this).addClass('form-group-empty');
            } else {
                $(this).removeClass('form-group-empty');
            }
        });
    }
}

function textareaHeight ($textarea) {
    var top = $textarea.scrollTop(),
        outerHeight = $textarea.height(),
        innerHeight = top + outerHeight,
        max = parseInt($textarea.css('max-height').replace('px', '')),
        min = parseInt($textarea.css('min-height').replace('px', ''));

    if($textarea.val() !== '') {
        if (innerHeight < max) {
            $textarea.css({'height': 'auto'});
            $textarea.height($textarea[0].scrollHeight - 16);
        }
    }else{
        $textarea.height(min - 16);
    }

    if($textarea[0].scrollHeight > max || $textarea.height() > max){
        $textarea.css({'overflow-y': 'scroll'});
    }else{
        $textarea.css({'overflow-y': 'hidden'});
    }
}

function toggleRadioBtn(){
    $('.radio-btns .btn').each(function(){
        if($(this).find('input').prop('checked')){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
}

$(function () {
    if ($('.date-field').length) {
        $('.date-field').datetimepicker({
            format: 'D MMM YYYY',
            dayViewHeaderFormat: 'MMM YYYY',
            useCurrent: false,
            locale: moment.locale('en', {
                week: {
                    dow: 1
                }
            })
        });
    }

    if ($('.datetime-field').length) {
        $('.datetime-field').each(function () {
            $(this).datetimepicker({
                format: 'D MMM YYYY HH:mm',
                dayViewHeaderFormat: 'MMM YYYY',
                useCurrent: false,
                locale: moment.locale('en', {
                    week: {
                        dow: 1
                    }
                }),
                //enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                stepping: 15,
                sideBySide: true
            });
        });
    }

    if ($('.datetime-full-field').length) {
        $('.datetime-full-field').each(function () {
            $(this).datetimepicker({
                format: 'D MMM YYYY HH:mm',
                dayViewHeaderFormat: 'MMM YYYY',
                useCurrent: false,
                locale: moment.locale('en', {
                    week: {
                        dow: 1
                    }
                }),
                sideBySide: true
            });
        });
    }

});