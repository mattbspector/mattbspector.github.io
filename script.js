$(document).ready(function(){

 var $window = $(window);

 		$(".presetbar .numteamspreset").prop("selectedIndex", -1);
 		$(".presetbar .LeagueType").prop("selectedIndex", -1);
 		$(".presetbar .website").prop("selectedIndex", -1);

 		var apple = 0;
 		var orange = 0;
 		var berry = 0;
 		$(".topBarcustom").click(function(){
 			apple = 1;
 			presetLeagueSettings();
 		if($(".navbar").is(":visible")){
 			return false;
 		}

 		if($(".presetbar").is(":visible"))
 		{
 			$(".presetbar").slideToggle();
 		}
 		$(".navbar").slideToggle(function(){

 					$("html, body").animate({
					scrollTop: $(".customSettings").offset().top},500);
 			});

 		return false;

 		});

 		$(".topBarpreset").click(function(){
 			apple = 0;
 		if($(".presetbar").is(":visible")){
 			return false;
 		}

 		if($(".navbar").is(":visible"))
 		{
 			$(".navbar").slideToggle();
 		}

 		$(".presetbar").slideToggle(function(){
 					$("html, body").animate({
					scrollTop: $(".presetSettings").offset().top},500);
 			});

 		return false;

 		});


 		//$(".current h2").replaceWith('<h2>' + playerArray[i][12] +'</h2>');
        // Function to handle changes to style classes based on window width
        function checkWidth() {
        if($window.width() < 680)
       	{
       		
       		$("#playerGrid a").removeClass('span_4_of_12');
       		$("#playerGrid a").removeClass('span_3_of_12');
       		$("#playerGrid a").addClass('span_6_of_12');
       	}
     
       	if(($window.width()  >= 680) && ($window.width() < 910))
       	{	
       		$("#playerGrid a").removeClass('span_6_of_12');
       		$("#playerGrid a").removeClass('span_3_of_12');
       		$("#playerGrid a").addClass('span_4_of_12');
       	}
       	if($window.width() >= 910)
       	{
       		
       		$("#playerGrid a").removeClass('span_4_of_12');
       		$("#playerGrid a").addClass('span_3_of_12');
       	}
        if ($window.width() < 480) {
       
            $('.sec').addClass('span_12_of_12');
            $('.rightarrow').hide();
             $('.leftarrow').hide();

            };

        if ($window.width() >= 480) {
        
           $('.sec').removeClass('span_12_of_12');
            $('.rightarrow').show();
             $('.leftarrow').show();
        }
    }

    /*
    */
    function presetLeagueSettings(){
    	if($(".website").val() == 0)//YAHOO
 			{
 				if($(".LeagueType").val() == 0 || $(".LeagueType").val() == 1 )
 				{
 					if(parseFloat($(".numteamspreset").val()) > 0)
 					{
 						$(".numTeams").val($(".numteamspreset").val());
 					}
 				else{
 					$(".numTeams").val("10");//starters yahoo stand
 				}
 					$(".QBstart").val("1");
 					$(".RBstart").val("2");
 					$(".WRstart").val("3");
 					$(".TEstart").val("1");
 					$(".Kstart").val("1");
 					$(".Dstart").val("1");
 					$(".Bench").val("6");
 				

 

 					$(".completions").val("0"); //offense poitns
 					$(".Rushyds").val("10");
 					$(".Receiveyds").val("10");
 					$(".Passyds").val("25");
 					$(".PassTD").val("4");
 					$(".RushTD").val("6");
 					$(".ReceiveTD").val("6");
 					$(".PPR").val("0");
 					$(".Int").val("-1");
 					$(".fumble").val("-2");

 					$(".FG019").val("3"); //Kicking
 					$(".FG2029").val("3");
 					$(".FG3039").val("3");
 					$(".FG4049").val("4");
 					$(".FG50").val("5");
 					$(".PAT").val("1");
 					
 					$(".safety").val("2"); //Defense poitns
 					$(".DefTD").val("6");
 					$(".BlockKick").val("2");
 					$(".fumbrecovery").val("2");
 					$(".pick").val("2");
 					$(".sack").val("1");
 					$(".pts0").val("10");
 					$(".pts16").val("7");
 					$(".pts713").val("4");
 					$(".pts1420").val("1");
 					$(".pts2127").val("0");
 					$(".pts28").val("-4");



 					if($(".LeagueType").val() == 1)
 					{
 					$(".PPR").val("1");
 					}


 				}
 				

 			}

 		if($(".website").val() == 1)//ESPN
 			{
 				if($(".LeagueType").val() == 0 || $(".LeagueType").val() == 1 )
 				{
 					if(parseFloat($(".numteamspreset").val()) > 0)
 					{
 						$(".numTeams").val($(".numteamspreset").val());
 					}
 				else{
 					$(".numTeams").val("10");//starters yahoo stand
 				}
 					$(".QBstart").val("1");
 					$(".RBstart").val("2");
 					$(".WRstart").val("3");
 					$(".TEstart").val("1");
 					$(".Kstart").val("1");
 					$(".Dstart").val("1");
 					$(".Bench").val("6");
 				

 

 					$(".completions").val("0"); //offense poitns
 					$(".Rushyds").val("10");
 					$(".Receiveyds").val("10");
 					$(".Passyds").val("25");
 					$(".PassTD").val("4");
 					$(".RushTD").val("6");
 					$(".ReceiveTD").val("6");
 					$(".PPR").val("0");
 					$(".Int").val("-2");
 					$(".fumble").val("-2");

 					$(".FG019").val("3"); //Kicking
 					$(".FG2029").val("3");
 					$(".FG3039").val("3");
 					$(".FG4049").val("4");
 					$(".FG50").val("5");
 					$(".PAT").val("1");
 					
 					$(".safety").val("2"); //Defense poitns
 					$(".DefTD").val("6");
 					$(".BlockKick").val("2");
 					$(".fumbrecovery").val("2");
 					$(".pick").val("2");
 					$(".sack").val("1");
 					$(".pts0").val("5");
 					$(".pts16").val("4");
 					$(".pts713").val("3");
 					$(".pts1420").val("1");
 					$(".pts2127").val("0");
 					$(".pts28").val("-3");



 					if($(".LeagueType").val() == 1)
 					{
 					$(".PPR").val("1");
 					}


 				}
 			}

 		if($(".website").val() == 2)//NFL.com
 			{
 				if($(".LeagueType").val() == 0 || $(".LeagueType").val() == 1 )
 				{
 					if(parseFloat($(".numteamspreset").val()) > 0)
 					{
 						$(".numTeams").val($(".numteamspreset").val());
 					}
 				else{
 					$(".numTeams").val("10");//starters yahoo stand
 				}
 					$(".QBstart").val("1");
 					$(".RBstart").val("2");
 					$(".WRstart").val("3");
 					$(".TEstart").val("1");
 					$(".Kstart").val("1");
 					$(".Dstart").val("1");
 					$(".Bench").val("6");
 				

 

 					$(".completions").val("0"); //offense poitns
 					$(".Rushyds").val("10");
 					$(".Receiveyds").val("10");
 					$(".Passyds").val("25");
 					$(".PassTD").val("4");
 					$(".RushTD").val("6");
 					$(".ReceiveTD").val("6");
 					$(".PPR").val("0");
 					$(".Int").val("-2");
 					$(".fumble").val("-2");

 					$(".FG019").val("3"); //Kicking
 					$(".FG2029").val("3");
 					$(".FG3039").val("3");
 					$(".FG4049").val("3");
 					$(".FG50").val("5");
 					$(".PAT").val("1");
 					
 					$(".safety").val("2"); //Defense poitns
 					$(".DefTD").val("6");
 					$(".BlockKick").val("2");
 					$(".fumbrecovery").val("2");
 					$(".pick").val("2");
 					$(".sack").val("1");
 					$(".pts0").val("10");
 					$(".pts16").val("7");
 					$(".pts713").val("4");
 					$(".pts1420").val("1");
 					$(".pts2127").val("0");
 					$(".pts28").val("-4");



 					if($(".LeagueType").val() == 1)
 					{
 					$(".PPR").val("1");
 					}


 				}
 			}

 		if($(".website").val() == 3)//CBSsports
 			{
 				if($(".LeagueType").val() == 0 || $(".LeagueType").val() == 1 )
 				{
 					if(parseFloat($(".numteamspreset").val()) > 0)
 					{
 						$(".numTeams").val($(".numteamspreset").val());
 					}
 				else{
 					$(".numTeams").val("10");//starters yahoo stand
 				}
 					$(".QBstart").val("1");
 					$(".RBstart").val("2");
 					$(".WRstart").val("3");
 					$(".TEstart").val("1");
 					$(".Kstart").val("1");
 					$(".Dstart").val("1");
 					$(".Bench").val("6");
 				

 

 					$(".completions").val("0"); //offense poitns
 					$(".Rushyds").val("10");
 					$(".Receiveyds").val("10");
 					$(".Passyds").val("25");
 					$(".PassTD").val("4");
 					$(".RushTD").val("6");
 					$(".ReceiveTD").val("6");
 					$(".PPR").val("0");
 					$(".Int").val("-2");
 					$(".fumble").val("-2");

 					$(".FG019").val("3"); //Kicking
 					$(".FG2029").val("3");
 					$(".FG3039").val("3");
 					$(".FG4049").val("3");
 					$(".FG50").val("5");
 					$(".PAT").val("1");
 					
 					$(".safety").val("2"); //Defense poitns
 					$(".DefTD").val("6");
 					$(".BlockKick").val("2");
 					$(".fumbrecovery").val("2");
 					$(".pick").val("2");
 					$(".sack").val("1");
 					$(".pts0").val("10");
 					$(".pts16").val("7");
 					$(".pts713").val("4");
 					$(".pts1420").val("1");
 					$(".pts2127").val("0");
 					$(".pts28").val("-4");



 					if($(".LeagueType").val() == 1)
 					{
 					$(".PPR").val("1");
 					}

 			}

 		}


    }

    // Execute on load
    checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);

    $(".rightarrow").click(function(){
    	if($(".sec").is(":animated")){
					return false;
		}
    	else if($(this).parent().parent().hasClass("leaguesection"))
    	{
    		var slider = $(".passingsection");
		
			$(".active").toggleClass("span_9_of_12", 1000);
			$(".active").hide(200);
			$(".active").removeClass("active");
			slider.removeClass("span_1_of_12");
			slider.show();
			slider.css("display","block");
			slider.toggleClass("span_9_of_12", 1000);
			slider.addClass("active");
	


    	}

    	else if($(this).parent().parent().hasClass("passingsection"))
    	{

    		
    		var slider = $(".rushingsection");
		
			$(".active").toggleClass("span_9_of_12", 1000);
			$(".active").hide(200);
			$(".active").removeClass("active");
			slider.removeClass("span_1_of_12");
			slider.show();
			slider.css("display","block");
			slider.toggleClass("span_9_of_12", 1000);
			slider.addClass("active");
			$(".navbar").css("background-color", "#efccff");
    	}

    })

    	 $(".leftarrow").click(function(){
    	 if($(".sec").is(":animated")){
					return false;
		}
    	if($(this).parent().parent().hasClass("passingsection"))
    	{
    		var slider = $(".leaguesection");
			
			$(".active").toggleClass("span_9_of_12", 1000);
			$(".active").hide(200);
			$(".active").removeClass("active");
			slider.removeClass("span_1_of_12");
			slider.show();
			slider.css("display","block");
			slider.toggleClass("span_9_of_12", 1000);
			slider.addClass("active");
	


    	}
    	else if($(this).parent().parent().hasClass("rushingsection"))
    	{
    			
    		var slider = $(".passingsection");
		
			$(".active").toggleClass("span_9_of_12", 1000);
			$(".active").hide(200);
			$(".active").removeClass("active");
			slider.removeClass("span_1_of_12");
			slider.show();
			slider.css("display","block");
			slider.toggleClass("span_9_of_12", 1000);
			slider.addClass("active");
			$(".navbar").css("background-color", "#cb9ae0");
    	}
    });

	$(".bar").click(function(){
		if($(this).hasClass("rushingbar"))
		{
			$(".navbar").css("background-color", "#efccff");
		}
		else{
			$(".navbar").css("background-color", "#cb9ae0");
		}

		var slider = $(this).next();
		var checker = $(".active");
		if($(".sec").is(":animated")){
					return false;
		}

		if(slider.hasClass("active")){
			return false;
		}
		else if($(".sec").hasClass("active")){
			$(".active").toggleClass("span_9_of_12", 1000);
			$(".active").hide(200);
			$(".active").removeClass("active");
	
			slider.removeClass("span_1_of_12");
			slider.show();
		slider.css("display","block");
		slider.toggleClass("span_9_of_12", 1000);
		slider.addClass("active");
		
		}

		return false;
	});




	var playerArray = new Array(100);

	/*var player = [
		
		{
			name:'Mccoy', 
			age: 22, 
			rush: 24,
			passes: 50
		},
		{name: ''}

		];

	$('select').append(players[4].name);*/

	/*//OFFENSIVE PLAYER
	playerArray[0] = new Array(17);
	playerArray[0][0] = 0;//COMPLETIONS
	playerArray[0][1] = 0;//PASSING YARDS
	playerArray[0][2] = 0;//PASSING TOUCHDOWNS
	playerArray[0][3] = 0;//INTERCEPTIONS
	playerArray[0][4] = 1402;//RUSH YARDS
	playerArray[0][5] = 9;//RUSHING TOUCHDOWNS
	playerArray[0][6] = 42;//RECEPTIONS
	playerArray[0][7] = 342;//RECEIVING YARDS
	playerArray[0][8] = 3;//RECEIVING TOUCHDOWNS
	playerArray[0][9] = 0;//FUMBLES
	playerArray[0][10] = 0;//TOTAL POINTS
	playerArray[0][11] = 0;//BASELINE 
	playerArray[0][12] = "Lesean Mccoy";//NAME
	playerArray[0][13] = "RB"; //POSITION
	playerArray[0][14] = "eagles"; //TEAM
	playerArray[0][15] = "Images/Lesean-Mccoy.png";//PIC
	playerArray[0][16] = "LesanMccoy";


	//Kicker
	playerArray[0] = new Array(13);
	playerArray[0][0] = 0;//0-19 FG 
	playerArray[0][1] = 0;//20-29 FG
	playerArray[0][2] = 0;//30-39 FG
	playerArray[0][3] = 0;//40-49 FG
	playerArray[0][4] = 1402;//50+ FG
	playerArray[0][5] = 9;//PAT
	playerArray[0][6] = 0;//TOTAL POINTS
	playerArray[0][7] = 0;//BASELINE 
	playerArray[0][8] = "Lesean Mccoy";//NAME
	playerArray[0][9] = "K"; //POSITION
	playerArray[0][10] = "eagles"; //TEAM
	playerArray[0][11] = "Images/Lesean-Mccoy.png";//PIC
	playerArray[0][12] = "LesanMccoy";

	//DEFENSE
	playerArray[0] = new Array(14);
	playerArray[0][0] = 0;//PTS ALLOW
	playerArray[0][1] = 0;//SACK
	playerArray[0][2] = 0;//SAFE
	playerArray[0][3] = 0;//INT
	playerArray[0][4] = 0;//FUM REC
	playerArray[0][5] = 0;//TD
	playerArray[0][6] = 0;//BLK KICK
	playerArray[0][7] = 0;//TOTAL POINTS
	playerArray[0][8] = 0;//BASELINE 
	playerArray[0][9] = "Lesean Mccoy";//NAME
	playerArray[0][10] = "D/ST"; //POSITION
	playerArray[0][11] = "eagles"; //TEAM
	playerArray[0][12] = "Images/Lesean-Mccoy.png";//PIC
	playerArray[0][13] = "LesanMccoy";*/



playerArray[0] = new Array(17);
	playerArray[0][0] = 0;//COMPLETIONS
	playerArray[0][1] = 0;//PASSING YARDS
	playerArray[0][2] = 0;//PASSING TOUCHDOWNS
	playerArray[0][3] = 0;//INTERCEPTIONS
	playerArray[0][4] = 1149;//RUSH YARDS
	playerArray[0][5] = 11.9;//RUSHING TOUCHDOWNS
	playerArray[0][6] = 72;//RECEPTIONS
	playerArray[0][7] = 630;//RECEIVING YARDS
	playerArray[0][8] = 2.8;//RECEIVING TOUCHDOWNS
	playerArray[0][9] = 4.1;//FUMBLES
	playerArray[0][10] = 0;//TOTAL POINTS
	playerArray[0][11] = 0;//BASELINE 
	playerArray[0][12] = "Jamaal Charles";//NAME
	playerArray[0][13] = "RB"; //POSITION
	playerArray[0][14] = "chiefs"; //TEAM
	playerArray[0][15] = "Images/Jamaal-Charles.png";//PIC
	playerArray[0][16] = "jamaalcharles";

playerArray[1] = new Array(17);
	playerArray[1][0] = 0;//COMPLETIONS
	playerArray[1][1] = 0;//PASSING YARDS
	playerArray[1][2] = 0;//PASSING TOUCHDOWNS
	playerArray[1][3] = 0;//INTERCEPTIONS
	playerArray[1][4] = 1291;//RUSH YARDS 129 + 80 + 64 + 25 + 6 - 6
	playerArray[1][5] = 10.2;//RUSHING TOUCHDOWNS
	playerArray[1][6] = 49.5;//RECEPTIONS
	playerArray[1][7] = 500.2;//RECEIVING YARDS
	playerArray[1][8] = 2.3;//RECEIVING TOUCHDOWNS
	playerArray[1][9] = 2.5;//FUMBLES
	playerArray[1][10] = 0;//TOTAL POINTS
	playerArray[1][11] = 0;//BASELINE 
	playerArray[1][12] = "Lesean McCoy";//NAME
	playerArray[1][13] = "RB"; //POSITION
	playerArray[1][14] = "eagles"; //TEAM
	playerArray[1][15] = "Images/Lesean-Mccoy.png";//PIC
	playerArray[1][16] = "leseanmccoy";


playerArray[2] = new Array(17);
	playerArray[2][0] = 0;//COMPLETIONS
	playerArray[2][1] = 0;//PASSING YARDS
	playerArray[2][2] = 0;//PASSING TOUCHDOWNS
	playerArray[2][3] = 0;//INTERCEPTIONS
	playerArray[2][4] = 1436;//RUSH YARDS
	playerArray[2][5] = 11;//RUSHING TOUCHDOWNS
	playerArray[2][6] = 50.6;//RECEPTIONS
	playerArray[2][7] = 421;//RECEIVING YARDS
	playerArray[2][8] = 1.6;//RECEIVING TOUCHDOWNS
	playerArray[2][9] = 5.4;//FUMBLES
	playerArray[2][10] = 0;//TOTAL POINTS
	playerArray[2][11] = 0;//BASELINE 
	playerArray[2][12] = "Adrian Peterson";//NAME
	playerArray[2][13] = "RB"; //POSITION
	playerArray[2][14] = "vikings"; //TEAM
	playerArray[2][15] = "Images/Adrian-Peterson.png";//PIC
	playerArray[2][16] = "adrianpeterson";


playerArray[3] = new Array(17);
	playerArray[3][0] = 0;//COMPLETIONS
	playerArray[3][1] = 0;//PASSING YARDS
	playerArray[3][2] = 0;//PASSING TOUCHDOWNS
	playerArray[3][3] = 0;//INTERCEPTIONS
	playerArray[3][4] = 1124;//RUSH YARDS
	playerArray[3][5] = 10.4;//RUSHING TOUCHDOWNS
	playerArray[3][6] = 45.8;//RECEPTIONS
	playerArray[3][7] = 354;//RECEIVING YARDS
	playerArray[3][8] = 1.6;//RECEIVING TOUCHDOWNS
	playerArray[3][9] = 2.9;//FUMBLES
	playerArray[3][10] = 0;//TOTAL POINTS
	playerArray[3][11] = 0;//BASELINE 
	playerArray[3][12] = "Eddie Lacy";//NAME
	playerArray[3][13] = "RB"; //POSITION
	playerArray[3][14] = "packers"; //TEAM
	playerArray[3][15] = "Images/Eddie-Lacy.png";//PIC
	playerArray[3][16] = "eddielacy";

playerArray[4] = new Array(17);
	playerArray[4][0] = 0;//COMPLETIONS
	playerArray[4][1] = 0;//PASSING YARDS
	playerArray[4][2] = 0;//PASSING TOUCHDOWNS
	playerArray[4][3] = 0;//INTERCEPTIONS
	playerArray[4][4] = 1233;//RUSH YARDS
	playerArray[4][5] = 8.4;//RUSHING TOUCHDOWNS
	playerArray[4][6] = 62.9;//RECEPTIONS
	playerArray[4][7] = 541;//RECEIVING YARDS
	playerArray[4][8] = 2;//RECEIVING TOUCHDOWNS
	playerArray[4][9] = 3.6;//FUMBLES
	playerArray[4][10] = 0;//TOTAL POINTS
	playerArray[4][11] = 0;//BASELINE 
	playerArray[4][12] = "Matt Forte";//NAME
	playerArray[4][13] = "RB"; //POSITION
	playerArray[4][14] = "bears"; //TEAM
	playerArray[4][15] = "Images/Matt-Forte.png";//PIC
	playerArray[4][16] = "mattforte";


playerArray[5] = new Array(17);
	playerArray[5][0] = 0;//COMPLETIONS
	playerArray[5][1] = 0;//PASSING YARDS
	playerArray[5][2] = 0;//PASSING TOUCHDOWNS
	playerArray[5][3] = 0;//INTERCEPTIONS
	playerArray[5][4] = 0;//RUSH YARDS
	playerArray[5][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[5][6] = 100;//RECEPTIONS
	playerArray[5][7] = 1480;//RECEIVING YARDS
	playerArray[5][8] = 12.6;//RECEIVING TOUCHDOWNS
	playerArray[5][9] = 1.3;//FUMBLES
	playerArray[5][10] = 0;//TOTAL POINTS
	playerArray[5][11] = 0;//BASELINE 
	playerArray[5][12] = "Calvin Johnson";//NAME
	playerArray[5][13] = "WR"; //POSITION
	playerArray[5][14] = "lions"; //TEAM
	playerArray[5][15] = "Images/Calvin-Johnson.png";//PIC
	playerArray[5][16] = "calvinjohnson";


playerArray[6] = new Array(17);
	playerArray[6][0] = 0;//COMPLETIONS
	playerArray[6][1] = 0;//PASSING YARDS
	playerArray[6][2] = 0;//PASSING TOUCHDOWNS
	playerArray[6][3] = 0;//INTERCEPTIONS
	playerArray[6][4] = 0;//RUSH YARDS
	playerArray[6][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[6][6] = 91.2;//RECEPTIONS
	playerArray[6][7] = 1154;//RECEIVING YARDS
	playerArray[6][8] = 11.1;//RECEIVING TOUCHDOWNS
	playerArray[6][9] = 0.6;//FUMBLES
	playerArray[6][10] = 0;//TOTAL POINTS
	playerArray[6][11] = 0;//BASELINE 
	playerArray[6][12] = "Jimmy Graham";//NAME
	playerArray[6][13] = "TE"; //POSITION
	playerArray[6][14] = "saints"; //TEAM
	playerArray[6][15] = "Images/Jimmy-Graham.png";//PIC
	playerArray[6][16] = "jimmygraham";


playerArray[7] = new Array(17);
	playerArray[7][0] = 0;//COMPLETIONS
	playerArray[7][1] = 0;//PASSING YARDS
	playerArray[7][2] = 0;//PASSING TOUCHDOWNS
	playerArray[7][3] = 0;//INTERCEPTIONS
	playerArray[7][4] = 1014;//RUSH YARDS
	playerArray[7][5] = 7.4;//RUSHING TOUCHDOWNS
	playerArray[7][6] = 51.6;//RECEPTIONS
	playerArray[7][7] = 458;//RECEIVING YARDS
	playerArray[7][8] = 1.5;//RECEIVING TOUCHDOWNS
	playerArray[7][9] = 4.4;//FUMBLES
	playerArray[7][10] = 0;//TOTAL POINTS
	playerArray[7][11] = 0;//BASELINE 
	playerArray[7][12] = "Montee Ball";//NAME
	playerArray[7][13] = "RB"; //POSITION
	playerArray[7][14] = "broncos"; //TEAM
	playerArray[7][15] = "Images/Montee-Ball.png";//PIC
	playerArray[7][16] = "monteeball";


playerArray[8] = new Array(17);
	playerArray[8][0] = 0;//COMPLETIONS
	playerArray[8][1] = 0;//PASSING YARDS
	playerArray[8][2] = 0;//PASSING TOUCHDOWNS
	playerArray[8][3] = 0;//INTERCEPTIONS
	playerArray[8][4] = 1156;//RUSH YARDS
	playerArray[8][5] = 10.4;//RUSHING TOUCHDOWNS
	playerArray[8][6] = 25.9;//RECEPTIONS
	playerArray[8][7] = 223;//RECEIVING YARDS
	playerArray[8][8] = 1.1;//RECEIVING TOUCHDOWNS
	playerArray[8][9] = 3.5;//FUMBLES
	playerArray[8][10] = 0;//TOTAL POINTS
	playerArray[8][11] = 0;//BASELINE 
	playerArray[8][12] = "Marshawn Lynch";//NAME
	playerArray[8][13] = "RB"; //POSITION
	playerArray[8][14] = "seahawks"; //TEAM
	playerArray[8][15] = "Images/Marshawn-Lynch.png";//PIC
	playerArray[8][16] = "marshawnlynch";



playerArray[9] = new Array(17);
	playerArray[9][0] = 0;//COMPLETIONS
	playerArray[9][1] = 0;//PASSING YARDS
	playerArray[9][2] = 0;//PASSING TOUCHDOWNS
	playerArray[9][3] = 0;//INTERCEPTIONS
	playerArray[9][4] = 1229;//RUSH YARDS
	playerArray[9][5] = 8.1;//RUSHING TOUCHDOWNS
	playerArray[9][6] = 47;//RECEPTIONS
	playerArray[9][7] = 377;//RECEIVING YARDS
	playerArray[9][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[9][9] = 2.2;//FUMBLES
	playerArray[9][10] = 0;//TOTAL POINTS
	playerArray[9][11] = 0;//BASELINE 
	playerArray[9][12] = "Arian Foster";//NAME
	playerArray[9][13] = "RB"; //POSITION
	playerArray[9][14] = "texans"; //TEAM
	playerArray[9][15] = "Images/Arian-Foster.png";//PIC
	playerArray[9][16] = "arianfoster";



playerArray[10] = new Array(17);
	playerArray[10][0] = 0;//COMPLETIONS
	playerArray[10][1] = 0;//PASSING YARDS
	playerArray[10][2] = 0;//PASSING TOUCHDOWNS
	playerArray[10][3] = 0;//INTERCEPTIONS
	playerArray[10][4] = 0;//RUSH YARDS
	playerArray[10][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[10][6] = 107;//RECEPTIONS
	playerArray[10][7] = 1377;//RECEIVING YARDS
	playerArray[10][8] = 11.4;//RECEIVING TOUCHDOWNS
	playerArray[10][9] = 1.6;//FUMBLES
	playerArray[10][10] = 0;//TOTAL POINTS
	playerArray[10][11] = 0;//BASELINE 
	playerArray[10][12] = "Demaryius Thomas";//NAME
	playerArray[10][13] = "WR"; //POSITION
	playerArray[10][14] = "broncos"; //TEAM
	playerArray[10][15] = "Images/Demaryius-Thomas.png";//PIC
	playerArray[10][16] = "demaryiusthomas";


playerArray[11] = new Array(17);
	playerArray[11][0] = 0;//COMPLETIONS
	playerArray[11][1] = 0;//PASSING YARDS
	playerArray[11][2] = 0;//PASSING TOUCHDOWNS
	playerArray[11][3] = 0;//INTERCEPTIONS
	playerArray[11][4] = 0;//RUSH YARDS
	playerArray[11][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[11][6] = 107;//RECEPTIONS
	playerArray[11][7] = 1460;//RECEIVING YARDS
	playerArray[11][8] = 10.9;//RECEIVING TOUCHDOWNS
	playerArray[11][9] = 2.4;//FUMBLES
	playerArray[11][10] = 0;//TOTAL POINTS
	playerArray[11][11] = 0;//BASELINE 
	playerArray[11][12] = "Dez Bryant";//NAME
	playerArray[11][13] = "WR"; //POSITION
	playerArray[11][14] = "cowboys"; //TEAM
	playerArray[11][15] = "Images/Dez-Bryant.png";//PIC
	playerArray[11][16] = "dezbryant";


playerArray[12] = new Array(17);
	playerArray[12][0] = 0;//COMPLETIONS
	playerArray[12][1] = 0;//PASSING YARDS
	playerArray[12][2] = 0;//PASSING TOUCHDOWNS
	playerArray[12][3] = 0;//INTERCEPTIONS
	playerArray[12][4] = 0;//RUSH YARDS
	playerArray[12][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[12][6] = 89.5;//RECEPTIONS
	playerArray[12][7] = 1296;//RECEIVING YARDS
	playerArray[12][8] = 10.2;//RECEIVING TOUCHDOWNS
	playerArray[12][9] = 1;//FUMBLES
	playerArray[12][10] = 0;//TOTAL POINTS
	playerArray[12][11] = 0;//BASELINE 
	playerArray[12][12] = "A.J. Green";//NAME
	playerArray[12][13] = "WR"; //POSITION
	playerArray[12][14] = "bengals"; //TEAM
	playerArray[12][15] = "Images/Aj-Green.png";//PIC
	playerArray[12][16] = "ajgreen";
playerArray[13] = new Array(17);
	playerArray[13][0] = 0;//COMPLETIONS
	playerArray[13][1] = 0;//PASSING YARDS
	playerArray[13][2] = 0;//PASSING TOUCHDOWNS
	playerArray[13][3] = 0;//INTERCEPTIONS
	playerArray[13][4] = 0;//RUSH YARDS
	playerArray[13][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[13][6] = 92.4;//RECEPTIONS
	playerArray[13][7] = 1280;//RECEIVING YARDS
	playerArray[13][8] = 10.8;//RECEIVING TOUCHDOWNS
	playerArray[13][9] = 0.6;//FUMBLES
	playerArray[13][10] = 0;//TOTAL POINTS
	playerArray[13][11] = 0;//BASELINE 
	playerArray[13][12] = "Brandon Marshall";//NAME
	playerArray[13][13] = "WR"; //POSITION
	playerArray[13][14] = "bears"; //TEAM
	playerArray[13][15] = "Images/Brandon-Marshall.png";//PIC
	playerArray[13][16] = "brandonmarshall";


playerArray[14] = new Array(17);
	playerArray[14][0] = 465;//COMPLETIONS
	playerArray[14][1] = 5395;//PASSING YARDS
	playerArray[14][2] = 43.8;//PASSING TOUCHDOWNS
	playerArray[14][3] = 13.2;//INTERCEPTIONS
	playerArray[14][4] = -15.2;//RUSH YARDS
	playerArray[14][5] = 1.3;//RUSHING TOUCHDOWNS
	playerArray[14][6] = 0;//RECEPTIONS
	playerArray[14][7] = 0;//RECEIVING YARDS
	playerArray[14][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[14][9] = 8.9;//FUMBLES
	playerArray[14][10] = 0;//TOTAL POINTS
	playerArray[14][11] = 0;//BASELINE 
	playerArray[14][12] = "Peyton Manning";//NAME
	playerArray[14][13] = "QB"; //POSITION
	playerArray[14][14] = "broncos"; //TEAM
	playerArray[14][15] = "Images/Peyton-Manning.png";//PIC
	playerArray[14][16] = "peytonmanning";


playerArray[15] = new Array(17);
	playerArray[15][0] = 0;//COMPLETIONS
	playerArray[15][1] = 0;//PASSING YARDS
	playerArray[15][2] = 0;//PASSING TOUCHDOWNS
	playerArray[15][3] = 0;//INTERCEPTIONS
	playerArray[15][4] = 1111;//RUSH YARDS
	playerArray[15][5] = 9.8;//RUSHING TOUCHDOWNS
	playerArray[15][6] = 54.8;//RECEPTIONS
	playerArray[15][7] = 451;//RECEIVING YARDS
	playerArray[15][8] = 1.4;//RECEIVING TOUCHDOWNS
	playerArray[15][9] = 3.6;//FUMBLES
	playerArray[15][10] = 0;//TOTAL POINTS
	playerArray[15][11] = 0;//BASELINE 
	playerArray[15][12] = "DeMarco Murray";//NAME
	playerArray[15][13] = "RB"; //POSITION
	playerArray[15][14] = "cowboys"; //TEAM
	playerArray[15][15] = "Images/Demarco-Murray.png";//PIC
	playerArray[15][16] = "demarcomurray";



playerArray[16] = new Array(17);
	playerArray[16][0] = 0;//COMPLETIONS
	playerArray[16][1] = 0;//PASSING YARDS
	playerArray[16][2] = 0;//PASSING TOUCHDOWNS
	playerArray[16][3] = 0;//INTERCEPTIONS
	playerArray[16][4] = 960;//RUSH YARDS
	playerArray[16][5] = 5.6;//RUSHING TOUCHDOWNS
	playerArray[16][6] = 49.2;//RECEPTIONS
	playerArray[16][7] = 418;//RECEIVING YARDS
	playerArray[16][8] = 2.2;//RECEIVING TOUCHDOWNS
	playerArray[16][9] = 2.4;//FUMBLES
	playerArray[16][10] = 0;//TOTAL POINTS
	playerArray[16][11] = 0;//BASELINE 
	playerArray[16][12] = "Le&apos;Veon Bell";//NAME
	playerArray[16][13] = "RB"; //POSITION
	playerArray[16][14] = "steelers"; //TEAM
	playerArray[16][15] = "Images/Leveon-Bell.png";//PIC
	playerArray[16][16] = "leveonbell";


playerArray[17] = new Array(17);
	playerArray[17][0] = 446;//COMPLETIONS
	playerArray[17][1] = 5277;//PASSING YARDS
	playerArray[17][2] = 37.9;//PASSING TOUCHDOWNS
	playerArray[17][3] = 16.5;//INTERCEPTIONS
	playerArray[17][4] = 47.6;//RUSH YARDS
	playerArray[17][5] = 0.9;//RUSHING TOUCHDOWNS
	playerArray[17][6] = 0;//RECEPTIONS
	playerArray[17][7] = 0;//RECEIVING YARDS
	playerArray[17][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[17][9] = 7.7;//FUMBLES
	playerArray[17][10] = 0;//TOTAL POINTS
	playerArray[17][11] = 0;//BASELINE 
	playerArray[17][12] = "Drew Brees";//NAME
	playerArray[17][13] = "QB"; //POSITION
	playerArray[17][14] = "saints"; //TEAM
	playerArray[17][15] = "Images/Drew-Brees.png";//PIC
	playerArray[17][16] = "drewbrees";


playerArray[18] = new Array(17);
	playerArray[18][0] = 0;//COMPLETIONS
	playerArray[18][1] = 0;//PASSING YARDS
	playerArray[18][2] = 0;//PASSING TOUCHDOWNS
	playerArray[18][3] = 0;//INTERCEPTIONS
	playerArray[18][4] = 9.4;//RUSH YARDS
	playerArray[18][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[18][6] = 106;//RECEPTIONS
	playerArray[18][7] = 1371;//RECEIVING YARDS
	playerArray[18][8] = 9.9;//RECEIVING TOUCHDOWNS
	playerArray[18][9] = 1.4;//FUMBLES
	playerArray[18][10] = 0;//TOTAL POINTS
	playerArray[18][11] = 0;//BASELINE 
	playerArray[18][12] = "Julio Jones";//NAME
	playerArray[18][13] = "WR"; //POSITION
	playerArray[18][14] = "falcons"; //TEAM
	playerArray[18][15] = "Images/Julio-Jones.png";//PIC
	playerArray[18][16] = "juliojones";


playerArray[19] = new Array(17);
	playerArray[19][0] = 0;//COMPLETIONS
	playerArray[19][1] = 0;//PASSING YARDS
	playerArray[19][2] = 0;//PASSING TOUCHDOWNS
	playerArray[19][3] = 0;//INTERCEPTIONS
	playerArray[19][4] = 1063;//RUSH YARDS
	playerArray[19][5] = 7.9;//RUSHING TOUCHDOWNS
	playerArray[19][6] = 49.5;//RECEPTIONS
	playerArray[19][7] = 419;//RECEIVING YARDS
	playerArray[19][8] = 1.2;//RECEIVING TOUCHDOWNS
	playerArray[19][9] = 3.2;//FUMBLES
	playerArray[19][10] = 0;//TOTAL POINTS
	playerArray[19][11] = 0;//BASELINE 
	playerArray[19][12] = "Giovani Bernard";//NAME
	playerArray[19][13] = "RB"; //POSITION
	playerArray[19][14] = "bengals"; //TEAM
	playerArray[19][15] = "Images/Giovani-Bernard.png";//PIC
	playerArray[19][16] = "giovanibernard";


playerArray[20] = new Array(17);
	playerArray[20][0] = 0;//COMPLETIONS
	playerArray[20][1] = 0;//PASSING YARDS
	playerArray[20][2] = 0;//PASSING TOUCHDOWNS
	playerArray[20][3] = 0;//INTERCEPTIONS
	playerArray[20][4] = 93.6;//RUSH YARDS
	playerArray[20][5] = 0.3;//RUSHING TOUCHDOWNS
	playerArray[20][6] = 81.3;//RECEPTIONS
	playerArray[20][7] = 1164;//RECEIVING YARDS
	playerArray[20][8] = 8.3;//RECEIVING TOUCHDOWNS
	playerArray[20][9] = 2.0;//FUMBLES
	playerArray[20][10] = 0;//TOTAL POINTS
	playerArray[20][11] = 0;//BASELINE 
	playerArray[20][12] = "Alshon Jeffery";//NAME
	playerArray[20][13] = "WR"; //POSITION
	playerArray[20][14] = "bears"; //TEAM
	playerArray[20][15] = "Images/Alshon-Jeffery.png";//PIC
	playerArray[20][16] = "alshonjeffery";



playerArray[21] = new Array(17);
	playerArray[21][0] = 390;//COMPLETIONS
	playerArray[21][1] = 4557;//PASSING YARDS
	playerArray[21][2] = 31.4;//PASSING TOUCHDOWNS
	playerArray[21][3] = 11;//INTERCEPTIONS
	playerArray[21][4] = 272;//RUSH YARDS
	playerArray[21][5] = 1.7;//RUSHING TOUCHDOWNS
	playerArray[21][6] = 0;//RECEPTIONS
	playerArray[21][7] = 0;//RECEIVING YARDS
	playerArray[21][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[21][9] = 8.8;//FUMBLES
	playerArray[21][10] = 0;//TOTAL POINTS
	playerArray[21][11] = 0;//BASELINE 
	playerArray[21][12] = "Aaron Rodgers";//NAME
	playerArray[21][13] = "QB"; //POSITION
	playerArray[21][14] = "packers"; //TEAM
	playerArray[21][15] = "Images/Aaron-Rodgers.png";//PIC
	playerArray[21][16] = "aaronrodgers";


playerArray[22] = new Array(17);
	playerArray[22][0] = 0;//COMPLETIONS
	playerArray[22][1] = 0;//PASSING YARDS
	playerArray[22][2] = 0;//PASSING TOUCHDOWNS
	playerArray[22][3] = 0;//INTERCEPTIONS
	playerArray[22][4] = 0;//RUSH YARDS
	playerArray[22][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[22][6] = 95.7;//RECEPTIONS
	playerArray[22][7] = 1281;//RECEIVING YARDS
	playerArray[22][8] = 9.8;//RECEIVING TOUCHDOWNS
	playerArray[22][9] = 0.6;//FUMBLES
	playerArray[22][10] = 0;//TOTAL POINTS
	playerArray[22][11] = 0;//BASELINE 
	playerArray[22][12] = "Jordy Nelson";//NAME
	playerArray[22][13] = "WR"; //POSITION
	playerArray[22][14] = "packers"; //TEAM
	playerArray[22][15] = "Images/Jordy-Nelson.png";//PIC
	playerArray[22][16] = "jordynelson";


playerArray[23] = new Array(17);
	playerArray[23][0] = 0;//COMPLETIONS
	playerArray[23][1] = 0;//PASSING YARDS
	playerArray[23][2] = 0;//PASSING TOUCHDOWNS
	playerArray[23][3] = 0;//INTERCEPTIONS
	playerArray[23][4] = 1167;//RUSH YARDS
	playerArray[23][5] = 9;//RUSHING TOUCHDOWNS
	playerArray[23][6] = 12.7;//RECEPTIONS
	playerArray[23][7] = 106;//RECEIVING YARDS
	playerArray[23][8] = 0.5;//RECEIVING TOUCHDOWNS
	playerArray[23][9] = 4.4;//FUMBLES
	playerArray[23][10] = 0;//TOTAL POINTS
	playerArray[23][11] = 0;//BASELINE 
	playerArray[23][12] = "Alfred Morris";//NAME
	playerArray[23][13] = "RB"; //POSITION
	playerArray[23][14] = "redskins"; //TEAM
	playerArray[23][15] = "Images/Alfred-Morris.png";//PIC
	playerArray[23][16] = "alfredmorris";


playerArray[24] = new Array(17);
	playerArray[24][0] = 0;//COMPLETIONS
	playerArray[24][1] = 0;//PASSING YARDS
	playerArray[24][2] = 0;//PASSING TOUCHDOWNS
	playerArray[24][3] = 0;//INTERCEPTIONS
	playerArray[24][4] = 1018;//RUSH YARDS
	playerArray[24][5] = 8.2;//RUSHING TOUCHDOWNS
	playerArray[24][6] = 44.7;//RECEPTIONS
	playerArray[24][7] = 372;//RECEIVING YARDS
	playerArray[24][8] = 1.1;//RECEIVING TOUCHDOWNS
	playerArray[24][9] = 2.5;//FUMBLES
	playerArray[24][10] = 0;//TOTAL POINTS
	playerArray[24][11] = 0;//BASELINE 
	playerArray[24][12] = "Zac Stacy";//NAME
	playerArray[24][13] = "RB"; //POSITION
	playerArray[24][14] = "rams"; //TEAM
	playerArray[24][15] = "Images/Zac-Stacy.png";//PIC
	playerArray[24][16] = "zacstacy";


playerArray[25] = new Array(17);
	playerArray[25][0] = 0;//COMPLETIONS
	playerArray[25][1] = 0;//PASSING YARDS
	playerArray[25][2] = 0;//PASSING TOUCHDOWNS
	playerArray[25][3] = 0;//INTERCEPTIONS
	playerArray[25][4] = 1026;//RUSH YARDS
	playerArray[25][5] = 5.1;//RUSHING TOUCHDOWNS
	playerArray[25][6] = 50.1;//RECEPTIONS
	playerArray[25][7] = 499;//RECEIVING YARDS
	playerArray[25][8] = 1.3;//RECEIVING TOUCHDOWNS
	playerArray[25][9] = 2.6;//FUMBLES
	playerArray[25][10] = 0;//TOTAL POINTS
	playerArray[25][11] = 0;//BASELINE 
	playerArray[25][12] = "Andre Ellington";//NAME
	playerArray[25][13] = "RB"; //POSITION
	playerArray[25][14] = "cardinals"; //TEAM
	playerArray[25][15] = "Images/Andre-Ellington.png";//PIC
	playerArray[25][16] = "andreellington";


playerArray[26] = new Array(17);
	playerArray[26][0] = 0;//COMPLETIONS
	playerArray[26][1] = 0;//PASSING YARDS
	playerArray[26][2] = 0;//PASSING TOUCHDOWNS
	playerArray[26][3] = 0;//INTERCEPTIONS
	playerArray[26][4] = 42.5;//RUSH YARDS
	playerArray[26][5] = 0.1;//RUSHING TOUCHDOWNS
	playerArray[26][6] = 104;//RECEPTIONS
	playerArray[26][7] = 1342;//RECEIVING YARDS
	playerArray[26][8] = 7.2;//RECEIVING TOUCHDOWNS
	playerArray[26][9] = 0.7;//FUMBLES
	playerArray[26][10] = 0;//TOTAL POINTS
	playerArray[26][11] = 0;//BASELINE 
	playerArray[26][12] = "Antonio Brown";//NAME
	playerArray[26][13] = "WR"; //POSITION
	playerArray[26][14] = "steelers"; //TEAM
	playerArray[26][15] = "Images/Antonio-Brown.png";//PIC
	playerArray[26][16] = "antoniobrown";


playerArray[27] = new Array(17);
	playerArray[27][0] = 0;//COMPLETIONS
	playerArray[27][1] = 0;//PASSING YARDS
	playerArray[27][2] = 0;//PASSING TOUCHDOWNS
	playerArray[27][3] = 0;//INTERCEPTIONS
	playerArray[27][4] = 984;//RUSH YARDS
	playerArray[27][5] = 3.3;//RUSHING TOUCHDOWNS
	playerArray[27][6] = 46.8;//RECEPTIONS
	playerArray[27][7] = 378;//RECEIVING YARDS
	playerArray[27][8] = 0.8;//RECEIVING TOUCHDOWNS
	playerArray[27][9] = 4.1;//FUMBLES
	playerArray[27][10] = 0;//TOTAL POINTS
	playerArray[27][11] = 0;//BASELINE 
	playerArray[27][12] = "CJ Spiller";//NAME
	playerArray[27][13] = "RB"; //POSITION
	playerArray[27][14] = "bills"; //TEAM
	playerArray[27][15] = "Images/CJ-Spiller.png";//PIC
	playerArray[27][16] = "cjspiller";

playerArray[28] = new Array(17);
	playerArray[28][0] = 0;//COMPLETIONS
	playerArray[28][1] = 0;//PASSING YARDS
	playerArray[28][2] = 0;//PASSING TOUCHDOWNS
	playerArray[28][3] = 0;//INTERCEPTIONS
	playerArray[28][4] = 0;//RUSH YARDS
	playerArray[28][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[28][6] = 81.2;//RECEPTIONS
	playerArray[28][7] = 1061;//RECEIVING YARDS
	playerArray[28][8] = 8.7;//RECEIVING TOUCHDOWNS
	playerArray[28][9] = 1.0;//FUMBLES
	playerArray[28][10] = 0;//TOTAL POINTS
	playerArray[28][11] = 0;//BASELINE 
	playerArray[28][12] = "Keenan Allen";//NAME
	playerArray[28][13] = "WR"; //POSITION
	playerArray[28][14] = "chargers"; //TEAM
	playerArray[28][15] = "Images/Keenan-Allen.png";//PIC
	playerArray[28][16] = "keenanallen";



playerArray[29] = new Array(17);
	playerArray[29][0] = 0;//COMPLETIONS
	playerArray[29][1] = 0;//PASSING YARDS
	playerArray[29][2] = 0;//PASSING TOUCHDOWNS
	playerArray[29][3] = 0;//INTERCEPTIONS
	playerArray[29][4] = 1004;//RUSH YARDS
	playerArray[29][5] = 4.9;//RUSHING TOUCHDOWNS
	playerArray[29][6] = 29.6;//RECEPTIONS
	playerArray[29][7] = 241;//RECEIVING YARDS
	playerArray[29][8] = 0.7;//RECEIVING TOUCHDOWNS
	playerArray[29][9] = 2.6;//FUMBLES
	playerArray[29][10] = 0;//TOTAL POINTS
	playerArray[29][11] = 0;//BASELINE 
	playerArray[29][12] = "Ryan Mathews";//NAME
	playerArray[29][13] = "RB"; //POSITION
	playerArray[29][14] = "chargers"; //TEAM
	playerArray[29][15] = "Images/Ryan-Mathews.png";//PIC
	playerArray[29][16] = "ryanmathews";


playerArray[30] = new Array(17);
	playerArray[30][0] = 0;//COMPLETIONS
	playerArray[30][1] = 0;//PASSING YARDS
	playerArray[30][2] = 0;//PASSING TOUCHDOWNS
	playerArray[30][3] = 0;//INTERCEPTIONS
	playerArray[30][4] = 68.7;//RUSH YARDS
	playerArray[30][5] = 0.3;//RUSHING TOUCHDOWNS
	playerArray[30][6] = 82.9;//RECEPTIONS
	playerArray[30][7] = 1015;//RECEIVING YARDS
	playerArray[30][8] = 7.5;//RECEIVING TOUCHDOWNS
	playerArray[30][9] = 0.9;//FUMBLES
	playerArray[30][10] = 0;//TOTAL POINTS
	playerArray[30][11] = 0;//BASELINE 
	playerArray[30][12] = "Randall Cobb";//NAME
	playerArray[30][13] = "WR"; //POSITION
	playerArray[30][14] = "packers"; //TEAM
	playerArray[30][15] = "Images/Randall-Cobb.png";//PIC
	playerArray[30][16] = "randallcobb";


playerArray[31] = new Array(17);
	playerArray[31][0] = 0;//COMPLETIONS
	playerArray[31][1] = 0;//PASSING YARDS
	playerArray[31][2] = 0;//PASSING TOUCHDOWNS
	playerArray[31][3] = 0;//INTERCEPTIONS
	playerArray[31][4] = 1087;//RUSH YARDS
	playerArray[31][5] = 5.4;//RUSHING TOUCHDOWNS
	playerArray[31][6] = 33.9;//RECEPTIONS
	playerArray[31][7] = 322;//RECEIVING YARDS
	playerArray[31][8] = 1.1;//RECEIVING TOUCHDOWNS
	playerArray[31][9] = 3.0;//FUMBLES
	playerArray[31][10] = 0;//TOTAL POINTS
	playerArray[31][11] = 0;//BASELINE 
	playerArray[31][12] = "Doug Martin";//NAME
	playerArray[31][13] = "RB"; //POSITION
	playerArray[31][14] = "buccaneers"; //TEAM
	playerArray[31][15] = "Images/Doug-Martin.png";//PIC
	playerArray[31][16] = "dougmartin";


playerArray[32] = new Array(17);
	playerArray[32][0] = 0;//COMPLETIONS
	playerArray[32][1] = 0;//PASSING YARDS
	playerArray[32][2] = 0;//PASSING TOUCHDOWNS
	playerArray[32][3] = 0;//INTERCEPTIONS
	playerArray[32][4] = 0;//RUSH YARDS
	playerArray[32][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[32][6] = 76.9;//RECEPTIONS
	playerArray[32][7] = 1111;//RECEIVING YARDS
	playerArray[32][8] = 5.5;//RECEIVING TOUCHDOWNS
	playerArray[32][9] = 1.0;//FUMBLES
	playerArray[32][10] = 0;//TOTAL POINTS
	playerArray[32][11] = 0;//BASELINE 
	playerArray[32][12] = "Vincent Jackson";//NAME
	playerArray[32][13] = "WR"; //POSITION
	playerArray[32][14] = "buccaneers"; //TEAM
	playerArray[32][15] = "Images/Vincent-Jackson.png";//PIC
	playerArray[32][16] = "vincentjackson";


playerArray[33] = new Array(17);
	playerArray[33][0] = 0;//COMPLETIONS
	playerArray[33][1] = 0;//PASSING YARDS
	playerArray[33][2] = 0;//PASSING TOUCHDOWNS
	playerArray[33][3] = 0;//INTERCEPTIONS
	playerArray[33][4] = 1106;//RUSH YARDS
	playerArray[33][5] = 4.4;//RUSHING TOUCHDOWNS
	playerArray[33][6] = 34.8;//RECEPTIONS
	playerArray[33][7] = 290;//RECEIVING YARDS
	playerArray[33][8] = 1.0;//RECEIVING TOUCHDOWNS
	playerArray[33][9] = 4.7;//FUMBLES
	playerArray[33][10] = 0;//TOTAL POINTS
	playerArray[33][11] = 0;//BASELINE 
	playerArray[33][12] = "Toby Gerhart";//NAME
	playerArray[33][13] = "RB"; //POSITION
	playerArray[33][14] = "jaguars"; //TEAM
	playerArray[33][15] = "Images/Toby-Gerhart.png";//PIC
	playerArray[33][16] = "tobygerhart";


playerArray[34] = new Array(17);
	playerArray[34][0] = 0;//COMPLETIONS
	playerArray[34][1] = 0;//PASSING YARDS
	playerArray[34][2] = 0;//PASSING TOUCHDOWNS
	playerArray[34][3] = 0;//INTERCEPTIONS
	playerArray[34][4] = 878;//RUSH YARDS
	playerArray[34][5] = 8;//RUSHING TOUCHDOWNS
	playerArray[34][6] = 35.9;//RECEPTIONS
	playerArray[34][7] = 288;//RECEIVING YARDS
	playerArray[34][8] = 0.6;//RECEIVING TOUCHDOWNS
	playerArray[34][9] = 1.6;//FUMBLES
	playerArray[34][10] = 0;//TOTAL POINTS
	playerArray[34][11] = 0;//BASELINE 
	playerArray[34][12] = "Rashad Jennings";//NAME
	playerArray[34][13] = "RB"; //POSITION
	playerArray[34][14] = "giants"; //TEAM
	playerArray[34][15] = "Images/Rashad-Jennings.png";//PIC
	playerArray[34][16] = "rashadjennings";


playerArray[35] = new Array(17);
	playerArray[35][0] = 0;//COMPLETIONS
	playerArray[35][1] = 0;//PASSING YARDS
	playerArray[35][2] = 0;//PASSING TOUCHDOWNS
	playerArray[35][3] = 0;//INTERCEPTIONS
	playerArray[35][4] = 0;//RUSH YARDS
	playerArray[35][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[35][6] = 75.8;//RECEPTIONS
	playerArray[35][7] = 868;//RECEIVING YARDS
	playerArray[35][8] = 8.3;//RECEIVING TOUCHDOWNS
	playerArray[35][9] = 1.0;//FUMBLES
	playerArray[35][10] = 0;//TOTAL POINTS
	playerArray[35][11] = 0;//BASELINE 
	playerArray[35][12] = "Julius Thomas";//NAME
	playerArray[35][13] = "TE"; //POSITION
	playerArray[35][14] = "broncos"; //TEAM
	playerArray[35][15] = "Images/Julius-Thomas.png";//PIC
	playerArray[35][16] = "juliusthomas";


playerArray[36] = new Array(17);
	playerArray[36][0] = 0;//COMPLETIONS
	playerArray[36][1] = 0;//PASSING YARDS
	playerArray[36][2] = 0;//PASSING TOUCHDOWNS
	playerArray[36][3] = 0;//INTERCEPTIONS
	playerArray[36][4] = 931;//RUSH YARDS
	playerArray[36][5] = 6.6;//RUSHING TOUCHDOWNS
	playerArray[36][6] = 39.3;//RECEPTIONS
	playerArray[36][7] = 327;//RECEIVING YARDS
	playerArray[36][8] = 1.2;//RECEIVING TOUCHDOWNS
	playerArray[36][9] = 3.4;//FUMBLES
	playerArray[36][10] = 0;//TOTAL POINTS
	playerArray[36][11] = 0;//BASELINE 
	playerArray[36][12] = "Bishop Sankey";//NAME
	playerArray[36][13] = "RB"; //POSITION
	playerArray[36][14] = "titans"; //TEAM
	playerArray[36][15] = "Images/Bishop-Sankey.png";//PIC
	playerArray[36][16] = "bishopsankey";



playerArray[37] = new Array(17);
	playerArray[37][0] = 0;//COMPLETIONS
	playerArray[37][1] = 0;//PASSING YARDS
	playerArray[37][2] = 0;//PASSING TOUCHDOWNS
	playerArray[37][3] = 0;//INTERCEPTIONS
	playerArray[37][4] = 612;//RUSH YARDS
	playerArray[37][5] = 3;//RUSHING TOUCHDOWNS
	playerArray[37][6] = 58.2;//RECEPTIONS
	playerArray[37][7] = 502;//RECEIVING YARDS
	playerArray[37][8] = 1.5;//RECEIVING TOUCHDOWNS
	playerArray[37][9] = 3.1;//FUMBLES
	playerArray[37][10] = 0;//TOTAL POINTS
	playerArray[37][11] = 0;//BASELINE 
	playerArray[37][12] = "Reggie Bush";//NAME
	playerArray[37][13] = "RB"; //POSITION
	playerArray[37][14] = "lions"; //TEAM
	playerArray[37][15] = "Images/Reggie-Bush.png";//PIC
	playerArray[37][16] = "reggiebush";


playerArray[38] = new Array(17);
	playerArray[38][0] = 0;//COMPLETIONS
	playerArray[38][1] = 0;//PASSING YARDS
	playerArray[38][2] = 0;//PASSING TOUCHDOWNS
	playerArray[38][3] = 0;//INTERCEPTIONS
	playerArray[38][4] = 0;//RUSH YARDS
	playerArray[38][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[38][6] = 82.5;//RECEPTIONS
	playerArray[38][7] = 1111;//RECEIVING YARDS
	playerArray[38][8] = 5.8;//RECEIVING TOUCHDOWNS
	playerArray[38][9] = 1.1;//FUMBLES
	playerArray[38][10] = 0;//TOTAL POINTS
	playerArray[38][11] = 0;//BASELINE 
	playerArray[38][12] = "Victor Cruz";//NAME
	playerArray[38][13] = "WR"; //POSITION
	playerArray[38][14] = "giants"; //TEAM
	playerArray[38][15] = "Images/Victor-Cruz.png";//PIC
	playerArray[38][16] = "victorcruz";


playerArray[39] = new Array(17);
	playerArray[39][0] = 0;//COMPLETIONS
	playerArray[39][1] = 0;//PASSING YARDS
	playerArray[39][2] = 0;//PASSING TOUCHDOWNS
	playerArray[39][3] = 0;//INTERCEPTIONS
	playerArray[39][4] = 10.9;//RUSH YARDS
	playerArray[39][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[39][6] = 87.5;//RECEPTIONS
	playerArray[39][7] = 1125;//RECEIVING YARDS
	playerArray[39][8] = 8.5;//RECEIVING TOUCHDOWNS
	playerArray[39][9] = 1.1;//FUMBLES
	playerArray[39][10] = 0;//TOTAL POINTS
	playerArray[39][11] = 0;//BASELINE 
	playerArray[39][12] = "Larry Fitzgerald";//NAME
	playerArray[39][13] = "WR"; //POSITION
	playerArray[39][14] = "cardinals"; //TEAM
	playerArray[39][15] = "Images/Larry-Fitzgerald.png";//PIC
	playerArray[39][16] = "larryfitzgerald";


playerArray[40] = new Array(17);
	playerArray[40][0] = 0;//COMPLETIONS
	playerArray[40][1] = 0;//PASSING YARDS
	playerArray[40][2] = 0;//PASSING TOUCHDOWNS
	playerArray[40][3] = 0;//INTERCEPTIONS
	playerArray[40][4] = 0;//RUSH YARDS
	playerArray[40][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[40][6] = 89.1;//RECEPTIONS
	playerArray[40][7] = 1011;//RECEIVING YARDS
	playerArray[40][8] = 9.2;//RECEIVING TOUCHDOWNS
	playerArray[40][9] = 0.6;//FUMBLES
	playerArray[40][10] = 0;//TOTAL POINTS
	playerArray[40][11] = 0;//BASELINE 
	playerArray[40][12] = "Wes Welker";//NAME
	playerArray[40][13] = "WR"; //POSITION
	playerArray[40][14] = "broncos"; //TEAM
	playerArray[40][15] = "Images/Wes-Welker.png";//PIC
	playerArray[40][16] = "weswelker";


playerArray[41] = new Array(17);
	playerArray[41][0] = 0;//COMPLETIONS
	playerArray[41][1] = 0;//PASSING YARDS
	playerArray[41][2] = 0;//PASSING TOUCHDOWNS
	playerArray[41][3] = 0;//INTERCEPTIONS
	playerArray[41][4] = 11.5;//RUSH YARDS
	playerArray[41][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[41][6] = 90.1;//RECEPTIONS
	playerArray[41][7] = 1108;//RECEIVING YARDS
	playerArray[41][8] = 7.2;//RECEIVING TOUCHDOWNS
	playerArray[41][9] = 1.0;//FUMBLES
	playerArray[41][10] = 0;//TOTAL POINTS
	playerArray[41][11] = 0;//BASELINE 
	playerArray[41][12] = "Pierre Garson";//NAME
	playerArray[41][13] = "WR"; //POSITION
	playerArray[41][14] = "redskins"; //TEAM
	playerArray[41][15] = "Images/Pierre-Garcon.png";//PIC
	playerArray[41][16] = "pierregarcon";


playerArray[42] = new Array(17);
	playerArray[42][0] = 0;//COMPLETIONS
	playerArray[42][1] = 0;//PASSING YARDS
	playerArray[42][2] = 0;//PASSING TOUCHDOWNS
	playerArray[42][3] = 0;//INTERCEPTIONS
	playerArray[42][4] = 0;//RUSH YARDS
	playerArray[42][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[42][6] = 88.8;//RECEPTIONS
	playerArray[42][7] = 1185;//RECEIVING YARDS
	playerArray[42][8] = 6.2;//RECEIVING TOUCHDOWNS
	playerArray[42][9] = 0.6;//FUMBLES
	playerArray[42][10] = 0;//TOTAL POINTS
	playerArray[42][11] = 0;//BASELINE 
	playerArray[42][12] = "Andre Johnson";//NAME
	playerArray[42][13] = "WR"; //POSITION
	playerArray[42][14] = "texans"; //TEAM
	playerArray[42][15] = "Images/Andre-Johnson.png";//PIC
	playerArray[42][16] = "andrejohnson";


playerArray[43] = new Array(17);
	playerArray[43][0] = 0;//COMPLETIONS
	playerArray[43][1] = 0;//PASSING YARDS
	playerArray[43][2] = 0;//PASSING TOUCHDOWNS
	playerArray[43][3] = 0;//INTERCEPTIONS
	playerArray[43][4] = 0;//RUSH YARDS
	playerArray[43][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[43][6] = 83.3;//RECEPTIONS
	playerArray[43][7] = 1086;//RECEIVING YARDS
	playerArray[43][8] = 6.6;//RECEIVING TOUCHDOWNS
	playerArray[43][9] = 1.9;//FUMBLES
	playerArray[43][10] = 0;//TOTAL POINTS
	playerArray[43][11] = 0;//BASELINE 
	playerArray[43][12] = "Roddy White";//NAME
	playerArray[43][13] = "WR"; //POSITION
	playerArray[43][14] = "falcons"; //TEAM
	playerArray[43][15] = "Images/Roddy-White.png";//PIC
	playerArray[43][16] = "roddywhite";



playerArray[44] = new Array(17);
	playerArray[44][0] = 0;//COMPLETIONS
	playerArray[44][1] = 0;//PASSING YARDS
	playerArray[44][2] = 0;//PASSING TOUCHDOWNS
	playerArray[44][3] = 0;//INTERCEPTIONS
	playerArray[44][4] = 116;//RUSH YARDS
	playerArray[44][5] = 0.6;//RUSHING TOUCHDOWNS
	playerArray[44][6] = 72.3;//RECEPTIONS
	playerArray[44][7] = 816;//RECEIVING YARDS
	playerArray[44][8] = 6.6;//RECEIVING TOUCHDOWNS
	playerArray[44][9] = 1.2;//FUMBLES
	playerArray[44][10] = 0;//TOTAL POINTS
	playerArray[44][11] = 0;//BASELINE 
	playerArray[44][12] = "Percy Harvin";//NAME
	playerArray[44][13] = "WR"; //POSITION
	playerArray[44][14] = "seahawks"; //TEAM
	playerArray[44][15] = "Images/Percy-Harvin.png";//PIC
	playerArray[44][16] = "percyharvin";



playerArray[45] = new Array(17);
	playerArray[45][0] = 0;//COMPLETIONS
	playerArray[45][1] = 0;//PASSING YARDS
	playerArray[45][2] = 0;//PASSING TOUCHDOWNS
	playerArray[45][3] = 0;//INTERCEPTIONS
	playerArray[45][4] = 916;//RUSH YARDS
	playerArray[45][5] = 9.5;//RUSHING TOUCHDOWNS
	playerArray[45][6] = 16.1;//RECEPTIONS
	playerArray[45][7] = 157;//RECEIVING YARDS
	playerArray[45][8] = 0.5;//RECEIVING TOUCHDOWNS
	playerArray[45][9] = 2.6;//FUMBLES
	playerArray[45][10] = 0;//TOTAL POINTS
	playerArray[45][11] = 0;//BASELINE 
	playerArray[45][12] = "Frank Gore";//NAME
	playerArray[45][13] = "RB"; //POSITION
	playerArray[45][14] = "fortyniners"; //TEAM
	playerArray[45][15] = "Images/Frank-Gore.png";//PIC
	playerArray[45][16] = "frankgore";


playerArray[46] = new Array(17);
	playerArray[46][0] = 0;//COMPLETIONS
	playerArray[46][1] = 0;//PASSING YARDS
	playerArray[46][2] = 0;//PASSING TOUCHDOWNS
	playerArray[46][3] = 0;//INTERCEPTIONS
	playerArray[46][4] = 0;//RUSH YARDS
	playerArray[46][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[46][6] = 43.4;//RECEPTIONS
	playerArray[46][7] = 631;//RECEIVING YARDS
	playerArray[46][8] = 5.9;//RECEIVING TOUCHDOWNS
	playerArray[46][9] = 0.6;//FUMBLES
	playerArray[46][10] = 0;//TOTAL POINTS
	playerArray[46][11] = 0;//BASELINE 
	playerArray[46][12] = "Vernon Davis";//NAME
	playerArray[46][13] = "TE"; //POSITION
	playerArray[46][14] = "fortyniners"; //TEAM
	playerArray[46][15] = "Images/Vernon-Davis.png";//PIC
	playerArray[46][16] = "vernondavis";


playerArray[47] = new Array(17);
	playerArray[47][0] = 0;//COMPLETIONS
	playerArray[47][1] = 0;//PASSING YARDS
	playerArray[47][2] = 0;//PASSING TOUCHDOWNS
	playerArray[47][3] = 0;//INTERCEPTIONS
	playerArray[47][4] = 137;//RUSH YARDS
	playerArray[47][5] = 0.3;//RUSHING TOUCHDOWNS
	playerArray[47][6] = 77.7;//RECEPTIONS
	playerArray[47][7] = 923;//RECEIVING YARDS
	playerArray[47][8] = 6.4;//RECEIVING TOUCHDOWNS
	playerArray[47][9] = 0.6;//FUMBLES
	playerArray[47][10] = 0;//TOTAL POINTS
	playerArray[47][11] = 0;//BASELINE 
	playerArray[47][12] = "Cordarrelle Patterson";//NAME
	playerArray[47][13] = "WR"; //POSITION
	playerArray[47][14] = "vikings"; //TEAM
	playerArray[47][15] = "Images/Cordarrelle-Patterson.png";//PIC
	playerArray[47][16] = "cordarrellepatterson";


playerArray[48] = new Array(17);
	playerArray[48][0] = 0;//COMPLETIONS
	playerArray[48][1] = 0;//PASSING YARDS
	playerArray[48][2] = 0;//PASSING TOUCHDOWNS
	playerArray[48][3] = 0;//INTERCEPTIONS
	playerArray[48][4] = 0;//RUSH YARDS
	playerArray[48][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[48][6] = 73.2;//RECEPTIONS
	playerArray[48][7] = 916;//RECEIVING YARDS
	playerArray[48][8] = 6.2;//RECEIVING TOUCHDOWNS
	playerArray[48][9] = 0.8;//FUMBLES
	playerArray[48][10] = 0;//TOTAL POINTS
	playerArray[48][11] = 0;//BASELINE 
	playerArray[48][12] = "Michael Crabtree";//NAME
	playerArray[48][13] = "WR"; //POSITION
	playerArray[48][14] = "fortyniners"; //TEAM
	playerArray[48][15] = "Images/Michael-Crabtree.png";//PIC
	playerArray[48][16] = "michaelcrabtree";


playerArray[49] = new Array(17);
	playerArray[49][0] = 0;//COMPLETIONS
	playerArray[49][1] = 0;//PASSING YARDS
	playerArray[49][2] = 0;//PASSING TOUCHDOWNS //43 + 40 + 140 + 70 + 18 - 2 309
	playerArray[49][3] = 0;//INTERCEPTIONS
	playerArray[49][4] = 433;//RUSH YARDS
	playerArray[49][5] = 4.7;//RUSHING TOUCHDOWNS
	playerArray[49][6] = 70.1;//RECEPTIONS
	playerArray[49][7] = 699;//RECEIVING YARDS
	playerArray[49][8] = 3.2;//RECEIVING TOUCHDOWNS
	playerArray[49][9] = 1.9;//FUMBLES
	playerArray[49][10] = 0;//TOTAL POINTS
	playerArray[49][11] = 0;//BASELINE 
	playerArray[49][12] = "Shane Vereen";//NAME
	playerArray[49][13] = "RB"; //POSITION
	playerArray[49][14] = "patriots"; //TEAM
	playerArray[49][15] = "Images/Shane-Vereen.png";//PIC
	playerArray[49][16] = "shanevereen";


playerArray[50] = new Array(17);
	playerArray[50][0] = 0;//COMPLETIONS
	playerArray[50][1] = 0;//PASSING YARDS
	playerArray[50][2] = 0;//PASSING TOUCHDOWNS
	playerArray[50][3] = 0;//INTERCEPTIONS
	playerArray[50][4] = 23;//RUSH YARDS
	playerArray[50][5] = 0.1;//RUSHING TOUCHDOWNS
	playerArray[50][6] = 66.2;//RECEPTIONS
	playerArray[50][7] = 971;//RECEIVING YARDS
	playerArray[50][8] = 5.8;//RECEIVING TOUCHDOWNS
	playerArray[50][9] = 0.9;//FUMBLES
	playerArray[50][10] = 0;//TOTAL POINTS
	playerArray[50][11] = 0;//BASELINE 
	playerArray[50][12] = "Desean Jackson";//NAME
	playerArray[50][13] = "WR"; //POSITION
	playerArray[50][14] = "redskins"; //TEAM
	playerArray[50][15] = "Images/Desean-Jackson.png";//PIC
	playerArray[50][16] = "deseanjackson";


playerArray[51] = new Array(17);
	playerArray[51][0] = 0;//COMPLETIONS
	playerArray[51][1] = 0;//PASSING YARDS
	playerArray[51][2] = 0;//PASSING TOUCHDOWNS
	playerArray[51][3] = 0;//INTERCEPTIONS
	playerArray[51][4] = 0;//RUSH YARDS
	playerArray[51][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[51][6] = 78.7;//RECEPTIONS
	playerArray[51][7] = 1041;//RECEIVING YARDS
	playerArray[51][8] = 7.9;//RECEIVING TOUCHDOWNS
	playerArray[51][9] = 0.8;//FUMBLES
	playerArray[51][10] = 0;//TOTAL POINTS
	playerArray[51][11] = 0;//BASELINE 
	playerArray[51][12] = "Rob Gronkowski";//NAME
	playerArray[51][13] = "TE"; //POSITION
	playerArray[51][14] = "patriots"; //TEAM
	playerArray[51][15] = "Images/Rob-Gronkowski.png";//PIC
	playerArray[51][16] = "robgronkowski";


playerArray[52] = new Array(17);
	playerArray[52][0] = 0;//COMPLETIONS
	playerArray[52][1] = 0;//PASSING YARDS
	playerArray[52][2] = 0;//PASSING TOUCHDOWNS
	playerArray[52][3] = 0;//INTERCEPTIONS
	playerArray[52][4] = 0;//RUSH YARDS
	playerArray[52][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[52][6] = 71.9;//RECEPTIONS
	playerArray[52][7] = 1044;//RECEIVING YARDS
	playerArray[52][8] = 5.7;//RECEIVING TOUCHDOWNS
	playerArray[52][9] = 0.5;//FUMBLES
	playerArray[52][10] = 0;//TOTAL POINTS
	playerArray[52][11] = 0;//BASELINE 
	playerArray[52][12] = "Michael Floyd";//NAME
	playerArray[52][13] = "WR"; //POSITION
	playerArray[52][14] = "cardinals"; //TEAM
	playerArray[52][15] = "Images/Michael-Floyd.png";//PIC
	playerArray[52][16] = "michaelfloyd";


playerArray[53] = new Array(17);
	playerArray[53][0] = 0;//COMPLETIONS
	playerArray[53][1] = 0;//PASSING YARDS
	playerArray[53][2] = 0;//PASSING TOUCHDOWNS
	playerArray[53][3] = 0;//INTERCEPTIONS
	playerArray[53][4] = 701;//RUSH YARDS
	playerArray[53][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[53][6] = 47;//RECEPTIONS
	playerArray[53][7] = 391;//RECEIVING YARDS
	playerArray[53][8] = 1.1;//RECEIVING TOUCHDOWNS
	playerArray[53][9] = 3.4;//FUMBLES
	playerArray[53][10] = 0;//TOTAL POINTS
	playerArray[53][11] = 0;//BASELINE 
	playerArray[53][12] = "Joique Bell";//NAME
	playerArray[53][13] = "RB"; //POSITION
	playerArray[53][14] = "lions"; //TEAM
	playerArray[53][15] = "Images/Joique-Bell.png";//PIC
	playerArray[53][16] = "joiquebell";


playerArray[54] = new Array(17);
	playerArray[54][0] = 418;//COMPLETIONS
	playerArray[54][1] = 4930;//PASSING YARDS
	playerArray[54][2] = 31.5;//PASSING TOUCHDOWNS
	playerArray[54][3] = 19.5;//INTERCEPTIONS
	playerArray[54][4] = 84.2;//RUSH YARDS
	playerArray[54][5] = 1.3;//RUSHING TOUCHDOWNS
	playerArray[54][6] = 0;//RECEPTIONS
	playerArray[54][7] = 0;//RECEIVING YARDS
	playerArray[54][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[54][9] = 11;//FUMBLES
	playerArray[54][10] = 0;//TOTAL POINTS
	playerArray[54][11] = 0;//BASELINE 
	playerArray[54][12] = "Matthew Stafford";//NAME
	playerArray[54][13] = "QB"; //POSITION
	playerArray[54][14] = "lions"; //TEAM
	playerArray[54][15] = "Images/Matthew-Stafford.png";//PIC
	playerArray[54][16] = "matthewstafford";


playerArray[55] = new Array(17);
	playerArray[55][0] = 286;//COMPLETIONS
	playerArray[55][1] = 3439;//PASSING YARDS
	playerArray[55][2] = 21.1;//PASSING TOUCHDOWNS
	playerArray[55][3] = 17.9;//INTERCEPTIONS
	playerArray[55][4] = 606;//RUSH YARDS
	playerArray[55][5] = 3.6;//RUSHING TOUCHDOWNS
	playerArray[55][6] = 0;//RECEPTIONS
	playerArray[55][7] = 0;//RECEIVING YARDS
	playerArray[55][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[55][9] = 5.6;//FUMBLES
	playerArray[55][10] = 0;//TOTAL POINTS
	playerArray[55][11] = 0;//BASELINE 
	playerArray[55][12] = "Cam Newton";//NAME
	playerArray[55][13] = "QB"; //POSITION
	playerArray[55][14] = "panthers"; //TEAM
	playerArray[55][15] = "Images/Cam-Newton.png";//PIC
	playerArray[55][16] = "camnewton";


playerArray[56] = new Array(17);
	playerArray[56][0] = 0;//COMPLETIONS
	playerArray[56][1] = 0;//PASSING YARDS
	playerArray[56][2] = 0;//PASSING TOUCHDOWNS
	playerArray[56][3] = 0;//INTERCEPTIONS
	playerArray[56][4] = 0;//RUSH YARDS
	playerArray[56][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[56][6] = 73.7;//RECEPTIONS
	playerArray[56][7] = 1006;//RECEIVING YARDS
	playerArray[56][8] = 6;//RECEIVING TOUCHDOWNS
	playerArray[56][9] = 0.5;//FUMBLES
	playerArray[56][10] = 0;//TOTAL POINTS
	playerArray[56][11] = 0;//BASELINE 
	playerArray[56][12] = "T.Y. Hilton";//NAME
	playerArray[56][13] = "WR"; //POSITION
	playerArray[56][14] = "colts"; //TEAM
	playerArray[56][15] = "Images/TY-Hilton.png";//PIC
	playerArray[56][16] = "tyhilton";


playerArray[57] = new Array(17);
	playerArray[57][0] = 0;//COMPLETIONS
	playerArray[57][1] = 0;//PASSING YARDS
	playerArray[57][2] = 0;//PASSING TOUCHDOWNS
	playerArray[57][3] = 0;//INTERCEPTIONS
	playerArray[57][4] = 0;//RUSH YARDS
	playerArray[57][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[57][6] = 57.4;//RECEPTIONS
	playerArray[57][7] = 716;//RECEIVING YARDS
	playerArray[57][8] = 6.5;//RECEIVING TOUCHDOWNS
	playerArray[57][9] = 0.8;//FUMBLES
	playerArray[57][10] = 0;//TOTAL POINTS
	playerArray[57][11] = 0;//BASELINE 
	playerArray[57][12] = "Jordan Cameron";//NAME
	playerArray[57][13] = "TE"; //POSITION
	playerArray[57][14] = "browns"; //TEAM
	playerArray[57][15] = "Images/Jordan-Cameron.png";//PIC
	playerArray[57][16] = "jordancameron";
playerArray[58] = new Array(17);
	playerArray[58][0] = 428;//COMPLETIONS
	playerArray[58][1] = 4827;//PASSING YARDS
	playerArray[58][2] = 30;//PASSING TOUCHDOWNS
	playerArray[58][3] = 17;//INTERCEPTIONS
	playerArray[58][4] = 82.2;//RUSH YARDS
	playerArray[58][5] = 0.5;//RUSHING TOUCHDOWNS
	playerArray[58][6] = 0;//RECEPTIONS
	playerArray[58][7] = 0;//RECEIVING YARDS
	playerArray[58][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[58][9] = 6.9;//FUMBLES
	playerArray[58][10] = 0;//TOTAL POINTS
	playerArray[58][11] = 0;//BASELINE 
	playerArray[58][12] = "Matt Ryan";//NAME
	playerArray[58][13] = "QB"; //POSITION
	playerArray[58][14] = "falcons"; //TEAM
	playerArray[58][15] = "Images/Matt-Ryan.png";//PIC
	playerArray[58][16] = "mattryan";


playerArray[59] = new Array(17);
	playerArray[59][0] = 349;//COMPLETIONS
	playerArray[59][1] = 4206;//PASSING YARDS
	playerArray[59][2] = 27.4;//PASSING TOUCHDOWNS
	playerArray[59][3] = 16.9;//INTERCEPTIONS
	playerArray[59][4] = 347;//RUSH YARDS
	playerArray[59][5] = 1.6;//RUSHING TOUCHDOWNS
	playerArray[59][6] = 0;//RECEPTIONS
	playerArray[59][7] = 0;//RECEIVING YARDS
	playerArray[59][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[59][9] = 6.8;//FUMBLES
	playerArray[59][10] = 0;//TOTAL POINTS
	playerArray[59][11] = 0;//BASELINE 
	playerArray[59][12] = "Andrew Luck";//NAME
	playerArray[59][13] = "QB"; //POSITION
	playerArray[59][14] = "colts"; //TEAM
	playerArray[59][15] = "Images/Andrew-Luck.png";//PIC
	playerArray[59][16] = "andrewluck";


playerArray[60] = new Array(17);
	playerArray[60][0] = 328;//COMPLETIONS
	playerArray[60][1] = 3934;//PASSING YARDS
	playerArray[60][2] = 23.5;//PASSING TOUCHDOWNS
	playerArray[60][3] = 15.2;//INTERCEPTIONS
	playerArray[60][4] = 597;//RUSH YARDS
	playerArray[60][5] = 2.3;//RUSHING TOUCHDOWNS
	playerArray[60][6] = 0;//RECEPTIONS
	playerArray[60][7] = 0;//RECEIVING YARDS
	playerArray[60][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[60][9] = 10;//FUMBLES
	playerArray[60][10] = 0;//TOTAL POINTS
	playerArray[60][11] = 0;//BASELINE 
	playerArray[60][12] = "Robert Griffin III";//NAME
	playerArray[60][13] = "QB"; //POSITION
	playerArray[60][14] = "redskins"; //TEAM
	playerArray[60][15] = "Images/Robert-Griffin.png";//PIC
	playerArray[60][16] = "robertgriffen";


playerArray[61] = new Array(17);
	playerArray[61][0] = 0;//COMPLETIONS
	playerArray[61][1] = 0;//PASSING YARDS
	playerArray[61][2] = 0;//PASSING TOUCHDOWNS
	playerArray[61][3] = 0;//INTERCEPTIONS
	playerArray[61][4] = 1012;//RUSH YARDS
	playerArray[61][5] = 9.6;//RUSHING TOUCHDOWNS
	playerArray[61][6] = 6.7;//RECEPTIONS
	playerArray[61][7] = 54.9;//RECEIVING YARDS
	playerArray[61][8] = 0.2;//RECEIVING TOUCHDOWNS
	playerArray[61][9] = 3.9;//FUMBLES
	playerArray[61][10] = 0;//TOTAL POINTS
	playerArray[61][11] = 0;//BASELINE 
	playerArray[61][12] = "Stevan Ridley";//NAME
	playerArray[61][13] = "RB"; //POSITION
	playerArray[61][14] = "patriots"; //TEAM
	playerArray[61][15] = "Images/Stevan-Ridley.png";//PIC
	playerArray[61][16] = "stevanridley";


playerArray[62] = new Array(17);
	playerArray[62][0] = 0;//COMPLETIONS
	playerArray[62][1] = 0;//PASSING YARDS
	playerArray[62][2] = 0;//PASSING TOUCHDOWNS
	playerArray[62][3] = 0;//INTERCEPTIONS
	playerArray[62][4] = 0;//RUSH YARDS
	playerArray[62][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[62][6] = 67.3;//RECEPTIONS
	playerArray[62][7] = 1046;//RECEIVING YARDS
	playerArray[62][8] = 6.9;//RECEIVING TOUCHDOWNS
	playerArray[62][9] = 1;//FUMBLES
	playerArray[62][10] = 0;//TOTAL POINTS
	playerArray[62][11] = 0;//BASELINE 
	playerArray[62][12] = "Torrey Smith";//NAME
	playerArray[62][13] = "WR"; //POSITION
	playerArray[62][14] = "ravens"; //TEAM
	playerArray[62][15] = "Images/Torrey-Smith.png";//PIC
	playerArray[62][16] = "torreysmith";


playerArray[63] = new Array(17);
	playerArray[63][0] = 0;//COMPLETIONS
	playerArray[63][1] = 0;//PASSING YARDS
	playerArray[63][2] = 0;//PASSING TOUCHDOWNS
	playerArray[63][3] = 0;//INTERCEPTIONS
	playerArray[63][4] = 11;//RUSH YARDS
	playerArray[63][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[63][6] = 89.2;//RECEPTIONS
	playerArray[63][7] = 1047;//RECEIVING YARDS
	playerArray[63][8] = 6.7;//RECEIVING TOUCHDOWNS
	playerArray[63][9] = 0.6;//FUMBLES
	playerArray[63][10] = 0;//TOTAL POINTS
	playerArray[63][11] = 0;//BASELINE 
	playerArray[63][12] = "Julian Edelman";//NAME
	playerArray[63][13] = "WR"; //POSITION
	playerArray[63][14] = "patriots"; //TEAM
	playerArray[63][15] = "Images/Julian-Edelman.png";//PIC
	playerArray[63][16] = "julianedelman";


playerArray[64] = new Array(17);
	playerArray[64][0] = 0;//COMPLETIONS
	playerArray[64][1] = 0;//PASSING YARDS
	playerArray[64][2] = 0;//PASSING TOUCHDOWNS
	playerArray[64][3] = 0;//INTERCEPTIONS
	playerArray[64][4] = 882;//RUSH YARDS
	playerArray[64][5] = 4.5;//RUSHING TOUCHDOWNS
	playerArray[64][6] = 33.9;//RECEPTIONS
	playerArray[64][7] = 273;//RECEIVING YARDS
	playerArray[64][8] = 0.9;//RECEIVING TOUCHDOWNS
	playerArray[64][9] = 2.7;//FUMBLES
	playerArray[64][10] = 0;//TOTAL POINTS
	playerArray[64][11] = 0;//BASELINE 
	playerArray[64][12] = "Chris Johnson";//NAME
	playerArray[64][13] = "RB"; //POSITION
	playerArray[64][14] = "jets"; //TEAM
	playerArray[64][15] = "Images/Chris-Johnson.png";//PIC
	playerArray[64][16] = "chrisjohnson";


playerArray[65] = new Array(17);
	playerArray[65][0] = 0;//COMPLETIONS
	playerArray[65][1] = 0;//PASSING YARDS
	playerArray[65][2] = 0;//PASSING TOUCHDOWNS
	playerArray[65][3] = 0;//INTERCEPTIONS
	playerArray[65][4] = 11.1;//RUSH YARDS
	playerArray[65][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[65][6] = 93.5;//RECEPTIONS
	playerArray[65][7] = 1044;//RECEIVING YARDS
	playerArray[65][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[65][9] = 1.6;//FUMBLES
	playerArray[65][10] = 0;//TOTAL POINTS
	playerArray[65][11] = 0;//BASELINE 
	playerArray[65][12] = "Kendall Wright";//NAME
	playerArray[65][13] = "WR"; //POSITION
	playerArray[65][14] = "titans"; //TEAM
	playerArray[65][15] = "Images/Kendall-Wright.png";//PIC
	playerArray[65][16] = "kendallwright";


playerArray[66] = new Array(17);
	playerArray[66][0] = 0;//COMPLETIONS
	playerArray[66][1] = 0;//PASSING YARDS
	playerArray[66][2] = 0;//PASSING TOUCHDOWNS
	playerArray[66][3] = 0;//INTERCEPTIONS
	playerArray[66][4] = 0;//RUSH YARDS
	playerArray[66][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[66][6] = 60.4;//RECEPTIONS
	playerArray[66][7] = 819;//RECEIVING YARDS
	playerArray[66][8] = 6.6;//RECEIVING TOUCHDOWNS
	playerArray[66][9] = 0.7;//FUMBLES
	playerArray[66][10] = 0;//TOTAL POINTS
	playerArray[66][11] = 0;//BASELINE 
	playerArray[66][12] = "Jeremy Maclin";//NAME
	playerArray[66][13] = "WR"; //POSITION
	playerArray[66][14] = "eagles"; //TEAM
	playerArray[66][15] = "Images/Jeremy-Maclin.png";//PIC
	playerArray[66][16] = "jeremymaclin";


playerArray[67] = new Array(17);
	playerArray[67][0] = 0;//COMPLETIONS
	playerArray[67][1] = 0;//PASSING YARDS
	playerArray[67][2] = 0;//PASSING TOUCHDOWNS
	playerArray[67][3] = 0;//INTERCEPTIONS
	playerArray[67][4] = 768;//RUSH YARDS
	playerArray[67][5] = 6.7;//RUSHING TOUCHDOWNS
	playerArray[67][6] = 36.9;//RECEPTIONS
	playerArray[67][7] = 305;//RECEIVING YARDS
	playerArray[67][8] = 1.5;//RECEIVING TOUCHDOWNS
	playerArray[67][9] = 1.5;//FUMBLES
	playerArray[67][10] = 0;//TOTAL POINTS
	playerArray[67][11] = 0;//BASELINE 
	playerArray[67][12] = "Steven Jackson";//NAME
	playerArray[67][13] = "RB"; //POSITION
	playerArray[67][14] = "falcons"; //TEAM
	playerArray[67][15] = "Images/Steven-Jackson.png";//PIC
	playerArray[67][16] = "stevenjackson";


playerArray[68] = new Array(17);
	playerArray[68][0] = 325;//COMPLETIONS
	playerArray[68][1] = 3889;//PASSING YARDS
	playerArray[68][2] = 31.7;//PASSING TOUCHDOWNS
	playerArray[68][3] = 10.7;//INTERCEPTIONS
	playerArray[68][4] = 240;//RUSH YARDS
	playerArray[68][5] = 4.6;//RUSHING TOUCHDOWNS
	playerArray[68][6] = 0;//RECEPTIONS
	playerArray[68][7] = 0;//RECEIVING YARDS
	playerArray[68][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[68][9] = 7;//FUMBLES
	playerArray[68][10] = 0;//TOTAL POINTS
	playerArray[68][11] = 0;//BASELINE 
	playerArray[68][12] = "Nick Foles";//NAME
	playerArray[68][13] = "QB"; //POSITION
	playerArray[68][14] = "eagles"; //TEAM
	playerArray[68][15] = "Images/Nick-Foles.png";//PIC
	playerArray[68][16] = "nickfoles";


playerArray[69] = new Array(17);
	playerArray[69][0] = 0;//COMPLETIONS
	playerArray[69][1] = 0;//PASSING YARDS
	playerArray[69][2] = 0;//PASSING TOUCHDOWNS
	playerArray[69][3] = 0;//INTERCEPTIONS
	playerArray[69][4] = 988;//RUSH YARDS
	playerArray[69][5] = 6.6;//RUSHING TOUCHDOWNS
	playerArray[69][6] = 16.8;//RECEPTIONS
	playerArray[69][7] = 136;//RECEIVING YARDS
	playerArray[69][8] = 0.3;//RECEIVING TOUCHDOWNS
	playerArray[69][9] = 4.5;//FUMBLES
	playerArray[69][10] = 0;//TOTAL POINTS
	playerArray[69][11] = 0;//BASELINE 
	playerArray[69][12] = "Ben Tate";//NAME
	playerArray[69][13] = "RB"; //POSITION
	playerArray[69][14] = "browns"; //TEAM
	playerArray[69][15] = "Images/Ben-Tate.png";//PIC
	playerArray[69][16] = "bentate";


playerArray[70] = new Array(17);
	playerArray[70][0] = 0;//COMPLETIONS
	playerArray[70][1] = 0;//PASSING YARDS
	playerArray[70][2] = 0;//PASSING TOUCHDOWNS
	playerArray[70][3] = 0;//INTERCEPTIONS
	playerArray[70][4] = 0;//RUSH YARDS
	playerArray[70][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[70][6] = 76.2;//RECEPTIONS
	playerArray[70][7] = 996;//RECEIVING YARDS
	playerArray[70][8] = 7.4;//RECEIVING TOUCHDOWNS
	playerArray[70][9] = 0.5;//FUMBLES
	playerArray[70][10] = 0;//TOTAL POINTS
	playerArray[70][11] = 0;//BASELINE 
	playerArray[70][12] = "Marques Colston";//NAME
	playerArray[70][13] = "WR"; //POSITION
	playerArray[70][14] = "saints"; //TEAM
	playerArray[70][15] = "Images/Marques-Colston.png";//PIC
	playerArray[70][16] = "marquescolston";
playerArray[71] = new Array(17);
	playerArray[71][0] = 0;//COMPLETIONS
	playerArray[71][1] = 0;//PASSING YARDS
	playerArray[71][2] = 0;//PASSING TOUCHDOWNS
	playerArray[71][3] = 0;//INTERCEPTIONS
	playerArray[71][4] = 710;//RUSH YARDS
	playerArray[71][5] = 7;//RUSHING TOUCHDOWNS
	playerArray[71][6] = 30;//RECEPTIONS
	playerArray[71][7] = 243;//RECEIVING YARDS
	playerArray[71][8] = 0.6;//RECEIVING TOUCHDOWNS
	playerArray[71][9] = 2.9;//FUMBLES
	playerArray[71][10] = 0;//TOTAL POINTS
	playerArray[71][11] = 0;//BASELINE 
	playerArray[71][12] = "Trent Richardson";//NAME
	playerArray[71][13] = "RB"; //POSITION
	playerArray[71][14] = "colts"; //TEAM
	playerArray[71][15] = "Images/Trent-Richardson.png";//PIC
	playerArray[71][16] = "trentrichardson";


playerArray[72] = new Array(17);
	playerArray[72][0] = 0;//COMPLETIONS
	playerArray[72][1] = 0;//PASSING YARDS
	playerArray[72][2] = 0;//PASSING TOUCHDOWNS
	playerArray[72][3] = 0;//INTERCEPTIONS
	playerArray[72][4] = 19.1;//RUSH YARDS
	playerArray[72][5] = 0.1;//RUSHING TOUCHDOWNS
	playerArray[72][6] = 70.3;//RECEPTIONS
	playerArray[72][7] = 1020;//RECEIVING YARDS
	playerArray[72][8] = 6.4;//RECEIVING TOUCHDOWNS
	playerArray[72][9] = 1.0;//FUMBLES
	playerArray[72][10] = 0;//TOTAL POINTS
	playerArray[72][11] = 0;//BASELINE 
	playerArray[72][12] = "Terrance Williams";//NAME
	playerArray[72][13] = "WR"; //POSITION
	playerArray[72][14] = "cowboys"; //TEAM
	playerArray[72][15] = "Images/Terrance-Williams.png";//PIC
	playerArray[72][16] = "terrancewilliams";


playerArray[73] = new Array(17);
	playerArray[73][0] = 0;//COMPLETIONS
	playerArray[73][1] = 0;//PASSING YARDS
	playerArray[73][2] = 0;//PASSING TOUCHDOWNS
	playerArray[73][3] = 0;//INTERCEPTIONS
	playerArray[73][4] = 0;//RUSH YARDS
	playerArray[73][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[73][6] = 67.4;//RECEPTIONS
	playerArray[73][7] = 839;//RECEIVING YARDS
	playerArray[73][8] = 5.8;//RECEIVING TOUCHDOWNS
	playerArray[73][9] = 0.5;//FUMBLES
	playerArray[73][10] = 0;//TOTAL POINTS
	playerArray[73][11] = 0;//BASELINE 
	playerArray[73][12] = "Greg Olsen";//NAME
	playerArray[73][13] = "TE"; //POSITION
	playerArray[73][14] = "panthers"; //TEAM
	playerArray[73][15] = "Images/Greg-Olsen.png";//PIC
	playerArray[73][16] = "gregolsen";


playerArray[74] = new Array(17);
	playerArray[74][0] = 409;//COMPLETIONS
	playerArray[74][1] = 4881;//PASSING YARDS
	playerArray[74][2] = 29.3;//PASSING TOUCHDOWNS
	playerArray[74][3] = 16.2;//INTERCEPTIONS
	playerArray[74][4] = 40.7;//RUSH YARDS
	playerArray[74][5] = 0.9;//RUSHING TOUCHDOWNS
	playerArray[74][6] = 0;//RECEPTIONS
	playerArray[74][7] = 0;//RECEIVING YARDS
	playerArray[74][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[74][9] = 5.6;//FUMBLES
	playerArray[74][10] = 0;//TOTAL POINTS
	playerArray[74][11] = 0;//BASELINE 
	playerArray[74][12] = "Tony Romo";//NAME
	playerArray[74][13] = "QB"; //POSITION
	playerArray[74][14] = "cowboys"; //TEAM
	playerArray[74][15] = "Images/Tony-Romo.png";//PIC
	playerArray[74][16] = "tonyromo";


playerArray[75] = new Array(17);
	playerArray[75][0] = 0;//COMPLETIONS
	playerArray[75][1] = 0;//PASSING YARDS
	playerArray[75][2] = 0;//PASSING TOUCHDOWNS
	playerArray[75][3] = 0;//INTERCEPTIONS
	playerArray[75][4] = 590;//RUSH YARDS
	playerArray[75][5] = 3.5;//RUSHING TOUCHDOWNS
	playerArray[75][6] = 68.4;//RECEPTIONS
	playerArray[75][7] = 533;//RECEIVING YARDS
	playerArray[75][8] = 2.4;//RECEIVING TOUCHDOWNS
	playerArray[75][9] = 1.9;//FUMBLES
	playerArray[75][10] = 0;//TOTAL POINTS
	playerArray[75][11] = 0;//BASELINE 
	playerArray[75][12] = "Pierre Thomas";//NAME
	playerArray[75][13] = "RB"; //POSITION
	playerArray[75][14] = "saints"; //TEAM
	playerArray[75][15] = "Images/Pierre-Thomas.png";//PIC
	playerArray[75][16] = "pierrethomas";


playerArray[76] = new Array(17);
	playerArray[76][0] = 318;//COMPLETIONS
	playerArray[76][1] = 3963;//PASSING YARDS
	playerArray[76][2] = 28.8;//PASSING TOUCHDOWNS
	playerArray[76][3] = 18.4;//INTERCEPTIONS
	playerArray[76][4] = 198;//RUSH YARDS
	playerArray[76][5] = 1;//RUSHING TOUCHDOWNS
	playerArray[76][6] = 0;//RECEPTIONS
	playerArray[76][7] = 0;//RECEIVING YARDS
	playerArray[76][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[76][9] = 7.1;//FUMBLES
	playerArray[76][10] = 0;//TOTAL POINTS
	playerArray[76][11] = 0;//BASELINE 
	playerArray[76][12] = "Jay Cutler";//NAME
	playerArray[76][13] = "QB"; //POSITION
	playerArray[76][14] = "bears"; //TEAM
	playerArray[76][15] = "Images/Jay-Cutler.png";//PIC
	playerArray[76][16] = "jaycutler";



playerArray[77] = new Array(17);
	playerArray[77][0] = 0;//COMPLETIONS
	playerArray[77][1] = 0;//PASSING YARDS
	playerArray[77][2] = 0;//PASSING TOUCHDOWNS
	playerArray[77][3] = 0;//INTERCEPTIONS
	playerArray[77][4] = 0;//RUSH YARDS
	playerArray[77][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[77][6] = 82.6;//RECEPTIONS
	playerArray[77][7] = 970;//RECEIVING YARDS
	playerArray[77][8] = 5.7;//RECEIVING TOUCHDOWNS
	playerArray[77][9] = 0.5;//FUMBLES
	playerArray[77][10] = 0;//TOTAL POINTS
	playerArray[77][11] = 0;//BASELINE 
	playerArray[77][12] = "Jason Witten";//NAME
	playerArray[77][13] = "TE"; //POSITION
	playerArray[77][14] = "cowboys"; //TEAM
	playerArray[77][15] = "Images/Jason-Witten.png";//PIC
	playerArray[77][16] = "jasonwitten";


playerArray[78] = new Array(17);
	playerArray[78][0] = 0;//COMPLETIONS
	playerArray[78][1] = 0;//PASSING YARDS
	playerArray[78][2] = 0;//PASSING TOUCHDOWNS
	playerArray[78][3] = 0;//INTERCEPTIONS
	playerArray[78][4] = 11;//RUSH YARDS
	playerArray[78][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[78][6] = 67.8;//RECEPTIONS
	playerArray[78][7] = 879;//RECEIVING YARDS
	playerArray[78][8] = 4.7;//RECEIVING TOUCHDOWNS
	playerArray[78][9] = 1.0;//FUMBLES
	playerArray[78][10] = 0;//TOTAL POINTS
	playerArray[78][11] = 0;//BASELINE 
	playerArray[78][12] = "Golden Tate";//NAME
	playerArray[78][13] = "WR"; //POSITION
	playerArray[78][14] = "lions"; //TEAM
	playerArray[78][15] = "Images/Golden-Tate.png";//PIC
	playerArray[78][16] = "goldentate";


playerArray[79] = new Array(17);
	playerArray[79][0] = 0;//COMPLETIONS
	playerArray[79][1] = 0;//PASSING YARDS
	playerArray[79][2] = 0;//PASSING TOUCHDOWNS
	playerArray[79][3] = 0;//INTERCEPTIONS
	playerArray[79][4] = 887;//RUSH YARDS
	playerArray[79][5] = 4.1;//RUSHING TOUCHDOWNS
	playerArray[79][6] = 15.4;//RECEPTIONS
	playerArray[79][7] = 129;//RECEIVING YARDS
	playerArray[79][8] = 0.5;//RECEIVING TOUCHDOWNS
	playerArray[79][9] = 2.0;//FUMBLES
	playerArray[79][10] = 0;//TOTAL POINTS
	playerArray[79][11] = 0;//BASELINE 
	playerArray[79][12] = "Lamar Miller";//NAME
	playerArray[79][13] = "RB"; //POSITION
	playerArray[79][14] = "dolphins"; //TEAM
	playerArray[79][15] = "Images/Lamar-Miller.png";//PIC
	playerArray[79][16] = "lamarmiller";


playerArray[80] = new Array(17);
	playerArray[80][0] = 391;//COMPLETIONS
	playerArray[80][1] = 4718;//PASSING YARDS
	playerArray[80][2] = 30.4;//PASSING TOUCHDOWNS
	playerArray[80][3] = 12;//INTERCEPTIONS
	playerArray[80][4] = 28.9;//RUSH YARDS
	playerArray[80][5] = 2.2;//RUSHING TOUCHDOWNS
	playerArray[80][6] = 0;//RECEPTIONS
	playerArray[80][7] = 0;//RECEIVING YARDS
	playerArray[80][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[80][9] = 8.4;//FUMBLES
	playerArray[80][10] = 0;//TOTAL POINTS
	playerArray[80][11] = 0;//BASELINE 
	playerArray[80][12] = "Tom Brady";//NAME
	playerArray[80][13] = "QB"; //POSITION
	playerArray[80][14] = "patriots"; //TEAM
	playerArray[80][15] = "Images/Tom-Brady.png";//PIC
	playerArray[80][16] = "tombrady";


playerArray[81] = new Array(17);
	playerArray[81][0] = 0;//COMPLETIONS
	playerArray[81][1] = 0;//PASSING YARDS
	playerArray[81][2] = 0;//PASSING TOUCHDOWNS
	playerArray[81][3] = 0;//INTERCEPTIONS
	playerArray[81][4] = 563;//RUSH YARDS
	playerArray[81][5] = 4.8;//RUSHING TOUCHDOWNS
	playerArray[81][6] = 27.1;//RECEPTIONS
	playerArray[81][7] = 225;//RECEIVING YARDS
	playerArray[81][8] = 0.6;//RECEIVING TOUCHDOWNS
	playerArray[81][9] = 1.4;//FUMBLES
	playerArray[81][10] = 0;//TOTAL POINTS
	playerArray[81][11] = 0;//BASELINE 
	playerArray[81][12] = "Maurice Jones-Drew";//NAME
	playerArray[81][13] = "RB"; //POSITION
	playerArray[81][14] = "raiders"; //TEAM
	playerArray[81][15] = "Images/Maurice-Jones-Drew.png";//PIC
	playerArray[81][16] = "mauricejonesdrew";


playerArray[82] = new Array(17);
	playerArray[82][0] = 0;//COMPLETIONS
	playerArray[82][1] = 0;//PASSING YARDS
	playerArray[82][2] = 0;//PASSING TOUCHDOWNS
	playerArray[82][3] = 0;//INTERCEPTIONS
	playerArray[82][4] = 0;//RUSH YARDS
	playerArray[82][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[82][6] = 65.3;//RECEPTIONS
	playerArray[82][7] = 986;//RECEIVING YARDS
	playerArray[82][8] = 5.5;//RECEIVING TOUCHDOWNS
	playerArray[82][9] = 0.5;//FUMBLES
	playerArray[82][10] = 0;//TOTAL POINTS
	playerArray[82][11] = 0;//BASELINE 
	playerArray[82][12] = "Mike Wallace";//NAME
	playerArray[82][13] = "WR"; //POSITION
	playerArray[82][14] = "dolphins"; //TEAM
	playerArray[82][15] = "Images/Mike-Wallace.png";//PIC
	playerArray[82][16] = "mikewallace";

playerArray[83] = new Array(17);
	playerArray[83][0] = 255;//COMPLETIONS
	playerArray[83][1] = 3220;//PASSING YARDS
	playerArray[83][2] = 25.3;//PASSING TOUCHDOWNS
	playerArray[83][3] = 11.6;//INTERCEPTIONS
	playerArray[83][4] = 454;//RUSH YARDS
	playerArray[83][5] = 1.3;//RUSHING TOUCHDOWNS
	playerArray[83][6] = 0;//RECEPTIONS
	playerArray[83][7] = 0;//RECEIVING YARDS
	playerArray[83][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[83][9] = 8.7;//FUMBLES
	playerArray[83][10] = 0;//TOTAL POINTS
	playerArray[83][11] = 0;//BASELINE 
	playerArray[83][12] = "Russell Wilson";//NAME
	playerArray[83][13] = "QB"; //POSITION
	playerArray[83][14] = "seahawks"; //TEAM
	playerArray[83][15] = "Images/Russell-Wilson.png";//PIC
	playerArray[83][16] = "russellwilson";
playerArray[84] = new Array(17);
	playerArray[84][0] = 346;//COMPLETIONS
	playerArray[84][1] = 4161;//PASSING YARDS
	playerArray[84][2] = 29.9;//PASSING TOUCHDOWNS
	playerArray[84][3] = 18.3;//INTERCEPTIONS
	playerArray[84][4] = 65.1;//RUSH YARDS
	playerArray[84][5] = 0.9;//RUSHING TOUCHDOWNS
	playerArray[84][6] = 0;//RECEPTIONS
	playerArray[84][7] = 0;//RECEIVING YARDS
	playerArray[84][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[84][9] = 5.4;//FUMBLES
	playerArray[84][10] = 0;//TOTAL POINTS
	playerArray[84][11] = 0;//BASELINE 
	playerArray[84][12] = "Phillip Rivers";//NAME
	playerArray[84][13] = "QB"; //POSITION
	playerArray[84][14] = "chargers"; //TEAM
	playerArray[84][15] = "Images/Phillip-Rivers.png";//PIC
	playerArray[84][16] = "philliprivers";


playerArray[85] = new Array(17);
	playerArray[85][0] = 0;//COMPLETIONS
	playerArray[85][1] = 0;//PASSING YARDS
	playerArray[85][2] = 0;//PASSING TOUCHDOWNS
	playerArray[85][3] = 0;//INTERCEPTIONS
	playerArray[85][4] = 0;//RUSH YARDS
	playerArray[85][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[85][6] = 77.7;//RECEPTIONS
	playerArray[85][7] = 1028;//RECEIVING YARDS
	playerArray[85][8] = 5.4;//RECEIVING TOUCHDOWNS
	playerArray[85][9] = 0.5;//FUMBLES
	playerArray[85][10] = 0;//TOTAL POINTS
	playerArray[85][11] = 0;//BASELINE 
	playerArray[85][12] = "Cecil Shorts";//NAME
	playerArray[85][13] = "WR"; //POSITION
	playerArray[85][14] = "jaguars"; //TEAM
	playerArray[85][15] = "Images/Cecil-Shorts.png";//PIC
	playerArray[85][16] = "cecilshorts";


playerArray[86] = new Array(17);
	playerArray[86][0] = 259;//COMPLETIONS
	playerArray[86][1] = 3227;//PASSING YARDS
	playerArray[86][2] = 22.3;//PASSING TOUCHDOWNS
	playerArray[86][3] = 12.5;//INTERCEPTIONS
	playerArray[86][4] = 676;//RUSH YARDS
	playerArray[86][5] = 1.9;//RUSHING TOUCHDOWNS
	playerArray[86][6] = 0;//RECEPTIONS
	playerArray[86][7] = 0;//RECEIVING YARDS
	playerArray[86][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[86][9] = 7.8;//FUMBLES
	playerArray[86][10] = 0;//TOTAL POINTS
	playerArray[86][11] = 0;//BASELINE 
	playerArray[86][12] = "Colin Kaepernick";//NAME
	playerArray[86][13] = "QB"; //POSITION
	playerArray[86][14] = "fortyniners"; //TEAM
	playerArray[86][15] = "Images/Colin-Kaepernick.png";//PIC
	playerArray[86][16] = "colinkaepernick";


playerArray[87] = new Array(17);
	playerArray[87][0] = 0;//COMPLETIONS
	playerArray[87][1] = 0;//PASSING YARDS
	playerArray[87][2] = 0;//PASSING TOUCHDOWNS
	playerArray[87][3] = 0;//INTERCEPTIONS
	playerArray[87][4] = 0;//RUSH YARDS
	playerArray[87][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[87][6] = 68.1;//RECEPTIONS
	playerArray[87][7] = 869;//RECEIVING YARDS
	playerArray[87][8] = 5.8;//RECEIVING TOUCHDOWNS
	playerArray[87][9] = 0.6;//FUMBLES
	playerArray[87][10] = 0;//TOTAL POINTS
	playerArray[87][11] = 0;//BASELINE 
	playerArray[87][12] = "Reggie Wayne";//NAME
	playerArray[87][13] = "WR"; //POSITION
	playerArray[87][14] = "colts"; //TEAM
	playerArray[87][15] = "Images/Reggie-Wayne.png";//PIC
	playerArray[87][16] = "reggiewayne";


playerArray[88] = new Array(17);
	playerArray[88][0] = 0;//COMPLETIONS
	playerArray[88][1] = 0;//PASSING YARDS
	playerArray[88][2] = 0;//PASSING TOUCHDOWNS
	playerArray[88][3] = 0;//INTERCEPTIONS
	playerArray[88][4] = 492;//RUSH YARDS
	playerArray[88][5] = 3.5;//RUSHING TOUCHDOWNS
	playerArray[88][6] = 27.7;//RECEPTIONS
	playerArray[88][7] = 230;//RECEIVING YARDS
	playerArray[88][8] = 0.9;//RECEIVING TOUCHDOWNS
	playerArray[88][9] = 1.9;//FUMBLES
	playerArray[88][10] = 0;//TOTAL POINTS
	playerArray[88][11] = 0;//BASELINE 
	playerArray[88][12] = "Terrance West";//NAME
	playerArray[88][13] = "RB"; //POSITION
	playerArray[88][14] = "browns"; //TEAM
	playerArray[88][15] = "Images/Terrance-West.png";//PIC
	playerArray[88][16] = "terrancewest";


playerArray[89] = new Array(17);
	playerArray[89][0] = 0;//COMPLETIONS
	playerArray[89][1] = 0;//PASSING YARDS
	playerArray[89][2] = 0;//PASSING TOUCHDOWNS
	playerArray[89][3] = 0;//INTERCEPTIONS
	playerArray[89][4] = 0;//RUSH YARDS
	playerArray[89][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[89][6] = 66.2;//RECEPTIONS
	playerArray[89][7] = 876;//RECEIVING YARDS
	playerArray[89][8] = 7;//RECEIVING TOUCHDOWNS
	playerArray[89][9] = 1;//FUMBLES
	playerArray[89][10] = 0;//TOTAL POINTS
	playerArray[89][11] = 0;//BASELINE 
	playerArray[89][12] = "Emmanuel Sanders";//NAME
	playerArray[89][13] = "WR"; //POSITION
	playerArray[89][14] = "broncos"; //TEAM
	playerArray[89][15] = "Images/Emmanuel-Sanders.png";//PIC
	playerArray[89][16] = "emmanuelsanders";


playerArray[90] = new Array(17);
	playerArray[90][0] = 0;//COMPLETIONS
	playerArray[90][1] = 0;//PASSING YARDS
	playerArray[90][2] = 0;//PASSING TOUCHDOWNS
	playerArray[90][3] = 0;//INTERCEPTIONS
	playerArray[90][4] = 0;//RUSH YARDS
	playerArray[90][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[90][6] = 72.5;//RECEPTIONS
	playerArray[90][7] = 961;//RECEIVING YARDS
	playerArray[90][8] = 5.4;//RECEIVING TOUCHDOWNS
	playerArray[90][9] = 1.3;//FUMBLES
	playerArray[90][10] = 0;//TOTAL POINTS
	playerArray[90][11] = 0;//BASELINE 
	playerArray[90][12] = "Eric Decker";//NAME
	playerArray[90][13] = "WR"; //POSITION
	playerArray[90][14] = "jets"; //TEAM
	playerArray[90][15] = "Images/Eric-Decker.png";//PIC
	playerArray[90][16] = "ericdecker";


playerArray[91] = new Array(17);
	playerArray[91][0] = 0;//COMPLETIONS
	playerArray[91][1] = 0;//PASSING YARDS
	playerArray[91][2] = 0;//PASSING TOUCHDOWNS
	playerArray[91][3] = 0;//INTERCEPTIONS
	playerArray[91][4] = 0;//RUSH YARDS
	playerArray[91][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[91][6] = 58.5;//RECEPTIONS
	playerArray[91][7] = 864;//RECEIVING YARDS
	playerArray[91][8] = 5.1;//RECEIVING TOUCHDOWNS
	playerArray[91][9] = 0.8;//FUMBLES
	playerArray[91][10] = 0;//TOTAL POINTS
	playerArray[91][11] = 0;//BASELINE 
	playerArray[91][12] = "Mike Evans";//NAME
	playerArray[91][13] = "WR"; //POSITION
	playerArray[91][14] = "buccaneers"; //TEAM
	playerArray[91][15] = "Images/Mike-Evans.png";//PIC
	playerArray[91][16] = "mikeevans";


playerArray[92] = new Array(17);
	playerArray[92][0] = 0;//COMPLETIONS
	playerArray[92][1] = 0;//PASSING YARDS
	playerArray[92][2] = 0;//PASSING TOUCHDOWNS
	playerArray[92][3] = 0;//INTERCEPTIONS
	playerArray[92][4] = 0;//RUSH YARDS
	playerArray[92][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[92][6] = 55.9;//RECEPTIONS
	playerArray[92][7] = 817;//RECEIVING YARDS
	playerArray[92][8] = 7.6;//RECEIVING TOUCHDOWNS
	playerArray[92][9] = 0.3;//FUMBLES
	playerArray[92][10] = 0;//TOTAL POINTS
	playerArray[92][11] = 0;//BASELINE 
	playerArray[92][12] = "Riley Cooper";//NAME
	playerArray[92][13] = "WR"; //POSITION
	playerArray[92][14] = "eagles"; //TEAM
	playerArray[92][15] = "Images/Riley-Cooper.png";//PIC
	playerArray[92][16] = "rileycooper";


playerArray[93] = new Array(17);
	playerArray[93][0] = 0;//COMPLETIONS
	playerArray[93][1] = 0;//PASSING YARDS
	playerArray[93][2] = 0;//PASSING TOUCHDOWNS
	playerArray[93][3] = 0;//INTERCEPTIONS
	playerArray[93][4] = 0;//RUSH YARDS
	playerArray[93][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[93][6] = 61.4;//RECEPTIONS
	playerArray[93][7] = 700;//RECEIVING YARDS
	playerArray[93][8] = 4.8;//RECEIVING TOUCHDOWNS
	playerArray[93][9] = 0.4;//FUMBLES
	playerArray[93][10] = 0;//TOTAL POINTS
	playerArray[93][11] = 0;//BASELINE 
	playerArray[93][12] = "Dennis Pitta";//NAME
	playerArray[93][13] = "TE"; //POSITION
	playerArray[93][14] = "ravens"; //TEAM
	playerArray[93][15] = "Images/Dennis-Pitta.png";//PIC
	playerArray[93][16] = "dennispitta";


playerArray[94] = new Array(17);
	playerArray[94][0] = 0;//COMPLETIONS
	playerArray[94][1] = 0;//PASSING YARDS
	playerArray[94][2] = 0;//PASSING TOUCHDOWNS
	playerArray[94][3] = 0;//INTERCEPTIONS
	playerArray[94][4] = 50.8;//RUSH YARDS
	playerArray[94][5] = 0.2;//RUSHING TOUCHDOWNS
	playerArray[94][6] = 55.7;//RECEPTIONS
	playerArray[94][7] = 759;//RECEIVING YARDS
	playerArray[94][8] = 6.1;//RECEIVING TOUCHDOWNS
	playerArray[94][9] = 0.5;//FUMBLES
	playerArray[94][10] = 0;//TOTAL POINTS
	playerArray[94][11] = 0;//BASELINE 
	playerArray[94][12] = "Marvin Jones";//NAME
	playerArray[94][13] = "WR"; //POSITION
	playerArray[94][14] = "bengals"; //TEAM
	playerArray[94][15] = "Images/Marvin-Jones.png";//PIC
	playerArray[94][16] = "marvinjones";


playerArray[95] = new Array(17);
	playerArray[95][0] = 0;//COMPLETIONS
	playerArray[95][1] = 0;//PASSING YARDS
	playerArray[95][2] = 0;//PASSING TOUCHDOWNS
	playerArray[95][3] = 0;//INTERCEPTIONS
	playerArray[95][4] = 621;//RUSH YARDS
	playerArray[95][5] = 6.1;//RUSHING TOUCHDOWNS
	playerArray[95][6] = 35.2;//RECEPTIONS
	playerArray[95][7] = 287;//RECEIVING YARDS
	playerArray[95][8] = 0.6;//RECEIVING TOUCHDOWNS
	playerArray[95][9] = 2.2;//FUMBLES
	playerArray[95][10] = 0;//TOTAL POINTS
	playerArray[95][11] = 0;//BASELINE 
	playerArray[95][12] = "Fred Jackson";//NAME
	playerArray[95][13] = "RB"; //POSITION
	playerArray[95][14] = "bills"; //TEAM
	playerArray[95][15] = "Images/Fred-Jackson.png";//PIC
	playerArray[95][16] = "fredjackson";


playerArray[96] = new Array(17);
	playerArray[96][0] = 0;//COMPLETIONS
	playerArray[96][1] = 0;//PASSING YARDS
	playerArray[96][2] = 0;//PASSING TOUCHDOWNS
	playerArray[96][3] = 0;//INTERCEPTIONS
	playerArray[96][4] = 0;//RUSH YARDS
	playerArray[96][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[96][6] = 61.4;//RECEPTIONS
	playerArray[96][7] = 719;//RECEIVING YARDS
	playerArray[96][8] = 4.1;//RECEIVING TOUCHDOWNS
	playerArray[96][9] = 0.4;//FUMBLES
	playerArray[96][10] = 0;//TOTAL POINTS
	playerArray[96][11] = 0;//BASELINE 
	playerArray[96][12] = "Kyle Rudolph";//NAME
	playerArray[96][13] = "TE"; //POSITION
	playerArray[96][14] = "vikings"; //TEAM
	playerArray[96][15] = "Images/Kyle-Rudolph.png";//PIC
	playerArray[96][16] = "kylerudolph";

playerArray[97] = new Array(17);
	playerArray[97][0] = 0;//COMPLETIONS
	playerArray[97][1] = 0;//PASSING YARDS
	playerArray[97][2] = 0;//PASSING TOUCHDOWNS
	playerArray[97][3] = 0;//INTERCEPTIONS
	playerArray[97][4] = 722;//RUSH YARDS
	playerArray[97][5] = 4.5;//RUSHING TOUCHDOWNS
	playerArray[97][6] = 23.1;//RECEPTIONS
	playerArray[97][7] = 193;//RECEIVING YARDS
	playerArray[97][8] = 0.4;//RECEIVING TOUCHDOWNS
	playerArray[97][9] = 2.0;//FUMBLES
	playerArray[97][10] = 0;//TOTAL POINTS
	playerArray[97][11] = 0;//BASELINE 
	playerArray[97][12] = "Bernard Pierce";//NAME
	playerArray[97][13] = "RB"; //POSITION
	playerArray[97][14] = "ravens"; //TEAM
	playerArray[97][15] = "Images/Bernard-Pierce.png";//PIC
	playerArray[97][16] = "bernardpierce";


playerArray[98] = new Array(17);
	playerArray[98][0] = 0;//COMPLETIONS
	playerArray[98][1] = 0;//PASSING YARDS
	playerArray[98][2] = 0;//PASSING TOUCHDOWNS
	playerArray[98][3] = 0;//INTERCEPTIONS
	playerArray[98][4] = 647;//RUSH YARDS
	playerArray[98][5] = 5.8;//RUSHING TOUCHDOWNS
	playerArray[98][6] = 34.1;//RECEPTIONS
	playerArray[98][7] = 282;//RECEIVING YARDS
	playerArray[98][8] = 1.0;//RECEIVING TOUCHDOWNS
	playerArray[98][9] = 2.1;//FUMBLES
	playerArray[98][10] = 0;//TOTAL POINTS
	playerArray[98][11] = 0;//BASELINE 
	playerArray[98][12] = "Ray Rice";//NAME
	playerArray[98][13] = "RB"; //POSITION
	playerArray[98][14] = "ravens"; //TEAM
	playerArray[98][15] = "Images/Ray-Rice.png";//PIC
	playerArray[98][16] = "rayrice";


playerArray[99] = new Array(17);
	playerArray[99][0] = 0;//COMPLETIONS
	playerArray[99][1] = 0;//PASSING YARDS
	playerArray[99][2] = 0;//PASSING TOUCHDOWNS
	playerArray[99][3] = 0;//INTERCEPTIONS
	playerArray[99][4] = 0;//RUSH YARDS
	playerArray[99][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[99][6] = 65.8;//RECEPTIONS
	playerArray[99][7] = 728;//RECEIVING YARDS
	playerArray[99][8] = 4.5;//RECEIVING TOUCHDOWNS
	playerArray[99][9] = 0.9;//FUMBLES
	playerArray[99][10] = 0;//TOTAL POINTS
	playerArray[99][11] = 0;//BASELINE 
	playerArray[99][12] = "Jordan Reed";//NAME
	playerArray[99][13] = "TE"; //POSITION
	playerArray[99][14] = "redskins"; //TEAM
	playerArray[99][15] = "Images/Jordan-Reed.png";//PIC
	playerArray[99][16] = "jordanreed";


	playerArray[100] = new Array(17);
	playerArray[100][0] = 0;//COMPLETIONS
	playerArray[100][1] = 0;//PASSING YARDS
	playerArray[100][2] = 0;//PASSING TOUCHDOWNS
	playerArray[100][3] = 0;//INTERCEPTIONS
	playerArray[100][4] = 320;//RUSH YARDS
	playerArray[100][5] = 2.6;//RUSHING TOUCHDOWNS
	playerArray[100][6] = 48.3;//RECEPTIONS
	playerArray[100][7] = 424;//RECEIVING YARDS
	playerArray[100][8] = 1.9;//RECEIVING TOUCHDOWNS
	playerArray[100][9] = 1.2;//FUMBLES
	playerArray[100][10] = 0;//TOTAL POINTS
	playerArray[100][11] = 0;//BASELINE 
	playerArray[100][12] = "Darren Sproles";//NAME
	playerArray[100][13] = "RB"; //POSITION
	playerArray[100][14] = "eagles"; //TEAM
	playerArray[100][15] = "Images/Darren-Sproles.png";//PIC
	playerArray[100][16] = "darrensproles";

	playerArray[101] = new Array(17);
	playerArray[101][0] = 0;//COMPLETIONS
	playerArray[101][1] = 0;//PASSING YARDS
	playerArray[101][2] = 0;//PASSING TOUCHDOWNS
	playerArray[101][3] = 0;//INTERCEPTIONS
	playerArray[101][4] = 373;//RUSH YARDS
	playerArray[101][5] = 3;//RUSHING TOUCHDOWNS
	playerArray[101][6] = 46.8;//RECEPTIONS
	playerArray[101][7] = 421;//RECEIVING YARDS
	playerArray[101][8] = 2.2;//RECEIVING TOUCHDOWNS
	playerArray[101][9] = 1.6;//FUMBLES
	playerArray[101][10] = 0;//TOTAL POINTS
	playerArray[101][11] = 0;//BASELINE 
	playerArray[101][12] = "Danny Woodhead";//NAME
	playerArray[101][13] = "RB"; //POSITION
	playerArray[101][14] = "chargers"; //TEAM
	playerArray[101][15] = "Images/Danny-Woodhead.png";//PIC
	playerArray[101][16] = "dannywoodhead";

	playerArray[102] = new Array(17);
	playerArray[102][0] = 353;//PTS ALLOW
	playerArray[102][1] = 39.9;//SACK
	playerArray[102][2] = 0.6;//SAFE
	playerArray[102][3] = 13.1;//INT
	playerArray[102][4] = 7.4;//FUM REC
	playerArray[102][5] = 1;//TD
	playerArray[102][6] = 0.2;//BLK KICK
	playerArray[102][7] = 0;// NOTHING
	playerArray[102][8] = 0;//NOTHING
	playerArray[102][9] = 0;//NOTHING
	playerArray[102][10] = 0;//TOTAL POINTS
	playerArray[102][11] = 0;//BASELINE 
	playerArray[102][12] = "Texans D/ST";//NAME
	playerArray[102][13] = "D/ST"; //POSITION
	playerArray[102][14] = "texans"; //TEAM
	playerArray[102][15] = "Images/Texans-DST.png";//PIC
	playerArray[102][16] = "texansd";


	playerArray[103] = new Array(17);
	playerArray[103][0] = 385;//PTS ALLOW
	playerArray[103][1] = 52.2;//SACK
	playerArray[103][2] = 0.6;//SAFE
	playerArray[103][3] = 12.7;//INT
	playerArray[103][4] = 16.8;//FUM REC
	playerArray[103][5] = 4;//TD
	playerArray[103][6] = 0.2;//BLK KICK
	playerArray[103][7] = 0;// NOTHING
	playerArray[103][8] = 0;//NOTHING
	playerArray[103][9] = 0;//NOTHING
	playerArray[103][10] = 0;//TOTAL POINTS
	playerArray[103][11] = 0;//BASELINE 
	playerArray[103][12] = "Rams D/ST";//NAME
	playerArray[103][13] = "D/ST"; //POSITION
	playerArray[103][14] = "rams"; //TEAM
	playerArray[103][15] = "Images/Rams-DST.png";//PIC
	playerArray[103][16] = "ramsd";


	playerArray[104] = new Array(17);
	playerArray[104][0] = 319;//PTS ALLOW
	playerArray[104][1] = 45.1;//SACK
	playerArray[104][2] = 0.1;//SAFE
	playerArray[104][3] = 15.5;//INT
	playerArray[104][4] = 12.8;//FUM REC
	playerArray[104][5] = 4;//TD
	playerArray[104][6] = 0.1;//BLK KICK
	playerArray[104][7] = 0;// NOTHING
	playerArray[104][8] = 0;//NOTHING
	playerArray[104][9] = 0;//NOTHING
	playerArray[104][10] = 0;//TOTAL POINTS
	playerArray[104][11] = 0;//BASELINE 
	playerArray[104][12] = "Chiefs D/ST";//NAME
	playerArray[104][13] = "D/ST"; //POSITION
	playerArray[104][14] = "chiefs"; //TEAM
	playerArray[104][15] = "Images/Chiefs-DST.png";//PIC
	playerArray[104][16] = "chiefsd";


	playerArray[105] = new Array(17);
	playerArray[105][0] = 0.4;//0-19 FG 
	playerArray[105][1] = 6.3;//20-29 FG
	playerArray[105][2] = 8.8;//30-39 FG
	playerArray[105][3] = 8;//40-49 FG
	playerArray[105][4] = 2.5;//50+ FG
	playerArray[105][5] = 51;//PAT
	playerArray[105][6] = 0;//NOTHING
	playerArray[105][7] = 0;//NOTHING
	playerArray[105][8] = 0;//NOTHING
	playerArray[105][9] = 0;//NOTHING
	playerArray[105][10] = 0;//TOTAL POINTS
	playerArray[105][11] = 0;//BASELINE 
	playerArray[105][12] = "Stephen Gostkowski";//NAME
	playerArray[105][13] = "K"; //POSITION
	playerArray[105][14] = "patriots"; //TEAM
	playerArray[105][15] = "Images/Stephen-Gostkowski.png";//PIC
	playerArray[105][16] = "stephengostkowski";



	playerArray[106] = new Array(17);
	playerArray[106][0] = 1.1;//0-19 FG 
	playerArray[106][1] = 4.8;//20-29 FG
	playerArray[106][2] = 6.6;//30-39 FG
	playerArray[106][3] = 5.5;//40-49 FG
	playerArray[106][4] = 3.3;//50+ FG
	playerArray[106][5] = 57.9;//PAT
	playerArray[106][6] = 0;//NOTHING
	playerArray[106][7] = 0;//NOTHING
	playerArray[106][8] = 0;//NOTHING
	playerArray[106][9] = 0;//NOTHING
	playerArray[106][10] = 0;//TOTAL POINTS
	playerArray[106][11] = 0;//BASELINE 
	playerArray[106][12] = "Matt Prater";//NAME
	playerArray[106][13] = "K"; //POSITION
	playerArray[106][14] = "broncos"; //TEAM
	playerArray[106][15] = "Images/Matt-Prater.png";//PIC
	playerArray[106][16] = "mattprater";


	playerArray[107] = new Array(17);
	playerArray[107][0] = 0.4;//0-19 FG 
	playerArray[107][1] = 5.8;//20-29 FG
	playerArray[107][2] = 6.4;//30-39 FG
	playerArray[107][3] = 8.8;//40-49 FG
	playerArray[107][4] = 3.2;//50+ FG
	playerArray[107][5] = 41.8;//PAT
	playerArray[107][6] = 0;//NOTHING
	playerArray[107][7] = 0;//NOTHING
	playerArray[107][8] = 0;//NOTHING
	playerArray[107][9] = 0;//NOTHING
	playerArray[107][10] = 0;//TOTAL POINTS
	playerArray[107][11] = 0;//BASELINE 
	playerArray[107][12] = "Adam Vinatieri";//NAME
	playerArray[107][13] = "K"; //POSITION
	playerArray[107][14] = "colts"; //TEAM
	playerArray[107][15] = "Images/Adam-Vinatieri.png";//PIC
	playerArray[107][16] = "adamvinatieri";


	playerArray[108] = new Array(17);
	playerArray[108][0] = 0.1;//0-19 FG 
	playerArray[108][1] = 7.6;//20-29 FG
	playerArray[108][2] = 8.4;//30-39 FG
	playerArray[108][3] = 8.4;//40-49 FG
	playerArray[108][4] = 3.7;//50+ FG
	playerArray[108][5] = 36.6;//PAT
	playerArray[108][6] = 0;//NOTHING
	playerArray[108][7] = 0;//NOTHING
	playerArray[108][8] = 0;//NOTHING
	playerArray[108][9] = 0;//NOTHING
	playerArray[108][10] = 0;//TOTAL POINTS
	playerArray[108][11] = 0;//BASELINE 
	playerArray[108][12] = "Justin Tucker";//NAME
	playerArray[108][13] = "K"; //POSITION
	playerArray[108][14] = "ravens"; //TEAM
	playerArray[108][15] = "Images/Justin-Tucker.png";//PIC
	playerArray[108][16] = "justintucker";


	playerArray[109] = new Array(17);
	playerArray[109][0] = 0.4;//0-19 FG 
	playerArray[109][1] = 7.3;//20-29 FG
	playerArray[109][2] = 6.8;//30-39 FG
	playerArray[109][3] = 7.2;//40-49 FG
	playerArray[109][4] = 2.6;//50+ FG
	playerArray[109][5] = 41.7;//PAT
	playerArray[109][6] = 0;//NOTHING
	playerArray[109][7] = 0;//NOTHING
	playerArray[109][8] = 0;//NOTHING
	playerArray[109][9] = 0;//NOTHING
	playerArray[109][10] = 0;//TOTAL POINTS
	playerArray[109][11] = 0;//BASELINE 
	playerArray[109][12] = "Steven Hauschka";//NAME
	playerArray[109][13] = "K"; //POSITION
	playerArray[109][14] = "seahawks"; //TEAM
	playerArray[109][15] = "Images/Steven-Hauschka.png";//PIC
	playerArray[109][16] = "stevenhauschka";


playerArray[110] = new Array(17);
	playerArray[110][0] = 240;//PTS ALLOW
	playerArray[110][1] = 44;//SACK
	playerArray[110][2] = 1;//SAFE
	playerArray[110][3] = 21;//INT
	playerArray[110][4] = 11.8;//FUM REC
	playerArray[110][5] = 5;//TD
	playerArray[110][6] = 0.5;//BLK KICK
	playerArray[110][7] = 0;// NOTHING
	playerArray[110][8] = 0;//NOTHING
	playerArray[110][9] = 0;//NOTHING
	playerArray[110][10] = 0;//TOTAL POINTS
	playerArray[110][11] = 0;//BASELINE 
	playerArray[110][12] = "Seahawks D/ST";//NAME
	playerArray[110][13] = "D/ST"; //POSITION
	playerArray[110][14] = "seahawks"; //TEAM
	playerArray[110][15] = "Images/Seahawks-DST.png";//PIC
	playerArray[110][16] = "seahawksd";



	playerArray[111] = new Array(17);
	playerArray[111][0] = 288;//PTS ALLOW
	playerArray[111][1] = 35.7;//SACK
	playerArray[111][2] = 0.6;//SAFE
	playerArray[111][3] = 16.3;//INT
	playerArray[111][4] = 12.0;//FUM REC
	playerArray[111][5] = 4;//TD
	playerArray[111][6] = 0.2;//BLK KICK
	playerArray[111][7] = 0;// NOTHING
	playerArray[111][8] = 0;//NOTHING
	playerArray[111][9] = 0;//NOTHING
	playerArray[111][10] = 0;//TOTAL POINTS
	playerArray[111][11] = 0;//BASELINE 
	playerArray[111][12] = "Fortyniners D/ST";//NAME
	playerArray[111][13] = "D/ST"; //POSITION
	playerArray[111][14] = "fortyniners"; //TEAM
	playerArray[111][15] = "Images/Fortyniners-DST.png";//PIC
	playerArray[111][16] = "fortyninersd";

	playerArray[112] = new Array(17);
	playerArray[112][0] = 0;//COMPLETIONS
	playerArray[112][1] = 0;//PASSING YARDS
	playerArray[112][2] = 0;//PASSING TOUCHDOWNS
	playerArray[112][3] = 0;//INTERCEPTIONS
	playerArray[112][4] = 0;//RUSH YARDS
	playerArray[112][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[112][6] = 59.3;//RECEPTIONS
	playerArray[112][7] = 880;//RECEIVING YARDS
	playerArray[112][8] = 5.7;//RECEIVING TOUCHDOWNS
	playerArray[112][9] = 0.8;//FUMBLES
	playerArray[112][10] = 0;//TOTAL POINTS
	playerArray[112][11] = 0;//BASELINE 
	playerArray[112][12] = "Rueben Randle";//NAME
	playerArray[112][13] = "WR"; //POSITION
	playerArray[112][14] = "giants"; //TEAM
	playerArray[112][15] = "Images/Rueben-Randle.png";//PIC
	playerArray[112][16] = "ruebenrandle";



		playerArray[113] = new Array(17);
	playerArray[113][0] = 0;//COMPLETIONS
	playerArray[113][1] = 0;//PASSING YARDS
	playerArray[113][2] = 0;//PASSING TOUCHDOWNS
	playerArray[113][3] = 0;//INTERCEPTIONS
	playerArray[113][4] = 21.6;//RUSH YARDS
	playerArray[113][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[113][6] = 63;//RECEPTIONS
	playerArray[113][7] = 736;//RECEIVING YARDS
	playerArray[113][8] = 4.8;//RECEIVING TOUCHDOWNS
	playerArray[113][9] = 0.8;//FUMBLES
	playerArray[113][10] = 0;//TOTAL POINTS
	playerArray[113][11] = 0;//BASELINE 
	playerArray[113][12] = "Brandin Cooks";//NAME
	playerArray[113][13] = "WR"; //POSITION
	playerArray[113][14] = "saints"; //TEAM
	playerArray[113][15] = "Images/Brandin-Cooks.png";//PIC
	playerArray[113][16] = "brandincooks";


		playerArray[114] = new Array(17);
	playerArray[114][0] = 0;//COMPLETIONS
	playerArray[114][1] = 0;//PASSING YARDS
	playerArray[114][2] = 0;//PASSING TOUCHDOWNS
	playerArray[114][3] = 0;//INTERCEPTIONS
	playerArray[114][4] = 0;//RUSH YARDS
	playerArray[114][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[114][6] = 45.1;//RECEPTIONS
	playerArray[114][7] = 562;//RECEIVING YARDS
	playerArray[114][8] = 5.7;//RECEIVING TOUCHDOWNS
	playerArray[114][9] = 0.6;//FUMBLES
	playerArray[114][10] = 0;//TOTAL POINTS
	playerArray[114][11] = 0;//BASELINE 
	playerArray[114][12] = "Zach Ertz";//NAME
	playerArray[114][13] = "TE"; //POSITION
	playerArray[114][14] = "eagles"; //TEAM
	playerArray[114][15] = "Images/Zach-Ertz.png";//PIC
	playerArray[114][16] = "zachertz";


			playerArray[115] = new Array(17);
	playerArray[115][0] = 338;//COMPLETIONS
	playerArray[115][1] = 4027;//PASSING YARDS
	playerArray[115][2] = 25.1;//PASSING TOUCHDOWNS
	playerArray[115][3] = 13.8;//INTERCEPTIONS
	playerArray[115][4] = 104;//RUSH YARDS
	playerArray[115][5] = 0.5;//RUSHING TOUCHDOWNS
	playerArray[115][6] = 0;//RECEPTIONS
	playerArray[115][7] = 0;//RECEIVING YARDS
	playerArray[115][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[115][9] = 8.1;//FUMBLES
	playerArray[115][10] = 0;//TOTAL POINTS
	playerArray[115][11] = 0;//BASELINE 
	playerArray[115][12] = "Ben Roethlisberger";//NAME
	playerArray[115][13] = "QB"; //POSITION
	playerArray[115][14] = "steelers"; //TEAM
	playerArray[115][15] = "Images/Ben-Roethlisberger.png";//PIC
	playerArray[115][16] = "benrothlisberger";



			playerArray[116] = new Array(17);
	playerArray[116][0] = 0;//COMPLETIONS
	playerArray[116][1] = 0;//PASSING YARDS
	playerArray[116][2] = 0;//PASSING TOUCHDOWNS
	playerArray[116][3] = 0;//INTERCEPTIONS
	playerArray[116][4] = 0;//RUSH YARDS
	playerArray[116][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[116][6] = 72.3;//RECEPTIONS
	playerArray[116][7] = 918;//RECEIVING YARDS
	playerArray[116][8] = 5.5;//RECEIVING TOUCHDOWNS
	playerArray[116][9] = 0.9;//FUMBLES
	playerArray[116][10] = 0;//TOTAL POINTS
	playerArray[116][11] = 0;//BASELINE 
	playerArray[116][12] = "Sammy Watkins";//NAME
	playerArray[116][13] = "WR"; //POSITION
	playerArray[116][14] = "bills"; //TEAM
	playerArray[116][15] = "Images/Sammy-Watkins.png";//PIC
	playerArray[116][16] = "sammywatkins";



				playerArray[117] = new Array(17);
	playerArray[117][0] = 0;//COMPLETIONS
	playerArray[117][1] = 0;//PASSING YARDS
	playerArray[117][2] = 0;//PASSING TOUCHDOWNS
	playerArray[117][3] = 0;//INTERCEPTIONS
	playerArray[117][4] = 0;//RUSH YARDS
	playerArray[117][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[117][6] = 79.1;//RECEPTIONS
	playerArray[117][7] = 1016;//RECEIVING YARDS
	playerArray[117][8] = 5.9;//RECEIVING TOUCHDOWNS
	playerArray[117][9] = 0.5;//FUMBLES
	playerArray[117][10] = 0;//TOTAL POINTS
	playerArray[117][11] = 0;//BASELINE 
	playerArray[117][12] = "Dwayne Bowe";//NAME
	playerArray[117][13] = "WR"; //POSITION
	playerArray[117][14] = "chiefs"; //TEAM
	playerArray[117][15] = "Images/Dwayne-Bowe.png";//PIC
	playerArray[117][16] = "dwaynebowe";

				playerArray[118] = new Array(17);
	playerArray[118][0] = 0;//COMPLETIONS
	playerArray[118][1] = 0;//PASSING YARDS
	playerArray[118][2] = 0;//PASSING TOUCHDOWNS
	playerArray[118][3] = 0;//INTERCEPTIONS
	playerArray[118][4] = 0;//RUSH YARDS
	playerArray[118][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[118][6] = 60.4;//RECEPTIONS
	playerArray[118][7] = 778;//RECEIVING YARDS
	playerArray[118][8] = 4.3;//RECEIVING TOUCHDOWNS
	playerArray[118][9] = 0.4;//FUMBLES
	playerArray[118][10] = 0;//TOTAL POINTS
	playerArray[118][11] = 0;//BASELINE 
	playerArray[118][12] = "Anquan Boldin";//NAME
	playerArray[118][13] = "WR"; //POSITION
	playerArray[118][14] = "fortyniners"; //TEAM
	playerArray[118][15] = "Images/Anquan-Boldin.png";//PIC
	playerArray[118][16] = "anquanboldin";




				playerArray[119] = new Array(17);
	playerArray[119][0] = 0;//COMPLETIONS
	playerArray[119][1] = 0;//PASSING YARDS
	playerArray[119][2] = 0;//PASSING TOUCHDOWNS
	playerArray[119][3] = 0;//INTERCEPTIONS
	playerArray[119][4] = 0;//RUSH YARDS
	playerArray[119][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[119][6] = 46.4;//RECEPTIONS
	playerArray[119][7] = 661;//RECEIVING YARDS
	playerArray[119][8] = 5.2;//RECEIVING TOUCHDOWNS
	playerArray[119][9] = 0.3;//FUMBLES
	playerArray[119][10] = 0;//TOTAL POINTS
	playerArray[119][11] = 0;//BASELINE 
	playerArray[119][12] = "Hakeem Nicks";//NAME
	playerArray[119][13] = "WR"; //POSITION
	playerArray[119][14] = "colts"; //TEAM
	playerArray[119][15] = "Images/Hakeem-Nicks.png";//PIC
	playerArray[119][16] = "hakeemnicks";


			playerArray[120] = new Array(17);
	playerArray[120][0] = 0;//COMPLETIONS
	playerArray[120][1] = 0;//PASSING YARDS
	playerArray[120][2] = 0;//PASSING TOUCHDOWNS
	playerArray[120][3] = 0;//INTERCEPTIONS
	playerArray[120][4] = 623;//RUSH YARDS
	playerArray[120][5] = 2.7;//RUSHING TOUCHDOWNS
	playerArray[120][6] = 21.8;//RECEPTIONS
	playerArray[120][7] = 169;//RECEIVING YARDS
	playerArray[120][8] = 0.4;//RECEIVING TOUCHDOWNS
	playerArray[120][9] = 2.2;//FUMBLES
	playerArray[120][10] = 0;//TOTAL POINTS
	playerArray[120][11] = 0;//BASELINE 
	playerArray[120][12] = "DeAngelo Williams";//NAME
	playerArray[120][13] = "RB"; //POSITION
	playerArray[120][14] = "panthers"; //TEAM
	playerArray[120][15] = "Images/Deangelo-Williams.png";//PIC
	playerArray[120][16] = "deangelowilliams";


				playerArray[121] = new Array(17);
	playerArray[121][0] = 0;//COMPLETIONS
	playerArray[121][1] = 0;//PASSING YARDS
	playerArray[121][2] = 0;//PASSING TOUCHDOWNS
	playerArray[121][3] = 0;//INTERCEPTIONS
	playerArray[121][4] = 0;//RUSH YARDS
	playerArray[121][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[121][6] = 58.5;//RECEPTIONS
	playerArray[121][7] = 846;//RECEIVING YARDS
	playerArray[121][8] = 6.7;//RECEIVING TOUCHDOWNS
	playerArray[121][9] = 0.8;//FUMBLES
	playerArray[121][10] = 0;//TOTAL POINTS
	playerArray[121][11] = 0;//BASELINE 
	playerArray[121][12] = "Aaron Dobson";//NAME
	playerArray[121][13] = "WR"; //POSITION
	playerArray[121][14] = "patriots"; //TEAM
	playerArray[121][15] = "Images/Aaron-Dobson.png";//PIC
	playerArray[121][16] = "aarondobson";
				playerArray[122] = new Array(17);
	playerArray[122][0] = 0;//COMPLETIONS
	playerArray[122][1] = 0;//PASSING YARDS
	playerArray[122][2] = 0;//PASSING TOUCHDOWNS
	playerArray[122][3] = 0;//INTERCEPTIONS
	playerArray[122][4] = 546;//RUSH YARDS
	playerArray[122][5] = 5.6;//RUSHING TOUCHDOWNS
	playerArray[122][6] = 3.1;//RECEPTIONS
	playerArray[122][7] = 24.9;//RECEIVING YARDS
	playerArray[122][8] = 0.2;//RECEIVING TOUCHDOWNS
	playerArray[122][9] = 1.8;//FUMBLES
	playerArray[122][10] = 0;//TOTAL POINTS
	playerArray[122][11] = 0;//BASELINE 
	playerArray[122][12] = "Jeremy Hill";//NAME
	playerArray[122][13] = "RB"; //POSITION
	playerArray[122][14] = "bengals"; //TEAM
	playerArray[122][15] = "Images/Jeremy-Hill.png";//PIC
	playerArray[122][16] = "jeremyhill";

				playerArray[123] = new Array(17);
	playerArray[123][0] = 0;//COMPLETIONS
	playerArray[123][1] = 0;//PASSING YARDS
	playerArray[123][2] = 0;//PASSING TOUCHDOWNS
	playerArray[123][3] = 0;//INTERCEPTIONS
	playerArray[123][4] = 647;//RUSH YARDS
	playerArray[123][5] = 5.2;//RUSHING TOUCHDOWNS
	playerArray[123][6] = 23.1;//RECEPTIONS
	playerArray[123][7] = 198;//RECEIVING YARDS
	playerArray[123][8] = 0.6;//RECEIVING TOUCHDOWNS
	playerArray[123][9] = 2.0;//FUMBLES
	playerArray[123][10] = 0;//TOTAL POINTS
	playerArray[123][11] = 0;//BASELINE 
	playerArray[123][12] = "Darren McFadden";//NAME
	playerArray[123][13] = "RB"; //POSITION
	playerArray[123][14] = "raiders"; //TEAM
	playerArray[123][15] = "Images/Darren-Mcfadden.png";//PIC
	playerArray[123][16] = "darrenmcfadden";



				playerArray[124] = new Array(17);
	playerArray[124][0] = 0;//COMPLETIONS
	playerArray[124][1] = 0;//PASSING YARDS
	playerArray[124][2] = 0;//PASSING TOUCHDOWNS
	playerArray[124][3] = 0;//INTERCEPTIONS
	playerArray[124][4] = 0;//RUSH YARDS
	playerArray[124][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[124][6] = 47.8;//RECEPTIONS
	playerArray[124][7] = 645;//RECEIVING YARDS
	playerArray[124][8] = 4.4;//RECEIVING TOUCHDOWNS
	playerArray[124][9] = 0.6;//FUMBLES
	playerArray[124][10] = 0;//TOTAL POINTS
	playerArray[124][11] = 0;//BASELINE 
	playerArray[124][12] = "Markus Wheaton";//NAME
	playerArray[124][13] = "WR"; //POSITION
	playerArray[124][14] = "steelers"; //TEAM
	playerArray[124][15] = "Images/Markus-Wheaton.png";//PIC
	playerArray[124][16] = "markuswheaton";



				playerArray[125] = new Array(17);
	playerArray[125][0] = 0;//COMPLETIONS
	playerArray[125][1] = 0;//PASSING YARDS
	playerArray[125][2] = 0;//PASSING TOUCHDOWNS
	playerArray[125][3] = 0;//INTERCEPTIONS
	playerArray[125][4] = 0;//RUSH YARDS
	playerArray[125][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[125][6] = 55.4;//RECEPTIONS
	playerArray[125][7] = 806;//RECEIVING YARDS
	playerArray[125][8] = 4.9;//RECEIVING TOUCHDOWNS
	playerArray[125][9] = 0.9;//FUMBLES
	playerArray[125][10] = 0;//TOTAL POINTS
	playerArray[125][11] = 0;//BASELINE 
	playerArray[125][12] = "DeAndre Hopkins";//NAME
	playerArray[125][13] = "WR"; //POSITION
	playerArray[125][14] = "texans"; //TEAM
	playerArray[125][15] = "Images/Deandre-Hopkins.png";//PIC
	playerArray[125][16] = "deandrehopkins";

				playerArray[126] = new Array(17);
	playerArray[126][0] = 326;//COMPLETIONS
	playerArray[126][1] = 3974;//PASSING YARDS
	playerArray[126][2] = 27.1;//PASSING TOUCHDOWNS
	playerArray[126][3] = 19.2;//INTERCEPTIONS
	playerArray[126][4] = 170;//RUSH YARDS
	playerArray[126][5] = 1.6;//RUSHING TOUCHDOWNS
	playerArray[126][6] = 0;//RECEPTIONS
	playerArray[126][7] = 0;//RECEIVING YARDS
	playerArray[126][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[126][9] = 6.7;//FUMBLES
	playerArray[126][10] = 0;//TOTAL POINTS
	playerArray[126][11] = 0;//BASELINE 
	playerArray[126][12] = "Andy Dalton";//NAME
	playerArray[126][13] = "QB"; //POSITION
	playerArray[126][14] = "bengals"; //TEAM
	playerArray[126][15] = "Images/Andy-Dalton.png";//PIC
	playerArray[126][16] = "andydalton";


				playerArray[127] = new Array(17);
	playerArray[127][0] = 0;//COMPLETIONS
	playerArray[127][1] = 0;//PASSING YARDS
	playerArray[127][2] = 0;//PASSING TOUCHDOWNS
	playerArray[127][3] = 0;//INTERCEPTIONS
	playerArray[127][4] = 659;//RUSH YARDS
	playerArray[127][5] = 4.9;//RUSHING TOUCHDOWNS
	playerArray[127][6] = 4.0;//RECEPTIONS
	playerArray[127][7] = 33;//RECEIVING YARDS
	playerArray[127][8] = 0.2;//RECEIVING TOUCHDOWNS
	playerArray[127][9] = 1.8;//FUMBLES
	playerArray[127][10] = 0;//TOTAL POINTS
	playerArray[127][11] = 0;//BASELINE 
	playerArray[127][12] = "Chris Ivory";//NAME
	playerArray[127][13] = "RB"; //POSITION
	playerArray[127][14] = "jets"; //TEAM
	playerArray[127][15] = "Images/Chris-Ivory.png";//PIC
	playerArray[127][16] = "chrisivory";



				playerArray[128] = new Array(17);
	playerArray[128][0] = 0;//COMPLETIONS
	playerArray[128][1] = 0;//PASSING YARDS
	playerArray[128][2] = 0;//PASSING TOUCHDOWNS
	playerArray[128][3] = 0;//INTERCEPTIONS
	playerArray[128][4] = 0;//RUSH YARDS
	playerArray[128][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[128][6] = 66.2;//RECEPTIONS
	playerArray[128][7] = 866;//RECEIVING YARDS
	playerArray[128][8] = 4.5;//RECEIVING TOUCHDOWNS
	playerArray[128][9] = 1.5;//FUMBLES
	playerArray[128][10] = 0;//TOTAL POINTS
	playerArray[128][11] = 0;//BASELINE 
	playerArray[128][12] = "James Jones";//NAME
	playerArray[128][13] = "WR"; //POSITION
	playerArray[128][14] = "raiders"; //TEAM
	playerArray[128][15] = "Images/James-Jones.png";//PIC
	playerArray[128][16] = "jamesjones";



				playerArray[129] = new Array(17);
	playerArray[129][0] = 0;//COMPLETIONS
	playerArray[129][1] = 0;//PASSING YARDS
	playerArray[129][2] = 0;//PASSING TOUCHDOWNS
	playerArray[129][3] = 0;//INTERCEPTIONS
	playerArray[129][4] = 0;//RUSH YARDS
	playerArray[129][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[129][6] = 64.8;//RECEPTIONS
	playerArray[129][7] = 852;//RECEIVING YARDS
	playerArray[129][8] = 4.0;//RECEIVING TOUCHDOWNS
	playerArray[129][9] = 0.5;//FUMBLES
	playerArray[129][10] = 0;//TOTAL POINTS
	playerArray[129][11] = 0;//BASELINE 
	playerArray[129][12] = "Brian Hartline";//NAME
	playerArray[129][13] = "WR"; //POSITION
	playerArray[129][14] = "dolphins"; //TEAM
	playerArray[129][15] = "Images/Brian-Hartline.png";//PIC
	playerArray[129][16] = "brianhartline";


		

				playerArray[130] = new Array(17);
	playerArray[130][0] = 0;//COMPLETIONS
	playerArray[130][1] = 0;//PASSING YARDS
	playerArray[130][2] = 0;//PASSING TOUCHDOWNS
	playerArray[130][3] = 0;//INTERCEPTIONS
	playerArray[130][4] = 142;//RUSH YARDS
	playerArray[130][5] = 0.3;//RUSHING TOUCHDOWNS
	playerArray[130][6] = 70.2;//RECEPTIONS
	playerArray[130][7] = 804;//RECEIVING YARDS
	playerArray[130][8] = 3.7;//RECEIVING TOUCHDOWNS
	playerArray[130][9] = 1.5;//FUMBLES
	playerArray[130][10] = 0;//TOTAL POINTS
	playerArray[130][11] = 0;//BASELINE 
	playerArray[130][12] = "Tavon Austin";//NAME
	playerArray[130][13] = "WR"; //POSITION
	playerArray[130][14] = "rams"; //TEAM
	playerArray[130][15] = "Images/Tavon-Austin.png";//PIC
	playerArray[130][16] = "tavonaustin";



				playerArray[131] = new Array(17);
	playerArray[131][0] = 305;//COMPLETIONS
	playerArray[131][1] = 3359;//PASSING YARDS
	playerArray[131][2] = 20.6;//PASSING TOUCHDOWNS
	playerArray[131][3] = 19.9;//INTERCEPTIONS
	playerArray[131][4] = 526;//RUSH YARDS
	playerArray[131][5] = 2.6;//RUSHING TOUCHDOWNS
	playerArray[131][6] = 0;//RECEPTIONS
	playerArray[131][7] = 0;//RECEIVING YARDS
	playerArray[131][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[131][9] = 8.2;//FUMBLES
	playerArray[131][10] = 0;//TOTAL POINTS
	playerArray[131][11] = 0;//BASELINE 
	playerArray[131][12] = "Johnny Manziel";//NAME
	playerArray[131][13] = "QB"; //POSITION
	playerArray[131][14] = "browns"; //TEAM
	playerArray[131][15] = "Images/Johnny-Manziel.png";//PIC
	playerArray[131][16] = "johnnymanziel";


		

				playerArray[132] = new Array(17);
	playerArray[132][0] = 0;//COMPLETIONS
	playerArray[132][1] = 0;//PASSING YARDS
	playerArray[132][2] = 0;//PASSING TOUCHDOWNS
	playerArray[132][3] = 0;//INTERCEPTIONS
	playerArray[132][4] = 0;//RUSH YARDS
	playerArray[132][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[132][6] = 58.9;//RECEPTIONS
	playerArray[132][7] = 701;//RECEIVING YARDS
	playerArray[132][8] = 5.7;//RECEIVING TOUCHDOWNS
	playerArray[132][9] = 0.8;//FUMBLES
	playerArray[132][10] = 0;//TOTAL POINTS
	playerArray[132][11] = 0;//BASELINE 
	playerArray[132][12] = "Martellus Bennett";//NAME
	playerArray[132][13] = "TE"; //POSITION
	playerArray[132][14] = "bears"; //TEAM
	playerArray[132][15] = "Images/Martellus-Bennett.png";//PIC
	playerArray[132][16] = "martellusbennett";

				playerArray[133] = new Array(17);
	playerArray[133][0] = 0;//COMPLETIONS
	playerArray[133][1] = 0;//PASSING YARDS
	playerArray[133][2] = 0;//PASSING TOUCHDOWNS
	playerArray[133][3] = 0;//INTERCEPTIONS
	playerArray[133][4] = 0;//RUSH YARDS
	playerArray[133][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[133][6] = 44.1;//RECEPTIONS
	playerArray[133][7] = 589;//RECEIVING YARDS
	playerArray[133][8] = 3.9;//RECEIVING TOUCHDOWNS
	playerArray[133][9] = 0.6;//FUMBLES
	playerArray[133][10] = 0;//TOTAL POINTS
	playerArray[133][11] = 0;//BASELINE 
	playerArray[133][12] = "Ladarius Green";//NAME
	playerArray[133][13] = "TE"; //POSITION
	playerArray[133][14] = "chargers"; //TEAM
	playerArray[133][15] = "Images/Ladarius-Green.png";//PIC
	playerArray[133][16] = "ladariusgreen";


				playerArray[134] = new Array(17);
	playerArray[134][0] = 0;//COMPLETIONS
	playerArray[134][1] = 0;//PASSING YARDS
	playerArray[134][2] = 0;//PASSING TOUCHDOWNS
	playerArray[134][3] = 0;//INTERCEPTIONS
	playerArray[134][4] = 41.6;//RUSH YARDS
	playerArray[134][5] = 0.2;//RUSHING TOUCHDOWNS
	playerArray[134][6] = 54.1;//RECEPTIONS
	playerArray[134][7] = 618;//RECEIVING YARDS
	playerArray[134][8] = 4.4;//RECEIVING TOUCHDOWNS
	playerArray[134][9] = 0.5;//FUMBLES
	playerArray[134][10] = 0;//TOTAL POINTS
	playerArray[134][11] = 0;//BASELINE 
	playerArray[134][12] = "Charles Clay";//NAME
	playerArray[134][13] = "TE"; //POSITION
	playerArray[134][14] = "dolphins"; //TEAM
	playerArray[134][15] = "Images/Charles-Clay.png";//PIC
	playerArray[134][16] = "charlesclay";



				playerArray[135] = new Array(17);
	playerArray[135][0] = 0;//COMPLETIONS
	playerArray[135][1] = 0;//PASSING YARDS
	playerArray[135][2] = 0;//PASSING TOUCHDOWNS
	playerArray[135][3] = 0;//INTERCEPTIONS
	playerArray[135][4] = 12.8;//RUSH YARDS
	playerArray[135][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[135][6] = 43.3;//RECEPTIONS
	playerArray[135][7] = 511;//RECEIVING YARDS
	playerArray[135][8] = 2.6;//RECEIVING TOUCHDOWNS
	playerArray[135][9] = 0.3;//FUMBLES
	playerArray[135][10] = 0;//TOTAL POINTS
	playerArray[135][11] = 0;//BASELINE 
	playerArray[135][12] = "Danny Amendola";//NAME
	playerArray[135][13] = "WR"; //POSITION
	playerArray[135][14] = "patriots"; //TEAM
	playerArray[135][15] = "Images/Danny-Amendola.png";//PIC
	playerArray[135][16] = "dannyamendola";


				playerArray[136] = new Array(17);
	playerArray[136][0] = 0;//COMPLETIONS
	playerArray[136][1] = 0;//PASSING YARDS
	playerArray[136][2] = 0;//PASSING TOUCHDOWNS
	playerArray[136][3] = 0;//INTERCEPTIONS
	playerArray[136][4] = 278;//RUSH YARDS
	playerArray[136][5] = 1.7;//RUSHING TOUCHDOWNS
	playerArray[136][6] = 25.2;//RECEPTIONS
	playerArray[136][7] = 210;//RECEIVING YARDS
	playerArray[136][8] = 0.8;//RECEIVING TOUCHDOWNS
	playerArray[136][9] = 1.2;//FUMBLES
	playerArray[136][10] = 0;//TOTAL POINTS
	playerArray[136][11] = 0;//BASELINE 
	playerArray[136][12] = "Devonta Freeman";//NAME
	playerArray[136][13] = "RB"; //POSITION
	playerArray[136][14] = "falcons"; //TEAM
	playerArray[136][15] = "Images/Devonta-Freeman.png";//PIC
	playerArray[136][16] = "devontafreeman";

				playerArray[137] = new Array(17);
	playerArray[137][0] = 0;//COMPLETIONS
	playerArray[137][1] = 0;//PASSING YARDS
	playerArray[137][2] = 0;//PASSING TOUCHDOWNS
	playerArray[137][3] = 0;//INTERCEPTIONS
	playerArray[137][4] = 370;//RUSH YARDS
	playerArray[137][5] = 2.5;//RUSHING TOUCHDOWNS
	playerArray[137][6] = 3.4;//RECEPTIONS
	playerArray[137][7] = 27.3;//RECEIVING YARDS
	playerArray[137][8] = 0.2;//RECEIVING TOUCHDOWNS
	playerArray[137][9] = 1.1;//FUMBLES
	playerArray[137][10] = 0;//TOTAL POINTS
	playerArray[137][11] = 0;//BASELINE 
	playerArray[137][12] = "Christine Michael";//NAME
	playerArray[137][13] = "RB"; //POSITION
	playerArray[137][14] = "seahawks"; //TEAM
	playerArray[137][15] = "Images/Christine-Michael.png";//PIC
	playerArray[137][16] = "christinemichael";


				playerArray[138] = new Array(17);
	playerArray[138][0] = 302;//COMPLETIONS
	playerArray[138][1] = 3742;//PASSING YARDS
	playerArray[138][2] = 21.3;//PASSING TOUCHDOWNS
	playerArray[138][3] = 17.8;//INTERCEPTIONS
	playerArray[138][4] = 244;//RUSH YARDS
	playerArray[138][5] = 2.3;//RUSHING TOUCHDOWNS
	playerArray[138][6] = 0;//RECEPTIONS
	playerArray[138][7] = 0;//RECEIVING YARDS
	playerArray[138][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[138][9] = 7.6;//FUMBLES
	playerArray[138][10] = 0;//TOTAL POINTS
	playerArray[138][11] = 0;//BASELINE 
	playerArray[138][12] = "Ryan Tannehill";//NAME
	playerArray[138][13] = "QB"; //POSITION
	playerArray[138][14] = "dolphins"; //TEAM
	playerArray[138][15] = "Images/Ryan-Tannehill.png";//PIC
	playerArray[138][16] = "ryantannehill";


				playerArray[139] = new Array(17);
	playerArray[139][0] = 195;//COMPLETIONS
	playerArray[139][1] = 2461;//PASSING YARDS
	playerArray[139][2] = 13.2;//PASSING TOUCHDOWNS
	playerArray[139][3] = 6.9;//INTERCEPTIONS
	playerArray[139][4] = 80.1;//RUSH YARDS
	playerArray[139][5] = 0.5;//RUSHING TOUCHDOWNS
	playerArray[139][6] = 0;//RECEPTIONS
	playerArray[139][7] = 0;//RECEIVING YARDS
	playerArray[139][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[139][9] = 4.5;//FUMBLES
	playerArray[139][10] = 0;//TOTAL POINTS
	playerArray[139][11] = 0;//BASELINE 
	playerArray[139][12] = "Josh McCown";//NAME
	playerArray[139][13] = "QB"; //POSITION
	playerArray[139][14] = "buccaneers"; //TEAM
	playerArray[139][15] = "Images/Josh-Mccown.png";//PIC
	playerArray[139][16] = "joshmccown";

				playerArray[140] = new Array(17);
	playerArray[140][0] = 0;//COMPLETIONS
	playerArray[140][1] = 0;//PASSING YARDS
	playerArray[140][2] = 0;//PASSING TOUCHDOWNS
	playerArray[140][3] = 0;//INTERCEPTIONS
	playerArray[140][4] = 692;//RUSH YARDS
	playerArray[140][5] = 4.9;//RUSHING TOUCHDOWNS
	playerArray[140][6] = 22.2;//RECEPTIONS
	playerArray[140][7] = 192;//RECEIVING YARDS
	playerArray[140][8] = 0.5;//RECEIVING TOUCHDOWNS
	playerArray[140][9] = 1.8;//FUMBLES
	playerArray[140][10] = 0;//TOTAL POINTS
	playerArray[140][11] = 0;//BASELINE 
	playerArray[140][12] = "Knowshon Moreno";//NAME
	playerArray[140][13] = "RB"; //POSITION
	playerArray[140][14] = "dolphins"; //TEAM
	playerArray[140][15] = "Images/Knowshon-Moreno.png";//PIC
	playerArray[140][16] = "knowshonmoreno";



				playerArray[141] = new Array(17);
	playerArray[141][0] = 0;//COMPLETIONS
	playerArray[141][1] = 0;//PASSING YARDS
	playerArray[141][2] = 0;//PASSING TOUCHDOWNS
	playerArray[141][3] = 0;//INTERCEPTIONS
	playerArray[141][4] = 0;//RUSH YARDS
	playerArray[141][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[141][6] = 57.9;//RECEPTIONS
	playerArray[141][7] = 809;//RECEIVING YARDS
	playerArray[141][8] = 5.4;//RECEIVING TOUCHDOWNS
	playerArray[141][9] = 0.8;//FUMBLES
	playerArray[141][10] = 0;//TOTAL POINTS
	playerArray[141][11] = 0;//BASELINE 
	playerArray[141][12] = "Kelvin Benjamin";//NAME
	playerArray[141][13] = "WR"; //POSITION
	playerArray[141][14] = "panthers"; //TEAM
	playerArray[141][15] = "Images/Kelvin-Benjamin.png";//PIC
	playerArray[141][16] = "kelvinbenjamin";


				playerArray[142] = new Array(17);
	playerArray[142][0] = 0;//COMPLETIONS
	playerArray[142][1] = 0;//PASSING YARDS
	playerArray[142][2] = 0;//PASSING TOUCHDOWNS
	playerArray[142][3] = 0;//INTERCEPTIONS
	playerArray[142][4] = 525;//RUSH YARDS
	playerArray[142][5] = 3.4;//RUSHING TOUCHDOWNS
	playerArray[142][6] = 13.8;//RECEPTIONS
	playerArray[142][7] = 109;//RECEIVING YARDS
	playerArray[142][8] = 0.3;//RECEIVING TOUCHDOWNS
	playerArray[142][9] = 2.1;//FUMBLES
	playerArray[142][10] = 0;//TOTAL POINTS
	playerArray[142][11] = 0;//BASELINE 
	playerArray[142][12] = "Jonathan Stewart";//NAME
	playerArray[142][13] = "RB"; //POSITION
	playerArray[142][14] = "panthers"; //TEAM
	playerArray[142][15] = "Images/Jonathan-Stewart.png";//PIC
	playerArray[142][16] = "jonathanstewart";


				playerArray[143] = new Array(17);
	playerArray[143][0] = 0;//COMPLETIONS
	playerArray[143][1] = 0;//PASSING YARDS
	playerArray[143][2] = 0;//PASSING TOUCHDOWNS
	playerArray[143][3] = 0;//INTERCEPTIONS
	playerArray[143][4] = 10.8;//RUSH YARDS
	playerArray[143][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[143][6] = 50.8;//RECEPTIONS
	playerArray[143][7] = 797;//RECEIVING YARDS
	playerArray[143][8] = 5.2;//RECEIVING TOUCHDOWNS
	playerArray[143][9] = 0.7;//FUMBLES
	playerArray[143][10] = 0;//TOTAL POINTS
	playerArray[143][11] = 0;//BASELINE 
	playerArray[143][12] = "Kenny Stills";//NAME
	playerArray[143][13] = "WR"; //POSITION
	playerArray[143][14] = "saints"; //TEAM
	playerArray[143][15] = "Images/Kenny-Stills.png";//PIC
	playerArray[143][16] = "kennystills";


				playerArray[144] = new Array(17);
	playerArray[144][0] = 0;//COMPLETIONS
	playerArray[144][1] = 0;//PASSING YARDS
	playerArray[144][2] = 0;//PASSING TOUCHDOWNS
	playerArray[144][3] = 0;//INTERCEPTIONS
	playerArray[144][4] = 0;//RUSH YARDS
	playerArray[144][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[144][6] = 37.9;//RECEPTIONS
	playerArray[144][7] = 492;//RECEIVING YARDS
	playerArray[144][8] = 4.4;//RECEIVING TOUCHDOWNS
	playerArray[144][9] = 0.5;//FUMBLES
	playerArray[144][10] = 0;//TOTAL POINTS
	playerArray[144][11] = 0;//BASELINE 
	playerArray[144][12] = "Jordan Matthews";//NAME
	playerArray[144][13] = "WR"; //POSITION
	playerArray[144][14] = "eagles"; //TEAM
	playerArray[144][15] = "Images/Jordan-Matthews.png";//PIC
	playerArray[144][16] = "jordanmatthews";



				playerArray[145] = new Array(17);
	playerArray[145][0] = 0;//COMPLETIONS
	playerArray[145][1] = 0;//PASSING YARDS
	playerArray[145][2] = 0;//PASSING TOUCHDOWNS
	playerArray[145][3] = 0;//INTERCEPTIONS
	playerArray[145][4] = 200;//RUSH YARDS
	playerArray[145][5] = 2.5;//RUSHING TOUCHDOWNS
	playerArray[145][6] = 2.1;//RECEPTIONS
	playerArray[145][7] = 16.9;//RECEIVING YARDS
	playerArray[145][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[145][9] = 0.6;//FUMBLES
	playerArray[145][10] = 0;//TOTAL POINTS
	playerArray[145][11] = 0;//BASELINE 
	playerArray[145][12] = "Carlos Hyde";//NAME
	playerArray[145][13] = "RB"; //POSITION
	playerArray[145][14] = "fortyniners"; //TEAM
	playerArray[145][15] = "Images/Carlos-Hyde.png";//PIC
	playerArray[145][16] = "carloshyde";



				playerArray[146] = new Array(17);
	playerArray[146][0] = 334;//COMPLETIONS
	playerArray[146][1] = 4113;//PASSING YARDS
	playerArray[146][2] = 22.4;//PASSING TOUCHDOWNS
	playerArray[146][3] = 24.1;//INTERCEPTIONS
	playerArray[146][4] = 45.2;//RUSH YARDS
	playerArray[146][5] = 1.1;//RUSHING TOUCHDOWNS
	playerArray[146][6] = 0;//RECEPTIONS
	playerArray[146][7] = 0;//RECEIVING YARDS
	playerArray[146][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[146][9] = 6.9;//FUMBLES
	playerArray[146][10] = 0;//TOTAL POINTS
	playerArray[146][11] = 0;//BASELINE 
	playerArray[146][12] = "Carson Palmer";//NAME
	playerArray[146][13] = "QB"; //POSITION
	playerArray[146][14] = "cardinals"; //TEAM
	playerArray[146][15] = "Images/Carson-Palmer.png";//PIC
	playerArray[146][16] = "carsonpalmer";


				playerArray[147] = new Array(17);
	playerArray[147][0] = 0;//COMPLETIONS
	playerArray[147][1] = 0;//PASSING YARDS
	playerArray[147][2] = 0;//PASSING TOUCHDOWNS
	playerArray[147][3] = 0;//INTERCEPTIONS
	playerArray[147][4] = 556;//RUSH YARDS
	playerArray[147][5] = 4.5;//RUSHING TOUCHDOWNS
	playerArray[147][6] = 8.7;//RECEPTIONS
	playerArray[147][7] = 71.2;//RECEIVING YARDS
	playerArray[147][8] = 0.3;//RECEIVING TOUCHDOWNS
	playerArray[147][9] = 1.9;//FUMBLES
	playerArray[147][10] = 0;//TOTAL POINTS
	playerArray[147][11] = 0;//BASELINE 
	playerArray[147][12] = "Shonn Greene";//NAME
	playerArray[147][13] = "RB"; //POSITION
	playerArray[147][14] = "titans"; //TEAM
	playerArray[147][15] = "Images/Shonn-Greene.png";//PIC
	playerArray[147][16] = "shonngreene";


			playerArray[148] = new Array(17);
	playerArray[148][0] = 347;//COMPLETIONS
	playerArray[148][1] = 4254;//PASSING YARDS
	playerArray[148][2] = 23.1;//PASSING TOUCHDOWNS
	playerArray[148][3] = 22.2;//INTERCEPTIONS
	playerArray[148][4] = 44.0;//RUSH YARDS
	playerArray[148][5] = 0.6;//RUSHING TOUCHDOWNS
	playerArray[148][6] = 0;//RECEPTIONS
	playerArray[148][7] = 0;//RECEIVING YARDS
	playerArray[148][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[148][9] = 7.8;//FUMBLES
	playerArray[148][10] = 0;//TOTAL POINTS
	playerArray[148][11] = 0;//BASELINE 
	playerArray[148][12] = "Eli Manning";//NAME
	playerArray[148][13] = "QB"; //POSITION
	playerArray[148][14] = "giants"; //TEAM
	playerArray[148][15] = "Images/Eli-Manning.png";//PIC
	playerArray[148][16] = "elimanning";


				playerArray[149] = new Array(17);
	playerArray[149][0] = 0;//COMPLETIONS
	playerArray[149][1] = 0;//PASSING YARDS
	playerArray[149][2] = 0;//PASSING TOUCHDOWNS
	playerArray[149][3] = 0;//INTERCEPTIONS
	playerArray[149][4] = 0;//RUSH YARDS
	playerArray[149][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[149][6] = 39.2;//RECEPTIONS
	playerArray[149][7] = 528;//RECEIVING YARDS
	playerArray[149][8] = 3.7;//RECEIVING TOUCHDOWNS
	playerArray[149][9] = 0.3;//FUMBLES
	playerArray[149][10] = 0;//TOTAL POINTS
	playerArray[149][11] = 0;//BASELINE 
	playerArray[149][12] = "Doug Baldwin";//NAME
	playerArray[149][13] = "WR"; //POSITION
	playerArray[149][14] = "seahawks"; //TEAM
	playerArray[149][15] = "Images/Doug-Baldwin.png";//PIC
	playerArray[149][16] = "dougbaldwin";


				playerArray[150] = new Array(17);
	playerArray[150][0] = 0;//COMPLETIONS
	playerArray[150][1] = 0;//PASSING YARDS
	playerArray[150][2] = 0;//PASSING TOUCHDOWNS
	playerArray[150][3] = 0;//INTERCEPTIONS
	playerArray[150][4] = 0;//RUSH YARDS
	playerArray[150][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[150][6] = 65.1;//RECEPTIONS
	playerArray[150][7] = 808;//RECEIVING YARDS
	playerArray[150][8] = 4.4;//RECEIVING TOUCHDOWNS
	playerArray[150][9] = 0.5;//FUMBLES
	playerArray[150][10] = 0;//TOTAL POINTS
	playerArray[150][11] = 0;//BASELINE 
	playerArray[150][12] = "Greg Jennings";//NAME
	playerArray[150][13] = "WR"; //POSITION
	playerArray[150][14] = "vikings"; //TEAM
	playerArray[150][15] = "Images/Greg-Jennings.png";//PIC
	playerArray[150][16] = "gregjennings";

				playerArray[151] = new Array(17);
	playerArray[151][0] = 0;//COMPLETIONS
	playerArray[151][1] = 0;//PASSING YARDS
	playerArray[151][2] = 0;//PASSING TOUCHDOWNS
	playerArray[151][3] = 0;//INTERCEPTIONS
	playerArray[151][4] = 0;//RUSH YARDS
	playerArray[151][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[151][6] = 50.1;//RECEPTIONS
	playerArray[151][7] = 815;//RECEIVING YARDS
	playerArray[151][8] = 6.4;//RECEIVING TOUCHDOWNS
	playerArray[151][9] = 0.6;//FUMBLES
	playerArray[151][10] = 0;//TOTAL POINTS
	playerArray[151][11] = 0;//BASELINE 
	playerArray[151][12] = "Justin Hunter";//NAME
	playerArray[151][13] = "WR"; //POSITION
	playerArray[151][14] = "titans"; //TEAM
	playerArray[151][15] = "Images/Justin-Hunter.png";//PIC
	playerArray[151][16] = "justinhunter";


				playerArray[152] = new Array(17);
	playerArray[152][0] = 0;//COMPLETIONS
	playerArray[152][1] = 0;//PASSING YARDS
	playerArray[152][2] = 0;//PASSING TOUCHDOWNS
	playerArray[152][3] = 0;//INTERCEPTIONS
	playerArray[152][4] = 0;//RUSH YARDS
	playerArray[152][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[152][6] = 56.9;//RECEPTIONS
	playerArray[152][7] = 722;//RECEIVING YARDS
	playerArray[152][8] = 5.0;//RECEIVING TOUCHDOWNS
	playerArray[152][9] = 0.8;//FUMBLES
	playerArray[152][10] = 0;//TOTAL POINTS
	playerArray[152][11] = 0;//BASELINE 
	playerArray[152][12] = "Jarrett Boykin";//NAME
	playerArray[152][13] = "WR"; //POSITION
	playerArray[152][14] = "packers"; //TEAM
	playerArray[152][15] = "Images/Jarrett-Boykin.png";//PIC
	playerArray[152][16] = "jarrettboykin";


				playerArray[153] = new Array(17);
	playerArray[153][0] = 0;//COMPLETIONS
	playerArray[153][1] = 0;//PASSING YARDS
	playerArray[153][2] = 0;//PASSING TOUCHDOWNS
	playerArray[153][3] = 0;//INTERCEPTIONS
	playerArray[153][4] = 0;//RUSH YARDS
	playerArray[153][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[153][6] = 47.8;//RECEPTIONS
	playerArray[153][7] = 543;//RECEIVING YARDS
	playerArray[153][8] = 3.8;//RECEIVING TOUCHDOWNS
	playerArray[153][9] = 0.6;//FUMBLES
	playerArray[153][10] = 0;//TOTAL POINTS
	playerArray[153][11] = 0;//BASELINE 
	playerArray[153][12] = "Tyler Eifert";//NAME
	playerArray[153][13] = "TE"; //POSITION
	playerArray[153][14] = "bengals"; //TEAM
	playerArray[153][15] = "Images/Tyler-Eifert.png";//PIC
	playerArray[153][16] = "tylereifert";


				playerArray[154] = new Array(17);
	playerArray[154][0] = 0;//COMPLETIONS
	playerArray[154][1] = 0;//PASSING YARDS
	playerArray[154][2] = 0;//PASSING TOUCHDOWNS
	playerArray[154][3] = 0;//INTERCEPTIONS
	playerArray[154][4] = 0;//RUSH YARDS
	playerArray[154][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[154][6] = 52.1;//RECEPTIONS
	playerArray[154][7] = 697;//RECEIVING YARDS
	playerArray[154][8] = 4.1;//RECEIVING TOUCHDOWNS
	playerArray[154][9] = 0.3;//FUMBLES
	playerArray[154][10] = 0;//TOTAL POINTS
	playerArray[154][11] = 0;//BASELINE 
	playerArray[154][12] = "Steve Smith";//NAME
	playerArray[154][13] = "WR"; //POSITION
	playerArray[154][14] = "ravens"; //TEAM
	playerArray[154][15] = "Images/Steve-Smith.png";//PIC
	playerArray[154][16] = "stevesmith";


				playerArray[155] = new Array(17);
	playerArray[155][0] = 0;//COMPLETIONS
	playerArray[155][1] = 0;//PASSING YARDS
	playerArray[155][2] = 0;//PASSING TOUCHDOWNS
	playerArray[155][3] = 0;//INTERCEPTIONS
	playerArray[155][4] = 0;//RUSH YARDS
	playerArray[155][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[155][6] = 50;//RECEPTIONS
	playerArray[155][7] = 600;//RECEIVING YARDS
	playerArray[155][8] = 5.2;//RECEIVING TOUCHDOWNS
	playerArray[155][9] = 0.8;//FUMBLES
	playerArray[155][10] = 0;//TOTAL POINTS
	playerArray[155][11] = 0;//BASELINE 
	playerArray[155][12] = "Delanie Walker";//NAME
	playerArray[155][13] = "TE"; //POSITION
	playerArray[155][14] = "titans"; //TEAM
	playerArray[155][15] = "Images/Delanie-Walker.png";//PIC
	playerArray[155][16] = "delaniewalker";


				playerArray[156] = new Array(17);
	playerArray[156][0] = 0;//COMPLETIONS
	playerArray[156][1] = 0;//PASSING YARDS
	playerArray[156][2] = 0;//PASSING TOUCHDOWNS
	playerArray[156][3] = 0;//INTERCEPTIONS
	playerArray[156][4] = 0;//RUSH YARDS
	playerArray[156][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[156][6] = 56.9;//RECEPTIONS
	playerArray[156][7] = 626;//RECEIVING YARDS
	playerArray[156][8] = 4.3;//RECEIVING TOUCHDOWNS
	playerArray[156][9] = 0.8;//FUMBLES
	playerArray[156][10] = 0;//TOTAL POINTS
	playerArray[156][11] = 0;//BASELINE 
	playerArray[156][12] = "Heath Miller";//NAME
	playerArray[156][13] = "TE"; //POSITION
	playerArray[156][14] = "steelers"; //TEAM
	playerArray[156][15] = "Images/Heath-Miller.png";//PIC
	playerArray[156][16] = "heathmiller";


				playerArray[157] = new Array(17);
	playerArray[157][0] = 0;//COMPLETIONS
	playerArray[157][1] = 0;//PASSING YARDS
	playerArray[157][2] = 0;//PASSING TOUCHDOWNS
	playerArray[157][3] = 0;//INTERCEPTIONS
	playerArray[157][4] = 184;//RUSH YARDS
	playerArray[157][5] = 1.8;//RUSHING TOUCHDOWNS
	playerArray[157][6] = 35.7;//RECEPTIONS
	playerArray[157][7] = 310;//RECEIVING YARDS
	playerArray[157][8] = 0.8;//RECEIVING TOUCHDOWNS
	playerArray[157][9] = 1.4;//FUMBLES
	playerArray[157][10] = 0;//TOTAL POINTS
	playerArray[157][11] = 0;//BASELINE 
	playerArray[157][12] = "Roy Helu Jr.";//NAME
	playerArray[157][13] = "RB"; //POSITION
	playerArray[157][14] = "redskins"; //TEAM
	playerArray[157][15] = "Images/Roy-Helu.png";//PIC
	playerArray[157][16] = "royhelu";

				playerArray[158] = new Array(17);
	playerArray[158][0] = 0;//COMPLETIONS
	playerArray[158][1] = 0;//PASSING YARDS
	playerArray[158][2] = 0;//PASSING TOUCHDOWNS
	playerArray[158][3] = 0;//INTERCEPTIONS
	playerArray[158][4] = 411;//RUSH YARDS
	playerArray[158][5] = 2.5;//RUSHING TOUCHDOWNS
	playerArray[158][6] = 13.8;//RECEPTIONS
	playerArray[158][7] = 112;//RECEIVING YARDS
	playerArray[158][8] = 0.6;//RECEIVING TOUCHDOWNS
	playerArray[158][9] = 1.0;//FUMBLES
	playerArray[158][10] = 0;//TOTAL POINTS
	playerArray[158][11] = 0;//BASELINE 
	playerArray[158][12] = "Donald Brown";//NAME
	playerArray[158][13] = "RB"; //POSITION
	playerArray[158][14] = "chargers"; //TEAM
	playerArray[158][15] = "Images/Donald-Brown.png";//PIC
	playerArray[158][16] = "donaldbrown";


	playerArray[159] = new Array(17);
	playerArray[159][0] = 0;//COMPLETIONS
	playerArray[159][1] = 0;//PASSING YARDS
	playerArray[159][2] = 0;//PASSING TOUCHDOWNS
	playerArray[159][3] = 0;//INTERCEPTIONS
	playerArray[159][4] = 334;//RUSH YARDS
	playerArray[159][5] = 2.5;//RUSHING TOUCHDOWNS
	playerArray[159][6] = 11.8;//RECEPTIONS
	playerArray[159][7] = 97.9;//RECEIVING YARDS
	playerArray[159][8] = 0.3;//RECEIVING TOUCHDOWNS
	playerArray[159][9] = 1.2;//FUMBLES
	playerArray[159][10] = 0;//TOTAL POINTS
	playerArray[159][11] = 0;//BASELINE 
	playerArray[159][12] = "Tre Mason";//NAME
	playerArray[159][13] = "RB"; //POSITION
	playerArray[159][14] = "rams"; //TEAM
	playerArray[159][15] = "Images/Tre-Mason.png";//PIC
	playerArray[159][16] = "tremason";


	var helpme = $("#player-0");
	$(".current").removeClass("current");
	helpme.addClass("current");

		$("#submit").click(function(){
			if(apple == 0)
			{
				presetLeagueSettings();
			}
			var x = $('selector').val();


			var numteams = parseFloat($(".numTeams").val());
			var RBWRFlex = parseFloat($(".RBWRflex").val());
			var QBStarter = parseFloat($(".QBstart").val());
			var RBWRTEFlex = parseFloat($(".RBWRTEflex").val());
			var RBStarter = parseFloat($(".RBstart").val());
			var KStarter = parseFloat($(".Kstart").val());
			var WRStarter = parseFloat($(".WRstart").val());
			var DStarter = parseFloat($(".Dstart").val());
			var TEStarter = parseFloat($(".TEstart").val());
			var BenchPlayers = parseFloat($(".Bench").val());


			var Completions = parseFloat($(".completions").val());
			if(isNaN(Completions))
			{
				Completions = 0;
			}
			
			var RushYards = parseFloat($(".Rushyds").val());
			if(isNaN(RushYards))
			{
				RushYards = 0;
			}
			var PassYards = parseFloat($(".Passyds").val());
			if(isNaN(PassYards))
			{
				PassYards = 0;
			}
			var RushingTD = parseFloat($(".RushTD").val());
			if(isNaN(RushingTD))
			{
				RushingTD = 0;
			}
			var PassingTD = parseFloat($(".PassTD").val());
			if(isNaN(PassingTD))
			{
				PassingTD = 0;
			}
			var PointsPerR = parseFloat($(".PPR").val());
			if(isNaN(PointsPerR))
			{
				PointsPerR = 0;
			}
			var INT = parseFloat($(".Int").val());
			if(isNaN(INT))
			{
				INT = 0;
			}
			var ReceivingYards = parseFloat($(".Receiveyds").val());
			if(isNaN(ReceivingYards))
			{
				ReceivingYards = 0;
			}
			var Fumbles = parseFloat($(".fumble").val());
			if(isNaN(Fumbles))
			{
				Fumbles = 0;
			}
			var ReceivingTD = parseFloat($(".ReceiveTD").val());
			if(isNaN(ReceivingTD))
			{
				ReceivingTD = 0;
			}


			var FG0 = parseFloat($(".FG019").val());
			if(isNaN(FG0))
			{
				FG0 = 0;
			}
			var Sack = parseFloat($(".sack").val());
			if(isNaN(Sack))
			{
				Sack = 0;
			}
			var ptsallowed0 = parseFloat($(".pts0").val());
			if(isNaN(ptsallowed0))
			{
				ptsallowed0 = 0;
			}
			var FG20 = parseFloat($(".FG2029").val());
			if(isNaN(FG20))
			{
				FG20 = 0;
			}
			var Pick = parseFloat($(".pick").val());
			if(isNaN(Pick))
			{
				Pick = 0;
			}
			var ptsallowed1 = parseFloat($(".pts16").val());
			if(isNaN(ptsallowed1))
			{
				ptsallowed1 = 0;
			}
			var FG30 = parseFloat($(".FG3039").val());
			if(isNaN(FG30))
			{
				FG30 = 0;
			}
			var FumbleRecovery = parseFloat($(".fumbrecovery").val());
			if(isNaN(FumbleRecovery))
			{
				FumbleRecovery = 0;
			}
			var ptsallowed7 = parseFloat($(".pts713").val());
			if(isNaN(ptsallowed7))
			{
				ptsallowed7 = 0;
			}
			var FG40 = parseFloat($(".FG4049").val());	
			if(isNaN(FG40))
			{
				FG40 = 0;
			}
			var DefenseTD = parseFloat($(".DefTD").val());
			if(isNaN(DefenseTD))
			{
				DefenseTD = 0;
			}
			var ptsallowed14 = parseFloat($(".pts1420").val());
			if(isNaN(ptsallowed14))
			{
				ptsallowed14 = 0;
			}
			var FG50plus = parseFloat($(".FG50").val());
			if(isNaN(FG50plus))
			{
				FG50plus = 0;
			}
			var safety = parseFloat($(".safety").val());
			if(isNaN(safety))
			{
				safety = 0;
			}
			var ptsallowed21 = parseFloat($(".pts2127").val());
			if(isNaN(ptsallowed21))
			{
				ptsallowed21 = 0;
			}
			var PointAT = parseFloat($(".PAT").val());
			if(isNaN(PointAT))
			{
				PointAT = 0;
			}
			var BlockedKick = parseFloat($(".BlockKick").val());
			if(isNaN(BlockedKick))
			{
				BlockedKick = 0;
			}
			var ptsallowed28 = parseFloat($(".pts28").val());
			if(isNaN(ptsallowed28))
			{
				ptsallowed28 = 0;
			}


			for(var i = 0; i < 160; i = i + 1){
				if(playerArray[i][13] == "D/ST")
				{	if(playerArray[i][0]/16 == 0)
					{
						playerArray[i][10] = playerArray[i][10] + ((playerArray[i][0]/16) * ptsallowed0);
					}
					else if(playerArray[i][0]/16 <= 6)
					{
						playerArray[i][10] = playerArray[i][10] + ((playerArray[i][0]/16) * ptsallowed1);
					}
					else if(playerArray[i][0]/16 <= 13)
					{
						playerArray[i][10] = playerArray[i][10] + ((playerArray[i][0]/16) * ptsallowed7);
					}
					else if(playerArray[i][0]/16 <= 20)
					{
						playerArray[i][10] = playerArray[i][10] + ((playerArray[i][0]/16) * ptsallowed14);
					}
					else if(playerArray[i][0]/16 <= 27)
					{
						playerArray[i][10] =playerArray[i][10] + ((playerArray[i][0]/16) * ptsallowed21);
					}
					else
					{
						playerArray[i][10] = playerArray[i][10] + ((playerArray[i][0]/16) * ptsallowed28);
					}


					playerArray[i][10] = playerArray[i][10] + (playerArray[i][1] * Sack);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][2] * safety);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][3] * Pick);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][4] * Sack);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][5] * Sack);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][6] * Sack)
				}
				else if (playerArray[i][13] == "K")
				{
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][0] * FG0);//0-19 FG 
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][1] * FG20);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][2] * FG30);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][3] * FG40);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][4] * FG50plus);
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][5] * PointAT);
					
				}
				else
				{
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][0] * Completions);//COMPLETIONS
					if(PassYards != 0)
					{
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][1] / PassYards);//PASSING YARDS
					}
					
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][2] * PassingTD);//PASSING TOUCHDOWNS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][3] * INT);//INTERCEPTIONS
					if(RushYards != 0)
					{
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][4] / RushYards);//RUSH YARDS
					}
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][5] * RushingTD);//RUSHING TOUCHDOWNS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][6] * PointsPerR);//RECEPTIONS
					if(ReceivingYards != 0)
					{
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][7] / ReceivingYards);//RECEIVING YARDS
					}
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][8] * ReceivingTD);//RECEIVING TOUCHDOWNS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][9] * Fumbles);//FUMBLES
				}
					
			}
			//STILL HAVE TO ERROR CHECK IT ALL

			playerArray.sort(function(a,b){return b[10] - a[10]}); //sort

			var qbBase = Math.ceil(1.3975 * QBStarter * numteams);
			var rbBase = Math.ceil(1.72625 * (RBStarter + (RBWRFlex / 2.0) + (RBWRTEFlex / 3.0)) * numteams);
			var wrBase = Math.ceil(1.3975 * (WRStarter + (RBWRFlex / 2.0) + (RBWRTEFlex / 3.0)) * numteams);
			var teBase = Math.ceil(0.92975 * (TEStarter + (RBWRTEFlex / 3.0)) * numteams);

			var qbnum = 0;
			var rbnum = 0;
			var wrnum = 0;
			var tenum = 0;
			var Knum = 0;
			var Dnum = 0;

			var qbcount = 0;
			var rbcount = 0;
			var wrcount = 0;
			var tecount = 0;
			var Kcount = 0;
			var Dcount = 0;




			for(var i = 0; i < 160; i = i + 1){

				if(playerArray[i][13] == "QB" && (qbnum < qbBase))
				{
					qbcount = i;

					qbnum = qbnum + 1;
				}
				if(playerArray[i][13] == "RB" && (rbnum < rbBase))
				{
					rbcount = i;
					rbnum = rbnum + 1;
				}
				if(playerArray[i][13] == "TE" && (tenum < teBase))
				{
					tecount = i;
					tenum = tenum + 1;
				}
				if(playerArray[i][13] == "WR" && (wrnum < wrBase))
				{
					wrcount = i;
					wrnum = wrnum + 1;
				}
				if(playerArray[i][13] == "K" && Knum == 0)
				{
					Kcount = i;
					Knum = 1;
				}
				if(playerArray[i][13] == "D/ST" && Dnum == 0)
				{
					Dcount = i;
					Dnum = 1;
				}

			

			}
			//potential error check here

			for(var i = 0; i < 160; i = i + 1)
			{
				if(playerArray[i][13] == "QB")
				{
					playerArray[i][11] = playerArray[i][10] - playerArray[qbcount][10];
				}
				if(playerArray[i][13] == "RB")
				{
					playerArray[i][11] = playerArray[i][10] - playerArray[rbcount][10];
				}
				if(playerArray[i][13] == "TE")
				{
					playerArray[i][11] = playerArray[i][10] - playerArray[tecount][10];
				}
				if(playerArray[i][13] == "WR")
				{
					playerArray[i][11] = playerArray[i][10] - playerArray[wrcount][10];
				}
				if(playerArray[i][13] == "K")
				{
					playerArray[i][11] = playerArray[i][10] - playerArray[Kcount][10];
				}
				if(playerArray[i][13] == "D/ST")
				{
					playerArray[i][11] = playerArray[i][10] - playerArray[Dcount][10];
				}
			}




			playerArray.sort(function(a,b){return b[11] - a[11]}); //sort



			var counter = 0;
			var firstone = $(".firstsec");

			for(var i = 0; i < 160; i = i + 1){

				
					
					$(".current h2").replaceWith('<h2>' + playerArray[i][12] +'</h2>');
					
					$(".current img").remove();
					$('.current').append("<img src='" + playerArray[i][15] + "'/>")
					var currentLink = $(".current");
					$(".current .pos").remove();
					$('.current').append("<div class ='pos'>" + playerArray[i][13] + "</div>");
					
					$(".current").removeClass();
					if(playerArray[i][13] == "D/ST")
					{
						$(".current .pos").css("font-size", "20px");
					}
				


					currentLink.addClass("current");
					

					$(".current").addClass(playerArray[i][14]);
					$(".current").addClass(playerArray[i][16]);
					if($window.width() < 660)
			       	{
			       		$("#playerGrid a").addClass('span_6_of_12');
			       	}
			     
			       	if(($window.width()  >= 660) && ($window.width() < 890))
			       	{	
			       		$("#playerGrid a").addClass('span_4_of_12');
			       	}
			       	if($window.width() >= 890)
			       	{
			       		$("#playerGrid a").addClass('span_3_of_12');
			       	}

					
						var nextlink  = $(".current").next();
						$(".current").removeClass("current");
						nextlink.addClass("current");
						counter = counter + 1;
					
					

			}
			berry = 1;

			$("#playerGrid").slideDown(function(){
				$("html, body").animate({
					scrollTop: $("#playerGrid").offset().top},1500);
			});

			for(var i = 0; i < 160; i = i + 1)
			{
				playerArray[i][10] = 0;
				playerArray[i][11] = 0;
			}

			var helper = $("#player-0");
			$(".current").removeClass("current");
			helper.addClass("current");

	
			return false;
		}); //submit button
	
	
	var mainbody = $(".holder");
	var ycoord = 0;
	$("#playerGrid").hover(function(){


		//USE THIS
		//click on an A tag

		$("#playerGrid a").click(function(){
		var classList = $(this).attr('class').split(/\s+/);

		
	
			var playername = classList[1];
			var ppgaeplayername = ".Ppage" + "." + playername;

		if(mainbody.is(":visible")){
				if($(this).hasClass(playername)){

				ycoord = $(this).offset().top;
				$(ppgaeplayername).css("display","block");
				$(ppgaeplayername).addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$(".instructions").hide();
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;



		})																	
		$(".buttonClose").click(function(){

			$("#playerGrid").css("display","block");
			$("#inputs").css("display","block");
			$(".containme").css("position","fixed");
			$(".instructions").show();
			mainbody.slideDown(1000,function(){
			$(".containme").css("z-index","0");
			$(".Ppage.alive").css("display","none");
			$(".alive").removeClass("alive");
			});

			$(".holder").css("display","block");
			window.scrollTo(50, ycoord);

			return false;

		});


	});//hover

});//doc ready