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
    	if($(".sec").is(":animated")){
					return false;
		}
    	else if($(this).parent().parent().hasClass("leaguesection"))
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
    	 if($(".sec").is(":animated")){
					return false;
		}
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
	playerArray[1][6] = 32.5;//RECEPTIONS
	playerArray[1][7] = 255;//RECEIVING YARDS
	playerArray[1][8] = 1.3;//RECEIVING TOUCHDOWNS
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
	playerArray[27][15] = "Images/Cj-Spiller.png";//PIC
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
	playerArray[56][15] = "Images/Ty-Hilton.png";//PIC
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
	playerArray[76][16] = "jay cutler";



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
	playerArray[83][1] = 3020;//PASSING YARDS
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




	var helpme = $("#player-0");
	$(".current").removeClass("current");
	helpme.addClass("current");


		$("#submit").click(function(){
			var x = $('selector').val();


			var numteams = parseFloat($(".numTeams").val());
			console.log($(".numTeams").val());
			console.log(numteams)
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
			console.log($("completions").val());
			console.log(Completions);
			var RushYards = parseFloat($(".Rushyds").val());
			var PassYards = parseFloat($(".Passyds").val());
			var RushingTD = parseFloat($(".RushTD").val());
			var PassingTD = parseFloat($(".PassTD").val());
			var PointsPerR = parseFloat($(".PPR").val());
			var INT = parseFloat($(".Int").val());
			var ReceivingYards = parseFloat($(".Receiveyds").val());
			var Fumbles = parseFloat($(".fumble").val());
			var ReceivingTD = parseFloat($(".ReceiveTD").val());


			var FG0 = parseFloat($(".FG019").val());
			var Sack = parseFloat($(".sack").val());
			var ptsallowed0 = parseFloat($(".pts0").val());
			var FG20 = parseFloat($(".FG2029").val());
			var Pick = parseFloat($(".pick").val());
			var ptsallowed1 = parseFloat($(".pts16").val());
			var FG30 = parseFloat($(".FG3039").val());
			var FumbleRecovery = parseFloat($(".fumbrecovery").val());
			var ptsallowed7 = parseFloat($(".pts713").val());
			var FG40 = parseFloat($(".FG4049").val());	
			var DefenseTD = parseFloat($(".DefTD").val());
			var ptsallowed14 = parseFloat($(".pts1420").val());
			var FG50plus = parseFloat($(".FG50").val());
			var safety = parseFloat($(".safety").val());
			var ptsallowed21 = parseFloat($(".pts2127").val());
			var PointAT = parseFloat($(".PAT").val());
			var BlockedKick = parseFloat($(".BlockKick").val());
			var ptsallowed28 = parseFloat($(".pts28").val());


			for(var i = 0; i < 100; i = i + 1){
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
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][1] / PassYards);//PASSING YARDS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][2] * PassingTD);//PASSING TOUCHDOWNS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][3] * INT);//INTERCEPTIONS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][4] / RushYards);//RUSH YARDS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][5] * RushingTD);//RUSHING TOUCHDOWNS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][6] * PointsPerR);//RECEPTIONS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][7] / ReceivingYards);//RECEIVING YARDS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][8] * ReceivingTD);//RECEIVING TOUCHDOWNS
					playerArray[i][10] = playerArray[i][10] + (playerArray[i][9] * Fumbles);//FUMBLES
				}
					
			}
			//STILL HAVE TO ERROR CHECK IT ALL

			playerArray.sort(function(a,b){return b[10] - a[10]}); //sort

			var qbBase = Math.ceil(1.19625 * QBStarter * numteams);
			var rbBase = Math.ceil(1.92625 * (RBStarter + (RBWRFlex / 2.0) + (RBWRTEFlex / 3.0)) * numteams);
			var wrBase = Math.ceil(1.1975 * (WRStarter + (RBWRFlex / 2.0) + (RBWRTEFlex / 3.0)) * numteams);
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




			for(var i = 0; i < 100; i = i + 1){

				if(playerArray[i][13] == "QB" && (qbnum <= qbBase))
				{
					qbcount = i;

					qbnum = qbnum + 1;
				}
				if(playerArray[i][13] == "RB" && (rbnum <= rbBase))
				{
					rbcount = i;
					rbnum = rbnum + 1;
				}
				if(playerArray[i][13] == "TE" && (tenum <= teBase))
				{
					tecount = i;
					tenum = tenum + 1;
				}
				if(playerArray[i][13] == "WR" && (wrnum <= wrBase))
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

			for(var i = 0; i < 100; i = i + 1)
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



			$("#playerGrid").css("display","none");
			var counter = 0;
			var firstone = $(".firstsec");

			for(var i = 0; i < 100; i = i + 1){

				
					
					$(".current h2").replaceWith('<h2>' + playerArray[i][12] +'</h2>');
					console.log(playerArray[i][16]);
					$(".current img").remove();
					$('.current').append("<img src='" + playerArray[i][15] + "'/>")
					var currentLink = $(".current");
					$(".current").removeClass();


					currentLink.addClass("current");
					$(".current").addClass("span_3_of_12");
					$(".current").addClass(playerArray[i][14]);
					$(".current").addClass(playerArray[i][16]);
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
				playerArray[i][10] = 0;
				playerArray[i][11] = 0;
			}

			var helper = $("#player-0");
			$(".current").removeClass("current");
			helper.addClass("current");
	

		}); //submit button
	
	
	var mainbody = $(".holder");
	var ycoord = 0;
	$("#playerGrid").hover(function(){


		//USE THIS
		//click on an A tag


		$(".leseanmccoy").click(function(){
		
			if(mainbody.is(":visible")){
				if($(this).hasClass("leseanmccoy")){
						ycoord = $(this).offset().top;

				$(".Ppage.leseanmccoy").css("display","block");
				$(".Ppage.leseanmccoy").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});

	$(".peytonmanning").click(function(){
	
			if(mainbody.is(":visible")){
				if($(this).hasClass("peytonmanning")){
						ycoord = $(this).offset().top;

				$(".Ppage.peytonmanning").css("display","block");
				$(".Ppage.peytonmanning").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});	
			}
					

			}
			return false;
		});

	$(".adrianpeterson").click(function(){
			
			if(mainbody.is(":visible")){
				if($(this).hasClass("adrianpeterson")){
						ycoord = $(this).offset().top;

				$(".Ppage.adrianpeterson").css("display","block");
				$(".Ppage.adrianpeterson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		
	$(".calvinjohnson").click(function(){
		
			if(mainbody.is(":visible")){
				if($(this).hasClass("calvinjohnson")){
						ycoord = $(this).offset().top;

				$(".Ppage.calvinjohnson").css("display","block");
				$(".Ppage.calvinjohnson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});

		$(".jamaalcharles").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("jamaalcharles")){
					ycoord = $(this).offset().top;

				$(".Ppage.jamaalcharles").css("display","block");
				$(".Ppage.jamaalcharles").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		

			$(".mattforte").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("mattforte")){

			ycoord = $(this).offset().top;
				$(".Ppage.mattforte").css("display","block");
				$(".Ppage.mattforte").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		$(".marshawnlynch").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("marshawnlynch")){
						ycoord = $(this).offset().top;

				$(".Ppage.marshawnlynch").css("display","block");
				$(".Ppage.marshawnlynch").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		
			$(".eddielacy").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("eddielacy")){
						ycoord = $(this).offset().top;

				$(".Ppage.eddielacy").css("display","block");
				$(".Ppage.eddielacy").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
			
	$(".dougmartin").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("dougmartin")){

						ycoord = $(this).offset().top;
				$(".Ppage.dougmartin").css("display","block");
				$(".Ppage.dougmartin").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		$(".jimmygraham").click(function(){
			ycoord = $(this).offset().top;
			if(mainbody.is(":visible")){
				if($(this).hasClass("jimmygraham")){

				ycoord = $(this).offset().top;		
				$(".Ppage.jimmygraham").css("display","block");
				$(".Ppage.jimmygraham").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		
		$(".arianfoster").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("arianfoster")){

						ycoord = $(this).offset().top;
				$(".Ppage.arianfoster").css("display","block");
				$(".Ppage.arianfoster").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		

			$(".aaronrodgers").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("aaronrodgers")){

						ycoord = $(this).offset().top;
				$(".Ppage.aaronrodgers").css("display","block");
				$(".Ppage.aaronrodgers").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		$(".zacstacy").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("zacstacy")){

						ycoord = $(this).offset().top;
				$(".Ppage.zacstacy").css("display","block");
				$(".Ppage.zacstacy").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		
			$(".demarcomurray").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("demarcomurray")){

						ycoord = $(this).offset().top;
				$(".Ppage.demarcomurray").css("display","block");
				$(".Ppage.demarcomurray").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
			$(".demaryiusthomas").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("demaryiusthomas")){

						ycoord = $(this).offset().top;
				$(".Ppage.demaryiusthomas").css("display","block");
				$(".Ppage.demaryiusthomas").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
				window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		$(".ajgreen").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("ajgreen")){

						ycoord = $(this).offset().top;
				$(".Ppage.ajgreen").css("display","block");
				$(".Ppage.ajgreen").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		
			$(".drewbrees").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("drewbrees")){

						ycoord = $(this).offset().top;
				$(".Ppage.drewbrees").css("display","block");
				$(".Ppage.drewbrees").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});

			$(".dezbryant").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("dezbryant")){


				$(".Ppage.dezbryant").css("display","block");
				$(".Ppage.dezbryant").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		
			$(".leveonbell").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("leveonbell")){

						ycoord = $(this).offset().top;
				$(".Ppage.leveonbell").css("display","block");
				$(".Ppage.leveonbell").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
							window.scrollTo(0, 0);
				});
			}
					

			}
			return false;
		});
		
				$(".brandonmarshall").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("brandonmarshall")){
						ycoord = $(this).offset().top;

				$(".Ppage.brandonmarshall").css("display","block");
				$(".Ppage.brandonmarshall").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").css("display","none");
					$("#inputs").css("display","none");
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);

				});
			}
					

			}
			return false;
		});
				$(".juliojones").click(function(){
					

				if(mainbody.is(":visible")){
				if($(this).hasClass("juliojones")){

						ycoord = $(this).offset().top;
				$(".Ppage.juliojones").css("display","block");
				$(".Ppage.juliojones").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});


		$(".jordynelson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("jordynelson")){

						ycoord = $(this).offset().top;
				$(".Ppage.jordynelson").css("display","block");
				$(".Ppage.jordynelson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		
		$(".alfredmorris").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("alfredmorris")){

						ycoord = $(this).offset().top;
				$(".Ppage.alfredmorris").css("display","block");
				$(".Ppage.alfredmorris").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	
		$(".alshonjeffery").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("alshonjeffery")){

						ycoord = $(this).offset().top;
				$(".Ppage.alshonjeffery").css("display","block");
				$(".Ppage.alshonjeffery").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
				
		$(".monteeball").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("monteeball")){
						ycoord = $(this).offset().top;

				$(".Ppage.monteeball").css("display","block");
				$(".Ppage.monteeball").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".giovanibernard").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("giovanibernard")){

						ycoord = $(this).offset().top;
				$(".Ppage.giovanibernard").css("display","block");
				$(".Ppage.giovanibernard").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".juliusthomas").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("juliusthomas")){

						ycoord = $(this).offset().top;
				$(".Ppage.juliusthomas").css("display","block");
				$(".Ppage.juliusthomas").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".antoniobrown").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("antoniobrown")){

						ycoord = $(this).offset().top;
				$(".Ppage.antoniobrown").css("display","block");
				$(".Ppage.antoniobrown").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});

	$(".reggiebush").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("reggiebush")){

						ycoord = $(this).offset().top;
				$(".Ppage.reggiebush").css("display","block");
				$(".Ppage.reggiebush").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});

		$(".randallcobb").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("randallcobb")){

						ycoord = $(this).offset().top;
				$(".Ppage.randallcobb").css("display","block");
				$(".Ppage.randallcobb").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		

		$(".andrejohnson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("andrejohnson")){

						ycoord = $(this).offset().top;
				$(".Ppage.andrejohnson").css("display","block");
				$(".Ppage.andrejohnson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			
			$(".bentate").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("bentate")){

						ycoord = $(this).offset().top;
				$(".Ppage.bentate").css("display","block");
				$(".Ppage.bentate").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".vincentjackson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("vincentjackson")){

						ycoord = $(this).offset().top;
				$(".Ppage.vincentjackson").css("display","block");
				$(".Ppage.vincentjackson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	

			$(".larryfitzgerald").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("larryfitzgerald")){
						ycoord = $(this).offset().top;

				$(".Ppage.larryfitzgerald").css("display","block");
				$(".Ppage.larryfitzgerald").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});

		$(".robertgriffin").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("robertgriffin")){

						ycoord = $(this).offset().top;
				$(".Ppage.robertgriffin").css("display","block");
				$(".Ppage.robertgriffin").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			
			$(".pierregarcon").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("pierregarcon")){

						ycoord = $(this).offset().top;
				$(".Ppage.pierregarcon").css("display","block");
				$(".Ppage.pierregarcon").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".ryanmathews").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("ryanmathews")){

						ycoord = $(this).offset().top;
				$(".Ppage.ryanmathews").css("display","block");
				$(".Ppage.ryanmathews").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			
		$(".deseanjackson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("deseanjackson")){

						ycoord = $(this).offset().top;
				$(".Ppage.deseanjackson").css("display","block");
				$(".Ppage.deseanjackson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	
			$(".matthewstafford").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("matthewstafford")){

						ycoord = $(this).offset().top;
				$(".Ppage.matthewstafford").css("display","block");
				$(".Ppage.matthewstafford").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	$(".cjspiller").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("cjspiller")){

						ycoord = $(this).offset().top;
				$(".Ppage.cjspiller").css("display","block");
				$(".Ppage.cjspiller").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	
		$(".frankgore").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("frankgore")){

						ycoord = $(this).offset().top;
				$(".Ppage.frankgore").css("display","block");
				$(".Ppage.frankgore").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".keenanallen").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("keenanallen")){

						ycoord = $(this).offset().top;
				$(".Ppage.keenanallen").css("display","block");
				$(".Ppage.keenanallen").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".victorcruz").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("victorcruz")){

						ycoord = $(this).offset().top;
				$(".Ppage.victorcruz").css("display","block");
				$(".Ppage.victorcruz").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});	
		$(".roddywhite").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("roddywhite")){

						ycoord = $(this).offset().top;
				$(".Ppage.roddywhite").css("display","block");
				$(".Ppage.roddywhite").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});

			$(".camnewton").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("camnewton")){
						ycoord = $(this).offset().top;

				$(".Ppage.camnewton").css("display","block");
				$(".Ppage.camnewton").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});

			$(".andreellington").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("andreellington")){
						ycoord = $(this).offset().top;

				$(".Ppage.andreellington").css("display","block");
				$(".Ppage.andreellington").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".weswelker").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("weswelker")){

						ycoord = $(this).offset().top;
				$(".Ppage.weswelker").css("display","block");
				$(".Ppage.weswelker").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
					
		$(".andrewluck").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("andrewluck")){

						ycoord = $(this).offset().top;
				$(".Ppage.andrewluck").css("display","block");
				$(".Ppage.andrewluck").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".percyharvin").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("percyharvin")){

						ycoord = $(this).offset().top;
				$(".Ppage.percyharvin").css("display","block");
				$(".Ppage.percyharvin").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	
			$(".vernondavis").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("vernondavis")){
						ycoord = $(this).offset().top;

				$(".Ppage.vernondavis").css("display","block");
				$(".Ppage.vernondavis").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});

			$(".trentrichardson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("trentrichardson")){

						ycoord = $(this).offset().top;
				$(".Ppage.trentrichardson").css("display","block");
				$(".Ppage.trentrichardson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		
			$(".chrisjohnson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("chrisjohnson")){
						ycoord = $(this).offset().top;

				$(".Ppage.chrisjohnson").css("display","block");
				$(".Ppage.chrisjohnson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".michaelcrabtree").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("michaelcrabtree")){

						ycoord = $(this).offset().top;
				$(".Ppage.michaelcrabtree").css("display","block");
				$(".Ppage.michaelcrabtree").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	
			$(".rayrice").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("rayrice")){

						ycoord = $(this).offset().top;
				$(".Ppage.rayrice").css("display","block");
				$(".Ppage.rayrice").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".stevenjackson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("stevenjackson")){

						ycoord = $(this).offset().top;
				$(".Ppage.stevenjackson").css("display","block");
				$(".Ppage.stevenjackson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".tyhilton").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("tyhilton")){
						ycoord = $(this).offset().top;

				$(".Ppage.tyhilton").css("display","block");
				$(".Ppage.tyhilton").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".rashadjennings").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("rashadjennings")){
						ycoord = $(this).offset().top;

				$(".Ppage.rashadjennings").css("display","block");
				$(".Ppage.rashadjennings").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".shanevereen").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("shanevereen")){

						ycoord = $(this).offset().top;
				$(".Ppage.shanevereen").css("display","block");
				$(".Ppage.shanevereen").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".torreysmith").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("torreysmith")){

						ycoord = $(this).offset().top;	
				$(".Ppage.torreysmith").css("display","block");
				$(".Ppage.torreysmith").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".joiquebell").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("joiquebell")){

						ycoord = $(this).offset().top;
				$(".Ppage.joiquebell").css("display","block");
				$(".Ppage.joiquebell").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".julianedelman").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("julianedelman")){
						ycoord = $(this).offset().top;

				$(".Ppage.julianedelman").css("display","block");
				$(".Ppage.julianedelman").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".robgronkowski").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("robgronkowski")){
						ycoord = $(this).offset().top;

				$(".Ppage.robgronkowski").css("display","block");
				$(".Ppage.robgronkowski").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".nickfoles").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("nickfoles")){
						ycoord = $(this).offset().top;

				$(".Ppage.nickfoles").css("display","block");
				$(".Ppage.nickfoles").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".cordarrellepatterson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("cordarrellepatterson")){

						ycoord = $(this).offset().top;
				$(".Ppage.cordarrellepatterson").css("display","block");
				$(".Ppage.cordarrellepatterson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".michaelfloyd").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("michaelfloyd")){

						ycoord = $(this).offset().top;
				$(".Ppage.michaelfloyd").css("display","block");
				$(".Ppage.michaelfloyd").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	
			$(".stevanridley").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("stevanridley")){

						ycoord = $(this).offset().top;
				$(".Ppage.stevanridley").css("display","block");
				$(".Ppage.stevanridley").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".jeremymaclin").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("jeremymaclin")){

						ycoord = $(this).offset().top;
				$(".Ppage.jeremymaclin").css("display","block");
				$(".Ppage.jeremymaclin").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".bishopsankey").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("bishopsankey")){

						ycoord = $(this).offset().top;
				$(".Ppage.bishopsankey").css("display","block");
				$(".Ppage.bishopsankey").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".reggiewayne").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("reggiewayne")){
						ycoord = $(this).offset().top;

				$(".Ppage.reggiewayne").css("display","block");
				$(".Ppage.reggiewayne").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".marquescolston").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("marquescolston")){

						ycoord = $(this).offset().top;
				$(".Ppage.marquescolston").css("display","block");
				$(".Ppage.marquescolston").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
																																			
			$(".russellwilson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("russellwilson")){

						ycoord = $(this).offset().top;
				$(".Ppage.russellwilson").css("display","block");
				$(".Ppage.russellwilson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".pierrethomas").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("pierrethomas")){

						ycoord = $(this).offset().top;
				$(".Ppage.pierrethomas").css("display","block");
				$(".Ppage.pierrethomas").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".sammywatkins").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("sammywatkins")){

						ycoord = $(this).offset().top;
				$(".Ppage.sammywatkins").css("display","block");
				$(".Ppage.sammywatkins").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
					
		$(".kendallwright").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("kendallwright")){
						ycoord = $(this).offset().top;

				$(".Ppage.kendallwright").css("display","block");
				$(".Ppage.kendallwright").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		
		$(".jasonwitten").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("jasonwitten")){
						ycoord = $(this).offset().top;

				$(".Ppage.jasonwitten").css("display","block");
				$(".Ppage.jasonwitten").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".emmanuelsanders").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("emmanuelsanders")){

						ycoord = $(this).offset().top;
				$(".Ppage.emmanuelsanders").css("display","block");
				$(".Ppage.emmanuelsanders").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".knowshonmoreno").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("knowshonmoreno")){

						ycoord = $(this).offset().top;
				$(".Ppage.knowshonmoreno").css("display","block");
				$(".Ppage.knowshonmoreno").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
					
		$(".mikewallace").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("mikewallace")){

						ycoord = $(this).offset().top;
				$(".Ppage.mikewallace").css("display","block");
				$(".Ppage.mikewallace").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
				
		$(".goldentate").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("goldentate")){

						ycoord = $(this).offset().top;
				$(".Ppage.goldentate").css("display","block");
				$(".Ppage.goldentate").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		
		$(".tobygerhart").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("tobygerhart")){
						ycoord = $(this).offset().top;

				$(".Ppage.tobygerhart").css("display","block");
				$(".Ppage.tobygerhart").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
	$(".ericdecker").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("ericdecker")){

						ycoord = $(this).offset().top;
				$(".Ppage.ericdecker").css("display","block");
				$(".Ppage.ericdecker").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".cecilshorts").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("cecilshorts")){
						ycoord = $(this).offset().top;

				$(".Ppage.cecilshorts").css("display","block");
				$(".Ppage.cecilshorts").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		
		$(".terrancewilliams").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("terrancewilliams")){

						ycoord = $(this).offset().top;
				$(".Ppage.terrancewilliams").css("display","block");
				$(".Ppage.terrancewilliams").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
					

	$(".mauricejonesdrew").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("mauricejonesdrew")){

						ycoord = $(this).offset().top;
				$(".Ppage.mauricejonesdrew").css("display","block");
				$(".Ppage.mauricejonesdrew").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".chrisivory").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("chrisivory")){

						ycoord = $(this).offset().top;
				$(".Ppage.chrisivory").css("display","block");
				$(".Ppage.chrisivory").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".fredjackson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("fredjackson")){
						ycoord = $(this).offset().top;

				$(".Ppage.fredjackson").css("display","block");
				$(".Ppage.fredjackson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".dannywoodhead").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("dannywoodhead")){
						ycoord = $(this).offset().top;

				$(".Ppage.dannywoodhead").css("display","block");
				$(".Ppage.dannywoodhead").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".joshgordon").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("joshgordon")){

						ycoord = $(this).offset().top;
				$(".Ppage.joshgordon").css("display","block");
				$(".Ppage.joshgordon").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".darrensproles").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("darrensproles")){

						ycoord = $(this).offset().top;
				$(".Ppage.darrensproles").css("display","block");
				$(".Ppage.darrensproles").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".anquanboldin").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("anquanboldin")){

						ycoord = $(this).offset().top;
				$(".Ppage.anquanboldin").css("display","block");
				$(".Ppage.anquanboldin").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".deangelowilliams").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("deangelowilliams")){

						ycoord = $(this).offset().top;
				$(".Ppage.deangelowilliams").css("display","block");
				$(".Ppage.deangelowilliams").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".davidwilson").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("davidwilson")){

						ycoord = $(this).offset().top;
				$(".Ppage.davidwilson").css("display","block");
				$(".Ppage.davidwilson").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".bernardpierce").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("bernardpierce")){

						ycoord = $(this).offset().top;
				$(".Ppage.bernardpierce").css("display","block");
				$(".Ppage.bernardpierce").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".deandrehopkins").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("deandrehopkins")){
						ycoord = $(this).offset().top;

				$(".Ppage.deandrehopkins").css("display","block");
				$(".Ppage.deandrehopkins").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".rileycooper").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("rileycooper")){

						ycoord = $(this).offset().top;
				$(".Ppage.rileycooper").css("display","block");
				$(".Ppage.rileycooper").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".jordancameron").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("jordancameron")){

						ycoord = $(this).offset().top;
				$(".Ppage.jordancameron").css("display","block");
				$(".Ppage.jordancameron").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".dannyamendola").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("dannyamendola")){

						ycoord = $(this).offset().top;
				$(".Ppage.dannyamendola").css("display","block");
				$(".Ppage.dannyamendola").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".seahawksd").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("seahawksd")){

						ycoord = $(this).offset().top;
				$(".Ppage.seahawksd").css("display","block");
				$(".Ppage.seahawksd").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
			$(".colinkaepernick").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("colinkaepernick")){
						ycoord = $(this).offset().top;

				$(".Ppage.colinkaepernick").css("display","block");
				$(".Ppage.colinkaepernick").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
			}
					

			}
			return false;
		});
		$(".mattryan").click(function(){
			if(mainbody.is(":visible")){
				if($(this).hasClass("mattryan")){

						ycoord = $(this).offset().top;
				$(".Ppage.mattryan").css("display","block");
				$(".Ppage.mattryan").addClass("alive");
				$(".containme").css("z-index", "1000");
				mainbody.slideUp(1300, function(){
					$("#playerGrid").hide();
					$("#inputs").hide();
					$(".containme").css("position","relative");
					window.scrollTo(0, 0);


				});
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
			window.scrollTo(50, ycoord);

			return false;

		});


	});//hover

});//doc ready