
// VALIDATE FORM================================================================================
$(".form-data").validate({
    rules: {
        name: {
            required: true,
            minlength:5
        },
        phone: {
            required: true,
            maxlength:10
        },
        email: {
            required: true,
        },
        description: {
            required: true,
        },
    },
    messages:{
        name: {
            required: 'Vui lòng nhập đủ họ tên',
            minlength: 5
        },
        phone: {
            required:'Vui lòng đúng định dạng sdt',
            minlength:1
        },
        email: {
            required: 'Vui lòng nhập đúng định dạng email',
        },
        description: {
            required: 'Vui lòng nhập dưới 200 kí tự',
        },
    }
});
// END VALIDATE FORM================================================================================




// -------------------------------------------------------------------------------------------


// LOADING DEFAULT================================================================================
$('.is_loading').css('opacity','1')

$(document).ready(function () {
    

    // LOADING OFF WHEN HTML DONE================================================================================
    $('body').css('overflow','hidden')
    setTimeout(() => {
        $('.is_loading').css({
            'opacity': '0',
            'z-index':'-1'
        });
        $('body').css('overflow', 'auto')
    }, 3000);
    // END LOADING===========================================================================




    // AMINATION===========================================================================
    AOS.init();

    // SLIDER===========================================================================

    // HEADER CLICK AND SCROLL===========================================================================
    $('header li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })

    function goToByScroll(echo) {
        $('html,body').animate({
            scrollTop: $("." + echo).offset().top - 130
        }, 'slow');
    }


    $("header li a").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr('link'));
    });


    // click to footer
    $(".btn-register-2").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr('link'));
    });
});

// SCROLL TO SECTION===========================================================================
$(window).on('scroll', function () {
    var scrollDistance = $(window).scrollTop();

    $('header').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('li.active').removeClass('active');
            $('li').eq(i).addClass('active');
        }
    });
}).scroll();

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

// TOGGLE MOBILE ICON===========================================================================
$('.navbar-toggler').click(function (e) {
    e.stopPropagation();
    if ($(this).closest('.normanly').find('header').hasClass('active')) {
        $(this).closest('.normanly').find('header').removeClass('active')
    }
    else {
        $(this).closest('.normanly').find('header').addClass('active')
    }
})

// CLICK BODY AND REMOVE ACTIVE HEADER===========================================================================
$('body').click(function(e){
    $('header').removeClass('active')
})



// INIT SLIDER FUNCTION===========================================================================

$('.slider-section-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,  
    autoplay:true,
    speed:3000,  
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});
$('.slider-section-5').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,  
    autoplay:true,
    speed:3000,  
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed:3000,  
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    speed:3000,  
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
       
        {
          breakpoint: 992,
          settings: {
            dots: false,
            arrows:false
          }
        }
      ]
});

$(".popup img").click(function () {
    var $src = $(this).attr("src");
    $(".show-image").fadeIn();
    // $(".img-show img").attr("src", $src);
});

$("span, .overlay").click(function () {
    $(".show-image").fadeOut();
});


