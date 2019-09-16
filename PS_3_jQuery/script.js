const ARRAY_SELECT = [{
    name: 'accountVK',
    images: './images/vk.png'
},
    {
        name: 'accountFace',
        images: './images/face.png'
    },
    {
        name: 'accountTW',
        images: './images/tw.png'
    },
    {
        name: 'accountGoog',
        images: './images/goog.png'
    },
    {
        name: 'accountYou',
        images: './images/you.png'
    },
    {
        name: 'accountSkype',
        images: './images/skype.png'
    },
    {
        name: 'accountTelag',
        images: './images/teleg.png'
    },
    {
        name: 'accountViber',
        images: './images/viber.png'
    }
];

$(document).ready(function () {
    for (var i = 0; i < ARRAY_SELECT.length; i++) {
        var newElems = $('<div class=\'dropdown\'></div>')
            .append('<img src=' + ARRAY_SELECT[i].images + '>')
            .append('<div> ' + ARRAY_SELECT[i].name + '</div>');
        $('.body_div').append(newElems);
        //$('.body_div').show(50000);
        // $('.dropdown').show(50000);
    }

    $(document).on('click', '.dropdown', function () {
        $('#dr1').hide(10000);


    });

    $(document).on('mouseover ', '.dropdown', function () {
        $(this).css('color', 'white');
        $(this).css('cursor', 'pointer');
        $(this).css('opacity', '0.5');

    });
    $(document).on(' mouseout', '.dropdown', function () {
        $(this).css('color', '#0d51c0');
        $(this).css('opacity', '1');
        $(this).css('background-color', '#6cf197');
    });

});



