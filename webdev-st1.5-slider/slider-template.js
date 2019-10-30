const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';

const IMAGES = [
    '?image=1080',
    '?image=1079',
    '?image=1069',
    '?image=1063',
    '?image=1050',
    '?image=1039'
];
const leftArrow = 37;
const rightArrow = 39;

$(document).ready(function () {
    const sliderPreviews = $('.slider-previews');

    for (let i = 0; i < IMAGES.length; i++) {
        const tableElement = $('<li>');
        const elementImage = $('<img>', {src: API_URL + SMALL_SIZE + IMAGES[i], id: i});
        sliderPreviews.append(tableElement);
        tableElement.append(elementImage);
        if (i === 0) {
            elementImage.addClass("current");
        }
    }

    $('.slider .slider-previews li img').click(function () {
        const selectedImage = $(this).attr("src");
        const imageNumber = "https://picsum.photos/600/400/?image=" +
            selectedImage.substr(selectedImage.indexOf("=") + 1);

        console.log(imageNumber);

        $(".slider .slider-previews li img").removeClass("current");
        $('.slider-current img').attr('src', imageNumber);
        $(this).addClass("current");

    });


    $(document).keydown(function (e) {
        const element = $('.current');
        let elementId = element.attr('id');

        console.log(elementId);
        if (e.keyCode === leftArrow) {
            if () 
            console.log("left");

            goToIdSlide(3);
        }
        if (e.keyCode === rightArrow) {
            console.log("right")
        }
    });

    function goToIdSlide(id_number) {
        const slideNumber = $("#" + id_number);
        slideNumber.addClass('current');
        $('.slider-current img').attr('src', API_URL + BIG_SIZE + IMAGES[id_number]);

    }


});





