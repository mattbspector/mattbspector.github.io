$(document).ready(function(){

	$(".Logo").click(function(){
		$('html,body').animate({
			scrollTop: $("#LogoMain").offset().top - 58
		}, 600);
		return false;
	});
	$(".WhereWeAre").click(function(){
		$('html,body').animate({
			scrollTop: $("#WhereWeAreMain").offset().top - 58
		}, 600);	
		return false;	

	});
	$(".Press").click(function(){
		$('html,body').animate({
			scrollTop: $("#PressMain").offset().top - 58
		}, 600);
		return false;
	});
	$(".Contact").click(function(){
		$('html,body').animate({
			scrollTop: $("#ContactMain").offset().top - 58
		}, 600);
		return false;
	});
});
