$(document).ready(function() {
    /*$('#bio').click(function(e) {
        e.preventDefault();
        $('#biograf').css('display', 'block')
    });*/
    $(document).scroll(function() {
    	var scrollPosition = $(this).scrollTop();
    	var info = $('#info').offset().top;

    	/*if(scrollPosition >= info) {
    		$('#info').css('position', 'fixed')
    		console.log('scroll')
    	}*/
    	
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
        /*
         centerMode: true,
         centerPadding: '220px',
         slidesToShow: 3,
         responsive: [{
             breakpoint: 768,
             settings: {
                 arrows: false,
                 centerMode: true,
                 centerPadding: '200px',
                 slidesToShow: 3
             }
         }, {
             breakpoint: 480,
             settings: {
                 arrows: false,
                 centerMode: true,
                 centerPadding: '200px',
                 slidesToShow: 1
             }
         }]*/
    })
    $('.tarif').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })
    /*$(document).scroll(function() {

    	var scrollPosition = $('#info').offset().top;
		$(this).scrollTop = scrollPosition; 
    	if(scrollPosition) {
    		$('#info').css('position', 'fixed');
    	}
    })*/
    $('.into button').click(function() {
    	$(this).addClass('active');
    	console.log('actived')
    })
    $('#hire').click(function(e) {
       $('#mail').css('position', 'absolute');
       console.log('ishladi');
   })
    $('#mail').mouseleave(function(e) {
    	$(this).css('position', 'relative');
    	
    })

})
//#423b3b
//#10100f