document.getElementById("play").onclick = function() {
	const choices = ["rock", "paper", "scissors"];
  const userRound = document.getElementById("userRound").value;
  const compChoice = choices[Math.floor(Math.random() * 3)];
	
	//initialiser
  let result = "";
  let round = 0;
  let compScore = 0;

  while (result <=3){
  	//merged game-winning logic
      if (userRound === compChoice) {
          result = "Tie, refresh the page to play again";
      } else if (
          (userRound === "rock" && compChoice === "scissors") ||
          (userRound === "paper" && compChoice === "rock") ||
          (userRound === "scissors" && compChoice === "paper")
      ) {
          result = "You win";
          round += 1;
      } else {
          result =  "You lose sorry";    
          round += 1;
      }
  
  
      alert(result);
  }
  alert("3 rounds are inished");
};
