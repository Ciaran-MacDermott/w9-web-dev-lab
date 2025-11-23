document.getElementById("play").onclick = function () {
  const choices = ["rock", "paper", "scissors"];

  let result = "";
  let round = 0;
  let userScore = 0;

  while (round < 3 && userScore < 1) {

    // user chooses each loop
    const userRound = document.getElementById("userRound").value;

    const compChoice = choices[Math.floor(Math.random() * 3)];

    // game logic
    if (userRound === compChoice) {
      result = "It's a tie this round.";
    } 
    else if (
      (userRound === "rock" && compChoice === "scissors") ||
      (userRound === "paper" && compChoice === "rock") ||
      (userRound === "scissors" && compChoice === "paper")
    ) {
      result = "You win this round!";
      userScore += 1;
    } 
    else {
      result = "You lose this round, sorry.";
    }

    round += 1;

    alert(
      `Round ${round}\nYou: ${userRound}\nComputer: ${compChoice}\n\n${result}`
    );
  }

  // end message
  if (userScore >= 1) {
    alert("GAME OVER — You won!");
  } else {
    alert("GAME OVER — You used all 3 rounds without winning.");
  }
};

