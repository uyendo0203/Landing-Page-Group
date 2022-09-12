



$(document).ready(function () {
    initSlider();
    AOS.init();
});



// slider------------------------------------
function initSlider() {
    $('.slider-1').not('.slick-initialized').slick({
        slidesToShow: 1,
        centerMode: true,
        arrows:false,
        autoplay:true,
        dots:false,
        centerPadding: '450px',
        responsive: [
            {
              breakpoint: 1920,
              settings: {
                centerPadding: '800px',
              }
            },
            {
              breakpoint: 1801,
              settings: {
                centerPadding: '480px',
              }
            },
            {
              breakpoint: 1600,
              settings: {
                centerPadding: '320px',
              }
            },
            {
              breakpoint: 1024,
              settings: {
                centerPadding: '200px',
              }
            },
           
          ]
    });
}



