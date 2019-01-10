$(document).ready(function() {
    /*$('#bio').click(function(e) {
        e.preventDefault();
        $('#biograf').css('display', 'block')
    });*/
    $('.into').slick({
        slidesToShow: 8,
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
        /*cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
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
})
//#423b3b
//#10100f