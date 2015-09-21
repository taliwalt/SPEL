var turnCounter = 0;
var roundNumber = 0;
var character;
var player1WinCount = 0;
var player2WinCount = 0;
var stringList;
var turn;
var roundNumber=0;
var currentWinner;

var $addedLetter;
var $player2AddLetter;
var $player1AddLetter;

//var $addLetterLose;
//var $addLetterWin;

var $addWordLose;
//var $addWordWin;
var checkString;


var letterTiles = $("ul.letter-tiles").children();
var currentString=document.getElementById("current-string");
var player1Wins = document.getElementById("player-1-win-count");
var player2Wins = document.getElementById("player-2-win-count");
var i;
var regExWholeWordFind;
var regExPartialWordFind;



function endRound(x){
    if (x ===  1){                                              //if endRound was called during player-1's turn
        player2WinCount += 1;                                   //player-2's win count goes up
        player2Wins.textContent=player2WinCount.toString();     //show player 2's win count went up on the board
        $('#player-2-win-count').closest("div").removeClass("invisible");          
    } else {                                                     //same as above only player-2 lost the round      
        player1WinCount +=1;
        player1Wins.textContent=player1WinCount.toString();
        $('#player-1-win-count').closest("div").removeClass("invisible");
        
    }
    currentString.innerHTML = "";                           //reset currentString to ""
    checkString = currentString.textContent;                //set checkString to the value of currentString
    $("#letters").empty();                                  //wipe the letters on the board
    roundNumber += 1;                                       //increment round numbers
    if (roundNumber === 3){                                 //if after incrementing roundNumber hits 3 then the game is over
        getCurrentWinner();                                 //so get the current winner
        isWinner();                                         //and declare him/her the winner
    }else{
			startRound();                                   //if we haven't had three rounds yet start another
		} 
}

function checkStringList(x){
  
    regExWholeWordFind = new RegExp("\\b(" + x + ")\\b", "gi");                                                                             // check for a word match.
    regExPartialWordFind = new RegExp("\\b(" + x + ")\\B", "gi");                                                                           // check for a partial match at the beginning of any word
                                                                                                                                            
    if (turn === "Player 1"){                                                                                                               
        if ( stringList.search( regExWholeWordFind ) === -1 ){                                                                              // if the current string doesn't match a whole word...
		                                                                                                                                    
            if(stringList.search( regExPartialWordFind ) !== -1){                                                                           // ...but it does match the beginning of a word.
			                                                                                                                                
                console.log(x + "...carry on");                                                                                             // then carry on.
                
                $player1AddLetter = $('<a class="ui player-1 circular label">' + character + '</a>');
                $("#player-1-turn-history").append($player1AddLetter);
                                                          
            }else{                                                                                                                          // ...if it doesn't match the beginning of a word
                
                $player1AddLetter = $('<a class="ui player-1 circular label">' + character + '</a>');
                $("#player-1-turn-history").append($player1AddLetter);
			    alertify.delay(2000).error("I'm sorry, I can't find a word that begins with "+ checkString);
			    setTimeout(function(){ alertify.delay(2000).success("Round goes to Player 2");}, 2200);
			    $addWordLose = $('<a class="ui danger label">' + checkString + '</a>');
                $("#player-1-word-history").append($addWordLose);	    
                
                setTimeout(function(){ endRound(1);}, 4500);	                                                                                                                // call endRound during player 1's turn
		}
		
        }else if(stringList.search( regExWholeWordFind ) !== -1){                                                                           // If the current string matches a whole word...
            
            $addWordLose = $('<a class="ui danger label">' + checkString + '</a>');
		    $("#player-1-word-history").append($addWordLose);
		    alertify.delay(2000).error("Player 1 spelled "+ checkString );
		    setTimeout(function(){ alertify.delay(2000).success("Round goes to Player 2");},2200);          
            setTimeout(function(){ endRound(1);}, 4500);
			
        }else{
		    //do nothing;
        }
        
    }else if(turn === "Player 2"){

        if ( stringList.search( regExWholeWordFind ) === -1 ){                                                                              // if the current string doesn't match a whole word...
		                                                                                                                                    
            if(stringList.search( regExPartialWordFind ) !== -1){                                                                           //...but it does match the beginning of a word.
			                                                                                                                                
                console.log(x + "...carry on");                                                                                             // then carry on.
                
                $player2AddLetter = $('<a class="ui player-2 circular label">' + character + '</a>');
                $("#player-2-turn-history").append($player2AddLetter);                           
          
            }else{                                                                                                                          //...if it doesn't match the beginning of a word			
			    
			    $player2AddLetter = $('<a class="ui player-2 circular label">' + character + '</a>');
			    $("#player-2-turn-history").append($player2AddLetter);                                                                      // add letter to player 2's turn history
			    
			    alertify.delay(2000).error("I'm sorry, I can't find a word that begins with "+ checkString);                               // notify players that player 2 lost
			    setTimeout(function() { alertify.delay(2000).log("Round goes to Player 1");}, 2200);
			    $addWordLose = $('<a class="ui danger label">' + checkString + '</a>');
                $("#player-2-word-history").append($addWordLose);
			    //alertify.delay(2000).success("Round goes to Player 1");                                                                     // and that player 1 won
                setTimeout(function() { endRound(2); }, 4500);
            }
		
        }else if(stringList.search( regExWholeWordFind ) !== -1){                                                                           //If the current string matches a whole word...

            $addWordLose = $('<a class="ui danger label">' + checkString + '</a>');
		    $("#player-2-word-history").append($addWordLose);
		                
            alertify.delay(2000).error("Player 2 spelled "+ checkString );
            setTimeout( function(){ alertify.delay(2000).log("Round goes to Player 1"); },2200);
		    //alertify.delay(2000).success("Round goes to Player 1"); 
            setTimeout(function() { endRound(2); }, 4500);                                                                                  //call endRound
			
        }else{
		    console.log("Hi Dad!");
        }
        
    }else{
      console.log("Uh-Oh");
    }
	
}	


function resetLetterTileClass(){
	$('.letter-tile-player-2').toggleClass('letter-tile-player-2 letter-tile');
	$('.letter-tile-player-1').toggleClass('letter-tile-player-1 letter-tile');
}

function processTurn(x){ 
	//player 1's turn
	
	if(x % 2 === 0){
        turn = "Player 1";
    	$("#player-2s-turn").toggleClass("visible invisible" );
        $("#player-1s-turn").toggleClass("invisible visible" );
    	
		for(i=0; i<letterTiles.length; i++){
				if (letterTiles[i].textContent === $('.added-letter:last').text()){
					$(letterTiles[i]).toggleClass('letter-tile letter-tile-player-1' );
				}
			}
        
        checkStringList(checkString);

    
		//player 2's turn
    }else{
        turn = "Player 2";
        $("#player-1s-turn").toggleClass("visible invisible" );
        $("#player-2s-turn").toggleClass("invisible visible" );

        for(i=0; i<letterTiles.length; i++){
            if (letterTiles[i].textContent === $('.added-letter:last').text()){
                $(letterTiles[i]).toggleClass('letter-tile letter-tile-player-2' );
            }
        }
        checkStringList(checkString);
    }
}

function incrementTurnCounter(){
	
	turnCounter += 1;
}

function startRound(){
  currentString.innerHTML = getRandomLetter();
  loadWordList();
  stringList = wordList.join(', '); //converts array to string
  checkString = currentString.textContent;
  $('#letters').append('<div class="item added-letter">' + checkString + '</div>');
  resetLetterTileClass();  
}



function getCurrentWinner(){
   if (player2WinCount > player1WinCount){
      currentWinner = "Player 2";
    }
  if (player1WinCount > player2WinCount){
      currentWinner = "Player 1";
  }

}
function isWinner(){
    alertify.cancelBtn("Maybe Later").okBtn("Sure!").confirm("Player 1 wins: " + player1WinCount + "<br />Player 2 wins: " + player2WinCount + "<br />" + currentWinner + " is declared SPEL champion! <br />Would you like to play again?", function (event) {

      // The click event is in the event variable, so you can use it here.
      event.preventDefault();
      resetGame();
      alertify.log("Board Reset!");

  }, function(event) {

      // The click event is in the event variable, so you can use it here.
      event.preventDefault();

      alertify.error("Ok, maybe later then");

  });		
}

function resetGame(){
  roundNumber = 0;
  turn = "player1";
  $("#player-1-turn-history").empty();
  $("#player-2-turn-history").empty();
  $("#player-1-word-history").empty();
  $("#player-2-word-history").empty();
  $("#letters").empty();
  currentString.innerHTML = "";
  checkString = currentString.textContent;
  player1WinCount = 0;
  player2WinCount = 0;
  player1Wins.textContent='';
  $('#player-1-win-count').closest("div").addClass("invisible");
  player2Wins.textContent='';
  $('#player-2-win-count').closest("div").addClass("invisible");
  
  startRound();
}



$( document ).ready(startRound());

window.onkeypress = function(e) {
	resetLetterTileClass();
	var code;   
    if (e.keyCode){                                                                 //keycode and which are almost the samething but different browsers do things differently so we are guaranteeing that code gets the right data
        code = e.keyCode;
    }else if (e.which){
        code = e.which;
    }

    character = String.fromCharCode(code);                                          //get the letter that was pressed from the keycode and save it to the variable character 
	$addedLetter = $('<div class="item added-letter">' + character + '</div>');     //create a jquery variable and set it to <div class="item added-letter">CHARACTER</div>
	$('#letters').append($addedLetter);                                             //add addedLetter to the word being built
	currentString.innerHTML += character;
	checkString = currentString.textContent;

	processTurn(turnCounter);
	incrementTurnCounter();
};



