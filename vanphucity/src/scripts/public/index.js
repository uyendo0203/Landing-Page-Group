



$(document).ready(function () {
    // $('.timeline li').bind('click', function (e) {
    //     e.preventDefault(); // prevent hard jump, the default behavior

    //     var target = $(this).attr("link"); // Set the target as variable

    //     // perform animated scrolling by getting top-position of target-element and set it as scroll target
    //     $('html, body').stop().animate({

    //         scrollTop: $(target).offset().top
    //     }, 300, function () {
    //         location.hash = target; //attach the hash (#jumptarget) to the pageurl
    //     });

    //     return false;
    // })
        
    initSlider();
    
    
    $('.timeline li').click(function () {
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


    

    $(".timeline li").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll( $(this).attr('link'));
    });

  

});

$(window).on('scroll',function() {
    var scrollDistance = $(window).scrollTop();
    
    $('.timeline').each(function(i) {
        if ($(this).position().top <= scrollDistance + 200) {
                $('.timeline li.active').removeClass('active');
                $('.timeline li').eq(i).addClass('active');
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
