$(document).ready(function(){


 var $window = $(window);

        // Function to handle changes to style classes based on window width
        function checkWidth() {
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

    // Execute on load
    checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);

    $(".rightarrow").click(function(){
    	if($(this).parent().parent().hasClass("leaguesection"))
    	{
    		var slider = $(".passingsection");
			console.log("league");
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

    		console.log("offense");
    		var slider = $(".rushingsection");
			console.log("league");
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
    	if($(this).parent().parent().hasClass("passingsection"))
    	{
    		var slider = $(".leaguesection");
			console.log("league");
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
    			console.log("offense");
    		var slider = $(".passingsection");
			console.log("league");
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



	playerArray[0] = new Array(23);
	playerArray[0][0] = 0;//COMPLETIONS
	playerArray[0][1] = 0;//PASSING YARDS
	playerArray[0][2] = 0;//PASSING TOUCHDOWNS
	playerArray[0][3] = 0;//INTERCEPTIONS
	playerArray[0][4] = 1402;//RUSH YARDS
	playerArray[0][5] = 9;//RUSHING TOUCHDOWNS
	playerArray[0][6] = 42;//RECEPTIONS
	playerArray[0][7] = 342;//RECEIVING YARDS
	playerArray[0][8] = 3;//RECEIVING TOUCHDOWNS
	playerArray[0][9] = 0;//Field Goals 0-19 Yards
	playerArray[0][10] = 0;//Field Goals 20-29 Yards
	playerArray[0][11] = 0;//Field Goals 30-39 Yards
	playerArray[0][12] = 0;//Field Goals 40-49 Yards
	playerArray[0][13] = 0;//Field Goals 50+
	playerArray[0][14] = 0;//PAT
	playerArray[0][15] = 0;//Sacks
	playerArray[0][16] = 0;//Interceptions
	playerArray[0][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[0][18] = "Lesean Mccoy";//NAME
	playerArray[0][19] = "RB"; //POSITION
	playerArray[0][20] = "eagles"; //TEAM
	playerArray[0][21] = "Images/Lesean-Mccoy.png";//PIC
	playerArray[0][22] = "LM";


	playerArray[1] = new Array(23);
	playerArray[1][0] = 0;//COMPLETIONS
	playerArray[1][1] = 0;//PASSING YARDS
	playerArray[1][2] = 0;//PASSING TOUCHDOWNS
	playerArray[1][3] = 0;//INTERCEPTIONS
	playerArray[1][4] = 1365;//RUSH YARDS
	playerArray[1][5] = 13;//RUSHING TOUCHDOWNS
	playerArray[1][6] = 40;//RECEPTIONS
	playerArray[1][7] = 289;//RECEIVING YARDS
	playerArray[1][8] = 2;//RECEIVING TOUCHDOWNS
	playerArray[1][9] = 0;//Field Goals 0-19 Yards
	playerArray[1][10] = 0;//Field Goals 20-29 Yards
	playerArray[1][11] = 0;//Field Goals 30-39 Yards
	playerArray[1][12] = 0;//Field Goals 40-49 Yards
	playerArray[1][13] = 0;//Field Goals 50+
	playerArray[1][14] = 0;//PAT
	playerArray[1][15] = 0;//Sacks
	playerArray[1][16] = 0;//Interceptions
	playerArray[1][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[1][18] = "Adrian Peterson";//NAME
	playerArray[1][19] = "RB"; //POSITION
	playerArray[1][20] = "vikings";//TEAM
	playerArray[1][21] = "Images/Adrian-Peterson.png";//PIC
	playerArray[1][22] = "AP";


	playerArray[2] = new Array(23);
	playerArray[2][0] = 0;//COMPLETIONS
	playerArray[2][1] = 0;//PASSING YARDS
	playerArray[2][2] = 0;//PASSING TOUCHDOWNS
	playerArray[2][3] = 0;//INTERCEPTIONS
	playerArray[2][4] = 0;//RUSH YARDS
	playerArray[2][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[2][6] = 94;//RECEPTIONS
	playerArray[2][7] = 1664;//RECEIVING YARDS
	playerArray[2][8] = 12;//RECEIVING TOUCHDOWNS
	playerArray[2][9] = 0;//Field Goals 0-19 Yards
	playerArray[2][10] = 0;//Field Goals 20-29 Yards
	playerArray[2][11] = 0;//Field Goals 30-39 Yards
	playerArray[2][12] = 0;//Field Goals 40-49 Yards
	playerArray[2][13] = 0;//Field Goals 50+
	playerArray[2][14] = 0;//PAT
	playerArray[2][15] = 0;//Sacks
	playerArray[2][16] = 0;//Interceptions
	playerArray[2][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[2][18] = "Calvin Johnson";//NAME
	playerArray[2][19] = "WR"; //POSITION
	playerArray[2][20] = "lions";//BACKGROUND COLOR
	playerArray[2][21] = "Images/Calvin-Johnson.png";//FONT-COLOR
	playerArray[2][22] = "CJ";

	playerArray[3] = new Array(23);
	playerArray[3][0] = 0;//COMPLETIONS
	playerArray[3][1] = 0;//PASSING YARDS
	playerArray[3][2] = 0;//PASSING TOUCHDOWNS
	playerArray[3][3] = 0;//INTERCEPTIONS
	playerArray[3][4] = 1260;//RUSH YARDS
	playerArray[3][5] = 7;//RUSHING TOUCHDOWNS
	playerArray[3][6] = 64;//RECEPTIONS
	playerArray[3][7] = 587;//RECEIVING YARDS
	playerArray[3][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[3][9] = 0;//Field Goals 0­19 Yards
	playerArray[3][10] = 0;//Field Goals 20­29 Yards
	playerArray[3][11] = 0;//Field Goals 30­39 Yards
	playerArray[3][12] = 0;//Field Goals 40­49 Yards
	playerArray[3][13] = 0;//Field Goals 50+
	playerArray[3][14] = 0;//PAT
	playerArray[3][15] = 0;//Sacks
	playerArray[3][16] = 0;//Interceptions
	playerArray[3][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[3][18] = "Jamaal Charles";//NAME
	playerArray[3][19] = "RB";//Position
	playerArray[3][20] = "chiefs";//BACKGROUND COLOR
	playerArray[3][21] = "Images/Jamaal-Charles.png";//FONT­COLOR
	playerArray[3][22] = "JC";

	playerArray[4] = new Array(23);
	playerArray[4][0] = 0;//COMPLETIONS
	playerArray[4][1] = 0;//PASSING YARDS
	playerArray[4][2] = 0;//PASSING TOUCHDOWNS
	playerArray[4][3] = 0;//INTERCEPTIONS
	playerArray[4][4] = 1227;//RUSH YARDS
	playerArray[4][5] = 8;//RUSHING TOUCHDOWNS
	playerArray[4][6] = 70;//RECEPTIONS
	playerArray[4][7] = 576;//RECEIVING YARDS
	playerArray[4][8] = 2;//RECEIVING TOUCHDOWNS
	playerArray[4][9] = 0;//Field Goals 0-19 Yards
	playerArray[4][10] = 0;//Field Goals 20-29 Yards
	playerArray[4][11] = 0;//Field Goals 30-39 Yards
	playerArray[4][12] = 0;//Field Goals 40-49 Yards
	playerArray[4][13] = 0;//Field Goals 50+
	playerArray[4][14] = 0;//PAT
	playerArray[4][15] = 0;//Sacks
	playerArray[4][16] = 0;//Interceptions
	playerArray[4][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[4][18] = "Matt Forte";//NAME
	playerArray[4][19] = "RB";//Position
	playerArray[4][20] = "bears";//BACKGROUND COLOR
	playerArray[4][21] = "Images/Matt-Forte.png";//FONT-COLOR
	playerArray[4][22] = "MF";

	playerArray[5] = new Array(23);
	playerArray[5][0] = 0;//COMPLETIONS
	playerArray[5][1] = 0;//PASSING YARDS
	playerArray[5][2] = 0;//PASSING TOUCHDOWNS
	playerArray[5][3] = 0;//INTERCEPTIONS
	playerArray[5][4] = 1285;//RUSH YARDS
	playerArray[5][5] = 12;//RUSHING TOUCHDOWNS
	playerArray[5][6] = 33;//RECEPTIONS
	playerArray[5][7] = 279;//RECEIVING YARDS
	playerArray[5][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[5][9] = 0;//Field Goals 0-19 Yards
	playerArray[5][10] = 0;//Field Goals 20-29 Yards
	playerArray[5][11] = 0;//Field Goals 30-39 Yards
	playerArray[5][12] = 0;//Field Goals 40-49 Yards
	playerArray[5][13] = 0;//Field Goals 50+
	playerArray[5][14] = 0;//PAT
	playerArray[5][15] = 0;//Sacks
	playerArray[5][16] = 0;//Interceptions
	playerArray[5][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[5][18] = "Marshawn Lynch";//NAME
	playerArray[5][19] = "RB";//Position
	playerArray[5][20] = "seahawks";//BACKGROUND COLOR
	playerArray[5][21] = "Images/Marshawn-Lynch.png";//FONT-COLOR
	playerArray[5][22] = "ML";

	playerArray[6] = new Array(23);
	playerArray[6][0] = 0;//COMPLETIONS
	playerArray[6][1] = 0;//PASSING YARDS
	playerArray[6][2] = 0;//PASSING TOUCHDOWNS
	playerArray[6][3] = 0;//INTERCEPTIONS
	playerArray[6][4] = 1220;//RUSH YARDS
	playerArray[6][5] = 10;//RUSHING TOUCHDOWNS
	playerArray[6][6] = 42;//RECEPTIONS
	playerArray[6][7] = 301;//RECEIVING YARDS
	playerArray[6][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[6][9] = 0;//Field Goals 0-19 Yards
	playerArray[6][10] = 0;//Field Goals 20-29 Yards
	playerArray[6][11] = 0;//Field Goals 30-39 Yards
	playerArray[6][12] = 0;//Field Goals 40-49 Yards
	playerArray[6][13] = 0;//Field Goals 50+
	playerArray[6][14] = 0;//PAT
	playerArray[6][15] = 0;//Sacks
	playerArray[6][16] = 0;//Interceptions
	playerArray[6][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[6][18] = "Eddie Lacy";//NAME
	playerArray[6][19] = "RB";//Position
	playerArray[6][20] = "packers";//BACKGROUND COLOR
	playerArray[6][21] = "Images/Eddie-Lacy.png";//FONT-COLOR
	playerArray[6][22] = "EL";

	playerArray[7] = new Array(23);
	playerArray[7][0] = 435;//COMPLETIONS
	playerArray[7][1] = 5210;//PASSING YARDS
	playerArray[7][2] = 48;//PASSING TOUCHDOWNS
	playerArray[7][3] = 12;//INTERCEPTIONS
	playerArray[7][4] = -14;//RUSH YARDS
	playerArray[7][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[7][6] = 0;//RECEPTIONS
	playerArray[7][7] = 0;//RECEIVING YARDS
	playerArray[7][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[7][9] = 0;//Field Goals 0-19 Yards
	playerArray[7][10] = 0;//Field Goals 20-29 Yards
	playerArray[7][11] = 0;//Field Goals 30-39 Yards
	playerArray[7][12] = 0;//Field Goals 40-49 Yards
	playerArray[7][13] = 0;//Field Goals 50+
	playerArray[7][14] = 0;//PAT
	playerArray[7][15] = 0;//Sacks
	playerArray[7][16] = 0;//Interceptions
	playerArray[7][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[7][18] = "Peyton Manning";//NAME
	playerArray[7][19] = "QB";//Position
	playerArray[7][20] = "broncos";//BACKGROUND COLOR
	playerArray[7][21] = "Images/Peyton-Manning.png";//FONT-COLOR
	playerArray[7][22] = "PM";

	playerArray[8] = new Array(23);
	playerArray[8][0] = 0;//COMPLETIONS
	playerArray[8][1] = 0;//PASSING YARDS
	playerArray[8][2] = 0;//PASSING TOUCHDOWNS
	playerArray[8][3] = 0;//INTERCEPTIONS
	playerArray[8][4] = 1192;//RUSH YARDS
	playerArray[8][5] = 8;//RUSHING TOUCHDOWNS
	playerArray[8][6] = 43;//RECEPTIONS
	playerArray[8][7] = 316;//RECEIVING YARDS
	playerArray[8][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[8][9] = 0;//Field Goals 0-19 Yards
	playerArray[8][10] = 0;//Field Goals 20-29 Yards
	playerArray[8][11] = 0;//Field Goals 30-39 Yards
	playerArray[8][12] = 0;//Field Goals 40-49 Yards
	playerArray[8][13] = 0;//Field Goals 50+
	playerArray[8][14] = 0;//PAT
	playerArray[8][15] = 0;//Sacks
	playerArray[8][16] = 0;//Interceptions
	playerArray[8][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[8][18] = "Doug Martin";//NAME
	playerArray[8][19] = "RB";//Position
	playerArray[8][20] = "buccaneers";//BACKGROUND COLOR
	playerArray[8][21] = "Images/Doug-Martin.png";//FONT-COLOR
	playerArray[8][22] = "DM";

	playerArray[9] = new Array(23);
	playerArray[9][0] = 0;//COMPLETIONS
	playerArray[9][1] = 0;//PASSING YARDS
	playerArray[9][2] = 0;//PASSING TOUCHDOWNS
	playerArray[9][3] = 0;//INTERCEPTIONS
	playerArray[9][4] = 0;//RUSH YARDS
	playerArray[9][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[9][6] = 84;//RECEPTIONS
	playerArray[9][7] = 1115;//RECEIVING YARDS
	playerArray[9][8] = 13;//RECEIVING TOUCHDOWNS
	playerArray[9][9] = 0;//Field Goals 0-19 Yards
	playerArray[9][10] = 0;//Field Goals 20-29 Yards
	playerArray[9][11] = 0;//Field Goals 30-39 Yards
	playerArray[9][12] = 0;//Field Goals 40-49 Yards
	playerArray[9][13] = 0;//Field Goals 50+
	playerArray[9][14] = 0;//PAT
	playerArray[9][15] = 0;//Sacks
	playerArray[9][16] = 0;//Interceptions
	playerArray[9][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[9][18] = "Jimmy Graham";//NAME
	playerArray[9][19] = "TE";//Position
	playerArray[9][20] = "saints";//BACKGROUND COLOR
	playerArray[9][21] = "Images/Jimmy-Graham.png";//FONT-COLOR
	playerArray[9][22] = "JG";

	playerArray[10] = new Array(23);
	playerArray[10][0] = 0;//COMPLETIONS
	playerArray[10][1] = 0;//PASSING YARDS
	playerArray[10][2] = 0;//PASSING TOUCHDOWNS
	playerArray[10][3] = 0;//INTERCEPTIONS
	playerArray[10][4] = 1034;//RUSH YARDS
	playerArray[10][5] = 8;//RUSHING TOUCHDOWNS
	playerArray[10][6] = 37;//RECEPTIONS
	playerArray[10][7] = 307;//RECEIVING YARDS
	playerArray[10][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[10][9] = 0;//Field Goals 0-19 Yards
	playerArray[10][10] = 0;//Field Goals 20-29 Yards
	playerArray[10][11] = 0;//Field Goals 30-39 Yards
	playerArray[10][12] = 0;//Field Goals 40-49 Yards
	playerArray[10][13] = 0;//Field Goals 50+
	playerArray[10][14] = 0;//PAT
	playerArray[10][15] = 0;//Sacks
	playerArray[10][16] = 0;//Interceptions
	playerArray[10][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[10][18] = "Arian Foster";//NAME
	playerArray[10][19] = "RB";//Position
	playerArray[10][20] = "texans";//BACKGROUND COLOR
	playerArray[10][21] = "Images/Arian-Foster.png";//FONT-COLOR
	playerArray[10][22] = "AF";

	playerArray[11] = new Array(23);
	playerArray[11][0] = 348;//COMPLETIONS
	playerArray[11][1] = 4378;//PASSING YARDS
	playerArray[11][2] = 39;//PASSING TOUCHDOWNS
	playerArray[11][3] = 7;//INTERCEPTIONS
	playerArray[11][4] = 225;//RUSH YARDS
	playerArray[11][5] = 2;//RUSHING TOUCHDOWNS
	playerArray[11][6] = 0;//RECEPTIONS
	playerArray[11][7] = 0;//RECEIVING YARDS
	playerArray[11][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[11][9] = 0;//Field Goals 0-19 Yards
	playerArray[11][10] = 0;//Field Goals 20-29 Yards
	playerArray[11][11] = 0;//Field Goals 30-39 Yards
	playerArray[11][12] = 0;//Field Goals 40-49 Yards
	playerArray[11][13] = 0;//Field Goals 50+
	playerArray[11][14] = 0;//PAT
	playerArray[11][15] = 0;//Sacks
	playerArray[11][16] = 0;//Interceptions
	playerArray[11][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[11][18] = "Aaron Rodgers";//NAME
	playerArray[11][19] = "QB";//Position
	playerArray[11][20] = "packers";//BACKGROUND COLOR
	playerArray[11][21] = "Images/Aaron-Rodgers.png";//FONT-COLOR
	playerArray[11][22] = "AR";

	playerArray[12] = new Array(23);
	playerArray[12][0] = 0;//COMPLETIONS
	playerArray[12][1] = 0;//PASSING YARDS
	playerArray[12][2] = 0;//PASSING TOUCHDOWNS
	playerArray[12][3] = 0;//INTERCEPTIONS
	playerArray[12][4] = 1187;//RUSH YARDS
	playerArray[12][5] = 9;//RUSHING TOUCHDOWNS
	playerArray[12][6] = 21;//RECEPTIONS
	playerArray[12][7] = 127;//RECEIVING YARDS
	playerArray[12][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[12][9] = 0;//Field Goals 0-19 Yards
	playerArray[12][10] = 0;//Field Goals 20-29 Yards
	playerArray[12][11] = 0;//Field Goals 30-39 Yards
	playerArray[12][12] = 0;//Field Goals 40-49 Yards
	playerArray[12][13] = 0;//Field Goals 50+
	playerArray[12][14] = 0;//PAT
	playerArray[12][15] = 0;//Sacks
	playerArray[12][16] = 0;//Interceptions
	playerArray[12][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[12][18] = "Zac Stacy";//NAME
	playerArray[12][19] = "RB";//Position
	playerArray[12][20] = "rams";//BACKGROUND COLOR
	playerArray[12][21] = "Images/Zac-Stacy.png";//FONT-COLOR
	playerArray[12][22] = "ZS";

	playerArray[13] = new Array(23);
	playerArray[13][0] = 0;//COMPLETIONS
	playerArray[13][1] = 0;//PASSING YARDS
	playerArray[13][2] = 0;//PASSING TOUCHDOWNS
	playerArray[13][3] = 0;//INTERCEPTIONS
	playerArray[13][4] = 989;//RUSH YARDS
	playerArray[13][5] = 8;//RUSHING TOUCHDOWNS
	playerArray[13][6] = 56;//RECEPTIONS
	playerArray[13][7] = 425;//RECEIVING YARDS
	playerArray[13][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[13][9] = 0;//Field Goals 0-19 Yards
	playerArray[13][10] = 0;//Field Goals 20-29 Yards
	playerArray[13][11] = 0;//Field Goals 30-39 Yards
	playerArray[13][12] = 0;//Field Goals 40-49 Yards
	playerArray[13][13] = 0;//Field Goals 50+
	playerArray[13][14] = 0;//PAT
	playerArray[13][15] = 0;//Sacks
	playerArray[13][16] = 0;//Interceptions
	playerArray[13][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[13][18] = "DeMarco Murray";//NAME
	playerArray[13][19] = "RB";//Position
	playerArray[13][20] = "cowboys";//BACKGROUND COLOR
	playerArray[13][21] = "Images/Demarco-Murray.png";//FONT-COLOR
	playerArray[13][22] = "DM1";

	playerArray[14] = new Array(23);
	playerArray[14][0] = 0;//COMPLETIONS
	playerArray[14][1] = 0;//PASSING YARDS
	playerArray[14][2] = 0;//PASSING TOUCHDOWNS
	playerArray[14][3] = 0;//INTERCEPTIONS
	playerArray[14][4] = 0;//RUSH YARDS
	playerArray[14][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[14][6] = 93;//RECEPTIONS
	playerArray[14][7] = 1400;//RECEIVING YARDS
	playerArray[14][8] = 13;//RECEIVING TOUCHDOWNS
	playerArray[14][9] = 0;//Field Goals 0-19 Yards
	playerArray[14][10] = 0;//Field Goals 20-29 Yards
	playerArray[14][11] = 0;//Field Goals 30-39 Yards
	playerArray[14][12] = 0;//Field Goals 40-49 Yards
	playerArray[14][13] = 0;//Field Goals 50+
	playerArray[14][14] = 0;//PAT
	playerArray[14][15] = 0;//Sacks
	playerArray[14][16] = 0;//Interceptions
	playerArray[14][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[14][18] = "Demaryius Thomas";//NAME
	playerArray[14][19] = "WR";//Position
	playerArray[14][20] = "broncos";//BACKGROUND COLOR
	playerArray[14][21] = "Images/Demariyus-Thomas.png";//FONT-COLOR
	playerArray[14][22] = "DT";

	playerArray[15] = new Array(23);
	playerArray[15][0] = 0;//COMPLETIONS
	playerArray[15][1] = 0;//PASSING YARDS
	playerArray[15][2] = 0;//PASSING TOUCHDOWNS
	playerArray[15][3] = 0;//INTERCEPTIONS
	playerArray[15][4] = 0;//RUSH YARDS
	playerArray[15][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[15][6] = 90;//RECEPTIONS
	playerArray[15][7] = 1336;//RECEIVING YARDS
	playerArray[15][8] = 11;//RECEIVING TOUCHDOWNS
	playerArray[15][9] = 0;//Field Goals 0-19 Yards
	playerArray[15][10] = 0;//Field Goals 20-29 Yards
	playerArray[15][11] = 0;//Field Goals 30-39 Yards
	playerArray[15][12] = 0;//Field Goals 40-49 Yards
	playerArray[15][13] = 0;//Field Goals 50+
	playerArray[15][14] = 0;//PAT
	playerArray[15][15] = 0;//Sacks
	playerArray[15][16] = 0;//Interceptions
	playerArray[15][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[15][18] = "A.J. Green";//NAME
	playerArray[15][19] = "WR";//Position
	playerArray[15][20] = "bengals";//BACKGROUND COLOR
	playerArray[15][21] = "Images/AJ-Green.png";//FONT-COLOR
	playerArray[15][22] = "AG";

	playerArray[16] = new Array(23);
	playerArray[16][0] = 435;//COMPLETIONS
	playerArray[16][1] = 4880;//PASSING YARDS
	playerArray[16][2] = 39;//PASSING TOUCHDOWNS
	playerArray[16][3] = 15;//INTERCEPTIONS
	playerArray[16][4] = 64;//RUSH YARDS
	playerArray[16][5] = 1;//RUSHING TOUCHDOWNS
	playerArray[16][6] = 0;//RECEPTIONS
	playerArray[16][7] = 0;//RECEIVING YARDS
	playerArray[16][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[16][9] = 0;//Field Goals 0-19 Yards
	playerArray[16][10] = 0;//Field Goals 20-29 Yards
	playerArray[16][11] = 0;//Field Goals 30-39 Yards
	playerArray[16][12] = 0;//Field Goals 40-49 Yards
	playerArray[16][13] = 0;//Field Goals 50+
	playerArray[16][14] = 0;//PAT
	playerArray[16][15] = 0;//Sacks
	playerArray[16][16] = 0;//Interceptions
	playerArray[16][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[16][18] = "Drew Brees";//NAME
	playerArray[16][19] = "QB";//Position
	playerArray[16][20] = "saints";//BACKGROUND COLOR
	playerArray[16][21] = "Images/Drew-Brees.png";//FONT-COLOR
	playerArray[16][22] = "DB";

	playerArray[17] = new Array(23);
	playerArray[17][0] = 0;//COMPLETIONS
	playerArray[17][1] = 0;//PASSING YARDS
	playerArray[17][2] = 0;//PASSING TOUCHDOWNS
	playerArray[17][3] = 0;//INTERCEPTIONS
	playerArray[17][4] = 8;//RUSH YARDS
	playerArray[17][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[17][6] = 100;//RECEPTIONS
	playerArray[17][7] = 1327;//RECEIVING YARDS
	playerArray[17][8] = 12;//RECEIVING TOUCHDOWNS
	playerArray[17][9] = 0;//Field Goals 0-19 Yards
	playerArray[17][10] = 0;//Field Goals 20-29 Yards
	playerArray[17][11] = 0;//Field Goals 30-39 Yards
	playerArray[17][12] = 0;//Field Goals 40-49 Yards
	playerArray[17][13] = 0;//Field Goals 50+
	playerArray[17][14] = 0;//PAT
	playerArray[17][15] = 0;//Sacks
	playerArray[17][16] = 0;//Interceptions
	playerArray[17][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[17][18] = "Dez Bryant";//NAME
	playerArray[17][19] = "WR";//Position
	playerArray[17][20] = "cowboys";//BACKGROUND COLOR
	playerArray[17][21] = "Images/Dez-Bryant.png";//FONT-COLOR
	playerArray[17][22] = "DB1";

	playerArray[18] = new Array(23);
	playerArray[18][0] = 0;//COMPLETIONS
	playerArray[18][1] = 0;//PASSING YARDS
	playerArray[18][2] = 0;//PASSING TOUCHDOWNS
	playerArray[18][3] = 0;//INTERCEPTIONS
	playerArray[18][4] = 1073;//RUSH YARDS
	playerArray[18][5] = 8;//RUSHING TOUCHDOWNS
	playerArray[18][6] = 52;//RECEPTIONS
	playerArray[18][7] = 358;//RECEIVING YARDS
	playerArray[18][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[18][9] = 0;//Field Goals 0-19 Yards
	playerArray[18][10] = 0;//Field Goals 20-29 Yards
	playerArray[18][11] = 0;//Field Goals 30-39 Yards
	playerArray[18][12] = 0;//Field Goals 40-49 Yards
	playerArray[18][13] = 0;//Field Goals 50+
	playerArray[18][14] = 0;//PAT
	playerArray[18][15] = 0;//Sacks
	playerArray[18][16] = 0;//Interceptions
	playerArray[18][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[18][18] = "Le'Veon Bell";//NAME
	playerArray[18][19] = "RB";//Position
	playerArray[18][20] = "steelers";//BACKGROUND COLOR
	playerArray[18][21] = "Images/Leveon-Bell.png";//FONT-COLOR
	playerArray[18][22] = "LB";

	playerArray[19] = new Array(23);
	playerArray[19][0] = 0;//COMPLETIONS
	playerArray[19][1] = 0;//PASSING YARDS
	playerArray[19][2] = 0;//PASSING TOUCHDOWNS
	playerArray[19][3] = 0;//INTERCEPTIONS
	playerArray[19][4] = 0;//RUSH YARDS
	playerArray[19][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[19][6] = 95;//RECEPTIONS
	playerArray[19][7] = 1230;//RECEIVING YARDS
	playerArray[19][8] = 12;//RECEIVING TOUCHDOWNS
	playerArray[19][9] = 0;//Field Goals 0-19 Yards
	playerArray[19][10] = 0;//Field Goals 20-29 Yards
	playerArray[19][11] = 0;//Field Goals 30-39 Yards
	playerArray[19][12] = 0;//Field Goals 40-49 Yards
	playerArray[19][13] = 0;//Field Goals 50+
	playerArray[19][14] = 0;//PAT
	playerArray[19][15] = 0;//Sacks
	playerArray[19][16] = 0;//Interceptions
	playerArray[19][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[19][18] = "Brandon Marshall";//NAME
	playerArray[19][19] = "WR";//Position
	playerArray[19][20] = "bears";//BACKGROUND COLOR
	playerArray[19][21] = "Images/Brandon-Marshall.png";//FONT-COLOR
	playerArray[19][22] = "BM";

	playerArray[20] = new Array(23);
	playerArray[20][0] = 0;//COMPLETIONS
	playerArray[20][1] = 0;//PASSING YARDS
	playerArray[20][2] = 0;//PASSING TOUCHDOWNS
	playerArray[20][3] = 0;//INTERCEPTIONS
	playerArray[20][4] = 19;//RUSH YARDS
	playerArray[20][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[20][6] = 97;//RECEPTIONS
	playerArray[20][7] = 1387;//RECEIVING YARDS
	playerArray[20][8] = 9;//RECEIVING TOUCHDOWNS
	playerArray[20][9] = 0;//Field Goals 0-19 Yards
	playerArray[20][10] = 0;//Field Goals 20-29 Yards
	playerArray[20][11] = 0;//Field Goals 30-39 Yards
	playerArray[20][12] = 0;//Field Goals 40-49 Yards
	playerArray[20][13] = 0;//Field Goals 50+
	playerArray[20][14] = 0;//PAT
	playerArray[20][15] = 0;//Sacks
	playerArray[20][16] = 0;//Interceptions
	playerArray[20][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[20][18] = "Julio Jones";//NAME
	playerArray[20][19] = "WR";//Position
	playerArray[20][20] = "falcons";//BACKGROUND COLOR
	playerArray[20][21] = "Images/Julio-Jones.png";//FONT-COLOR
	playerArray[20][22] = "JJ";

	playerArray[21] = new Array(23);
	playerArray[21][0] = 0;//COMPLETIONS
	playerArray[21][1] = 0;//PASSING YARDS
	playerArray[21][2] = 0;//PASSING TOUCHDOWNS
	playerArray[21][3] = 0;//INTERCEPTIONS
	playerArray[21][4] = 0;//RUSH YARDS
	playerArray[21][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[21][6] = 82;//RECEPTIONS
	playerArray[21][7] = 1286;//RECEIVING YARDS
	playerArray[21][8] = 10;//RECEIVING TOUCHDOWNS
	playerArray[21][9] = 0;//Field Goals 0-19 Yards
	playerArray[21][10] = 0;//Field Goals 20-29 Yards
	playerArray[21][11] = 0;//Field Goals 30-39 Yards
	playerArray[21][12] = 0;//Field Goals 40-49 Yards
	playerArray[21][13] = 0;//Field Goals 50+
	playerArray[21][14] = 0;//PAT
	playerArray[21][15] = 0;//Sacks
	playerArray[21][16] = 0;//Interceptions
	playerArray[21][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[21][18] = "Jordy Nelson";//NAME
	playerArray[21][19] = "WR";//Position
	playerArray[21][20] = "packers";//BACKGROUND COLOR
	playerArray[21][21] = "Images/Jordy-Nelson.png";//FONT-COLOR
	playerArray[21][22] = "JN";

	playerArray[22] = new Array(23);
	playerArray[22][0] = 0;//COMPLETIONS
	playerArray[22][1] = 0;//PASSING YARDS
	playerArray[22][2] = 0;//PASSING TOUCHDOWNS
	playerArray[22][3] = 0;//INTERCEPTIONS
	playerArray[22][4] = 1287;//RUSH YARDS
	playerArray[22][5] = 9;//RUSHING TOUCHDOWNS
	playerArray[22][6] = 8;//RECEPTIONS
	playerArray[22][7] = 62;//RECEIVING YARDS
	playerArray[22][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[22][9] = 0;//Field Goals 0-19 Yards
	playerArray[22][10] = 0;//Field Goals 20-29 Yards
	playerArray[22][11] = 0;//Field Goals 30-39 Yards
	playerArray[22][12] = 0;//Field Goals 40-49 Yards
	playerArray[22][13] = 0;//Field Goals 50+
	playerArray[22][14] = 0;//PAT
	playerArray[22][15] = 0;//Sacks
	playerArray[22][16] = 0;//Interceptions
	playerArray[22][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[22][18] = "Alfred Morris";//NAME
	playerArray[22][19] = "RB";//Position
	playerArray[22][20] = "redskins";//BACKGROUND COLOR
	playerArray[22][21] = "Images/Alfred-Morris.png";//FONT-COLOR
	playerArray[22][22] = "AM";

	playerArray[23] = new Array(23);
	playerArray[23][0] = 0;//COMPLETIONS
	playerArray[23][1] = 0;//PASSING YARDS
	playerArray[23][2] = 0;//PASSING TOUCHDOWNS
	playerArray[23][3] = 0;//INTERCEPTIONS
	playerArray[23][4] = 85;//RUSH YARDS
	playerArray[23][5] = 1;//RUSHING TOUCHDOWNS
	playerArray[23][6] = 85;//RECEPTIONS
	playerArray[23][7] = 1284;//RECEIVING YARDS
	playerArray[23][8] = 8;//RECEIVING TOUCHDOWNS
	playerArray[23][9] = 0;//Field Goals 0-19 Yards
	playerArray[23][10] = 0;//Field Goals 20-29 Yards
	playerArray[23][11] = 0;//Field Goals 30-39 Yards
	playerArray[23][12] = 0;//Field Goals 40-49 Yards
	playerArray[23][13] = 0;//Field Goals 50+
	playerArray[23][14] = 0;//PAT
	playerArray[23][15] = 0;//Sacks
	playerArray[23][16] = 0;//Interceptions
	playerArray[23][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[23][18] = "Alshon Jeffery";//NAME
	playerArray[23][19] = "WR";//Position
	playerArray[23][20] = "bears";//BACKGROUND COLOR
	playerArray[23][21] = "Images/Alshon-Jeffery.png";//FONT-COLOR
	playerArray[23][22] = "AJ";

	playerArray[24] = new Array(23);
	playerArray[24][0] = 0;//COMPLETIONS
	playerArray[24][1] = 0;//PASSING YARDS
	playerArray[24][2] = 0;//PASSING TOUCHDOWNS
	playerArray[24][3] = 0;//INTERCEPTIONS
	playerArray[24][4] = 943;//RUSH YARDS
	playerArray[24][5] = 9;//RUSHING TOUCHDOWNS
	playerArray[24][6] = 54;//RECEPTIONS
	playerArray[24][7] = 333;//RECEIVING YARDS
	playerArray[24][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[24][9] = 0;//Field Goals 0-19 Yards
	playerArray[24][10] = 0;//Field Goals 20-29 Yards
	playerArray[24][11] = 0;//Field Goals 30-39 Yards
	playerArray[24][12] = 0;//Field Goals 40-49 Yards
	playerArray[24][13] = 0;//Field Goals 50+
	playerArray[24][14] = 0;//PAT
	playerArray[24][15] = 0;//Sacks
	playerArray[24][16] = 0;//Interceptions
	playerArray[24][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[24][18] = "Montee Ball";//NAME
	playerArray[24][19] = "RB";//Position
	playerArray[24][20] = "broncos";//BACKGROUND COLOR
	playerArray[24][21] = "Images/Montee-Ball.png";//FONT-COLOR
	playerArray[24][22] = "MB";

	playerArray[25] = new Array(23);
	playerArray[25][0] = 0;//COMPLETIONS
	playerArray[25][1] = 0;//PASSING YARDS
	playerArray[25][2] = 0;//PASSING TOUCHDOWNS
	playerArray[25][3] = 0;//INTERCEPTIONS
	playerArray[25][4] = 927;//RUSH YARDS
	playerArray[25][5] = 3;//RUSHING TOUCHDOWNS
	playerArray[25][6] = 52;//RECEPTIONS
	playerArray[25][7] = 478;//RECEIVING YARDS
	playerArray[25][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[25][9] = 0;//Field Goals 0-19 Yards
	playerArray[25][10] = 0;//Field Goals 20-29 Yards
	playerArray[25][11] = 0;//Field Goals 30-39 Yards
	playerArray[25][12] = 0;//Field Goals 40-49 Yards
	playerArray[25][13] = 0;//Field Goals 50+
	playerArray[25][14] = 0;//PAT
	playerArray[25][15] = 0;//Sacks
	playerArray[25][16] = 0;//Interceptions
	playerArray[25][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[25][18] = "Giovani Bernard";//NAME
	playerArray[25][19] = "RB";//Position
	playerArray[25][20] = "bengals";//BACKGROUND COLOR
	playerArray[25][21] = "Images/Giovani-Bernard.png";//FONT-COLOR
	playerArray[25][22] = "GB";

	playerArray[26] = new Array(23);
	playerArray[26][0] = 0;//COMPLETIONS
	playerArray[26][1] = 0;//PASSING YARDS
	playerArray[26][2] = 0;//PASSING TOUCHDOWNS
	playerArray[26][3] = 0;//INTERCEPTIONS
	playerArray[26][4] = 0;//RUSH YARDS
	playerArray[26][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[26][6] = 72;//RECEPTIONS
	playerArray[26][7] = 923;//RECEIVING YARDS
	playerArray[26][8] = 12;//RECEIVING TOUCHDOWNS
	playerArray[26][9] = 0;//Field Goals 0-19 Yards
	playerArray[26][10] = 0;//Field Goals 20-29 Yards
	playerArray[26][11] = 0;//Field Goals 30-39 Yards
	playerArray[26][12] = 0;//Field Goals 40-49 Yards
	playerArray[26][13] = 0;//Field Goals 50+
	playerArray[26][14] = 0;//PAT
	playerArray[26][15] = 0;//Sacks
	playerArray[26][16] = 0;//Interceptions
	playerArray[26][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[26][18] = "Julius Thomas";//NAME
	playerArray[26][19] = "TE";//Position
	playerArray[26][20] = "broncos";//BACKGROUND COLOR
	playerArray[26][21] = "Images/Julius-Thomas.png";//FONT-COLOR
	playerArray[26][22] = "JT";

	playerArray[27] = new Array(23);
	playerArray[27][0] = 0;//COMPLETIONS
	playerArray[27][1] = 0;//PASSING YARDS
	playerArray[27][2] = 0;//PASSING TOUCHDOWNS
	playerArray[27][3] = 0;//INTERCEPTIONS
	playerArray[27][4] = 47;//RUSH YARDS
	playerArray[27][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[27][6] = 109;//RECEPTIONS
	playerArray[27][7] = 1435;//RECEIVING YARDS
	playerArray[27][8] = 7;//RECEIVING TOUCHDOWNS
	playerArray[27][9] = 0;//Field Goals 0-19 Yards
	playerArray[27][10] = 0;//Field Goals 20-29 Yards
	playerArray[27][11] = 0;//Field Goals 30-39 Yards
	playerArray[27][12] = 0;//Field Goals 40-49 Yards
	playerArray[27][13] = 0;//Field Goals 50+
	playerArray[27][14] = 0;//PAT
	playerArray[27][15] = 0;//Sacks
	playerArray[27][16] = 0;//Interceptions
	playerArray[27][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[27][18] = "Antonio Brown";//NAME
	playerArray[27][19] = "WR";//Position
	playerArray[27][20] = "steelers";//BACKGROUND COLOR
	playerArray[27][21] = "Images/Antonio-Brown.png";//FONT-COLOR
	playerArray[27][22] = "AB";

	playerArray[28] = new Array(23);
	playerArray[28][0] = 0;//COMPLETIONS
	playerArray[28][1] = 0;//PASSING YARDS
	playerArray[28][2] = 0;//PASSING TOUCHDOWNS
	playerArray[28][3] = 0;//INTERCEPTIONS
	playerArray[28][4] = 904;//RUSH YARDS
	playerArray[28][5] = 5;//RUSHING TOUCHDOWNS
	playerArray[28][6] = 50;//RECEPTIONS
	playerArray[28][7] = 456;//RECEIVING YARDS
	playerArray[28][8] = 3;//RECEIVING TOUCHDOWNS
	playerArray[28][9] = 0;//Field Goals 0-19 Yards
	playerArray[28][10] = 0;//Field Goals 20-29 Yards
	playerArray[28][11] = 0;//Field Goals 30-39 Yards
	playerArray[28][12] = 0;//Field Goals 40-49 Yards
	playerArray[28][13] = 0;//Field Goals 50+
	playerArray[28][14] = 0;//PAT
	playerArray[28][15] = 0;//Sacks
	playerArray[28][16] = 0;//Interceptions
	playerArray[28][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[28][18] = "Reggie Bush";//NAME
	playerArray[28][19] = "RB";//Position
	playerArray[28][20] = "lions";//BACKGROUND COLOR
	playerArray[28][21] = "Images/Reggie-Bush.png";//FONT-COLOR
	playerArray[28][22] = "RB";

	playerArray[29] = new Array(23);
	playerArray[29][0] = 0;//COMPLETIONS
	playerArray[29][1] = 0;//PASSING YARDS
	playerArray[29][2] = 0;//PASSING TOUCHDOWNS
	playerArray[29][3] = 0;//INTERCEPTIONS
	playerArray[29][4] = 123;//RUSH YARDS
	playerArray[29][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[29][6] = 87;//RECEPTIONS
	playerArray[29][7] = 1233;//RECEIVING YARDS
	playerArray[29][8] = 8;//RECEIVING TOUCHDOWNS
	playerArray[29][9] = 0;//Field Goals 0-19 Yards
	playerArray[29][10] = 0;//Field Goals 20-29 Yards
	playerArray[29][11] = 0;//Field Goals 30-39 Yards
	playerArray[29][12] = 0;//Field Goals 40-49 Yards
	playerArray[29][13] = 0;//Field Goals 50+
	playerArray[29][14] = 0;//PAT
	playerArray[29][15] = 0;//Sacks
	playerArray[29][16] = 0;//Interceptions
	playerArray[29][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[29][18] = "Randall Cobb";//NAME
	playerArray[29][19] = "WR";//Position
	playerArray[29][20] = "packers";//BACKGROUND COLOR
	playerArray[29][21] = "Images/Randall-Cobb.png";//FONT-COLOR
	playerArray[29][22] = "RC";

	playerArray[30] = new Array(23);
	playerArray[30][0] = 0;//COMPLETIONS
	playerArray[30][1] = 0;//PASSING YARDS
	playerArray[30][2] = 0;//PASSING TOUCHDOWNS
	playerArray[30][3] = 0;//INTERCEPTIONS
	playerArray[30][4] = 0;//RUSH YARDS
	playerArray[30][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[30][6] = 100;//RECEPTIONS
	playerArray[30][7] = 1367;//RECEIVING YARDS
	playerArray[30][8] = 7;//RECEIVING TOUCHDOWNS
	playerArray[30][9] = 0;//Field Goals 0-19 Yards
	playerArray[30][10] = 0;//Field Goals 20-29 Yards
	playerArray[30][11] = 0;//Field Goals 30-39 Yards
	playerArray[30][12] = 0;//Field Goals 40-49 Yards
	playerArray[30][13] = 0;//Field Goals 50+
	playerArray[30][14] = 0;//PAT
	playerArray[30][15] = 0;//Sacks
	playerArray[30][16] = 0;//Interceptions
	playerArray[30][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[30][18] = "Andre Johnson";//NAME
	playerArray[30][19] = "WR";//Position
	playerArray[30][20] = "texans";//BACKGROUND COLOR
	playerArray[30][21] = "Images/Andre-Johnson.png";//FONT-COLOR
	playerArray[30][22] = "AJ1";

	playerArray[31] = new Array(23);
	playerArray[31][0] = 0;//COMPLETIONS
	playerArray[31][1] = 0;//PASSING YARDS
	playerArray[31][2] = 0;//PASSING TOUCHDOWNS
	playerArray[31][3] = 0;//INTERCEPTIONS
	playerArray[31][4] = 1101;//RUSH YARDS
	playerArray[31][5] = 7;//RUSHING TOUCHDOWNS
	playerArray[31][6] = 37;//RECEPTIONS
	playerArray[31][7] = 288;//RECEIVING YARDS
	playerArray[31][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[31][9] = 0;//Field Goals 0-19 Yards
	playerArray[31][10] = 0;//Field Goals 20-29 Yards
	playerArray[31][11] = 0;//Field Goals 30-39 Yards
	playerArray[31][12] = 0;//Field Goals 40-49 Yards
	playerArray[31][13] = 0;//Field Goals 50+
	playerArray[31][14] = 0;//PAT
	playerArray[31][15] = 0;//Sacks
	playerArray[31][16] = 0;//Interceptions
	playerArray[31][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[31][18] = "Ben Tate";//NAME
	playerArray[31][19] = "RB";//Position
	playerArray[31][20] = "browns";//BACKGROUND COLOR
	playerArray[31][21] = "Images/Ben-Tate.png";//FONT-COLOR
	playerArray[31][22] = "BT";

	playerArray[32] = new Array(23);
	playerArray[32][0] = 0;//COMPLETIONS
	playerArray[32][1] = 0;//PASSING YARDS
	playerArray[32][2] = 0;//PASSING TOUCHDOWNS
	playerArray[32][3] = 0;//INTERCEPTIONS
	playerArray[32][4] = 12;//RUSH YARDS
	playerArray[32][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[32][6] = 73;//RECEPTIONS
	playerArray[32][7] = 1235;//RECEIVING YARDS
	playerArray[32][8] = 8;//RECEIVING TOUCHDOWNS
	playerArray[32][9] = 0;//Field Goals 0-19 Yards
	playerArray[32][10] = 0;//Field Goals 20-29 Yards
	playerArray[32][11] = 0;//Field Goals 30-39 Yards
	playerArray[32][12] = 0;//Field Goals 40-49 Yards
	playerArray[32][13] = 0;//Field Goals 50+
	playerArray[32][14] = 0;//PAT
	playerArray[32][15] = 0;//Sacks
	playerArray[32][16] = 0;//Interceptions
	playerArray[32][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[32][18] = "Vincent Jackson";//NAME
	playerArray[32][19] = "WR";//Position
	playerArray[32][20] = "buccaneers";//BACKGROUND COLOR
	playerArray[32][21] = "Images/Vincent-Jackson.png";//FONT-COLOR
	playerArray[32][22] = "VJ";

	playerArray[33] = new Array(23);
	playerArray[33][0] = 0;//COMPLETIONS
	playerArray[33][1] = 0;//PASSING YARDS
	playerArray[33][2] = 0;//PASSING TOUCHDOWNS
	playerArray[33][3] = 0;//INTERCEPTIONS
	playerArray[33][4] = 104;//RUSH YARDS
	playerArray[33][5] = 1;//RUSHING TOUCHDOWNS
	playerArray[33][6] = 73;//RECEPTIONS
	playerArray[33][7] = 814;//RECEIVING YARDS
	playerArray[33][8] = 7;//RECEIVING TOUCHDOWNS
	playerArray[33][9] = 0;//Field Goals 0-19 Yards
	playerArray[33][10] = 0;//Field Goals 20-29 Yards
	playerArray[33][11] = 0;//Field Goals 30-39 Yards
	playerArray[33][12] = 0;//Field Goals 40-49 Yards
	playerArray[33][13] = 0;//Field Goals 50+
	playerArray[33][14] = 0;//PAT
	playerArray[33][15] = 0;//Sacks
	playerArray[33][16] = 0;//Interceptions
	playerArray[33][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[33][18] = "Cordarrelle Patterson";//NAME
	playerArray[33][19] = "WR"; //POSITION
	playerArray[33][20] = "vikings" //TEAM
	playerArray[33][21] = "Images/Cordarrelle-Patterson.png";//PIC
	playerArray[33][22] = "CP";


	playerArray[34] = new Array(23);
         playerArray[34][0] =0;//COMPLETIONS
         playerArray[34][1] =0;//PASSING YARDS
         playerArray[34][2] =0;//PASSING TOUCHDOWNS
         playerArray[34][3] =0;//INTERCEPTIONS
         playerArray[34][4] = 10;//RUSH YARDS
         playerArray[34][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[34][6] = 92;//RECEPTIONS
         playerArray[34][7] = 1060;//RECEIVING YARDS
         playerArray[34][8] = 8;//RECEIVING TOUCHDOWNS
         playerArray[34][9] = 0;//Field Goals 0-19 Yards
         playerArray[34][10] = 0;//Field Goals 20-29 Yards
         playerArray[34][11] = 0;//Field Goals 30-39 Yards
         playerArray[34][12] = 0;//Field Goals 40-49 Yards
         playerArray[34][13] = 0;//Field Goals 50+
         playerArray[34][14] = 0;//PAT
         playerArray[34][15] = 0;//Sacks
         playerArray[34][16] = 0;//Interceptions
         playerArray[34][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[34][18] = "Larry Fitzgerald";//NAME
         playerArray[34][19] = "WR"//position
         playerArray[34][20] = "cardinals";//BACKGROUND COLOR
         playerArray[34][21] = "Images/Larry-Fitzgerald.png";//FONT-COLOR
         playerArray[34][22] = "LF";
 
playerArray[35] = new Array(23);
         playerArray[35][0] = 0;//COMPLETIONS
         playerArray[35][1] = 0;//PASSING YARDS
         playerArray[35][2] = 0;//PASSING TOUCHDOWNS
         playerArray[35][3] = 0;//INTERCEPTIONS
         playerArray[35][4] = 0;//RUSH YARDS
         playerArray[35][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[35][6] = 65;//RECEPTIONS
         playerArray[35][7] = 890;//RECEIVING YARDS
         playerArray[35][8] = 10;//RECEIVING TOUCHDOWNS
         playerArray[35][9] = 0;//Field Goals 0-19 Yards
         playerArray[35][10] = 0;//Field Goals 20-29 Yards
         playerArray[35][11] = 0;//Field Goals 30-39 Yards
         playerArray[35][12] = 0;//Field Goals 40-49 Yards
         playerArray[35][13] = 0;//Field Goals 50+
         playerArray[35][14] = 0;//PAT
         playerArray[35][15] = 0;//Sacks
         playerArray[35][16] = 0;//Interceptions
         playerArray[35][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[35][18] = "Rob Gronkowski";//NAME
         playerArray[35][19] = "TE";//NAME
         playerArray[35][20] = "patriots";//BACKGROUND COLOR
         playerArray[35][21] = "Images/Rob-Gronkowski.png";//FONT-COLOR
         playerArray[35][22] = "RG";
 
playerArray[36] = new Array(23);
         playerArray[36][0] = 0;//COMPLETIONS
         playerArray[36][1] = 0;//PASSING YARDS
         playerArray[36][2] = 0;//PASSING TOUCHDOWNS
         playerArray[36][3] = 0;//INTERCEPTIONS
         playerArray[36][4] = 25;//RUSH YARDS
         playerArray[36][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[36][6] = 98;//RECEPTIONS
         playerArray[36][7] = 1240;//RECEIVING YARDS
         playerArray[36][8] = 8;//RECEIVING TOUCHDOWNS
         playerArray[36][9] = 0;//Field Goals 0-19 Yards
         playerArray[36][10] = 0;//Field Goals 20-29 Yards
         playerArray[36][11] = 0;//Field Goals 30-39 Yards
         playerArray[36][12] = 0;//Field Goals 40-49 Yards
         playerArray[36][13] = 0;//Field Goals 50+
         playerArray[36][14] = 0;//PAT
         playerArray[36][15] = 0;//Sacks
         playerArray[36][16] = 0;//Interceptions
         playerArray[36][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[36][18] = "Pierre Garcon";//NAME
         playerArray[36][19] = "WR";//NAME
         playerArray[36][20] = "redskins";//BACKGROUND COLOR
         playerArray[36][21] = "Images/Pierre-Garcon.png";//FONT-COLOR
         playerArray[36][22] = "PG";
 
playerArray[37] = new Array(23);
         playerArray[37][0] = 0;//COMPLETIONS
         playerArray[37][1] = 0;//PASSING YARDS
         playerArray[37][2] = 0;//PASSING TOUCHDOWNS
         playerArray[37][3] = 0;//INTERCEPTIONS
         playerArray[37][4] = 1125;//RUSH YARDS
         playerArray[37][5] = 7;//RUSHING TOUCHDOWNS
         playerArray[37][6] = 18;//RECEPTIONS
         playerArray[37][7] = 166;//RECEIVING YARDS
         playerArray[37][8] = 0;//RECEIVING TOUCHDOWNS
         playerArray[37][9] = 0;//Field Goals 0-19 Yards
         playerArray[37][10] = 0;//Field Goals 20-29 Yards
         playerArray[37][11] = 0;//Field Goals 30-39 Yards
         playerArray[37][12] = 0;//Field Goals 40-49 Yards
         playerArray[37][13] = 0;//Field Goals 50+
         playerArray[37][14] = 0;//PAT
         playerArray[37][15] = 0;//Sacks
         playerArray[37][16] = 0;//Interceptions
         playerArray[37][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[37][18] = "Ryan Mathews";//NAME
         playerArray[37][19] = "RB";//NAME
         playerArray[37][20] = "chargers";//BACKGROUND COLOR
         playerArray[37][21] = "Images/Ryan-Mathews.png";//FONT-COLOR
         playerArray[37][22] = "RM";
 
        
playerArray[38] = new Array(23);
         playerArray[38][0] = 0;//COMPLETIONS
         playerArray[38][1] = 0;//PASSING YARDS
         playerArray[38][2] = 0;//PASSING TOUCHDOWNS
         playerArray[38][3] = 0;//INTERCEPTIONS
         playerArray[38][4] = 31;//RUSH YARDS
         playerArray[38][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[38][6] = 75;//RECEPTIONS
         playerArray[38][7] = 1170;//RECEIVING YARDS
         playerArray[38][8] = 7;//RECEIVING TOUCHDOWNS
         playerArray[38][9] = 0;//Field Goals 0-19 Yards
         playerArray[38][10] = 0;//Field Goals 20-29 Yards
         playerArray[38][11] = 0;//Field Goals 30-39 Yards
         playerArray[38][12] = 0;//Field Goals 40-49 Yards
         playerArray[38][13] = 0;//Field Goals 50+
         playerArray[38][14] = 0;//PAT
         playerArray[38][15] = 0;//Sacks
         playerArray[38][16] = 0;//Interceptions
         playerArray[38][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[38][18] = "Desean Jackson";//NAME
         playerArray[38][19] = "WR";//NAME
         playerArray[38][20] = "redskins";//BACKGROUND COLOR
         playerArray[38][21] = "Images/Desean-Jackson.png";//FONT-COLOR
         playerArray[38][22] = "DS";
 
 
playerArray[39] = new Array(23);
         playerArray[39][0] = 400;//COMPLETIONS
         playerArray[39][1] = 4600;//PASSING YARDS
         playerArray[39][2] = 31;//PASSING TOUCHDOWNS
         playerArray[39][3] = 20;//INTERCEPTIONS
         playerArray[39][4] = 77;//RUSH YARDS
         playerArray[39][5] = 2;//RUSHING TOUCHDOWNS
         playerArray[39][6] = 0;//RECEPTIONS
         playerArray[39][7] = 0;//RECEIVING YARDS
         playerArray[39][8] = 0;//RECEIVING TOUCHDOWNS
         playerArray[39][9] = 0;//Field Goals 0-19 Yards
         playerArray[39][10] = 0;//Field Goals 20-29 Yards
         playerArray[39][11] = 0;//Field Goals 30-39 Yards
         playerArray[39][12] = 0;//Field Goals 40-49 Yards
         playerArray[39][13] = 0;//Field Goals 50+
         playerArray[39][14] = 0;//PAT
         playerArray[39][15] = 0;//Sacks
         playerArray[39][16] = 0;//Interceptions
         playerArray[39][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[39][18] = "Matthew Stafford";//NAME
         playerArray[39][19] = "QB";//NAME
         playerArray[39][20] = "lions";//BACKGROUND COLOR
         playerArray[39][21] = "Images/Matthew-Stafford.png";//FONT-COLOR
         playerArray[39][22] = "MS";
 
 
playerArray[40] = new Array(23);
         playerArray[40][0] = 0;//COMPLETIONS
         playerArray[40][1] = 0;//PASSING YARDS
         playerArray[40][2] = 0;//PASSING TOUCHDOWNS
         playerArray[40][3] = 0;//INTERCEPTIONS
         playerArray[40][4] = 1001;//RUSH YARDS
         playerArray[40][5] = 5;//RUSHING TOUCHDOWNS
         playerArray[40][6] = 40;//RECEPTIONS
         playerArray[40][7] = 310;//RECEIVING YARDS
         playerArray[40][8] = 1;//RECEIVING TOUCHDOWNS
         playerArray[40][9] = 0;//Field Goals 0-19 Yards
         playerArray[40][10] = 0;//Field Goals 20-29 Yards
         playerArray[40][11] = 0;//Field Goals 30-39 Yards
         playerArray[40][12] = 0;//Field Goals 40-49 Yards
         playerArray[40][13] = 0;//Field Goals 50+
         playerArray[40][14] = 0;//PAT
         playerArray[40][15] = 0;//Sacks
         playerArray[40][16] = 0;//Interceptions
         playerArray[40][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[40][18] = "C.J. Spiller";//NAME
         playerArray[40][19] = "RB";//NAME
         playerArray[40][20] = "bills";//BACKGROUND COLOR
         playerArray[40][21] = "Images/CJ-Spiller.png";//FONT-COLOR
         playerArray[40][22] = "CS";
 
playerArray[41] = new Array(23);
         playerArray[41][0] = 0;//COMPLETIONS
         playerArray[41][1] = 0;//PASSING YARDS
         playerArray[41][2] = 0;//PASSING TOUCHDOWNS
         playerArray[41][3] = 0;//INTERCEPTIONS
         playerArray[41][4] = 1123;//RUSH YARDS
         playerArray[41][5] = 8;//RUSHING TOUCHDOWNS
         playerArray[41][6] = 15;//RECEPTIONS
         playerArray[41][7] = 130;//RECEIVING YARDS
         playerArray[41][8] = 0;//RECEIVING TOUCHDOWNS
         playerArray[41][9] = 0;//Field Goals 0-19 Yards
         playerArray[41][10] = 0;//Field Goals 20-29 Yards
         playerArray[41][11] = 0;//Field Goals 30-39 Yards
         playerArray[41][12] = 0;//Field Goals 40-49 Yards
         playerArray[41][13] = 0;//Field Goals 50+
         playerArray[41][14] = 0;//PAT
         playerArray[41][15] = 0;//Sacks
         playerArray[41][16] = 0;//Interceptions
         playerArray[41][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[41][18] = "Frank Gore";//NAME
         playerArray[41][19] = "RB";//NAME
         playerArray[41][20] = "fortyniners";//BACKGROUND COLOR
         playerArray[41][21] = "Images/Frank-Gore.png";//FONT-COLOR
         playerArray[41][22] = "FG";
 
        
playerArray[42] = new Array(23);
         playerArray[42][0] = 0;//COMPLETIONS
         playerArray[42][1] = 0;//PASSING YARDS
         playerArray[42][2] = 0;//PASSING TOUCHDOWNS
         playerArray[42][3] = 0;//INTERCEPTIONS
         playerArray[42][4] = 0;//RUSH YARDS
         playerArray[42][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[42][6] = 80;//RECEPTIONS
         playerArray[42][7] = 1045;//RECEIVING YARDS
         playerArray[42][8] = 8;//RECEIVING TOUCHDOWNS
         playerArray[42][9] = 0;//Field Goals 0-19 Yards
         playerArray[42][10] = 0;//Field Goals 20-29 Yards
         playerArray[42][11] = 0;//Field Goals 30-39 Yards
         playerArray[42][12] = 0;//Field Goals 40-49 Yards
         playerArray[42][13] = 0;//Field Goals 50+
         playerArray[42][14] = 0;//PAT
         playerArray[42][15] = 0;//Sacks
         playerArray[42][16] = 0;//Interceptions
         playerArray[42][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[42][18] = "Keenan Allen";//NAME
         playerArray[42][19] = "WR";//NAME
         playerArray[42][20] = "chargers";//BACKGROUND COLOR
         playerArray[42][21] = "Images/Keenan-Allen.png";//FONT-COLOR
         playerArray[42][22] = "KA";
 
 
playerArray[43] = new Array(23);
         playerArray[43][0] = 0;//COMPLETIONS
         playerArray[43][1] = 0;//PASSING YARDS
         playerArray[43][2] = 0;//PASSING TOUCHDOWNS
         playerArray[43][3] = 0;//INTERCEPTIONS
         playerArray[43][4] = 0;//RUSH YARDS
         playerArray[43][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[43][6] = 80;//RECEPTIONS
         playerArray[43][7] = 1045;//RECEIVING YARDS
         playerArray[43][8] = 7;//RECEIVING TOUCHDOWNS
         playerArray[43][9] = 0;//Field Goals 0-19 Yards
         playerArray[43][10] = 0;//Field Goals 20-29 Yards
         playerArray[43][11] = 0;//Field Goals 30-39 Yards
         playerArray[43][12] = 0;//Field Goals 40-49 Yards
         playerArray[43][13] = 0;//Field Goals 50+
         playerArray[43][14] = 0;//PAT
         playerArray[43][15] = 0;//Sacks
         playerArray[43][16] = 0;//Interceptions
         playerArray[43][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[43][18] = "Victor Cruz";//NAME
         playerArray[43][19] = "WR";//NAME
         playerArray[43][20] = "giants";//BACKGROUND COLOR
         playerArray[43][21] = "Images/Victor-Cruz.png";//FONT-COLOR
         playerArray[43][22] = "VC";
 
 
playerArray[44] = new Array(23);
         playerArray[44][0] = 0;//COMPLETIONS
         playerArray[44][1] = 0;//PASSING YARDS
         playerArray[44][2] = 0;//PASSING TOUCHDOWNS
         playerArray[44][3] = 0;//INTERCEPTIONS
         playerArray[44][4] = 0;//RUSH YARDS
         playerArray[44][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[44][6] = 80;//RECEPTIONS
         playerArray[44][7] = 1005;//RECEIVING YARDS
         playerArray[44][8] = 0;//RECEIVING TOUCHDOWNS
         playerArray[44][9] = 0;//Field Goals 0-19 Yards
         playerArray[44][10] = 0;//Field Goals 20-29 Yards
         playerArray[44][11] = 0;//Field Goals 30-39 Yards
         playerArray[44][12] = 0;//Field Goals 40-49 Yards
         playerArray[44][13] = 0;//Field Goals 50+
         playerArray[44][14] = 0;//PAT
         playerArray[44][15] = 0;//Sacks
         playerArray[44][16] = 0;//Interceptions
         playerArray[44][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[44][18] = "Roddy White";//NAME
         playerArray[44][19] = "WR";//NAME
         playerArray[44][20] = "falcons";//BACKGROUND COLOR
         playerArray[44][21] = "Images/Roddy-White.png";//FONT-COLOR
         playerArray[44][22] = "RW";
 
playerArray[45] = new Array(23);
         playerArray[45][0] = 276;//COMPLETIONS
         playerArray[45][1] = 3365;//PASSING YARDS
         playerArray[45][2] = 20;//PASSING TOUCHDOWNS
         playerArray[45][3] = 15;//INTERCEPTIONS
         playerArray[45][4] = 637;//RUSH YARDS
         playerArray[45][5] = 8;//RUSHING TOUCHDOWNS
         playerArray[45][6] = 0;//RECEPTIONS
         playerArray[45][7] = 0;//RECEIVING YARDS
         playerArray[45][8] = 0;//RECEIVING TOUCHDOWNS
         playerArray[45][9] = 0;//Field Goals 0-19 Yards
         playerArray[45][10] = 0;//Field Goals 20-29 Yards
         playerArray[45][11] = 0;//Field Goals 30-39 Yards
         playerArray[45][12] = 0;//Field Goals 40-49 Yards
         playerArray[45][13] = 0;//Field Goals 50+
         playerArray[45][14] = 0;//PAT
         playerArray[45][15] = 0;//Sacks
         playerArray[45][16] = 0;//Interceptions
         playerArray[45][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[45][18] = "Cam Newton";//NAME
         playerArray[45][19] = "QB";//NAME
         playerArray[45][20] = "panthers";//BACKGROUND COLOR
         playerArray[45][21] = "Images/Cam-Newton.png";//FONT-COLOR
         playerArray[45][22] = "CN";
 
 
        
 
 
playerArray[46] = new Array(23);
         playerArray[46][0] = 0;//COMPLETIONS
         playerArray[46][1] = 0;//PASSING YARDS
         playerArray[46][2] = 0;//PASSING TOUCHDOWNS
         playerArray[46][3] = 0;//INTERCEPTIONS
         playerArray[46][4] = 867;//RUSH YARDS
         playerArray[46][5] = 3;//RUSHING TOUCHDOWNS
         playerArray[46][6] = 48;//RECEPTIONS
         playerArray[46][7] = 457;//RECEIVING YARDS
         playerArray[46][8] = 0;//RECEIVING TOUCHDOWNS
         playerArray[46][9] = 0;//Field Goals 0-19 Yards
         playerArray[46][10] = 0;//Field Goals 20-29 Yards
         playerArray[46][11] = 0;//Field Goals 30-39 Yards
         playerArray[46][12] = 0;//Field Goals 40-49 Yards
         playerArray[46][13] = 0;//Field Goals 50+
         playerArray[46][14] = 0;//PAT
         playerArray[46][15] = 0;//Sacks
         playerArray[46][16] = 0;//Interceptions
         playerArray[46][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[46][18] = "Andre Ellington";//NAME
         playerArray[46][19] = "RB";//NAME
         playerArray[46][20] = "cardinals";//BACKGROUND COLOR
         playerArray[46][21] = "Images/Andre-Ellington.png";//FONT-COLOR
         playerArray[46][22] = "AE";
 
playerArray[47] = new Array(23);
         playerArray[47][0] = 0;//COMPLETIONS
         playerArray[47][1] = 0;//PASSING YARDS
         playerArray[47][2] = 0;//PASSING TOUCHDOWNS
         playerArray[47][3] = 0;//INTERCEPTIONS
         playerArray[47][4] = 0;//RUSH YARDS
         playerArray[47][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[47][6] = 70;//RECEPTIONS
         playerArray[47][7] = 919;//RECEIVING YARDS
         playerArray[47][8] = 6;//RECEIVING TOUCHDOWNS
         playerArray[47][9] = 0;//Field Goals 0-19 Yards
         playerArray[47][10] = 0;//Field Goals 20-29 Yards
         playerArray[47][11] = 0;//Field Goals 30-39 Yards
         playerArray[47][12] = 0;//Field Goals 40-49 Yards
         playerArray[47][13] = 0;//Field Goals 50+
         playerArray[47][14] = 0;//PAT
         playerArray[47][15] = 0;//Sacks
         playerArray[47][16] = 0;//Interceptions
         playerArray[47][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[47][18] = "Wes Welker";//NAME
         playerArray[47][19] = "WR";//NAME
         playerArray[47][20] = "broncos";//BACKGROUND COLOR
         playerArray[47][21] = "Images/Wes-Welker.png";//FONT-COLOR
         playerArray[47][22] = "WW";
 
 
 
playerArray[48] = new Array(23);
         playerArray[48][0] = 357;//COMPLETIONS
         playerArray[48][1] = 4071;//PASSING YARDS
         playerArray[48][2] = 23;//PASSING TOUCHDOWNS
         playerArray[48][3] = 10;//INTERCEPTIONS
         playerArray[48][4] = 365;//RUSH YARDS
         playerArray[48][5] = 3;//RUSHING TOUCHDOWNS
         playerArray[48][6] = 0;//RECEPTIONS
         playerArray[48][7] = 0;//RECEIVING YARDS
         playerArray[48][8] = 0;//RECEIVING TOUCHDOWNS
         playerArray[48][9] = 0;//Field Goals 0-19 Yards
         playerArray[48][10] = 0;//Field Goals 20-29 Yards
         playerArray[48][11] = 0;//Field Goals 30-39 Yards
         playerArray[48][12] = 0;//Field Goals 40-49 Yards
         playerArray[48][13] = 0;//Field Goals 50+
         playerArray[48][14] = 0;//PAT
         playerArray[48][15] = 0;//Sacks
         playerArray[48][16] = 0;//Interceptions
         playerArray[48][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[48][18] = "Andrew Luck";//NAME
         playerArray[48][19] = "QB";//NAME
         playerArray[48][20] = "colts";//BACKGROUND COLOR
         playerArray[48][21] = "Images/Andrew-Luck.png";//FONT-COLOR
         playerArray[48][22] = "AL";
 
 
playerArray[49] = new Array(23);
         playerArray[49][0] = 0;//COMPLETIONS
         playerArray[49][1] = 0;//PASSING YARDS
         playerArray[49][2] = 0;//PASSING TOUCHDOWNS
         playerArray[49][3] = 0;//INTERCEPTIONS
         playerArray[49][4] = 81;//RUSH YARDS
         playerArray[49][5] = 1;//RUSHING TOUCHDOWNS
         playerArray[49][6] = 77;//RECEPTIONS
         playerArray[49][7] = 916;//RECEIVING YARDS
         playerArray[49][8] = 0;//RECEIVING TOUCHDOWNS
         playerArray[49][9] = 0;//Field Goals 0-19 Yards
         playerArray[49][10] = 0;//Field Goals 20-29 Yards
         playerArray[49][11] = 0;//Field Goals 30-39 Yards
         playerArray[49][12] = 0;//Field Goals 40-49 Yards
         playerArray[49][13] = 0;//Field Goals 50+
         playerArray[49][14] = 0;//PAT
         playerArray[49][15] = 0;//Sacks
         playerArray[49][16] = 0;//Interceptions
         playerArray[49][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[49][18] = "Percy Harvin";//NAME
         playerArray[49][19] = "WR";//NAME
         playerArray[49][20] = "seahawks";//BACKGROUND COLOR
         playerArray[49][21] = "Images/Percy-Harvin.png";//FONT-COLOR
         playerArray[49][22] = "PH";
 
 
playerArray[50] = new Array(23);
         playerArray[50][0] = 0;//COMPLETIONS
         playerArray[50][1] = 0;//PASSING YARDS
         playerArray[50][2] = 0;//PASSING TOUCHDOWNS
         playerArray[50][3] = 0;//INTERCEPTIONS
         playerArray[50][4] = 0;//RUSH YARDS
         playerArray[50][5] = 0;//RUSHING TOUCHDOWNS
         playerArray[50][6] = 57;//RECEPTIONS
         playerArray[50][7] = 850;//RECEIVING YARDS
         playerArray[50][8] = 12;//RECEIVING TOUCHDOWNS
         playerArray[50][9] = 0;//Field Goals 0-19 Yards
         playerArray[50][10] = 0;//Field Goals 20-29 Yards
         playerArray[50][11] = 0;//Field Goals 30-39 Yards
         playerArray[50][12] = 0;//Field Goals 40-49 Yards
         playerArray[50][13] = 0;//Field Goals 50+
         playerArray[50][14] = 0;//PAT
         playerArray[50][15] = 0;//Sacks
         playerArray[50][16] = 0;//Interceptions
         playerArray[50][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
         playerArray[50][18] = "Vernon Davis";//NAME
         playerArray[50][19] = "TE";//NAME
         playerArray[50][20] = "fortyniners";//BACKGROUND COLOR
         playerArray[50][21] = "Images/Vernon-Davis.png";//FONT-COLOR
         playerArray[50][22] = "VD";

    playerArray[51] = new Array(23);
	playerArray[51][0] = 0;//COMPLETIONS
	playerArray[51][1] = 0;//PASSING YARDS
	playerArray[51][2] = 0;//PASSING TOUCHDOWNS
	playerArray[51][3] = 0;//INTERCEPTIONS
	playerArray[51][4] = 987;//RUSH YARDS
	playerArray[51][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[51][6] = 43;//RECEPTIONS
	playerArray[51][7] = 326;//RECEIVING YARDS
	playerArray[51][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[51][9] = 0;//Field Goals 0-19 Yards
	playerArray[51][10] = 0;//Field Goals 20-29 Yards
	playerArray[51][11] = 0;//Field Goals 30-39 Yards
	playerArray[51][12] = 0;//Field Goals 40-49 Yards
	playerArray[51][13] = 0;//Field Goals 50+
	playerArray[51][14] = 0;//PAT
	playerArray[51][15] = 0;//Sacks
	playerArray[51][16] = 0;//Interceptions
	playerArray[51][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[51][18] = "Trent Richardson";//NAME
	playerArray[51][19] = "RB"; //POSITION
	playerArray[51][20] = "colts"; //TEAM
	playerArray[51][21] = "Images/Trent-Richardson.png";//PIC
	playerArray[51][22] = "TR";

	playerArray[52] = new Array(23);
	playerArray[52][0] = 0;//COMPLETIONS
	playerArray[52][1] = 0;//PASSING YARDS
	playerArray[52][2] = 0;//PASSING TOUCHDOWNS
	playerArray[52][3] = 0;//INTERCEPTIONS
	playerArray[52][4] = 802;//RUSH YARDS
	playerArray[52][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[52][6] = 38;//RECEPTIONS
	playerArray[52][7] = 330;//RECEIVING YARDS
	playerArray[52][8] = 2;//RECEIVING TOUCHDOWNS
	playerArray[52][9] = 0;//Field Goals 0-19 Yards
	playerArray[52][10] = 0;//Field Goals 20-29 Yards
	playerArray[52][11] = 0;//Field Goals 30-39 Yards
	playerArray[52][12] = 0;//Field Goals 40-49 Yards
	playerArray[52][13] = 0;//Field Goals 50+
	playerArray[52][14] = 0;//PAT
	playerArray[52][15] = 0;//Sacks
	playerArray[52][16] = 0;//Interceptions
	playerArray[52][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[52][18] = "Chris Johnson";//NAME
	playerArray[52][19] = "RB"; //POSITION
	playerArray[52][20] = "jets"; //TEAM
	playerArray[52][21] = "Images/Chris-Johnson.png";//PIC
	playerArray[52][22] = "CJ1";

	playerArray[53] = new Array(23);
	playerArray[53][0] = 0;//COMPLETIONS
	playerArray[53][1] = 0;//PASSING YARDS
	playerArray[53][2] = 0;//PASSING TOUCHDOWNS
	playerArray[53][3] = 0;//INTERCEPTIONS
	playerArray[53][4] = 12;//RUSH YARDS
	playerArray[53][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[53][6] = 80;//RECEPTIONS
	playerArray[53][7] = 1043;//RECEIVING YARDS
	playerArray[53][8] = 6;//RECEIVING TOUCHDOWNS
	playerArray[53][9] = 0;//Field Goals 0-19 Yards
	playerArray[53][10] = 0;//Field Goals 20-29 Yards
	playerArray[53][11] = 0;//Field Goals 30-39 Yards
	playerArray[53][12] = 0;//Field Goals 40-49 Yards
	playerArray[53][13] = 0;//Field Goals 50+
	playerArray[53][14] = 0;//PAT
	playerArray[53][15] = 0;//Sacks
	playerArray[53][16] = 0;//Interceptions
	playerArray[53][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[53][18] = "Michael Crabtree";//NAME
	playerArray[53][19] = "WR"; //POSITION
	playerArray[53][20] = "fortyniners"; //TEAM
	playerArray[53][21] = "Images/Michael-Crabtree.png";//PIC
	playerArray[53][22] = "MC";

	playerArray[54] = new Array(23);
	playerArray[54][0] = 0;//COMPLETIONS
	playerArray[54][1] = 0;//PASSING YARDS
	playerArray[54][2] = 0;//PASSING TOUCHDOWNS
	playerArray[54][3] = 0;//INTERCEPTIONS
	playerArray[54][4] = 851;//RUSH YARDS
	playerArray[54][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[54][6] = 50;//RECEPTIONS
	playerArray[54][7] = 306;//RECEIVING YARDS
	playerArray[54][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[54][9] = 0;//Field Goals 0-19 Yards
	playerArray[54][10] = 0;//Field Goals 20-29 Yards
	playerArray[54][11] = 0;//Field Goals 30-39 Yards
	playerArray[54][12] = 0;//Field Goals 40-49 Yards
	playerArray[54][13] = 0;//Field Goals 50+
	playerArray[54][14] = 0;//PAT
	playerArray[54][15] = 0;//Sacks
	playerArray[54][16] = 0;//Interceptions
	playerArray[54][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[54][18] = "Ray Rice";//NAME
	playerArray[54][19] = "RB"; //POSITION
	playerArray[54][20] = "ravens"; //TEAM
	playerArray[54][21] = "Images/Ray-Rice.png";//PIC
	playerArray[54][22] = "RR";

	playerArray[55] = new Array(23);
	playerArray[55][0] = 0;//COMPLETIONS
	playerArray[55][1] = 0;//PASSING YARDS
	playerArray[55][2] = 0;//PASSING TOUCHDOWNS
	playerArray[55][3] = 0;//INTERCEPTIONS
	playerArray[55][4] = 877;//RUSH YARDS
	playerArray[55][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[55][6] = 27;//RECEPTIONS
	playerArray[55][7] = 221;//RECEIVING YARDS
	playerArray[55][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[55][9] = 0;//Field Goals 0-19 Yards
	playerArray[55][10] = 0;//Field Goals 20-29 Yards
	playerArray[55][11] = 0;//Field Goals 30-39 Yards
	playerArray[55][12] = 0;//Field Goals 40-49 Yards
	playerArray[55][13] = 0;//Field Goals 50+
	playerArray[55][14] = 0;//PAT
	playerArray[55][15] = 0;//Sacks
	playerArray[55][16] = 0;//Interceptions
	playerArray[55][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[55][18] = "Steven Jackson";//NAME
	playerArray[55][19] = "RB"; //POSITION
	playerArray[55][20] = "falcons"; //TEAM
	playerArray[55][21] = "Images/Steven-Jackson.png";//PIC
	playerArray[55][22] = "SJ";

	playerArray[56] = new Array(23);
	playerArray[56][0] = 0;//COMPLETIONS
	playerArray[56][1] = 0;//PASSING YARDS
	playerArray[56][2] = 0;//PASSING TOUCHDOWNS
	playerArray[56][3] = 0;//INTERCEPTIONS
	playerArray[56][4] = 26;//RUSH YARDS
	playerArray[56][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[56][6] = 74;//RECEPTIONS
	playerArray[56][7] = 1087;//RECEIVING YARDS
	playerArray[56][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[56][9] = 0;//Field Goals 0-19 Yards
	playerArray[56][10] = 0;//Field Goals 20-29 Yards
	playerArray[56][11] = 0;//Field Goals 30-39 Yards
	playerArray[56][12] = 0;//Field Goals 40-49 Yards
	playerArray[56][13] = 0;//Field Goals 50+
	playerArray[56][14] = 0;//PAT
	playerArray[56][15] = 0;//Sacks
	playerArray[56][16] = 0;//Interceptions
	playerArray[56][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[56][18] = "T.Y. Hilton";//NAME
	playerArray[56][19] = "WR"; //POSITION
	playerArray[56][20] = "colts"; //TEAM
	playerArray[56][21] = "Images/TY-Hilton.png";//PIC
	playerArray[56][22] = "TH";

	playerArray[57] = new Array(23);
	playerArray[57][0] = 0;//COMPLETIONS
	playerArray[57][1] = 0;//PASSING YARDS
	playerArray[57][2] = 0;//PASSING TOUCHDOWNS
	playerArray[57][3] = 0;//INTERCEPTIONS
	playerArray[57][4] = 960;//RUSH YARDS
	playerArray[57][5] = 7;//RUSHING TOUCHDOWNS
	playerArray[57][6] = 31;//RECEPTIONS
	playerArray[57][7] = 218;//RECEIVING YARDS
	playerArray[57][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[57][9] = 0;//Field Goals 0-19 Yards
	playerArray[57][10] = 0;//Field Goals 20-29 Yards
	playerArray[57][11] = 0;//Field Goals 30-39 Yards
	playerArray[57][12] = 0;//Field Goals 40-49 Yards
	playerArray[57][13] = 0;//Field Goals 50+
	playerArray[57][14] = 0;//PAT
	playerArray[57][15] = 0;//Sacks
	playerArray[57][16] = 0;//Interceptions
	playerArray[57][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[57][18] = "Rashad Jennings" ;//NAME
	playerArray[57][19] = "RB"; //POSITION
	playerArray[57][20] = "giants"; //TEAM
	playerArray[57][21] = "Images/Rashad-Jennings.png";//PIC
	playerArray[57][22] = "RJ";

	playerArray[58] = new Array(23);
	playerArray[58][0] = 0;//COMPLETIONS
	playerArray[58][1] = 0;//PASSING YARDS
	playerArray[58][2] = 0;//PASSING TOUCHDOWNS
	playerArray[58][3] = 0;//INTERCEPTIONS
	playerArray[58][4] = 436;//RUSH YARDS
	playerArray[58][5] = 2;//RUSHING TOUCHDOWNS
	playerArray[58][6] = 72;//RECEPTIONS
	playerArray[58][7] = 687;//RECEIVING YARDS
	playerArray[58][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[58][9] = 0;//Field Goals 0-19 Yards
	playerArray[58][10] = 0;//Field Goals 20-29 Yards
	playerArray[58][11] = 0;//Field Goals 30-39 Yards
	playerArray[58][12] = 0;//Field Goals 40-49 Yards
	playerArray[58][13] = 0;//Field Goals 50+
	playerArray[58][14] = 0;//PAT
	playerArray[58][15] = 0;//Sacks
	playerArray[58][16] = 0;//Interceptions
	playerArray[58][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[58][18] = "Shane Vereen";//NAME
	playerArray[58][19] = "RB"; //POSITION
	playerArray[58][20] = "patriots"; //TEAM
	playerArray[58][21] = "Images/Shane-Vereen.png";//PIC
	playerArray[58][22] = "SV";

	playerArray[59] = new Array(23);
	playerArray[59][0] = 0;//COMPLETIONS
	playerArray[59][1] = 0;//PASSING YARDS
	playerArray[59][2] = 0;//PASSING TOUCHDOWNS
	playerArray[59][3] = 0;//INTERCEPTIONS
	playerArray[59][4] = 12;//RUSH YARDS
	playerArray[59][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[59][6] = 61;//RECEPTIONS
	playerArray[59][7] = 1056;//RECEIVING YARDS
	playerArray[59][8] = 6;//RECEIVING TOUCHDOWNS
	playerArray[59][9] = 0;//Field Goals 0-19 Yards
	playerArray[59][10] = 0;//Field Goals 20-29 Yards
	playerArray[59][11] = 0;//Field Goals 30-39 Yards
	playerArray[59][12] = 0;//Field Goals 40-49 Yards
	playerArray[59][13] = 0;//Field Goals 50+
	playerArray[59][14] = 0;//PAT
	playerArray[59][15] = 0;//Sacks
	playerArray[59][16] = 0;//Interceptions
	playerArray[59][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[59][18] = "Torrey Smith";//NAME
	playerArray[59][19] = "WR"; //POSITION
	playerArray[59][20] = "ravens"; //TEAM
	playerArray[59][21] = "Images/Torrey-Smith.png";//PIC
	playerArray[59][22] = "TS";

	playerArray[60] = new Array(23);
	playerArray[60][0] = 0;//COMPLETIONS
	playerArray[60][1] = 0;//PASSING YARDS
	playerArray[60][2] = 0;//PASSING TOUCHDOWNS
	playerArray[60][3] = 0;//INTERCEPTIONS
	playerArray[60][4] = 812;//RUSH YARDS
	playerArray[60][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[60][6] = 43;//RECEPTIONS
	playerArray[60][7] = 417;//RECEIVING YARDS
	playerArray[60][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[60][9] = 0;//Field Goals 0-19 Yards
	playerArray[60][10] = 0;//Field Goals 20-29 Yards
	playerArray[60][11] = 0;//Field Goals 30-39 Yards
	playerArray[60][12] = 0;//Field Goals 40-49 Yards
	playerArray[60][13] = 0;//Field Goals 50+
	playerArray[60][14] = 0;//PAT
	playerArray[60][15] = 0;//Sacks
	playerArray[60][16] = 0;//Interceptions
	playerArray[60][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[60][18] = "Joique Bell";//NAME
	playerArray[60][19] = "RB"; //POSITION
	playerArray[60][20] = "lions"; //TEAM
	playerArray[60][21] = "Images/Joique-Bell.png";//PIC
	playerArray[60][22] = "JB";

	playerArray[61] = new Array(23);
	playerArray[61][0] = 0;//COMPLETIONS
	playerArray[61][1] = 0;//PASSING YARDS
	playerArray[61][2] = 0;//PASSING TOUCHDOWNS
	playerArray[61][3] = 0;//INTERCEPTIONS
	playerArray[61][4] = 34;//RUSH YARDS
	playerArray[61][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[61][6] = 96;//RECEPTIONS
	playerArray[61][7] = 935;//RECEIVING YARDS
	playerArray[61][8] = 7;//RECEIVING TOUCHDOWNS
	playerArray[61][9] = 0;//Field Goals 0-19 Yards
	playerArray[61][10] = 0;//Field Goals 20-29 Yards
	playerArray[61][11] = 0;//Field Goals 30-39 Yards
	playerArray[61][12] = 0;//Field Goals 40-49 Yards
	playerArray[61][13] = 0;//Field Goals 50+
	playerArray[61][14] = 0;//PAT
	playerArray[61][15] = 0;//Sacks
	playerArray[61][16] = 0;//Interceptions
	playerArray[61][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[61][18] = "Julian Edelman";//NAME
	playerArray[61][19] = "WR"; //POSITION
	playerArray[61][20] = "patriots"; //TEAM
	playerArray[61][21] = "Images/Julian-Edelman.png";//PIC
	playerArray[61][22] = "JE";

	playerArray[62] = new Array(23);
	playerArray[62][0] = 294;//COMPLETIONS
	playerArray[62][1] = 3789;//PASSING YARDS
	playerArray[62][2] = 22;//PASSING TOUCHDOWNS
	playerArray[62][3] = 13;//INTERCEPTIONS
	playerArray[62][4] = 563;//RUSH YARDS
	playerArray[62][5] = 4;//RUSHING TOUCHDOWNS
	playerArray[62][6] = 0;//RECEPTIONS
	playerArray[62][7] = 0;//RECEIVING YARDS
	playerArray[62][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[62][9] = 0;//Field Goals 0-19 Yards
	playerArray[62][10] = 0;//Field Goals 20-29 Yards
	playerArray[62][11] = 0;//Field Goals 30-39 Yards
	playerArray[62][12] = 0;//Field Goals 40-49 Yards
	playerArray[62][13] = 0;//Field Goals 50+
	playerArray[62][14] = 0;//PAT
	playerArray[62][15] = 0;//Sacks
	playerArray[62][16] = 0;//Interceptions
	playerArray[62][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[62][18] = "Robert Griffin III";//NAME
	playerArray[62][19] = "QB"; //POSITION
	playerArray[62][20] = "redskins"; //TEAM
	playerArray[62][21] = "Images/Robert-Griffin.png";//PIC
	playerArray[62][22] = "RG1";

	playerArray[63] = new Array(23);
	playerArray[63][0] = 299;//COMPLETIONS
	playerArray[63][1] = 3969;//PASSING YARDS
	playerArray[63][2] = 26;//PASSING TOUCHDOWNS
	playerArray[63][3] = 11;//INTERCEPTIONS
	playerArray[63][4] = 273;//RUSH YARDS
	playerArray[63][5] = 3;//RUSHING TOUCHDOWNS
	playerArray[63][6] = 0;//RECEPTIONS
	playerArray[63][7] = 0;//RECEIVING YARDS
	playerArray[63][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[63][9] = 0;//Field Goals 0-19 Yards
	playerArray[63][10] = 0;//Field Goals 20-29 Yards
	playerArray[63][11] = 0;//Field Goals 30-39 Yards
	playerArray[63][12] = 0;//Field Goals 40-49 Yards
	playerArray[63][13] = 0;//Field Goals 50+
	playerArray[63][14] = 0;//PAT
	playerArray[63][15] = 0;//Sacks
	playerArray[63][16] = 0;//Interceptions
	playerArray[63][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[63][18] = "Nick Foles";//NAME
	playerArray[63][19] = "QB"; //POSITION
	playerArray[63][20] = "eagles"; //TEAM
	playerArray[63][21] = "Images/Nick-Foles.png";//PIC
	playerArray[63][22] = "NF";

	playerArray[64] = new Array(23);
	playerArray[64][0] = 0;//COMPLETIONS
	playerArray[64][1] = 0;//PASSING YARDS
	playerArray[64][2] = 0;//PASSING TOUCHDOWNS
	playerArray[64][3] = 0;//INTERCEPTIONS
	playerArray[64][4] = 0;//RUSH YARDS
	playerArray[64][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[64][6] = 70;//RECEPTIONS
	playerArray[64][7] = 1076;//RECEIVING YARDS
	playerArray[64][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[64][9] = 0;//Field Goals 0-19 Yards
	playerArray[64][10] = 0;//Field Goals 20-29 Yards
	playerArray[64][11] = 0;//Field Goals 30-39 Yards
	playerArray[64][12] = 0;//Field Goals 40-49 Yards
	playerArray[64][13] = 0;//Field Goals 50+
	playerArray[64][14] = 0;//PAT
	playerArray[64][15] = 0;//Sacks
	playerArray[64][16] = 0;//Interceptions
	playerArray[64][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[64][18] = "Michael Floyd";//NAME
	playerArray[64][19] = "WR"; //POSITION
	playerArray[64][20] = "cardinals"; //TEAM
	playerArray[64][21] = "Images/Michael-Floyd.png";//PIC
	playerArray[64][22] = "MF1";

	playerArray[65] = new Array(23);
	playerArray[65][0] = 0;//COMPLETIONS
	playerArray[65][1] = 0;//PASSING YARDS
	playerArray[65][2] = 0;//PASSING TOUCHDOWNS
	playerArray[65][3] = 0;//INTERCEPTIONS
	playerArray[65][4] = 1107;//RUSH YARDS
	playerArray[65][5] = 8;//RUSHING TOUCHDOWNS
	playerArray[65][6] = 8;//RECEPTIONS
	playerArray[65][7] = 60;//RECEIVING YARDS
	playerArray[65][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[65][9] = 0;//Field Goals 0-19 Yards
	playerArray[65][10] = 0;//Field Goals 20-29 Yards
	playerArray[65][11] = 0;//Field Goals 30-39 Yards
	playerArray[65][12] = 0;//Field Goals 40-49 Yards
	playerArray[65][13] = 0;//Field Goals 50+
	playerArray[65][14] = 0;//PAT
	playerArray[65][15] = 0;//Sacks
	playerArray[65][16] = 0;//Interceptions
	playerArray[65][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[65][18] = "Stevan Ridley";//NAME
	playerArray[65][19] = "RB"; //POSITION
	playerArray[65][20] = "patriots"; //TEAM
	playerArray[65][21] = "Images/Stevan-Ridley.png";//PIC
	playerArray[65][22] = "SR";


	playerArray[66] = new Array(23);
	playerArray[66][0] = 0;//COMPLETIONS
	playerArray[66][1] = 0;//PASSING YARDS
	playerArray[66][2] = 0;//PASSING TOUCHDOWNS
	playerArray[66][3] = 0;//INTERCEPTIONS
	playerArray[66][4] = 0;//RUSH YARDS
	playerArray[66][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[66][6] = 63;//RECEPTIONS
	playerArray[66][7] = 875;//RECEIVING YARDS
	playerArray[66][8] = 7;//RECEIVING TOUCHDOWNS
	playerArray[66][9] = 0;//Field Goals 0-19 Yards
	playerArray[66][10] = 0;//Field Goals 20-29 Yards
	playerArray[66][11] = 0;//Field Goals 30-39 Yards
	playerArray[66][12] = 0;//Field Goals 40-49 Yards
	playerArray[66][13] = 0;//Field Goals 50+
	playerArray[66][14] = 0;//PAT
	playerArray[66][15] = 0;//Sacks
	playerArray[66][16] = 0;//Interceptions
	playerArray[66][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[66][18] = "Jeremy Maclin";//NAME
	playerArray[66][19] = "WR"; //POSITION
	playerArray[66][20] = "eagles"; //TEAM
	playerArray[66][21] = "Images/Jeremy-Maclin.png";//PIC
	playerArray[66][22] = "JM";

	playerArray[67] = new Array(23);
	playerArray[67][0] = 0;//COMPLETIONS
	playerArray[67][1] = 0;//PASSING YARDS
	playerArray[67][2] = 0;//PASSING TOUCHDOWNS
	playerArray[67][3] = 0;//INTERCEPTIONS
	playerArray[67][4] = 857;//RUSH YARDS
	playerArray[67][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[67][6] = 30;//RECEPTIONS
	playerArray[67][7] = 220;//RECEIVING YARDS
	playerArray[67][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[67][9] = 0;//Field Goals 0-19 Yards
	playerArray[67][10] = 0;//Field Goals 20-29 Yards
	playerArray[67][11] = 0;//Field Goals 30-39 Yards
	playerArray[67][12] = 0;//Field Goals 40-49 Yards
	playerArray[67][13] = 0;//Field Goals 50+
	playerArray[67][14] = 0;//PAT
	playerArray[67][15] = 0;//Sacks
	playerArray[67][16] = 0;//Interceptions
	playerArray[67][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[67][18] = "Bishop Sankey";//NAME
	playerArray[67][19] = "RB"; //POSITION
	playerArray[67][20] = "titans"; //TEAM
	playerArray[67][21] = "Images/Bishop-Sankey.png";//PIC
	playerArray[67][22] = "BS";


	playerArray[68] = new Array(23);
	playerArray[68][0] = 0;//COMPLETIONS
	playerArray[68][1] = 0;//PASSING YARDS
	playerArray[68][2] = 0;//PASSING TOUCHDOWNS
	playerArray[68][3] = 0;//INTERCEPTIONS
	playerArray[68][4] = 0;//RUSH YARDS
	playerArray[68][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[68][6] = 90;//RECEPTIONS
	playerArray[68][7] = 1108;//RECEIVING YARDS
	playerArray[68][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[68][9] = 0;//Field Goals 0-19 Yards
	playerArray[68][10] = 0;//Field Goals 20-29 Yards
	playerArray[68][11] = 0;//Field Goals 30-39 Yards
	playerArray[68][12] = 0;//Field Goals 40-49 Yards
	playerArray[68][13] = 0;//Field Goals 50+
	playerArray[68][14] = 0;//PAT
	playerArray[68][15] = 0;//Sacks
	playerArray[68][16] = 0;//Interceptions
	playerArray[68][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[68][18] = "Reggie Wayne";//NAME
	playerArray[68][19] = "WR"; //POSITION
	playerArray[68][20] = "colts"; //TEAM
	playerArray[68][21] = "Images/Reggie-Wayne.png";//PIC
	playerArray[68][22] = "RW1";

	playerArray[69] = new Array(23);
	playerArray[69][0] = 0;//COMPLETIONS
	playerArray[69][1] = 0;//PASSING YARDS
	playerArray[69][2] = 0;//PASSING TOUCHDOWNS
	playerArray[69][3] = 0;//INTERCEPTIONS
	playerArray[69][4] = 0;//RUSH YARDS
	playerArray[69][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[69][6] = 73;//RECEPTIONS
	playerArray[69][7] = 907;//RECEIVING YARDS
	playerArray[69][8] = 6;//RECEIVING TOUCHDOWNS
	playerArray[69][9] = 0;//Field Goals 0-19 Yards
	playerArray[69][10] = 0;//Field Goals 20-29 Yards
	playerArray[69][11] = 0;//Field Goals 30-39 Yards
	playerArray[69][12] = 0;//Field Goals 40-49 Yards
	playerArray[69][13] = 0;//Field Goals 50+
	playerArray[69][14] = 0;//PAT
	playerArray[69][15] = 0;//Sacks
	playerArray[69][16] = 0;//Interceptions
	playerArray[69][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[69][18] = "Marques Colston";//NAME
	playerArray[69][19] = "WR"; //POSITION
	playerArray[69][20] = "saints" //TEAM
	playerArray[69][21] = "Images/Marques-Colston.png";//PIC
	playerArray[69][22] = "MC1";


	playerArray[70] = new Array(23);
	playerArray[70][0] = 257;//COMPLETIONS
	playerArray[70][1] = 3264;//PASSING YARDS
	playerArray[70][2] = 25;//PASSING TOUCHDOWNS
	playerArray[70][3] = 10;//INTERCEPTIONS
	playerArray[70][4] = 497;//RUSH YARDS
	playerArray[70][5] = 3;//RUSHING TOUCHDOWNS
	playerArray[70][6] = 0;//RECEPTIONS
	playerArray[70][7] = 0;//RECEIVING YARDS
	playerArray[70][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[70][9] = 0;//Field Goals 0-19 Yards
	playerArray[70][10] = 0;//Field Goals 20-29 Yards
	playerArray[70][11] = 0;//Field Goals 30-39 Yards
	playerArray[70][12] = 0;//Field Goals 40-49 Yards
	playerArray[70][13] = 0;//Field Goals 50+
	playerArray[70][14] = 0;//PAT
	playerArray[70][15] = 0;//Sacks
	playerArray[70][16] = 0;//Interceptions
	playerArray[70][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[70][18] = "Russell Wilson";//NAME
	playerArray[70][19] = "QB"; //POSITION
	playerArray[70][20] = "seahawks"; //TEAM
	playerArray[70][21] = "Images/Russell-Wilson.png";//PIC
	playerArray[70][22] = "RW2";

	playerArray[71] = new Array(23);
	playerArray[71][0] = 0;//COMPLETIONS
	playerArray[71][1] = 0;//PASSING YARDS
	playerArray[71][2] = 0;//PASSING TOUCHDOWNS
	playerArray[71][3] = 0;//INTERCEPTIONS
	playerArray[71][4] = 380;//RUSH YARDS
	playerArray[71][5] = 2;//RUSHING TOUCHDOWNS
	playerArray[71][6] = 70;//RECEPTIONS
	playerArray[71][7] = 612;//RECEIVING YARDS
	playerArray[71][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[71][9] = 0;//Field Goals 0-19 Yards
	playerArray[71][10] = 0;//Field Goals 20-29 Yards
	playerArray[71][11] = 0;//Field Goals 30-39 Yards
	playerArray[71][12] = 0;//Field Goals 40-49 Yards
	playerArray[71][13] = 0;//Field Goals 50+
	playerArray[71][14] = 0;//PAT
	playerArray[71][15] = 0;//Sacks
	playerArray[71][16] = 0;//Interceptions
	playerArray[71][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[71][18] = "Pierre Thomas";//NAME
	playerArray[71][19] = "RB"; //POSITION
	playerArray[71][20] = "saints"; //TEAM
	playerArray[71][21] = "Images/Pierre-Thomas.png";//PIC
	playerArray[71][22] = "PT";

	playerArray[72] = new Array(23);
	playerArray[72][0] = 0;//COMPLETIONS
	playerArray[72][1] = 0;//PASSING YARDS
	playerArray[72][2] = 0;//PASSING TOUCHDOWNS
	playerArray[72][3] = 0;//INTERCEPTIONS
	playerArray[72][4] = 42;//RUSH YARDS
	playerArray[72][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[72][6] = 65;//RECEPTIONS
	playerArray[72][7] = 893;//RECEIVING YARDS
	playerArray[72][8] = 6;//RECEIVING TOUCHDOWNS
	playerArray[72][9] = 0;//Field Goals 0-19 Yards
	playerArray[72][10] = 0;//Field Goals 20-29 Yards
	playerArray[72][11] = 0;//Field Goals 30-39 Yards
	playerArray[72][12] = 0;//Field Goals 40-49 Yards
	playerArray[72][13] = 0;//Field Goals 50+
	playerArray[72][14] = 0;//PAT
	playerArray[72][15] = 0;//Sacks
	playerArray[72][16] = 0;//Interceptions
	playerArray[72][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[72][18] = "Sammy Watkins";//NAME
	playerArray[72][19] = "WR"; //POSITION
	playerArray[72][20] = "bills"; //TEAM
	playerArray[72][21] = "Images/Sammy-Watkins.png";//PIC
	playerArray[72][22] = "SW";

	playerArray[73] = new Array(23);
	playerArray[73][0] = 0;//COMPLETIONS
	playerArray[73][1] = 0;//PASSING YARDS
	playerArray[73][2] = 0;//PASSING TOUCHDOWNS
	playerArray[73][3] = 0;//INTERCEPTIONS
	playerArray[73][4] = 8;//RUSH YARDS
	playerArray[73][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[73][6] = 91;//RECEPTIONS
	playerArray[73][7] = 1051;//RECEIVING YARDS
	playerArray[73][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[73][9] = 0;//Field Goals 0-19 Yards
	playerArray[73][10] = 0;//Field Goals 20-29 Yards
	playerArray[73][11] = 0;//Field Goals 30-39 Yards
	playerArray[73][12] = 0;//Field Goals 40-49 Yards
	playerArray[73][13] = 0;//Field Goals 50+
	playerArray[73][14] = 0;//PAT
	playerArray[73][15] = 0;//Sacks
	playerArray[73][16] = 0;//Interceptions
	playerArray[73][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[73][18] = "Kendall Wright";//NAME
	playerArray[73][19] = "WR"; //POSITION
	playerArray[73][20] = "titans"; //TEAM
	playerArray[73][21] = "Images/Kendall-Wright.png";//PIC
	playerArray[73][22] = "KW";

	playerArray[74] = new Array(23);
	playerArray[74][0] = 0;//COMPLETIONS
	playerArray[74][1] = 0;//PASSING YARDS
	playerArray[74][2] = 0;//PASSING TOUCHDOWNS
	playerArray[74][3] = 0;//INTERCEPTIONS
	playerArray[74][4] = 0;//RUSH YARDS
	playerArray[74][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[74][6] = 74;//RECEPTIONS
	playerArray[74][7] = 818;//RECEIVING YARDS
	playerArray[74][8] = 7;//RECEIVING TOUCHDOWNS
	playerArray[74][9] = 0;//Field Goals 0-19 Yards
	playerArray[74][10] = 0;//Field Goals 20-29 Yards
	playerArray[74][11] = 0;//Field Goals 30-39 Yards
	playerArray[74][12] = 0;//Field Goals 40-49 Yards
	playerArray[74][13] = 0;//Field Goals 50+
	playerArray[74][14] = 0;//PAT
	playerArray[74][15] = 0;//Sacks
	playerArray[74][16] = 0;//Interceptions
	playerArray[74][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[74][18] = "Jason Witten";//NAME
	playerArray[74][19] = "TE"; //POSITION
	playerArray[74][20] = "cowboys"; //TEAM
	playerArray[74][21] = "Images/Jason-Witten.png";//PIC
	playerArray[74][22] = "JW";


	playerArray[75] = new Array(23);
	playerArray[75][0] = 0;//COMPLETIONS
	playerArray[75][1] = 0;//PASSING YARDS
	playerArray[75][2] = 0;//PASSING TOUCHDOWNS
	playerArray[75][3] = 0;//INTERCEPTIONS
	playerArray[75][4] = 19;//RUSH YARDS
	playerArray[75][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[75][6] = 77;//RECEPTIONS
	playerArray[75][7] = 971;//RECEIVING YARDS
	playerArray[75][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[75][9] = 0;//Field Goals 0-19 Yards
	playerArray[75][10] = 0;//Field Goals 20-29 Yards
	playerArray[75][11] = 0;//Field Goals 30-39 Yards
	playerArray[75][12] = 0;//Field Goals 40-49 Yards
	playerArray[75][13] = 0;//Field Goals 50+
	playerArray[75][14] = 0;//PAT
	playerArray[75][15] = 0;//Sacks
	playerArray[75][16] = 0;//Interceptions
	playerArray[75][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[75][18] = "Emmanuel Sanders";//NAME
	playerArray[75][19] = "WR"; //POSITION
	playerArray[75][20] = "broncos"; //TEAM
	playerArray[75][21] = "Images/Emmanuel-Sanders.png";//PIC
	playerArray[75][22] = "ES";


	playerArray[76] = new Array(23);
	playerArray[76][0] = 0;//COMPLETIONS
	playerArray[76][1] = 0;//PASSING YARDS
	playerArray[76][2] = 0;//PASSING TOUCHDOWNS
	playerArray[76][3] = 0;//INTERCEPTIONS
	playerArray[76][4] = 710;//RUSH YARDS
	playerArray[76][5] = 5;//RUSHING TOUCHDOWNS
	playerArray[76][6] = 31;//RECEPTIONS
	playerArray[76][7] = 240;//RECEIVING YARDS
	playerArray[76][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[76][9] = 0;//Field Goals 0-19 Yards
	playerArray[76][10] = 0;//Field Goals 20-29 Yards
	playerArray[76][11] = 0;//Field Goals 30-39 Yards
	playerArray[76][12] = 0;//Field Goals 40-49 Yards
	playerArray[76][13] = 0;//Field Goals 50+
	playerArray[76][14] = 0;//PAT
	playerArray[76][15] = 0;//Sacks
	playerArray[76][16] = 0;//Interceptions
	playerArray[76][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[76][18] = "Knowshon Moreno";//NAME
	playerArray[76][19] = "RB"; //POSITION
	playerArray[76][20] = "dolphins"; //TEAM
	playerArray[76][21] = "Images/Knowshon-Moreno.png";//PIC
	playerArray[76][22] = "KM";

	playerArray[77] = new Array(23);
	playerArray[77][0] = 0;//COMPLETIONS
	playerArray[77][1] = 0;//PASSING YARDS
	playerArray[77][2] = 0;//PASSING TOUCHDOWNS
	playerArray[77][3] = 0;//INTERCEPTIONS
	playerArray[77][4] = 31;//RUSH YARDS
	playerArray[77][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[77][6] = 76;//RECEPTIONS
	playerArray[77][7] = 986;//RECEIVING YARDS
	playerArray[77][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[77][9] = 0;//Field Goals 0-19 Yards
	playerArray[77][10] = 0;//Field Goals 20-29 Yards
	playerArray[77][11] = 0;//Field Goals 30-39 Yards
	playerArray[77][12] = 0;//Field Goals 40-49 Yards
	playerArray[77][13] = 0;//Field Goals 50+
	playerArray[77][14] = 0;//PAT
	playerArray[77][15] = 0;//Sacks
	playerArray[77][16] = 0;//Interceptions
	playerArray[77][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[77][18] = "Mike Wallace";//NAME
	playerArray[77][19] = "WR"; //POSITION
	playerArray[77][20] = "dolphins"; //TEAM
	playerArray[77][21] = "Images/Mike-Wallace.png";//PIC
	playerArray[77][22] = "MW";

	playerArray[78] = new Array(23);
	playerArray[78][0] = 0;//COMPLETIONS
	playerArray[78][1] = 0;//PASSING YARDS
	playerArray[78][2] = 0;//PASSING TOUCHDOWNS
	playerArray[78][3] = 0;//INTERCEPTIONS
	playerArray[78][4] = 50;//RUSH YARDS
	playerArray[78][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[78][6] = 84;//RECEPTIONS
	playerArray[78][7] = 1041;//RECEIVING YARDS
	playerArray[78][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[78][9] = 0;//Field Goals 0-19 Yards
	playerArray[78][10] = 0;//Field Goals 20-29 Yards
	playerArray[78][11] = 0;//Field Goals 30-39 Yards
	playerArray[78][12] = 0;//Field Goals 40-49 Yards
	playerArray[78][13] = 0;//Field Goals 50+
	playerArray[78][14] = 0;//PAT
	playerArray[78][15] = 0;//Sacks
	playerArray[78][16] = 0;//Interceptions
	playerArray[78][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[78][18] = "Golden Tate";//NAME
	playerArray[78][19] = "WR"; //POSITION
	playerArray[78][20] = "lions"; //TEAM
	playerArray[78][21] = "Images/Golden-Tate.png";//PIC
	playerArray[78][22] = "GT";

	playerArray[79] = new Array(23);
	playerArray[79][0] = 0;//COMPLETIONS
	playerArray[79][1] = 0;//PASSING YARDS
	playerArray[79][2] = 0;//PASSING TOUCHDOWNS
	playerArray[79][3] = 0;//INTERCEPTIONS
	playerArray[79][4] = 876;//RUSH YARDS
	playerArray[79][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[79][6] = 23;//RECEPTIONS
	playerArray[79][7] = 176;//RECEIVING YARDS
	playerArray[79][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[79][9] = 0;//Field Goals 0-19 Yards
	playerArray[79][10] = 0;//Field Goals 20-29 Yards
	playerArray[79][11] = 0;//Field Goals 30-39 Yards
	playerArray[79][12] = 0;//Field Goals 40-49 Yards
	playerArray[79][13] = 0;//Field Goals 50+
	playerArray[79][14] = 0;//PAT
	playerArray[79][15] = 0;//Sacks
	playerArray[79][16] = 0;//Interceptions
	playerArray[79][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[79][18] = "Toby Gerhart";//NAME
	playerArray[79][19] = "RB"; //POSITION
	playerArray[79][20] = "jaguars"; //TEAM
	playerArray[79][21] = "Images/Toby-Gerhart.png";//PIC
	playerArray[79][22] = "TG";

	playerArray[80] = new Array(23);
	playerArray[80][0] = 0;//COMPLETIONS
	playerArray[80][1] = 0;//PASSING YARDS
	playerArray[80][2] = 0;//PASSING TOUCHDOWNS
	playerArray[80][3] = 0;//INTERCEPTIONS
	playerArray[80][4] = 0;//RUSH YARDS
	playerArray[80][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[80][6] = 64;//RECEPTIONS
	playerArray[80][7] = 947;//RECEIVING YARDS
	playerArray[80][8] = 8;//RECEIVING TOUCHDOWNS
	playerArray[80][9] = 0;//Field Goals 0-19 Yards
	playerArray[80][10] = 0;//Field Goals 20-29 Yards
	playerArray[80][11] = 0;//Field Goals 30-39 Yards
	playerArray[80][12] = 0;//Field Goals 40-49 Yards
	playerArray[80][13] = 0;//Field Goals 50+
	playerArray[80][14] = 0;//PAT
	playerArray[80][15] = 0;//Sacks
	playerArray[80][16] = 0;//Interceptions
	playerArray[80][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[80][18] = "Eric Decker";//NAME
	playerArray[80][19] = "WR"; //POSITION
	playerArray[80][20] = "jets"; //TEAM
	playerArray[80][21] = "Images/Eric-Decker.png";//PIC
	playerArray[80][22] = "ED";

	playerArray[81] = new Array(23);
	playerArray[81][0] = 0;//COMPLETIONS
	playerArray[81][1] = 0;//PASSING YARDS
	playerArray[81][2] = 0;//PASSING TOUCHDOWNS
	playerArray[81][3] = 0;//INTERCEPTIONS
	playerArray[81][4] = 0;//RUSH YARDS
	playerArray[81][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[81][6] = 63;//RECEPTIONS
	playerArray[81][7] = 882;//RECEIVING YARDS
	playerArray[81][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[81][9] = 0;//Field Goals 0-19 Yards
	playerArray[81][10] = 0;//Field Goals 20-29 Yards
	playerArray[81][11] = 0;//Field Goals 30-39 Yards
	playerArray[81][12] = 0;//Field Goals 40-49 Yards
	playerArray[81][13] = 0;//Field Goals 50+
	playerArray[81][14] = 0;//PAT
	playerArray[81][15] = 0;//Sacks
	playerArray[81][16] = 0;//Interceptions
	playerArray[81][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[81][18] = "Cecil Shorts";//NAME
	playerArray[81][19] = "WR"; //POSITION
	playerArray[81][20] = "jaguars"; //TEAM
	playerArray[81][21] = "Images/Cecil-Shorts.png";//PIC
	playerArray[81][22] = "CS1";

	playerArray[82] = new Array(23);
	playerArray[82][0] = 0;//COMPLETIONS
	playerArray[82][1] = 0;//PASSING YARDS
	playerArray[82][2] = 0;//PASSING TOUCHDOWNS
	playerArray[82][3] = 0;//INTERCEPTIONS
	playerArray[82][4] = 19;//RUSH YARDS
	playerArray[82][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[82][6] = 57;//RECEPTIONS
	playerArray[82][7] = 928;//RECEIVING YARDS
	playerArray[82][8] = 6;//RECEIVING TOUCHDOWNS
	playerArray[82][9] = 0;//Field Goals 0-19 Yards
	playerArray[82][10] = 0;//Field Goals 20-29 Yards
	playerArray[82][11] = 0;//Field Goals 30-39 Yards
	playerArray[82][12] = 0;//Field Goals 40-49 Yards
	playerArray[82][13] = 0;//Field Goals 50+
	playerArray[82][14] = 0;//PAT
	playerArray[82][15] = 0;//Sacks
	playerArray[82][16] = 0;//Interceptions
	playerArray[82][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[82][18] = "Terrance Williams";//NAME
	playerArray[82][19] = "WR"; //POSITION
	playerArray[82][20] = "cowboys"; //TEAM
	playerArray[82][21] = "Images/Terrance-Williams.png";//PIC
	playerArray[82][22] = "TW";

	playerArray[83] = new Array(23);
	playerArray[83][0] = 0;//COMPLETIONS
	playerArray[83][1] = 0;//PASSING YARDS
	playerArray[83][2] = 0;//PASSING TOUCHDOWNS
	playerArray[83][3] = 0;//INTERCEPTIONS
	playerArray[83][4] = 524;//RUSH YARDS
	playerArray[83][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[83][6] = 36;//RECEPTIONS
	playerArray[83][7] = 260;//RECEIVING YARDS
	playerArray[83][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[83][9] = 0;//Field Goals 0-19 Yards
	playerArray[83][10] = 0;//Field Goals 20-29 Yards
	playerArray[83][11] = 0;//Field Goals 30-39 Yards
	playerArray[83][12] = 0;//Field Goals 40-49 Yards
	playerArray[83][13] = 0;//Field Goals 50+
	playerArray[83][14] = 0;//PAT
	playerArray[83][15] = 0;//Sacks
	playerArray[83][16] = 0;//Interceptions
	playerArray[83][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[83][18] = "Maurice Jones-Drew";//NAME
	playerArray[83][19] = "RB"; //POSITION
	playerArray[83][20] = "raiders"; //TEAM
	playerArray[83][21] = "Images/Maurice-Jones-Drew.png";//PIC
	playerArray[83][22] = "MJD";

	playerArray[84] = new Array(23);
	playerArray[84][0] = 0;//COMPLETIONS
	playerArray[84][1] = 0;//PASSING YARDS
	playerArray[84][2] = 0;//PASSING TOUCHDOWNS
	playerArray[84][3] = 0;//INTERCEPTIONS
	playerArray[84][4] = 743;//RUSH YARDS
	playerArray[84][5] = 6;//RUSHING TOUCHDOWNS
	playerArray[84][6] = 3;//RECEPTIONS
	playerArray[84][7] = 17;//RECEIVING YARDS
	playerArray[84][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[84][9] = 0;//Field Goals 0-19 Yards
	playerArray[84][10] = 0;//Field Goals 20-29 Yards
	playerArray[84][11] = 0;//Field Goals 30-39 Yards
	playerArray[84][12] = 0;//Field Goals 40-49 Yards
	playerArray[84][13] = 0;//Field Goals 50+
	playerArray[84][14] = 0;//PAT
	playerArray[84][15] = 0;//Sacks
	playerArray[84][16] = 0;//Interceptions
	playerArray[84][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[84][18] = "Chris Ivory";//NAME
	playerArray[84][19] = "RB"; //POSITION
	playerArray[84][20] = "jets"; //TEAM
	playerArray[84][21] = "Images/Chris-Ivory.png";//PIC
	playerArray[84][22] = "CI";

	playerArray[85] = new Array(23);
	playerArray[85][0] = 0;//COMPLETIONS
	playerArray[85][1] = 0;//PASSING YARDS
	playerArray[85][2] = 0;//PASSING TOUCHDOWNS
	playerArray[85][3] = 0;//INTERCEPTIONS
	playerArray[85][4] = 563;//RUSH YARDS
	playerArray[85][5] = 4;//RUSHING TOUCHDOWNS
	playerArray[85][6] = 36;//RECEPTIONS
	playerArray[85][7] = 286;//RECEIVING YARDS
	playerArray[85][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[85][9] = 0;//Field Goals 0-19 Yards
	playerArray[85][10] = 0;//Field Goals 20-29 Yards
	playerArray[85][11] = 0;//Field Goals 30-39 Yards
	playerArray[85][12] = 0;//Field Goals 40-49 Yards
	playerArray[85][13] = 0;//Field Goals 50+
	playerArray[85][14] = 0;//PAT
	playerArray[85][15] = 0;//Sacks
	playerArray[85][16] = 0;//Interceptions
	playerArray[85][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[85][18] = "Fred Jackson";//NAME
	playerArray[85][19] = "RB"; //POSITION
	playerArray[85][20] = "bills"; //TEAM
	playerArray[85][21] = "Images/Fred-Jackson.png";//PIC
	playerArray[85][22] = "FJ";

	playerArray[86] = new Array(23);
	playerArray[86][0] = 0;//COMPLETIONS
	playerArray[86][1] = 0;//PASSING YARDS
	playerArray[86][2] = 0;//PASSING TOUCHDOWNS
	playerArray[86][3] = 0;//INTERCEPTIONS
	playerArray[86][4] = 385;//RUSH YARDS
	playerArray[86][5] = 1;//RUSHING TOUCHDOWNS
	playerArray[86][6] = 67;//RECEPTIONS
	playerArray[86][7] = 534;//RECEIVING YARDS
	playerArray[86][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[86][9] = 0;//Field Goals 0-19 Yards
	playerArray[86][10] = 0;//Field Goals 20-29 Yards
	playerArray[86][11] = 0;//Field Goals 30-39 Yards
	playerArray[86][12] = 0;//Field Goals 40-49 Yards
	playerArray[86][13] = 0;//Field Goals 50+
	playerArray[86][14] = 0;//PAT
	playerArray[86][15] = 0;//Sacks
	playerArray[86][16] = 0;//Interceptions
	playerArray[86][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[86][18] = "Danny Woodhead";//NAME
	playerArray[86][19] = "RB"; //POSITION
	playerArray[86][20] = "chargers"; //TEAM
	playerArray[86][21] = "Images/Danny-Woodhead.png";//PIC
	playerArray[86][22] = "DW";

	playerArray[87] = new Array(23);
	playerArray[87][0] = 0;//COMPLETIONS
	playerArray[87][1] = 0;//PASSING YARDS
	playerArray[87][2] = 0;//PASSING TOUCHDOWNS
	playerArray[87][3] = 0;//INTERCEPTIONS
	playerArray[87][4] = 17;//RUSH YARDS
	playerArray[87][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[87][6] = 44;//RECEPTIONS
	playerArray[87][7] = 765;//RECEIVING YARDS
	playerArray[87][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[87][9] = 0;//Field Goals 0-19 Yards
	playerArray[87][10] = 0;//Field Goals 20-29 Yards
	playerArray[87][11] = 0;//Field Goals 30-39 Yards
	playerArray[87][12] = 0;//Field Goals 40-49 Yards
	playerArray[87][13] = 0;//Field Goals 50+
	playerArray[87][14] = 0;//PAT
	playerArray[87][15] = 0;//Sacks
	playerArray[87][16] = 0;//Interceptions
	playerArray[87][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[87][18] = "Josh Gordon";//NAME
	playerArray[87][19] = "WR"; //POSITION
	playerArray[87][20] = "browns"; //TEAM
	playerArray[87][21] = "Images/Josh-Gordon.png";//PIC
	playerArray[87][22] = "JG1";

	playerArray[88] = new Array(23);
	playerArray[88][0] = 0;//COMPLETIONS
	playerArray[88][1] = 0;//PASSING YARDS
	playerArray[88][2] = 0;//PASSING TOUCHDOWNS
	playerArray[88][3] = 0;//INTERCEPTIONS
	playerArray[88][4] = 176;//RUSH YARDS
	playerArray[88][5] = 1;//RUSHING TOUCHDOWNS
	playerArray[88][6] = 91;//RECEPTIONS
	playerArray[88][7] = 745;//RECEIVING YARDS
	playerArray[88][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[88][9] = 0;//Field Goals 0-19 Yards
	playerArray[88][10] = 0;//Field Goals 20-29 Yards
	playerArray[88][11] = 0;//Field Goals 30-39 Yards
	playerArray[88][12] = 0;//Field Goals 40-49 Yards
	playerArray[88][13] = 0;//Field Goals 50+
	playerArray[88][14] = 0;//PAT
	playerArray[88][15] = 0;//Sacks
	playerArray[88][16] = 0;//Interceptions
	playerArray[88][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[88][18] = "Darren Sproles";//NAME
	playerArray[88][19] = "RB"; //POSITION
	playerArray[88][20] = "eagles"; //TEAM
	playerArray[88][21] = "Images/Darren-Sproles.png";//PIC
	playerArray[88][22] = "DS1";

	playerArray[89] = new Array(23);
	playerArray[89][0] = 0;//COMPLETIONS
	playerArray[89][1] = 0;//PASSING YARDS
	playerArray[89][2] = 0;//PASSING TOUCHDOWNS
	playerArray[89][3] = 0;//INTERCEPTIONS
	playerArray[89][4] = 14;//RUSH YARDS
	playerArray[89][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[89][6] = 69;//RECEPTIONS
	playerArray[89][7] = 967;//RECEIVING YARDS
	playerArray[89][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[89][9] = 0;//Field Goals 0-19 Yards
	playerArray[89][10] = 0;//Field Goals 20-29 Yards
	playerArray[89][11] = 0;//Field Goals 30-39 Yards
	playerArray[89][12] = 0;//Field Goals 40-49 Yards
	playerArray[89][13] = 0;//Field Goals 50+
	playerArray[89][14] = 0;//PAT
	playerArray[89][15] = 0;//Sacks
	playerArray[89][16] = 0;//Interceptions
	playerArray[89][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[89][18] = "Anquan Boldin";//NAME
	playerArray[89][19] = "WR"; //POSITION
	playerArray[89][20] = "fortyniners"; //TEAM
	playerArray[89][21] = "Images/Anquan-Boldin.png";//PIC
	playerArray[89][22] = "AB1";

	playerArray[90] = new Array(23);
	playerArray[90][0] = 0;//COMPLETIONS
	playerArray[90][1] = 0;//PASSING YARDS
	playerArray[90][2] = 0;//PASSING TOUCHDOWNS
	playerArray[90][3] = 0;//INTERCEPTIONS
	playerArray[90][4] = 814;//RUSH YARDS
	playerArray[90][5] = 2;//RUSHING TOUCHDOWNS
	playerArray[90][6] = 23;//RECEPTIONS
	playerArray[90][7] = 210;//RECEIVING YARDS
	playerArray[90][8] = 1;//RECEIVING TOUCHDOWNS
	playerArray[90][9] = 0;//Field Goals 0-19 Yards
	playerArray[90][10] = 0;//Field Goals 20-29 Yards
	playerArray[90][11] = 0;//Field Goals 30-39 Yards
	playerArray[90][12] = 0;//Field Goals 40-49 Yards
	playerArray[90][13] = 0;//Field Goals 50+
	playerArray[90][14] = 0;//PAT
	playerArray[90][15] = 0;//Sacks
	playerArray[90][16] = 0;//Interceptions
	playerArray[90][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[90][18] = "DeAngelo Williams";//NAME
	playerArray[90][19] = "RB"; //POSITION
	playerArray[90][20] = "panthers"; //TEAM
	playerArray[90][21] = "Images/Deangelo-Williams.png";//PIC
	playerArray[90][22] = "DW1";

	playerArray[91] = new Array(23);
	playerArray[91][0] = 0;//COMPLETIONS
	playerArray[91][1] = 0;//PASSING YARDS
	playerArray[91][2] = 0;//PASSING TOUCHDOWNS
	playerArray[91][3] = 0;//INTERCEPTIONS
	playerArray[91][4] = 418;//RUSH YARDS
	playerArray[91][5] = 3;//RUSHING TOUCHDOWNS
	playerArray[91][6] = 22;//RECEPTIONS
	playerArray[91][7] = 177;//RECEIVING YARDS
	playerArray[91][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[91][9] = 0;//Field Goals 0-19 Yards
	playerArray[91][10] = 0;//Field Goals 20-29 Yards
	playerArray[91][11] = 0;//Field Goals 30-39 Yards
	playerArray[91][12] = 0;//Field Goals 40-49 Yards
	playerArray[91][13] = 0;//Field Goals 50+
	playerArray[91][14] = 0;//PAT
	playerArray[91][15] = 0;//Sacks
	playerArray[91][16] = 0;//Interceptions
	playerArray[91][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[91][18] = "David Wilson";//NAME
	playerArray[91][19] = "RB"; //POSITION
	playerArray[91][20] = "giants"; //TEAM
	playerArray[91][21] = "Images/David-Wilson.png";//PIC
	playerArray[91][22] = "DW2";

	playerArray[92] = new Array(23);
	playerArray[92][0] = 0;//COMPLETIONS
	playerArray[92][1] = 0;//PASSING YARDS
	playerArray[92][2] = 0;//PASSING TOUCHDOWNS
	playerArray[92][3] = 0;//INTERCEPTIONS
	playerArray[92][4] = 608;//RUSH YARDS
	playerArray[92][5] = 4;//RUSHING TOUCHDOWNS
	playerArray[92][6] = 24;//RECEPTIONS
	playerArray[92][7] = 120;//RECEIVING YARDS
	playerArray[92][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[92][9] = 0;//Field Goals 0-19 Yards
	playerArray[92][10] = 0;//Field Goals 20-29 Yards
	playerArray[92][11] = 0;//Field Goals 30-39 Yards
	playerArray[92][12] = 0;//Field Goals 40-49 Yards
	playerArray[92][13] = 0;//Field Goals 50+
	playerArray[92][14] = 0;//PAT
	playerArray[92][15] = 0;//Sacks
	playerArray[92][16] = 0;//Interceptions
	playerArray[92][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[92][18] = "Bernard Pierce";//NAME
	playerArray[92][19] = "RB"; //POSITION
	playerArray[92][20] = "ravens"; //TEAM
	playerArray[92][21] = "Images/Bernard-Pierce.png";//PIC
	playerArray[92][22] = "BP";

	playerArray[93] = new Array(23);
	playerArray[93][0] = 0;//COMPLETIONS
	playerArray[93][1] = 0;//PASSING YARDS
	playerArray[93][2] = 0;//PASSING TOUCHDOWNS
	playerArray[93][3] = 0;//INTERCEPTIONS
	playerArray[93][4] = 0;//RUSH YARDS
	playerArray[93][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[93][6] = 64;//RECEPTIONS
	playerArray[93][7] = 970;//RECEIVING YARDS
	playerArray[93][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[93][9] = 0;//Field Goals 0-19 Yards
	playerArray[93][10] = 0;//Field Goals 20-29 Yards
	playerArray[93][11] = 0;//Field Goals 30-39 Yards
	playerArray[93][12] = 0;//Field Goals 40-49 Yards
	playerArray[93][13] = 0;//Field Goals 50+
	playerArray[93][14] = 0;//PAT
	playerArray[93][15] = 0;//Sacks
	playerArray[93][16] = 0;//Interceptions
	playerArray[93][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[93][18] = "DeAndre Hopkins";//NAME
	playerArray[93][19] = "WR"; //POSITION
	playerArray[93][20] = "texans"; //TEAM
	playerArray[93][21] = "Images/DeAndre-Hopkins.png";//PIC
	playerArray[93][22] = "DH";

	playerArray[94] = new Array(23);
	playerArray[94][0] = 0;//COMPLETIONS
	playerArray[94][1] = 0;//PASSING YARDS
	playerArray[94][2] = 0;//PASSING TOUCHDOWNS
	playerArray[94][3] = 0;//INTERCEPTIONS
	playerArray[94][4] = 0;//RUSH YARDS
	playerArray[94][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[94][6] = 50;//RECEPTIONS
	playerArray[94][7] = 816;//RECEIVING YARDS
	playerArray[94][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[94][9] = 0;//Field Goals 0-19 Yards
	playerArray[94][10] = 0;//Field Goals 20-29 Yards
	playerArray[94][11] = 0;//Field Goals 30-39 Yards
	playerArray[94][12] = 0;//Field Goals 40-49 Yards
	playerArray[94][13] = 0;//Field Goals 50+
	playerArray[94][14] = 0;//PAT
	playerArray[94][15] = 0;//Sacks
	playerArray[94][16] = 0;//Interceptions
	playerArray[94][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[94][18] = "Riley Cooper";//NAME
	playerArray[94][19] = "WR"; //POSITION
	playerArray[94][20] = "eagles"; //TEAM
	playerArray[94][21] = "Images/Riley-Cooper.png";//PIC
	playerArray[94][22] = "RC1";

	playerArray[95] = new Array(23);
	playerArray[95][0] = 0;//COMPLETIONS
	playerArray[95][1] = 0;//PASSING YARDS
	playerArray[95][2] = 0;//PASSING TOUCHDOWNS
	playerArray[95][3] = 0;//INTERCEPTIONS
	playerArray[95][4] = 0;//RUSH YARDS
	playerArray[95][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[95][6] = 74;//RECEPTIONS
	playerArray[95][7] = 879;//RECEIVING YARDS
	playerArray[95][8] = 7;//RECEIVING TOUCHDOWNS
	playerArray[95][9] = 0;//Field Goals 0-19 Yards
	playerArray[95][10] = 0;//Field Goals 20-29 Yards
	playerArray[95][11] = 0;//Field Goals 30-39 Yards
	playerArray[95][12] = 0;//Field Goals 40-49 Yards
	playerArray[95][13] = 0;//Field Goals 50+
	playerArray[95][14] = 0;//PAT
	playerArray[95][15] = 0;//Sacks
	playerArray[95][16] = 0;//Interceptions
	playerArray[95][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[95][18] = "Jordan Cameron";//NAME
	playerArray[95][19] = "TE"; //POSITION
	playerArray[95][20] = "browns"; //TEAM
	playerArray[95][21] = "Images/Jordan-Cameron.png";//PIC
	playerArray[95][22] = "JC1";

	playerArray[96] = new Array(23);
	playerArray[96][0] = 0;//COMPLETIONS
	playerArray[96][1] = 0;//PASSING YARDS
	playerArray[96][2] = 0;//PASSING TOUCHDOWNS
	playerArray[96][3] = 0;//INTERCEPTIONS
	playerArray[96][4] = 0;//RUSH YARDS
	playerArray[96][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[96][6] = 65;//RECEPTIONS
	playerArray[96][7] = 767;//RECEIVING YARDS
	playerArray[96][8] = 4;//RECEIVING TOUCHDOWNS
	playerArray[96][9] = 0;//Field Goals 0-19 Yards
	playerArray[96][10] = 0;//Field Goals 20-29 Yards
	playerArray[96][11] = 0;//Field Goals 30-39 Yards
	playerArray[96][12] = 0;//Field Goals 40-49 Yards
	playerArray[96][13] = 0;//Field Goals 50+
	playerArray[96][14] = 0;//PAT
	playerArray[96][15] = 0;//Sacks
	playerArray[96][16] = 0;//Interceptions
	playerArray[96][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[96][18] = "Danny Amendola";//NAME
	playerArray[96][19] = "WR"; //POSITION
	playerArray[96][20] = "patriots"; //TEAM
	playerArray[96][21] = "Images/Danny-Amendola.png";//PIC
	playerArray[96][22] = "DA";

	playerArray[97] = new Array(23);
	playerArray[97][0] = 0;//COMPLETIONS
	playerArray[97][1] = 0;//PASSING YARDS
	playerArray[97][2] = 0;//PASSING TOUCHDOWNS
	playerArray[97][3] = 0;//INTERCEPTIONS
	playerArray[97][4] = 0;//RUSH YARDS
	playerArray[97][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[97][6] = 0;//RECEPTIONS
	playerArray[97][7] = 0;//RECEIVING YARDS
	playerArray[97][8] = 5;//RECEIVING TOUCHDOWNS
	playerArray[97][9] = 0;//Field Goals 0-19 Yards
	playerArray[97][10] = 0;//Field Goals 20-29 Yards
	playerArray[97][11] = 0;//Field Goals 30-39 Yards
	playerArray[97][12] = 0;//Field Goals 40-49 Yards
	playerArray[97][13] = 0;//Field Goals 50+
	playerArray[97][14] = 0;//PAT
	playerArray[97][15] = 41;//Sacks
	playerArray[97][16] = 26;//Interceptions
	playerArray[97][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[97][18] = "Seahawks D/ST";//NAME
	playerArray[97][19] = "DST"; //POSITION
	playerArray[97][20] = "seahawks"; //TEAM
	playerArray[97][21] = "Images/Seahawks-DST.png";//PIC
	playerArray[97][22] = "SDST";

	playerArray[98] = new Array(23);
	playerArray[98][0] = 248;//COMPLETIONS
	playerArray[98][1] = 3378;//PASSING YARDS
	playerArray[98][2] = 22;//PASSING TOUCHDOWNS
	playerArray[98][3] = 11;//INTERCEPTIONS
	playerArray[98][4] = 474;//RUSH YARDS
	playerArray[98][5] = 4;//RUSHING TOUCHDOWNS
	playerArray[98][6] = 0;//RECEPTIONS
	playerArray[98][7] = 0;//RECEIVING YARDS
	playerArray[98][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[98][9] = 0;//Field Goals 0-19 Yards
	playerArray[98][10] = 0;//Field Goals 20-29 Yards
	playerArray[98][11] = 0;//Field Goals 30-39 Yards
	playerArray[98][12] = 0;//Field Goals 40-49 Yards
	playerArray[98][13] = 0;//Field Goals 50+
	playerArray[98][14] = 0;//PAT
	playerArray[98][15] = 0;//Sacks
	playerArray[98][16] = 0;//Interceptions
	playerArray[98][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[98][18] = "Colin Kaepernick";//NAME
	playerArray[98][19] = "QB"; //POSITION
	playerArray[98][20] = "fortyniners"; //TEAM
	playerArray[98][21] = "Images/Colin-Kaepernick.png";//PIC
	playerArray[98][22] = "CK";

	playerArray[99] = new Array(23);
	playerArray[99][0] = 419;//COMPLETIONS
	playerArray[99][1] = 4377;//PASSING YARDS
	playerArray[99][2] = 28;//PASSING TOUCHDOWNS
	playerArray[99][3] = 14;//INTERCEPTIONS
	playerArray[99][4] = 86;//RUSH YARDS
	playerArray[99][5] = 0;//RUSHING TOUCHDOWNS
	playerArray[99][6] = 0;//RECEPTIONS
	playerArray[99][7] = 0;//RECEIVING YARDS
	playerArray[99][8] = 0;//RECEIVING TOUCHDOWNS
	playerArray[99][9] = 0;//Field Goals 0-19 Yards
	playerArray[99][10] = 0;//Field Goals 20-29 Yards
	playerArray[99][11] = 0;//Field Goals 30-39 Yards
	playerArray[99][12] = 0;//Field Goals 40-49 Yards
	playerArray[99][13] = 0;//Field Goals 50+
	playerArray[99][14] = 0;//PAT
	playerArray[99][15] = 0;//Sacks
	playerArray[99][16] = 0;//Interceptions
	playerArray[99][17] = 0;//Total Points ALWAYS PUT 0 FOR THIS
	playerArray[99][18] = "Matt Ryan";//NAME
	playerArray[99][19] = "QB"; //POSITION
	playerArray[99][20] = "falcons"; //TEAM
	playerArray[99][21] = "Images/Matt-Ryan.png";//PIC
	playerArray[99][22] = "MR";


	var helpme = $("#player-0");
	$(".current").removeClass("current");
	helpme.addClass("current");


		$("#submit").click(function(){
			var x = $('selector').val();

			var Completions = parseFloat(document.getElementById("completion").value);
			var PassYards = parseFloat(document.getElementById("PassYards").value);
			var PassTD = parseFloat(document.getElementById("PassTD").value);
			var QBInt = parseFloat(document.getElementById("QBInt").value);
			var RushYards = parseFloat(document.getElementById("RushYards").value);
			var RushTD = parseFloat(document.getElementById("RushTD").value);
			var PPR = parseFloat(document.getElementById("PPR").value);
			var RecYards = parseFloat(document.getElementById("RECyd").value);
			var RecTD = parseFloat(document.getElementById("CatchTD").value);
			var FG019 = parseFloat(document.getElementById("FG0-19").value);
			var FG2029 = parseFloat(document.getElementById("FG20-29").value);
			var FG3039 = parseFloat(document.getElementById("FG30-39").value);
			var FG4049 = parseFloat(document.getElementById("FG40-49").value);
			var FG50 = parseFloat(document.getElementById("FG50").value);
			var PAT = parseFloat(document.getElementById("PAT").value);
			var SACKS = parseFloat(document.getElementById("SACKS").value);
			var PICK = parseFloat(document.getElementById("PICK").value);

			for(var i = 0; i < 100; i = i + 1){
				for(var j = 0; j < 17; j = j + 1){
					if (j == 0)
					{
						var temp = playerArray[i][j];
						temp = temp * Completions;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 1)
					{
						var temp = playerArray[i][j];
						if(PassYards != 0)
						{
							temp = temp/PassYards;
						}
						else{
							temp = 0;
						}
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 2)
					{
						var temp = playerArray[i][j];

						temp = temp * PassTD;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 3)
					{
						var temp = playerArray[i][j];
						temp = temp * QBInt;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 4)
					{
						var temp = playerArray[i][j];
						if(RushYards != 0)
						{
							temp = temp/RushYards;
						}
						else
						{
							temp = 0;
						}
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 5)
					{
						var temp = playerArray[i][j];
						temp = temp * RushTD;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 6)
					{
						var temp = playerArray[i][j];
						temp = temp * PPR;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 7)
					{
						var temp = playerArray[i][j];
						if(RecYards != 0)
						{
							temp = temp / RecYards;
						}
						else
						{
							temp = 0;
						}
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 8)
					{
						var temp = playerArray[i][j];
						temp = temp * RecTD;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 9)
					{
						var temp = playerArray[i][j];
						temp = temp * FG019;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 10)
					{
						var temp = playerArray[i][j];
						temp = temp * FG2029;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 11)
					{
						var temp = playerArray[i][j];
						temp = temp * FG3039;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 12)
					{
						var temp = playerArray[i][j];
						temp = temp * FG4049;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 13)
					{
						var temp = playerArray[i][j];
						temp = temp * FG50;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 14)
					{
						var temp = playerArray[i][j];
						temp = temp * PAT;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 15)
					{
						var temp = playerArray[i][j];
						temp = temp * SACKS;
						playerArray[i][17] = playerArray[i][17] + temp;
					}
					else if(j == 16)
					{
						var temp = playerArray[i][j];
						temp = temp * PICK;
						playerArray[i][17] = playerArray[i][17] + temp;
					}

				}

			}

				playerArray.sort(function(a,b){return b[17] - a[17]}); //sort

			var qbBase = Math.ceil(1.19625 * 8);
			var rbBase = Math.ceil(1.92625 * 2.33 * 8);
			var wrBase = Math.ceil(1.1975 * 3.33 * 8);
			var teBase = Math.ceil(0.92975 * 1.33 * 8);

			var qbnum = 0;
			var rbnum = 0;
			var wrnum = 0;
			var tenum = 0;

			var qbcount = 0;
			var rbcount = 0;
			var wrcount = 0;
			var tecount = 0;




			for(var i = 0; i < 100; i = i + 1){

				if(playerArray[i][19] == "QB" && (qbnum < qbBase))
				{
					qbnum = qbnum + 1;
				}
				if(playerArray[i][19] == "RB" && (rbnum < rbBase))
				{
					rbnum = rbnum + 1;
				}
				if(playerArray[i][19] == "TE" && (tenum < teBase))
				{
					tecount = i;
				}
				if(playerArray[i][19] == "WR" && (wrnum < wrBase))
				{
					wrnum = wrnum + 1;
				}

				if(qbnum == qbBase && qbcount == 0)
				{	
					qbcount = i;
				}


				if(rbnum == rbBase && rbcount == 0)
				{	
					rbcount = i;
				}

				if(wrnum == wrBase && wrcount == 0)
				{	
					wrcount = i;
				}

				if(tenum == teBase && tecount == 0)
				{	
					tecount = i;
				}

			}

			if(qbcount == 0)
				{	
					qbcount = qbnum;
				}


				if(rbcount == 0)
				{	
					rbcount = rbnum;
				}

				if(wrcount == 0)
				{	
					wrcount = wrnum;
				}

				if(tecount == 0)
				{	
					tecount = tenum;
				}



			for(var i = 0; i < 100; i = i + 1)
			{
				if(playerArray[i][19] == "QB")
				{
					playerArray[i][0] = playerArray[i][17] - playerArray[qbcount][17];
				}
				if(playerArray[i][19] == "RB")
				{
					playerArray[i][0] = playerArray[i][17] - playerArray[rbcount][17];
				}
				if(playerArray[i][19] == "TE")
				{
					playerArray[i][0] = playerArray[i][17] - playerArray[tecount][17];
				}
				if(playerArray[i][19] == "WR")
				{
					playerArray[i][0] = playerArray[i][17] - playerArray[wrcount][17];
				}
			}




			playerArray.sort(function(a,b){return b[0] - a[0]}); //sort
			$("#playerGrid").css("display","none");


			var counter = 0;
			var firstone = $(".firstsec");

			for(var i = 0; i < 100; i = i + 1){

				
					
					$(".current h2").replaceWith('<h2>' + playerArray[i][18] +'</h2>');
					console.log(playerArray[i][18]);
					$(".current img").remove();
					$('.current').append("<img src='" + playerArray[i][21] + "'/>")
					var currentLink = $(".current");
					$(".current").removeClass();


					currentLink.addClass("current");
					$(".current").addClass("span_3_of_12");
					$(".current").addClass(playerArray[i][20]);
					$(".current").addClass(playerArray[i][22]);
					$(".current").addClass("new");

					if(counter < 3)
					{
						var nextlink  = $(".current").next();
						$(".current").removeClass("current");
						nextlink.addClass("current");
						counter = counter + 1;
					}
					else
					{
						var nextlink = firstone.nextAll().first().children().first();
						$(".current").removeClass("current");
						nextlink.addClass("current");
						firstone = firstone.nextAll().first();
						counter = 0;
					}

			}

			$("#playerGrid").css("display","block");
			for(var i = 0; i < 100; i = i + 1)
			{
				playerArray[i][17] = 0;
			}

			var helper = $("#player-0");
			$(".current").removeClass("current");
			helper.addClass("current");
	

		}); //submit button
	
	
	var mainbody = $(".holder");
	$("#playerGrid").hover(function(){


		//USE THIS
		//click on an A tag
		$(".LM").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("LM")){


				$(".Ppage.LM").css("display","block");
				$(".Ppage.LM").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");

				});
			}
					

			}
			return false;
		});


		$(".PM").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("PM")){
				$(".Ppage.PM").css("display","block");
				$(".Ppage.PM").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});


		$(".AP").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AP")){
				$(".Ppage.AP").css("display","block");
				$(".Ppage.AP").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
		$(".CJ").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("CJ")){
				$(".Ppage.CJ").css("display","block");
				$(".Ppage.CJ").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

		$(".JC").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JC")){
				$(".Ppage.JC").css("display","block");
				$(".Ppage.JC").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

			$(".MF").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MF")){
				$(".Ppage.MF").css("display","block");
				$(".Ppage.MF").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

				$(".ML").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("ML")){
				$(".Ppage.ML").css("display","block");
				$(".Ppage.ML").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
			$(".EL").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("EL")){
				$(".Ppage.EL").css("display","block");
				$(".Ppage.EL").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			$(".DM").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DM")){
				$(".Ppage.DM").css("display","block");
				$(".Ppage.DM").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			$(".JG").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JG")){
				$(".Ppage.JG").css("display","block");
				$(".Ppage.JG").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
			$(".AF").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AF")){
				$(".Ppage.AF").css("display","block");
				$(".Ppage.AF").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		

			$(".AR").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AR")){
				$(".Ppage.AR").css("display","block");
				$(".Ppage.AR").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

				$(".ZS").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("ZS")){
				$(".Ppage.ZS").css("display","block");
				$(".Ppage.ZS").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
			$(".DM1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DM1")){
				$(".Ppage.DM1").css("display","block");
				$(".Ppage.DM1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			$(".DT").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DT")){
				$(".Ppage.DT").css("display","block");
				$(".Ppage.DT").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			$(".AG").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AG")){
				$(".Ppage.AG").css("display","block");
				$(".Ppage.AG").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
			$(".DB").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DB")){
				$(".Ppage.DB").css("display","block");
				$(".Ppage.DB").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

				$(".DB1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DB1")){
				$(".Ppage.DB1").css("display","block");
				$(".Ppage.DB1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
		
			$(".LB").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("LB")){
				$(".Ppage.LB").css("display","block");
				$(".Ppage.LB").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
			$(".BM").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("BM")){
				$(".Ppage.BM").css("display","block");
				$(".Ppage.BM").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
				$(".JJ").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JJ")){
				$(".Ppage.JJ").css("display","block");
				$(".Ppage.JJ").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});


		$(".JN").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JN")){
				$(".Ppage.JN").css("display","block");
				$(".Ppage.JN").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
		
		
		$(".AM").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AM")){
				$(".Ppage.AM").css("display","block");
				$(".Ppage.AM").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".AJ").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AJ")){
				$(".Ppage.AJ").css("display","block");
				$(".Ppage.AJ").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
				
	$(".MB").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MB")){
				$(".Ppage.MB").css("display","block");
				$(".Ppage.MB").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
	$(".GB").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("GB")){
				$(".Ppage.GB").css("display","block");
				$(".Ppage.GB").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".JT").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JT")){
				$(".Ppage.JT").css("display","block");
				$(".Ppage.JT").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

		$(".AB").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AB")){
				$(".Ppage.AB").css("display","block");
				$(".Ppage.AB").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});


		$(".RB").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RB")){
				$(".Ppage.RB").css("display","block");
				$(".Ppage.RB").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		

		$(".RC").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RC")){
				$(".Ppage.RC").css("display","block");
				$(".Ppage.RC").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		

		$(".AJ1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AJ1")){
				$(".Ppage.AJ1").css("display","block");
				$(".Ppage.AJ1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			
		$(".BT").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("BT")){
				$(".Ppage.BT").css("display","block");
				$(".Ppage.BT").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".VJ").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("VJ")){
				$(".Ppage.VJ").css("display","block");
				$(".Ppage.VJ").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	

		$(".LF").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("LF")){
				$(".Ppage.LF").css("display","block");
				$(".Ppage.LF").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

		$(".RG").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RG")){
				$(".Ppage.RG").css("display","block");
				$(".Ppage.RG").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			
		$(".PG").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("PG")){
				$(".Ppage.PG").css("display","block");
				$(".Ppage.PG").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".RM").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RM")){
				$(".Ppage.RM").css("display","block");
				$(".Ppage.RM").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			
		$(".DS").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DS")){
				$(".Ppage.DS").css("display","block");
				$(".Ppage.DS").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".MS").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MS")){
				$(".Ppage.MS").css("display","block");
				$(".Ppage.MS").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

		$(".CS").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("CS")){
				$(".Ppage.CS").css("display","block");
				$(".Ppage.CS").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".FG").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("FG")){
				$(".Ppage.FG").css("display","block");
				$(".Ppage.FG").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			
		$(".KA").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("KA")){
				$(".Ppage.KA").css("display","block");
				$(".Ppage.KA").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

		$(".VC").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("VC")){
				$(".Ppage.VC").css("display","block");
				$(".Ppage.VC").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			
		$(".RW").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RW")){
				$(".Ppage.RW").css("display","block");
				$(".Ppage.RW").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		

			$(".CN").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("CN")){
				$(".Ppage.CN").css("display","block");
				$(".Ppage.CN").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

		$(".AE").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AE")){
				$(".Ppage.AE").css("display","block");
				$(".Ppage.AE").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".WW").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("WW")){
				$(".Ppage.WW").css("display","block");
				$(".Ppage.WW").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
					
		$(".AL").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AL")){
				$(".Ppage.AL").css("display","block");
				$(".Ppage.AL").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".PH").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("PH")){
				$(".Ppage.PH").css("display","block");
				$(".Ppage.PH").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".VD").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("VD")){
				$(".Ppage.VD").css("display","block");
				$(".Ppage.VD").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

		$(".TR").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("TR")){
				$(".Ppage.TR").css("display","block");
				$(".Ppage.TR").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
		$(".CJ1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("CJ1")){
				$(".Ppage.CJ1").css("display","block");
				$(".Ppage.CJ1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
		$(".MC").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MC")){
				$(".Ppage.MC").css("display","block");
				$(".Ppage.MC").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".RR").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RR")){
				$(".Ppage.RR").css("display","block");
				$(".Ppage.RR").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			$(".SJ").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("SJ")){
				$(".Ppage.SJ").css("display","block");
				$(".Ppage.SJ").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".TH").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("TH")){
				$(".Ppage.TH").css("display","block");
				$(".Ppage.TH").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".RJ").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RJ")){
				$(".Ppage.RJ").css("display","block");
				$(".Ppage.RJ").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".SV").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("SV")){
				$(".Ppage.SV").css("display","block");
				$(".Ppage.SV").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			$(".TS").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("TS")){
				$(".Ppage.TS").css("display","block");
				$(".Ppage.TS").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".JB").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JB")){
				$(".Ppage.JB").css("display","block");
				$(".Ppage.JB").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".JE").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JE")){
				$(".Ppage.JE").css("display","block");
				$(".Ppage.JE").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".RG1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RG1")){
				$(".Ppage.RG1").css("display","block");
				$(".Ppage.RG1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".NF").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("NF")){
				$(".Ppage.NF").css("display","block");
				$(".Ppage.NF").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".CP").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("CP")){
				$(".Ppage.CP").css("display","block");
				$(".Ppage.CP").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".MF1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MF1")){
				$(".Ppage.MF1").css("display","block");
				$(".Ppage.MF1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	
		$(".SR").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("SR")){
				$(".Ppage.SR").css("display","block");
				$(".Ppage.SR").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".JM").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JM")){
				$(".Ppage.JM").css("display","block");
				$(".Ppage.JM").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
			$(".BS").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("BS")){
				$(".Ppage.BS").css("display","block");
				$(".Ppage.BS").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".RW1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RW1")){
				$(".Ppage.RW1").css("display","block");
				$(".Ppage.RW1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".MC1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MC1")){
				$(".Ppage.MC1").css("display","block");
				$(".Ppage.MC1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
																																			
		$(".RW2").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RW2")){
				$(".Ppage.RW2").css("display","block");
				$(".Ppage.RW2").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".PT").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("PT")){
				$(".Ppage.PT").css("display","block");
				$(".Ppage.PT").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".SW").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("SW")){
				$(".Ppage.SW").css("display","block");
				$(".Ppage.SW").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
					
	$(".KW").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("KW")){
				$(".Ppage.KW").css("display","block");
				$(".Ppage.KW").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
	$(".JW").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JW")){
				$(".Ppage.JW").css("display","block");
				$(".Ppage.JW").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
	$(".ES").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("ES")){
				$(".Ppage.ES").css("display","block");
				$(".Ppage.ES").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".KM").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("KM")){
				$(".Ppage.KM").css("display","block");
				$(".Ppage.KM").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
					
		$(".MW").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MW")){
				$(".Ppage.MW").css("display","block");
				$(".Ppage.MW").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
				
	$(".GT").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("GT")){
				$(".Ppage.GT").css("display","block");
				$(".Ppage.GT").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
	$(".TG").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("TG")){
				$(".Ppage.TG").css("display","block");
				$(".Ppage.TG").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
	$(".ED").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("ED")){
				$(".Ppage.ED").css("display","block");
				$(".Ppage.ED").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});

	$(".CS1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("CS1")){
				$(".Ppage.CS1").css("display","block");
				$(".Ppage.CS1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		
		
		$(".TW").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("TW")){
				$(".Ppage.TW").css("display","block");
				$(".Ppage.TW").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
					

	$(".MJD").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MJD")){
				$(".Ppage.MJD").css("display","block");
				$(".Ppage.MJD").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".CI").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("CI")){
				$(".Ppage.CI").css("display","block");
				$(".Ppage.CI").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".FJ").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("FJ")){
				$(".Ppage.FJ").css("display","block");
				$(".Ppage.FJ").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".DW").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DW")){
				$(".Ppage.DW").css("display","block");
				$(".Ppage.DW").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".JG1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JG1")){
				$(".Ppage.JG1").css("display","block");
				$(".Ppage.JG1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".DS1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DS1")){
				$(".Ppage.DS1").css("display","block");
				$(".Ppage.DS1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".AB1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("AB1")){
				$(".Ppage.AB1").css("display","block");
				$(".Ppage.AB1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".DW1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DW1")){
				$(".Ppage.DW1").css("display","block");
				$(".Ppage.DW1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".DW2").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DW2")){
				$(".Ppage.DW2").css("display","block");
				$(".Ppage.DW2").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".BP").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("BP")){
				$(".Ppage.BP").css("display","block");
				$(".Ppage.BP").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".DH").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DH")){
				$(".Ppage.DH").css("display","block");
				$(".Ppage.DH").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".RC1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("RC1")){
				$(".Ppage.RC1").css("display","block");
				$(".Ppage.RC1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".JC1").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("JC1")){
				$(".Ppage.JC1").css("display","block");
				$(".Ppage.JC1").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".DA").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("DA")){
				$(".Ppage.DA").css("display","block");
				$(".Ppage.DA").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".SDST").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("SDST")){
				$(".Ppage.SDST").css("display","block");
				$(".Ppage.SDST").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".CK").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("CK")){
				$(".Ppage.CK").css("display","block");
				$(".Ppage.CK").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
		$(".MR").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("MR")){
				$(".Ppage.MR").css("display","block");
				$(".Ppage.MR").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300);
			}
					

			}
			return false;
		});
																	
		$(".buttonClose").click(function(){
			$("#playerGrid").css("display","block");
			$("#inputs").css("display","block");
			$(".containme").css("position","fixed");
			mainbody.slideDown(1000,function(){
			$(".containme").css("z-index","0");
			$(".Ppage.alive").css("display","none");
			$(".alive").removeClass("alive");
			});

			$(".holder").css("display","block");

			return false;

		});
			$("button").click(function(){
			$("#playerGrid").css("display","block");
			$("#inputs").css("display","block");
			$(".containme").css("position","fixed");
			mainbody.slideDown(1000,function(){
			$(".containme").css("z-index","0");
			$(".Ppage.alive").css("display","none");
			$(".alive").removeClass("alive");
			});

			$(".holder").css("display","block");

			return false;

		});//will eventually remove this


	});//hover

});//doc ready