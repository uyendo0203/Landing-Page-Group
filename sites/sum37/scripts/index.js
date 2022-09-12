



$(document).ready(function () {
    $('a[href*="#"]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({

            scrollTop: $(target).offset().top
        }, 300, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    })
        
    initSlider();
    
    
    $('#menu .icon-mobile').click(function () {
        if ($(this).closest('#menu').find('.right-mobile').hasClass('active')) {
            $(this).closest('#menu').find('.right-mobile').removeClass('active')
        } else {
            $(this).closest('#menu').find('.right-mobile').addClass('active')
        }
    })

    function goToByScroll(echo) {
        // Remove "link" from the ID
        // echo = echo.replace("link", "");
        $('html,body').animate({
            scrollTop: $("." + echo).offset().top
        }, 'slow');
    }


    

    $("#menu .right > li > a").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        console.log($(this).attr('link'))
        // Call the scroll function
        goToByScroll( $(this).attr('link'));
    });

    $("#menu .right-mobile > li > a").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        console.log($(this).attr('link'))
        // Call the scroll function
        goToByScroll("sct-mobile." + $(this).attr('link'));
    });


});

$(window).on('scroll',function() {
    var scrollDistance = $(window).scrollTop();
    
    $('.section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 200) {
                $('.right li.active').removeClass('active');
                $('.right li').eq(i).addClass('active');
        }
    });
    $('.sct-mobile').each(function(i) {
        if ($(this).position().top <= scrollDistance + 100) {
                $('.right-mobile li.active').removeClass('active');
                $('.right-mobile li').eq(i).addClass('active');
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
        autoplay: false
    });
}
