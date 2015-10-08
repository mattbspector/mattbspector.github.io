$(document).ready(function(){

	$(window).resize(function(){
	var text = "When you’re waiting in line at your favorite bar, take a picture of it (we know you’re on your phone anyway). Let us know how long the line is, if it’s moving, or any other helpful information for the community. The more you report, the more you get rewarded. Every picture you take earns you loyalty points toward a free skip-the-line pass! Sounds like a win win to us.";
	var img = '<img width="250" src="shots/first.png" title="Phone" alt="PhonePic"/>';
		if($(window).width() <= 736){
			$(".myimgflippic").text(text);
			var newhtml = $(".myimgfliptxt").html().replace(text,img);
			$(".myimgfliptxt").html(newhtml);

		}
		else{
			$(".myimgfliptxt").text(text);
			$(".myimgfliptxt").css("margin-top", "7em");
			var newhtml = $(".myimgflippic").html().replace(text,img);
			$(".myimgflippic").html(newhtml);

		}
	});
})