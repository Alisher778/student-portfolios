$(document).ready(function() {
    $("nav ul li").click(function(){
      var forid = $(this).attr("id");
      console.log("ishlaey");
      
      if(forid=="a"){
        $('html, body').animate({scrollTop:0}, 300);
      } else if (forid=="b") {
        $('html, body').animate({scrollTop:700}, 500);
      } else if(forid=="c") {
        $('html, body').animate({scrollTop:1500}, 700);
      } else if(forid=="d") {
        $('html, body').animate({scrollTop:2270}, 900)
      } else if(forid=="e"){
        $('html, body').animate({scrollTop:3400}, 1000);
      } else {

      }

    })
    $(document).scroll(function() {
       var scrollPosition = $(this).scrollTop();
        
        var about = $('#info').offset().top;
        var service = $('#plus').offset().top;
        var works = $('#workP').offset().top;
        var hire =$('#con').offset().top;

        if(scrollPosition >= 60 && scrollPosition < about) {
           $('header').addClass('added');
           $('nav ul li [data-id=home]').addClass('add');

        } else if(scrollPosition > about && scrollPosition < service) {
            $('nav ul li .add').removeClass('add');
            $('nav ul li [data-id=about]').addClass('add');
        } else if(scrollPosition > service && scrollPosition < works) {
            $('nav ul li .add').removeClass('add');
            $('nav ul li [data-id=service]').addClass('add');
        } else if(scrollPosition > works && scrollPosition < hire) {
            $('nav ul li .add').removeClass('add');
            $('nav ul li [data-id=works]').addClass('add');
        } else if(scrollPosition > hire - 100) {
            $('nav ul li .add').removeClass('add');
            $('nav ul li [data-id=hire]').addClass('add');
        }  else {
           
           $('nav ul li .add').removeClass('add');
           $('nav [data-id=home]').addClass('add');
       }


       if(scrollPosition > about - 300) {
           $('#go').fadeIn();
       } else {
            $('#go').fadeOut();
       }
    });
    

       $('#go').click(function(e) {
       $('body, html').animate({scrollTop: 0}, 300)
   
        });

    $(window).scroll(function(e) {
      var newScroll = e.currentTarget.scrollY;
      /*console.log(e.currentTarget.scrollY);*/
    });

    $("#hire").click(function(){      
        console.log("worked");      
        $('html, body').animate({scrollTop:3400}, 1000);      

    });
    $('.into').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '#area'
    });
    $('#area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.into',
        focusOnSelect: true
    });
    $('.img').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    })
    $('.tarif').slick({       
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })
    $('.into button').click(function() {
        $(this).addClass('active');
        console.log('actived')
    })
    
    $('#mail').mouseleave(function(e) {
        $(this).css('position', 'relative');
    })
});
