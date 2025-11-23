document.getElementById("play").onclick = function () {
  const choices = ["rock", "paper", "scissors"];

  // initialiser
  let result = "";
  let round = 0;
  let userScore = 0;

  // user chooses once before the loop
  const userRound = document.getElementById("userRound").value;

  // play until user wins once OR 3 rounds are finished
  while (round < 3 && userScore < 1) {
    const compChoice = choices[Math.floor(Math.random() * 3)];

    // merged game-winning logic
    if (userRound === compChoice) {
      result = "It's a tie this round.";
    } else if (
      (userRound === "rock" && compChoice === "scissors") ||
      (userRound === "paper" && compChoice === "rock") ||
      (userRound === "scissors" && compChoice === "paper")
    ) {
      result = "You win this round!";
      userScore += 1; // user has now won at least once
    } else {
      result = "You lose this round, sorry.";
    }

    round += 1; // round over
    alert(
      `Round ${round}\nYou chose: ${userRound}\nComputer chose: ${compChoice}\n\n${result}`
    );
  }

  // final message
  if (userScore >= 1) {
    alert("Game is over: you won at least one round!");
  } else {
    alert("Game is over: you played 3 rounds without a win.");
  }
};
