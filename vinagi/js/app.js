
        $(".header__banner-slider").slick();

        $(".banner-adv__slider").slick({
            speed: 300,
            autoplay:true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
               
                {
                    breakpoint: 1300,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        });

        $(".detailPage__banner-slider").slick({
            speed: 300,
            autoplay:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows:true,
            responsive: [
               
                {
                    breakpoint: 1300,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
            ]
        });

        $(window).click(function(){
            $('.sidebar_mobile').removeClass("active");
             $('.menu_ul').removeClass("active");
             $('.sidebar-icon').removeClass("active");
        })


        $('.sidebar-icon').click(function(e){
            e.stopPropagation();
            $('.sidebar_mobile').toggleClass('active');
            $(this).toggleClass('active');

            $('.menu_ul').removeClass("active");
        })

        $('.fa-bars').click(function(e){
            e.stopPropagation();
            $('.menu_ul').toggleClass('active');
            $(this).toggleClass('active');

            $('.sidebar_mobile').removeClass("active");
            $('.sidebar-icon').removeClass("active");
        })

        $(document).on("scroll", function() {
            if ($(document).scrollTop() > 5) {
                $(".header .navbar-custom").css("background","#99aab4");
                $(".header .navbar-custom").css("transition","0.3s all");
                $(".header .header__logo").css("transform","scale(0.7)");
                $(".header .header__logo").css("transition","0.3s all");
                $(".header .header__logo").css("padding","0");
            }
            if($(document).scrollTop() == 0){
                 $(".header .navbar-custom").css("background","transparent");
                 $(".header .header__logo").css("transform","scale(1)");
                 $(".header .header__logo").css("padding","15px 15px");
                 $(".header .header__logo").css("transition","0.3s all");
                 $(".header .navbar-custom").css("transition","0.3s all");
            }
            
        });

        if($('.menu_ul').hasClass('active')){
            $('.sidebar_mobile').hide();
        }

        // $('.icon_search_mobile').click(function(){
        //     $('.nk-search-box').toggle()
        // })

        
