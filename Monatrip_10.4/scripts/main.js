$('.search-form').keypress(function(e) {
     e.stopPropagation();
     $('.search-result').css('opacity','1')
})
$('.user-login-success').click(function(e) {
     e.stopPropagation();
     $('.menu-login-success').css('opacity','1')
})

$('body').click(function(){
     $('.search-result').hide();
     $('.menu-login-success').css('opacity','0');
     $('.login-not-yet').removeClass('active');

     $('.menu-mobile .login-success').removeClass('active');
     $('.menu-toggle-mobile img').removeClass('active');
     $('.menu-toggle-mobile table i').removeClass('active');

     $('.transport a').removeClass('active');
     $('.bg-wrap').css({
         'z-index':'-1',
         'opacity':'0'
     })
   
     $('.list_transport').hide()

     $('.trip_type').hide();
     $('.activities').hide();

})



$('.search-form').keyup(function() {
     $('.search-result').show()
})

$('.dont-have-acc .login').click(function(){
     $('#sign-up').modal('hide');
})
$('.forgot-pwd').click(function(){
     $('#login').modal('hide');
})
$('.back-to-login').click(function(){
     $('#forgot-pwd').modal('hide');
})
$('.social.fb').click(function(){
     $('#sign-up').modal('hide');
})
$('.social.gg').click(function(){
     $('#sign-up').modal('hide');
})
$('.sign-up-gg-fb-login').click(function(){
     $('#sign-up-gg-fb').modal('hide');
})
$('#login .sign-up').click(function(){
     $('#login').modal('hide');
})

$('.menu-toggle-mobile table').click(function(e){
  e.stopPropagation();
  $('.menu-toggle-mobile table i').toggleClass('active');
  $(this).closest('.mona_header').find('.menu-mobile .login-success').toggleClass('active');
})

//multi modal
$(document).on('hidden.bs.modal', '.modal', function () {
     $('.modal:visible').length && $(document.body).addClass('modal-open');
 });


$(document).ready(function () {
     var width_window = $(window).width();
      //login
     $('.btn-login').click(function () {
          $('.login-successful').show()
          $('.login-not-yet').hide();
          $('#login').modal('hide');

          $('.menu-toggle-mobile').css('opacity','1');
          $('.login-mobile-not-yet').hide()
     })
     //logout
     $('.logout').click(function(){
          $('.login-not-yet').show();
          $('.login-successful').hide();

     })

     //slider
     $('.slider-featured_destinations').slick({
          slidesToShow:4,
          dots:false,
          arrows:true,
          infinite:true,
          nextArrow: '<div class="arrow-custom slick-prev"><img src="./images/arrow-slider-left.png" alt=""></div>',
          prevArrow: '<div class="arrow-custom slick-next"><img src="./images/arrow-slider-right.png" alt=""></div>',
          responsive: [
             {
               breakpoint: 1200,
               settings: {
                    slidesToShow: 3,
               }
          
               },
             {
         
               breakpoint: 950,
               settings: {
                 slidesToShow: 2,
               }
         
             }, {
         
               breakpoint: 630,
               settings: {
                    slidesToShow: 1,
                  }
             }]
     });
     $('.slider').slick({
          slidesToShow:5,
          dots:false,
          arrows:false,
          infinite:false,
          responsive: [{
               breakpoint: 1300,
               settings: {
                 slidesToShow: 4,
                 dots: false,
                 infinite:false,
               }
         
             }, 
             {
               breakpoint: 1100,
               settings: {
                    slidesToShow: 3,
                    dots: true,
                    infinite:false,
               }
          
               },
             {
         
               breakpoint: 930,
               settings: {
                 slidesToShow: 2,
                 dots: true,
                 infinite:false,
               }
         
             }, {
         
               breakpoint: 600,
               settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite:false,     
                  }
             }]
     });
     $('.slider_trip').slick({
          slidesToShow:3,
          dots:false,
          arrows:false,
          infinite:false,
          responsive: [{
               breakpoint: 1300,
               settings: {
                 slidesToShow: 3,
                 dots: false,
                 infinite:false,
               }
         
             }, 
             {
               breakpoint: 1200,
               settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite:false,
               }
          
               },
             {
         
               breakpoint: 930,
               settings: {
                 slidesToShow: 2,
                 dots: true,
                 infinite:false,
               }
         
             }, {
         
               breakpoint: 600,
               settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite:false,     
                  }
             }]
     });

})

/////////////////////////////////////////////////////////////////////////////
var isScrolling;
window.addEventListener('scroll', function (event) {
  window.clearTimeout(isScrolling);
  $('.login-mobile-not-yet').css('opacity','0');
  isScrolling = setTimeout(function () {
    $('.login-mobile-not-yet').css({
      'opacity':'1',
    });
  }, 300);
}, false)

$('.transport').click(function(e){
  e.stopPropagation();
  $('.transport a').addClass('active');
  $(this).closest('body').find('.bg-wrap').css({
      'z-index':'4',
      'opacity':'1'
  })

  $('.list_transport').show()
})
///////////////////////////////////////////////////////////////////////////////////////
var width_btn_detail_trip = $('.mona_detail_road_trip .contact').width();
var width_detail_trip = $('.mona_detail_road_trip .info_and_contact').width();

$('.mona_detail_road_trip .info').css({
    'width': width_detail_trip - width_btn_detail_trip - 5
})

console.log()
if($(window).width() <= 1200){
    $('.mona_detail_road_trip .info').css('width','100%')
}

////////////////////////////////////////////////////////////////////////////////////////

//action parent comment=============================================================
$('.action_input_parent').on('keypress',function(e){
    if(e.which == 13) {
        var result_cmt = $(this).val();

        var html_name = 'Test';
        var html_cmt = '<li class="li_parent">'+
                        '<div class="cmt_content">'+
                           '<div class="image">'+
                           '<div class="avatar"> '+
                           ' <img src="./images/avatar.jpeg" alt="">'+
                           '</div>'+
                           '</div>'+
                           '<div class="text_cmt">'+
                           '<h2 class="name font-medium">'+
                           html_name
                           +'</h2>'+
                           '<p class="text"> '+
                            result_cmt          
                           +
                                    ' </p>'+
                                    ' <p class="action_reply">Reply</p>'+
                                    ' </div>'+
                                    '<div class="clearfix"></div>'+
                                    '</div>'+
                                    '  </li>';

        $(this).closest('.comment_road_trip').find('.parent').append(html_cmt);

        $(this).val('');
    }
})


//action reply=======================================================================
var html_cmt_child = '<li class="li_parent">'+
                        '<div class="cmt_content">'+
                           '<div class="image">'+
                           '<div class="avatar"> '+
                           ' <img src="./images/avatar.jpeg" alt="">'+
                           '</div>'+
                           '</div>'+
                           '<div class="text_cmt">'+
                           '<h2 class="name font-medium">'+
                           'tunguyen'
                           +'</h2>'+
                           '<p class="text"> '+
                            'ke me tao'          
                           +
                                    ' </p>'+
                                    ' </div>'+
                                    '<div class="clearfix"></div>'+
                                    '</div>'+
                                    '  </li>';


 var input_cmt_child = '<div class="input_comment">'+
                          ' <div class="left">'+
                             ' <div class="images">'+
                                 ' <img src="./images/avatar.jpeg" alt="">'+
                              '</div>'+
                          '</div>'+
                         ' <div class="right">'+
                             ' <input type="text" placeholder="Write a comment" class="action_input_child">'+
                          '</div>'+
                         ' <div class="clearfix"></div>'+
                      '</div>';   

$('#mona_comment').on('click','.action_reply',function(){
    $(this).closest('.cmt_content ').find('.text_cmt').append(input_cmt_child );

    $('.action_input_child').on('keypress',function(e){
      if(e.which == 13) {
          var result_cmt = $(this).val();

          var html_name = 'Test';
          var html_cmt = '<ul class="children">' + '<li class="li_child">'+
                          '<div class="cmt_content">'+
                            '<div class="image">'+
                            '<div class="avatar"> '+
                            ' <img src="./images/avatar.jpeg" alt="">'+
                            '</div>'+
                            '</div>'+
                            '<div class="text_cmt">'+
                            '<h2 class="name font-medium">'+
                            html_name
                            +'</h2>'+
                            '<p class="text"> '+
                              result_cmt          
                            +
                                      ' </p>'+
                                      ' </div>'+
                                      '<div class="clearfix"></div>'+
                                      '</div>'+
                                      '  </li>' + '</ul>'
                              
          $(this).closest('.li_parent').append(html_cmt);

          $(this).val('');
          $(this).closest('.text_cmt').find('.input_comment').hide();
      }
  })
})

  

///datepicker add trip=====================================================================
  $('.date_picker').daterangepicker({
        locale: {
          format: 'YYYY-MM-DD'
        },
        startDate: '2018-01-01',
        endDate: '2018-12-31'
    }, 
    function(start, end, label) {
        var selected_date = start.format('D MMM')+ '-' + end.format('D MMM') 
        $('.date_picker').html(selected_date);
    },
   
  );

$('.date_picker .wrap_item').daterangepicker({
      locale: {
        format: 'YYYY-MM-DD'
      },
      startDate: '2018-01-01',
      endDate: '2018-12-31'
  }, 
  function(start, end, label) {
      var selected_date = start.format('D MMM')+ '-' + end.format('D MMM') 
      $('.date_picker .wrap_item').html(selected_date);
});


///add trip ///////////////////////////////////////////////////////////////////////////////////
$('.select_transport .title').click(function(e){
    e.stopPropagation();
    $('.bg-wrap').css({
      'z-index':'4',
      'opacity':'1'
    });
    $('.list_transport').css({
      'display':'block',
      'z-index':'3'
    });
})


///select transport//////////////////////////////////////////////////////////////////////////
$('.select_transport .list_transport li a').click(function(){
    var value_select = $(this).html();
    $(this).closest('.select_transport').find('.title').html(value_select);
})


$('.next_step a').click(function(){
    $(this).closest('.next_step').hide();

    $(this).closest('.mona_add_trip').find('.step_1').hide();
    $(this).closest('.mona_add_trip').find('.step_2').show();
    $(this).closest('.mona_add_trip').find('.step .by_step:last-child').addClass('active');
    $(this).closest('.mona_add_trip').find('.step .by_step:first-child').removeClass('active');

    $('.step_2').show();
    $('.option_activities_tripType').show();
    $(' .hr-add-trip').show();
})


////
$('.input_country_add_trip').keypress(function(e){
      $('.search-result').show();
})

$('.close_add_trip').click(function(e){
    e.stopPropagation();
    $('.input_country_add_trip').val('');

    $('.search-result').hide();
})

$('.search-result li a').click(function(){

    var selected = $('.search-result li a span').html();

    $(this).closest('.input_form').find('.input_country_add_trip').val(selected);
    $(this).closest('.input_form').find('.input_country_add_trip').attr('disabled','disabled').css({
        backgroundColor: '#fff',
        border: 'none',
        fontSize: 40,
    })
    $(this).closest('.input_form').find('.close_add_trip').hide();
    $(this).closest('.input_form').find('.delete_add_trip').show();

})


$('.delete_add_trip').click(function(){
      $(this).closest('.input_form').find('.input_country_add_trip').attr('disabled',false).css({
        backgroundColor: '#fff',
        border: '1px solid #95989A',
      })

      $(this).closest('.input_form').find('.close_add_trip').show();
      $(this).closest('.input_form').find('.delete_add_trip').hide();
})

$('.add_a_note').click(function(){
      $(this).closest('.step_2').find('.add_trip_dot').addClass('active');
      $('.tell_plan_here').show();
      $(this).hide();
      $(this).closest('.step_2').find('.add_trip_dot.after').show();
})


$("#upload_cover").change(function(){
    console.log($(this).val());
    $('.images_upload_done').html($(this).val())
})

$('.trip_type_click').click(function(e){
    e.stopPropagation();
    $(this).addClass('active');
    $(this).closest('.item').find('.trip_type').show()
    $(this).closest('.option_menu').find('.activities').hide();
    $(this).closest('body').find('.bg-wrap').css({
      'z-index':'4',
      'opacity':'1'
  })
})
$('.activities_click').click(function(e){
  e.stopPropagation();
    $(this).addClass('active');
    $(this).closest('.item').find('.activities').show();
    $(this).closest('.option_menu').find('.trip_type').hide()
    $(this).closest('body').find('.bg-wrap').css({
      'z-index':'4',
      'opacity':'1'
  })
})

$('.trip_type li').click(function(){
    $(this).closest('.item').find('a').html($(this).html());
    $(this).closest('.trip_type').hide()
})

$('.accept_message').click(function(){
      $('.request_message').hide();
      $('.typing_message').show();
})
$('.reject_message').click(function(){
      $('.typing_message').attr('disabled','disabled');
      $('.request_message').hide();
      
})


//////////////////////////////////////////////////////////////////////////////////////
$('.typing_message').keypress(function(e){
    if(e.which == 13) {
        console.log($(this).val());
        // $('.rep_item').html($(this).val());

    $(this).closest('.col_right')
      .find('.mona_chatting .reply')
      .append('<div class="item">'+
              '<a class="text">'
              + $(this).val() + '</a>' +
              '<div class="clearfix">' +'</div>'+'</div>')
      
        $(this).val('');
      }
})

$('.data-exist').attr('data-exist');
if($('.data-exist').attr('data-exist') == 1){
    $('body').css({
      backgroundColor:'#E1E9E6'
    })
}
// console.log($('.data-exist').attr('data-exist'))

//set width = height for avatar edit profile
$('.mona_edit_profile .contain_avatar').outerWidth() == $('.mona_edit_profile .contain_avatar').outerHeight();


//load avatar edit profile
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      console.log(e);
      $('.contain_avatar img').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$(".button_upload input").change(function() {
  readURL(this);
});