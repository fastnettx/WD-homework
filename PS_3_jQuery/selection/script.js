const ARRAY_SELECT = [
    {
        name: 'Select',
        images: './images/sel.png'
    },
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
let toggle = true;
let selected_item = 0;

$(document).ready(function () {
    for (let i = 0; i < ARRAY_SELECT.length; i++) {
        let newElems = $('<div class=\'dropdown dr2\'></div>')
            .append('<img src=' + ARRAY_SELECT[i].images + '>')
            .append('<div> ' + ARRAY_SELECT[i].name + '</div>')
            .attr('id', i);
        $('.select_dropdown').append(newElems);
    }

    $(document).on('click', '.dropdown', function () {
        if (toggle) {
            $('#dropdown').addClass('dr2');
            for (let i = 0; i < ARRAY_SELECT.length; i++) {
                $('#' + i).removeClass('dr2');
            }
            toggle = !toggle;
        } else {
            const selectedId = $(this).attr('id');

            for (let i = 0; i < ARRAY_SELECT.length; i++) {
                if (i != selectedId) {
                    selected_item = selectedId;
                    $('#' + i).addClass('dr2');
                }
            }
            toggle = !toggle;
        }
    });

    $(document).on('click', function (event) {
        if (!$(event.target).parents().hasClass("select_dropdown")) {
            if (!toggle) {
                for (let i = 0; i < ARRAY_SELECT.length; i++) {
                    if (i != selected_item) {
                        $('#' + i).addClass('dr2');
                    }
                }
                toggle = !toggle;
            }
        }
    });


    $(document).on('mouseover ', '.dropdown', function () {
        $(this).css('color', 'white');
        $(this).css('cursor', 'pointer');
        $(this).css('opacity', '0.7');
    });
    $(document).on(' mouseout', '.dropdown', function () {
        $(this).css('color', '#0d51c0');
        $(this).css('opacity', '1');
        $(this).css('background-color', '#6cf197');
    });
});



