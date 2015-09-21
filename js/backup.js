
$("#2s-turn").toggleClass("visible invisible" );
$("#1s-turn").toggleClass("invisible visible" );
for(i=0; i<letterTiles.length; i++){
				if (letterTiles[i].textContent === $('.added-letter:last').text()){
					$(letterTiles[i]).toggleClass('letter-tile letter-tile-player-1' );
				}
			}
			
function checkStringList(x){
  
  regExWholeWordFind = new RegExp("\\b(" + x + ")\\b", "gi");			//check for a word match.
  regExPartialWordFind = new RegExp("\\b(" + x + ")\\B", "gi");			//check for a partial match at the beginning of any word
  
  if (turn === "player-1"){
	  if ( stringList.search( regExWholeWordFind ) === -1 ){				// if the current string doesn't match a whole word...
		
		if(stringList.search( regExPartialWordFind ) !== -1){			//...but it does match the beginning of a word.
			
			console.log(x + "...carry on");
			recordPlayer1Turn($addP1Turn);                             // then carry on.
          
		}else{															//...if it doesn't match the beginning of a word
			
			
			
			recordPlayer1Turn($addP1LoseError);
			recordPlayer2Turn($addP2WinError);
			endRound();
		}
		
	}else if(stringList.search( regExWholeWordFind ) !== -1){			//If the current string matches a whole word...

		recordPlayer1Turn($addP1LosePropper);
		recordPlayer2Turn($addP2WinPropper);
		endRound();                                                     //call endRound
			
  	}else{
		console.log("Hi Mom!");
	}
  }else if(turn === "player-2"){
	  if ( stringList.search( regExWholeWordFind ) === -1 ){				// if the current string doesn't match a whole word...
		
		if(stringList.search( regExPartialWordFind ) !== -1){			//...but it does match the beginning of a word.
			
			console.log(x + "...carry on");
			recordPlayer2Turn($addP2Turn);                             // then carry on.
          
		}else{															//...if it doesn't match the beginning of a word
			
			
			
			recordPlayer2Turn($addP2LoseError);
			recordPlayer1Turn($addP1WinError);
			endRound();
		}
		
	}else if(stringList.search( regExWholeWordFind ) !== -1){			//If the current string matches a whole word...

		recordPlayer2Turn($addP2LosePropper);
		recordPlayer1Turn($addP1WinPropper);
		endRound();                                                     //call endRound
			
  	}else{
		console.log("Hi Dad!");
	}
  }else{
	  console.log("Uh-Oh")
  }
	
}

function checkStringList2(x){
  
  regExWholeWordFind = new RegExp("\\b(" + x + ")\\b", "gi");			//check for a word match.
  regExPartialWordFind = new RegExp("\\b(" + x + ")\\B", "gi");			//check for a partial match at the beginning of any word
  
	if ( stringList.search( regExWholeWordFind ) === -1 ){				// if the current string doesn't match a whole word...
		
		if(stringList.search( regExPartialWordFind ) !== -1){			//...but it does match the beginning of a word.
			
			console.log(x + "...carry on");
			recordPlayer2Turn($addP2Turn);                             // then carry on.
          
		}else{															//...if it doesn't match the beginning of a word
			
			
			
			recordPlayer2Turn($addP2LoseError);
			recordPlayer1Turn($addP1WinError);
			endRound2();
		}
		
	}else if(stringList.search( regExWholeWordFind ) !== -1){			//If the current string matches a whole word...

		recordPlayer2Turn($addP2LosePropper);
		recordPlayer1Turn($addP1WinPropper);
		endRound2();                                                     //call endRound
			
  	}else{
		console.log("Hi Mom!");
	}
}

$addP1Turn = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-1 circular label">1</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>You</a> played' + character + '
			</div>
		</div>
	</div>');

$addP1WinProper = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-2 circular label">2</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>Player 2</a> spelled: ' + checkString + '
				<div class="extra text"><span class="success">You win the round!</span></div>
			</div>
		</div>
	</div>');

$addP1WinError = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-2 circular label">2</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>Player 2</a> spelled: ' + checkString + ' - pure jibberish!
				<div class="extra text"><span class="success">You win the round!</span></div>
			</div>
		</div>
	</div>');
	
$addP1LoseProper = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-1 circular label">1</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>You</a> spelled: ' + checkString + '
				<div class="extra text"><span class="danger">You lost this round!</span></div>
			</div>
		</div>
	</div>');

$addP1LoseError = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-1 circular label">1</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>You</a> spelled: ' + checkString + ' - pure jibberish!
				<div class="extra text"><span class="danger">You lost this round.</span></div>
			</div>
		</div>
	</div>');



$addP2Turn = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-2 circular label">2</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>You</a> played' + character + '
			</div>
		</div>
	</div>');

$addP2WinProper = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-1 circular label">1</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>Player 1</a> spelled' + checkString + '
				<div class="extra text"><span class="success">You win the round!</span></div>
			</div>
		</div>
	</div>');

$addP2WinError = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-1 circular label">1</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>Player 1</a> spelled' + checkString + ' - pure jibberish!
				<div class="extra text"><span class="success">You win the round!</span></div>
			</div>
		</div>
	</div>');

$addP2LoseProper = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-2 circular label">2</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>You</a> spelled: ' + checkString + '
				<div class="extra text"><span class="danger">You lost this round!</span></div>
			</div>
		</div>
	</div>');

$addP2LoseError = $(
	'<div class="event">
		<div class="label">
			<a class="ui player-2 circular label">2</a>
		</div>
		<div class="content">
			<div class="summary">
				<a>You</a> spelled: ' + checkString + ' - that is jibberish!
				<div class="extra text"><span class="danger">You lost this round.</span></div>
			</div>
		</div>
	</div>');


	
function recordPlayer1Turn(x){
    $('#player-1-turn-history').append(x);
}
function recordPlayer2Turn(x){
    $('#player-2-turn-history').append(x);
}
