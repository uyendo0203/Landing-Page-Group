



$(document).ready(function () {

    initSlider();

    $('.navbar-toggler').click(function (e) {
        e.stopPropagation();
        if ($(this).closest('.lanrung').find('header').hasClass('active')) {
            $(this).closest('.lanrung').find('header').removeClass('active')
        }
        else {
            $(this).closest('.lanrung').find('header').addClass('active')
        }
    })
    
    $('body').click(function(e){
        $('header').removeClass('active')
    })

    $('header li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })

    function goToByScroll(echo) {
        $('html,body').animate({
            scrollTop: $("." + echo).offset().top
        }, 'slow');
    }




    $("header li a").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr('link'));
    });



});

$(window).on('scroll', function () {
    var scrollDistance = $(window).scrollTop();

    $('header').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('li.active').removeClass('active');
            $('li').eq(i).addClass('active');
        }
    });
}).scroll();

function initSlider() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true
    });
}


var sections = $('.section')
    , nav = $('.timeline')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});



$('.lanrung .registration img').click(function (e) {
    e.stopPropagation();
    if ($('.form').hasClass('active')) {
        $('.form').removeClass('active')
        $(this).closest('.registration .item').css('padding-bottom', '0')
    }
    else {
        $('.form').addClass('active')
        $(this).closest('.registration .item').css('padding-bottom', '25px')
    }
})

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [

        {
            breakpoint: 767,
            settings: {
                dots: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.slider-for-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-1',

});
$('.slider-nav-1').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for-1',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: false
            }
        },
    ]
});

 $('.slider-2-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: false,
});
 $('.slider-3-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: false,
});
 




$('.section3 .list-images .n-item').click(function () {
    var data_images = $(this).attr('images-data');
    console.log(data_images);

    $(this).closest('.section').find('.images .i-item').removeClass('active')
    $(this).closest('.section').find('.images .i-item' + '.' + data_images).addClass('active')

})

$('.section4 .tab li').click(function () {
    var data_tab = $(this).attr('data-tab');
    $('li').removeClass('active');

    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).closest('.content').find('.tab-content' + '-' + data_tab).removeClass('active')
        $('.slider-2-1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: false,
        });

    }else{
        $(this).addClass('active');
        $(this).closest('.content').find('.tab-content').removeClass('active')
        $(this).closest('.content').find('.tab-content' + '-' + data_tab).addClass('active')
        $('.slider-2-2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: false,
        });
            
    }
})

$('.section5 .tab li').click(function () {
    var data_tab = $(this).attr('data-tab');
    $('li').removeClass('active');

    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).closest('.content').find('.tab-content' + '-' + data_tab).removeClass('active')
        $('.slider-3-1').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: false,
        });
    }else{
        $(this).addClass('active');
        $(this).closest('.content').find('.tab-content').removeClass('active')
        $(this).closest('.content').find('.tab-content' + '-' + data_tab).addClass('active')
        $('.slider-3-2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: false,
        });
    }
})

