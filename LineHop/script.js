$(document).ready(function(){

	$(".Logo").click(function(){
		$('html,body').animate({
			scrollTop: $("#LogoMain").offset().top - 58
		}, 600);
	});
	$(".WhereWeAre").click(function(){
		$('html,body').animate({
			scrollTop: $("#WhereWeAreMain").offset().top - 58
		}, 600);		

	});
	$(".Press").click(function(){
		$('html,body').animate({
			scrollTop: $("#PressMain").offset().top - 58
		}, 600);
	});
	$(".Contact").click(function(){
		$('html,body').animate({
			scrollTop: $("#ContactMain").offset().top - 58
		}, 600);
	});
});
