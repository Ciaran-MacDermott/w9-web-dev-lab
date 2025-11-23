document.getElementById("play").onclick = function() {
  const choices = ["rock", "paper", "scissors"];
		//initialiser
  let result = "";
  let round = 0;
  let userScore = 0;
  while (round <=3 && userScore <1){
	  const userRound = document.getElementById("userRound").value;
	  const compChoice = choices[Math.floor(Math.random() * 3)];
		
  	//merged game-winning logic
	  if (userRound === compChoice) {
		  result = "Tie, refresh the page to play again";
	  } 
	  else if (
		  (userRound === "rock" && compChoice === "scissors") ||
		  (userRound === "paper" && compChoice === "rock") ||
		  (userRound === "scissors" && compChoice === "paper")
	  ) {
		  result = "You win";
		  round += 1;
		  userScore +=1;
	  } 
	  else {
		  result =  "You lose sorry, cick to play again";    
		  round += 1;
	  }
	  alert(result);
}
alert("Game is over either user won or 3 rounds are inished");
};
