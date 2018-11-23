


$(document).ready(function () {
    setInterval(() => {
        initSlider();
    }, 100);
    
    // toggle mobile------------------------------------------------------------
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
    //end toggle mobile------------------------------------------------------------

    //header when click------------------------------------------------------------
    $('header li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })

    $("header li a").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr('link'));
    });
    //end header when click------------------------------------------------------------


    //function scroll and active header------------------------------------------------------------
    function goToByScroll(echo) {
        $('html,body').animate({
            scrollTop: $("." + echo).offset().top
        }, 'slow');
    }
    //end function scroll and active header------------------------------------------------------------

});


// scroll active menu on header-----------------------------------------------------------
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
// scroll active menu on header-----------------------------------------------------------



// slider------------------------------------
function initSlider() {
    
    $('.slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

}

$('.slider-for').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.slider-nav',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"
});
$('.slider-nav').not('.slick-initialized').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [

        {
            breakpoint: 767,
            settings: {
                dots: false,
            }
        }
    ]
});

$('.slider-for-1').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    fade: true,
    asNavFor: '.slider-nav-1',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"

});
$('.slider-nav-1').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for-1',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    focusOnSelect: true,
    infinite: true,
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

$('.slider-2-1').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    centerMode: false,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"
});
$('.slider-2-2').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    infinite: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"
});

$('.slider-3-1').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    centerMode: false,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"
});
$('.slider-3-2').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,
    infinite: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"
});



// end slider------------------------------------
 
// tab------------------------------------
var data_tab = 1;
$('.section4 .tab'+'-'+data_tab).addClass('show-tab')

$('.section4 .tab li').click(function () {
    data_tab = $(this).attr('data-tab');
    $('.section4 .tab li').removeClass('show-tab');

    if ($(this).hasClass('show-tab')){
        $(this).removeClass('show-tab');
        $(this).closest('.content').find('.tab-content' + '-' + data_tab).removeClass('show-tab');
        setTimeout(() => {
            $('.slider-2-1').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                infinite: true,
                centerMode: false,
            });
        }, 0);

    }else{
        $(this).addClass('show-tab');
        $(this).closest('.content').find('.tab-content').removeClass('show-tab');
        $(this).closest('.content').find('.tab-content' + '-' + data_tab).addClass('show-tab');
        setTimeout(() => {
            $('.slider-2-2').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: true,
                centerMode: false,
                infinite: true,
                prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
                nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"
            });
        }, 0);
            
    }
})

$('.section5 .tab li').click(function () {
    var data_tab = $(this).attr('data-tab');
    $('.section5 .tab li').removeClass('show-tab');

    if($(this).hasClass('show-tab')){
        $(this).removeClass('show-tab');
        $(this).closest('.content').find('.tab-content' + '-' + data_tab).removeClass('show-tab')
        $('.slider-3-1').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            centerMode: false,
            infinite: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"
        });
    }else{
        $(this).addClass('show-tab');
        $(this).closest('.content').find('.tab-content').removeClass('show-tab')
        $(this).closest('.content').find('.tab-content' + '-' + data_tab).addClass('show-tab')
        $('.slider-3-2').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
             autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            centerMode: false,
            infinite: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' ></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>"
        });
    }
})
//end tab------------------------------------

