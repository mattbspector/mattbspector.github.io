$(document).ready(function(){

$(window).scroll(function(){

	if($(this).scrollTop() > $('header').offset().top)
	{
		$('header').css('position','fixed');
		$('header').css('top','0');
		$('header').css('box-shadow','0px 5px 5px -3px #444');
	}

	if($(this).scrollTop() < $('.mainbody').offset().top - 100)
	{
		$('header').css('position','');
		$('header').css('top','');
		$('header').css('box-shadow','');

	}

});














});