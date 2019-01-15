$(document).ready(function() {
    $(document).scroll(function() {
       var scrollPosition = $(this).scrollTop();
     
        var about = $('#info').offset().top;
        var service = $('#plus').offset().top;
        var works = $('#workP').offset().top;

        if(scrollPosition >= 60 && scrollPosition < about) {
           $('header').css({'display':'flex', 'position':'fixed'});
        } else if(scrollPosition > about && scrollPosition < service) {
            $('nav .add').removeClass('add');
            $('nav [data-id=service]').addClass('add');
        } else if(scrollPosition > service && scrollPosition < works) {
            $('nav .add').removeClass('add');
            $('nav [data-id=works]').addClass('add');
        } else if(scrollPosition > works - 100) {
            $('nav .add').removeClass('add');
            $('nav [data-id=hire]').addClass('add');
        } else {
           //$('header').removeClass('nice-nav');
           $('nav .add').removeClass('add');
           $('nav [data-id=about]').addClass('add');
       }
   });

    $(window).scroll(function(e) {
      var newScroll = e.currentTarget.scrollY;
      console.log(e.currentTarget.scrollY);
  });

    $("#hire").click(function(){
      
      console.log("worked");
      
        $('html, body').animate({scrollTop:2600}, 500);
      

    })
    $('.into').slick({
        slidesToShow: 6,
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
        autoplaySpeed: 4000,
        cssEase: 'linear',
    })
    $('.tarif').slick({
        //dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })
    $('.into button').click(function() {
        $(this).addClass('active');
        console.log('actived')
    })
    /*$('#hire').click(function(e) {
        $('#mail').css('position', 'fixed');
        console.log('ishladi');
    })*/
    $('#mail').mouseleave(function(e) {
        $(this).css('position', 'relative');
    })
})
//#423b3b
//#10100f