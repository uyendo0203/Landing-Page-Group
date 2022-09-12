



// $(window).on('load resize', function () {
//     var windowsize = $(window).width();
//     var myFullpage;
//     if (windowsize > 768) {
//         myFullpage = new fullpage('#fullpage', {
//             verticalCentered: false,
//             anchors: [
//                 'section0', 'section1', 'section2', 'section3'
//             ],
//             menu: '#menu',
//             sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE']
//         });

//         $('.slider').slick({
//             infinite: true,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: false,
//             arrows: false,
//             autoplay: true
//         });
//     } else {
//         $('body').css('overflow', 'auto');
//         $('#menu .icon-mobile').click(function () {
//             console.log($(this).closest('#menu').find('.right').hasClass('active'))
//             if ($(this).closest('#menu').find('.right').hasClass('active')) {
//                 $(this).closest('#menu').find('.right').removeClass('active')
//             } else {
//                 $(this).closest('#menu').find('.right').addClass('active')
//             }
//         })
//     }
// })





// // $('.right li').on('click', function (event) {

// //     var target = $(this).attr('data-menuanchor')
// //     console.log(target)

// //     var last = target.substring(6,7)

// //     console.log('last',last)

// //     var cpm = $(this).closest('body').find('.mobile .sct-mobile .section'+last);
// //     console.log('cpm',cpm)

// //     if (target.length){
// //         event.preventDefault();
// //         $('html, body').stop().animate({
// //             scrollTop: cpm.offset().top
// //         }, 600, function () {
// //             location.hash = target; //attach the hash (#jumptarget) to the pageurl
// //         });
// //     }
// // });


// $(document).ready(function () {
//     $('a[href*="#"]').bind('click', function (e) {
//         e.preventDefault(); // prevent hard jump, the default behavior

//         var target = $(this).attr("href"); // Set the target as variable

//         // perform animated scrolling by getting top-position of target-element and set it as scroll target
//         $('html, body').stop().animate({

//             scrollTop: $(target).offset().top
//         }, 300, function () {
//             location.hash = target; //attach the hash (#jumptarget) to the pageurl
//         });

//         return false;
//     })
// });