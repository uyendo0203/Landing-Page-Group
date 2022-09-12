


$('.is_loading').css('opacity','1')
$(document).ready(function () {


    // loading page------------------
    $('body').css('overflow','hidden')
    setTimeout(() => {
        $('.is_loading').css({
            'opacity': '0',
            'z-index':'-1'
        });
        $('body').css('overflow', 'auto')
    }, 3000);
    // loading page end------------------





    AOS.init();
    initSlider();


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


$('.navbar-toggler').click(function (e) {
    e.stopPropagation();
    if ($(this).closest('.vanphu').find('header').hasClass('active')) {
        $(this).closest('.vanphu').find('header').removeClass('active')
    }
    else {
        $(this).closest('.vanphu').find('header').addClass('active')
    }
})

$('body').click(function(e){
    $('header').removeClass('active')
})




$('.vanphu .registration img').click(function (e) {
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
            dots:false
        }
        },
  ]
});


$('.section3 .list-images .n-item').click(function(){
    var data_images = $(this).attr('images-data');
    console.log(data_images);

    $(this).closest('.section').find('.images .i-item').removeClass('active')
    $(this).closest('.section').find('.images .i-item'+'.'+data_images).addClass('active')

})