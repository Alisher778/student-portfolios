$(document).ready(function() {
	$('#jbtn').click(function() {
		$('.lastdiv').css('display','block')
	});
	/*$('#jbtn').dblclick(function() {
		$('.lastdiv').css('display','none')
	});*/
	$('.lastdiv').mouseleave(function() {
		$(this).css('display','none')
	});
	$('.jsimg').hover(function() {
		$('.lastdiv1').css('display','block')
	});
	$('.lastdiv1').mouseleave(function() {
		$(this).css('display','none')
	});
	/*$('.brt').click(function() {
		$(this).css('transform','rotate(180deg)')
	});*/

	$('[data-toggle="popover"]').popover();

	$('#close').click(function() {
		$('#glav').css('display','none');
	});
	$('#card').click(function() {
		$('#glav').animate({width:'870px'}, 1000)
	})
	$('#card').dblclick(function() {
		$('#glav').animate({width:'1150px'}, 500)
	}); 
	$('#green').click(function() {
		$('#glav').fadeOut();
	});
	
	$('body, html').dblclick(function() {
		$('#glav').fadeIn();
	});
})
