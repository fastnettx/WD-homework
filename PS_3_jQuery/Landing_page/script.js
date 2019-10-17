$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button').addClass('button-active');
        } else {
            $('#button').removeClass('button-active');
        }
    });

    $('#button').on('click', function () {
        $('html, body').animate({'scrollTop': '0'}, 1200);
    });

    $(document).on('mouseover mouseout', '.button', function () {
        $(this).toggleClass('button-sel');
    });


    $('.header__link').on('click', function () {
        const element = $(this).attr('href');
        const part = ($(window).height() - $(element).outerHeight()) / 2;
        const offsets = $(element).offset().top;
        if ($(element).outerHeight() > $(window).height()) {
            $('html, body').animate({'scrollTop': offsets}, 1200);
        } else {
            $('html, body').animate({'scrollTop': offsets - part}, 1200);
        }
    });


});



