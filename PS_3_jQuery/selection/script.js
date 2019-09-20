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
let toggle = true;
$(document).ready(function () {
    for (let i = 0; i < ARRAY_SELECT.length; i++) {
        let newElems = $('<div class=\'dropdown dr2\'></div>')
            .append('<img src=' + ARRAY_SELECT[i].images + '>')
            .append('<div> ' + ARRAY_SELECT[i].name + '</div>')
            .attr('id', 'dropdown_' + (i));
        $('.body_div').append(newElems);
    }

    $(document).on('click', '.dropdown', function () {
        if (toggle) {
            $('#dropdown').addClass('dr2');
            for (let i = 0; i < ARRAY_SELECT.length; i++) {
                $('#dropdown_' + i).removeClass('dr2');
            }
            toggle = !toggle;
        } else {
            const selectedId = $(this).attr('id');
            for (let i = 0; i < ARRAY_SELECT.length; i++) {
                if ('dropdown_' + i !== selectedId) {
                    $('#dropdown_' + i).addClass('dr2');
                }
            }
            toggle = !toggle;
        }
    });
    $(document).on('click', function (event) {
        if ($(event.target).hasClass('dropdown')) {
            console.log("dropdown");
        }
        else {
            console.log("no");
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



