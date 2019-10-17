const ARRAY_SELECT = [
    {
        name: 'VK',
        images: './images/vk.png'
    },
    {
        name: 'Facebook',
        images: './images/face.png'
    },
    {
        name: 'Twitter',
        images: './images/tw.png'
    },
    {
        name: 'Google',
        images: './images/goog.png'
    },
    {
        name: 'YouTube',
        images: './images/you.png'
    },
    {
        name: 'Skype',
        images: './images/skype.png'
    },
    {
        name: 'Telegram',
        images: './images/teleg.png'
    },
    {
        name: 'Viber',
        images: './images/viber.png'
    }
];
let visibility = true;
for (let i = 0; i < ARRAY_SELECT.length; i++) {
    const newElems = $('<div class=\'dropdown \'></div>');
    newElems.append('<img src=' + ARRAY_SELECT[i].images + '>');
    newElems.append(ARRAY_SELECT[i].name);
    $('.select .select_dropdown').append(newElems).addClass('invisible');
}
;

$('.select .dropdown').click(function () {
    if (visibility) {
        $('.select_dropdown ').removeClass('invisible');
        visibility = false;
    } else {
        $('.select_dropdown').addClass('invisible');
        visibility = true;
    }
});

$('.select .select_dropdown .dropdown').click(function () {
    const selectDropdown = $(this).html();
    $('.select_dropdown').addClass('invisible');
    $('.select > .dropdown').html(selectDropdown);
});

$(document).on('click', function (event) {
    if (!$(event.target).parents().hasClass("select")) {
        $('.select_dropdown').addClass('invisible');
        visibility = true;
    }
});

$(document).on('mouseover ', '.dropdown', function () {
    $(this).addClass('selected_part');
});
$(document).on('mouseout', '.dropdown', function () {
    $(this).removeClass('selected_part');
});




