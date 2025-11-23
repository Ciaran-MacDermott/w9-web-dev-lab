let round = 0;
let userScore = 0;

document.getElementById("play").onclick = function () {
  const choices = ["rock", "paper", "scissors"];

  // stop clicks after game is finished
  if (round >= 3 || userScore === 1) {
    alert("Game is over — refresh to play again.");
    return;
  }

  const userChoice = document.getElementById("userRound").value;
  const compChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === compChoice) {
    result = "It's a tie this round.";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    result = "You win this round!";
    userScore = 1;
  } else {
    result = "You lose this round.";
  }

  round++;

  // show result
  alert(
    `Round ${round}\nYou: ${userChoice}\nComputer: ${compChoice}\n\n${result}`
  );

  // ===========================
  // UPDATE THE SCREEN USING  FOR LOOP
  // ===========================

  let output = "";
  for (let i = 1; i <= round; i++) {
    output += `<p>Round ${i} complete</p>`;
  }

  document.getElementById("roundDisplay").innerHTML = output;

  // ===========================
  // END GAME CONDITIONS
  // ===========================

  if (userScore === 1) {
    alert("GAME OVER — you won the game!");
  } else if (round === 3) {
    alert("GAME OVER — 3 rounds used!");
  }
};

