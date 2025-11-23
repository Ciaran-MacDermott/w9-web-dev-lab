document.getElementById("play").onclick = function() {
	const choices = ["rock", "paper", "scissors"];
  const userRound = document.getElementById("userRound").value;
  const compChoice = choices[Math.floor(Math.random() * 3)];
	
	//initialiser
  let result = "";
  let round = 0;
  let userScore = 0;

  while (round <=3 && userScore <1){
  	//merged game-winning logic
	      if (userRound === compChoice) {
	          result = "Tie, refresh the page to play again";
	      } else if (
	          (userRound === "rock" && compChoice === "scissors") ||
	          (userRound === "paper" && compChoice === "rock") ||
	          (userRound === "scissors" && compChoice === "paper")
	      ) {
	          result = "You win click to play again";
	          round += 1;
	      } else {
	          result =  "You lose sorry" cick to play again;    
	          round += 1;
	      }
		  alert(result);
  }
  alert("3 rounds are inished");
};
