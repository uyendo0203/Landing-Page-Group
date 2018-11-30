// SUBMIT DATA==============================================================================

var arr_data = [];
$('.submit-data').click(function(){
    var name = $('.form-data').find('input[name="name"]').val();
    var phone = $('.form-data').find('input[name="phone"]').val();
    var email = $('.form-data').find('input[name="email"]').val();
    var description = $('.form-data').find('textarea[name="description"]').val();
    var photo = $('.form-data').find('#result').attr('src')


   
    var obj_data = { 
        'name': name, 
        'phone': phone, 
        'email': email, 
        'description': description,
        'photo': photo 
    }
    arr_data.push(obj_data)
    console.log(arr_data)

    // reset form
    $('.form-data')[0].reset();

    // save data to hidden input
    $('.data-hidden').val(JSON.stringify(arr_data));
    
    // parse data from hidden input
    var value = $('.data-hidden').val(); 
    value = JSON.parse(value);
})
// END SUBMIT DATA==============================================================================



// CROP IMAGES==================================================================================
var cropper;
$('#input').on('change', function (e) {
    var reader;
    var url;
    var files = e.target.files;
    var done = function (url) {
        $('#image').attr('src', url);
        $('#modal').modal('show');
    };

    if (files && files.length > 0) {
        file = files[0];

        if (URL) {
            done(URL.createObjectURL(file));
        }
        else if (FileReader) {
            reader = new FileReader();
            reader.onload = function (e) {
                done(reader.result);
            };
            reader.readAsDataURL(file);
            console.log(reader)
        }
    }
});

$('#modal').on('shown.bs.modal', function () {
    cropper = new Cropper(image, {
        aspectRatio: 1 / 1,
        zoomable: false,
    });
}).on('hidden.bs.modal', function () {
    cropper.destroy();
    cropper = null;
});

//crop action
$('#crop').on('click', function () {
    // result is a canvas type
    result = cropper.getCroppedCanvas();
    initialAvatarURL = result.src;

    // result is a base64 type
    result.src = result.toDataURL();

    // fetchData
    fetchData(result.src);

    $('.loading').show()
    $(this).attr('disabled','disabled')
})
function fetchData(dataSrc){
    fetch(dataSrc)
        .then((response) => response.blob())
        .then((blob) => {

            url = URL.createObjectURL(blob);

            result.onload = function () {
                URL.revokeObjectURL(url);
            };

            dataSrc = url;
            var file = new File([blob], url.split("/")[url.split("/").length - 1], { type: 'images/jpeg' });
            var form = new FormData();

            // form.photo = file;

            form.append("photo", file);
            resultCropData(form);
        });
}

function resultCropData(form) {
    $.ajax({
        url: "http://mercature-v1.acc-svrs.com/admin/api/general/postUpdatePhoto",
        data: form,
        processData: false,
        contentType: false,
        type: 'POST',
        success: (data) => {
             // $('#result').attr('src', '')
            // $('#result').attr('src', data);


            $('#crop').removeAttr('disabled')
            $('.loading').hide()
            $('#modal').modal('hide');
            $('#result_example').val(data);
        },
        errror:(err)=>{
            console.log(err)
        }
    });
}

//cancel crop action
$('#modal .btn-default').click(function(){
    $('#crop').removeAttr('disabled');
    $('.loading').hide();
    $('#result_example').val('');
})
// END CROP IMAGES==============================================================================


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
    initSlider();

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
    if ($(this).closest('.vanphu').find('header').hasClass('active')) {
        $(this).closest('.vanphu').find('header').removeClass('active')
    }
    else {
        $(this).closest('.vanphu').find('header').addClass('active')
    }
})

// CLICK BODY AND REMOVE ACTIVE HEADER===========================================================================
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

$('.section3 .list-images .n-item').click(function () {
    var data_images = $(this).attr('images-data');
    console.log(data_images);

    $(this).closest('.section').find('.images .i-item').removeClass('active')
    $(this).closest('.section').find('.images .i-item' + '.' + data_images).addClass('active')

})


// INIT SLIDER FUNCTION===========================================================================
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


