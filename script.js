const choices = ["rock", "paper", "scissors"];
const emoji = { rock: "✊", paper: "✋", scissors: "✌️" };

let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultTitleEl = document.getElementById("result-title");
const resultMessageEl = document.getElementById("result-message");
const playerMoveEl = document.getElementById("player-move");
const computerMoveEl = document.getElementById("computer-move");

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let outcome;

  if (playerChoice === computerChoice) {
    outcome = "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    outcome = "win";
    playerScore++;
  } else {
    outcome = "lose";
    computerScore++;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  playerMoveEl.textContent = `You: ${emoji[playerChoice]} ${capitalize(playerChoice)}`;
  computerMoveEl.textContent = `Computer: ${emoji[computerChoice]} ${capitalize(computerChoice)}`;

  if (outcome === "win") {
    resultTitleEl.textContent = "🎉 You win!";
    resultMessageEl.textContent = `${capitalize(playerChoice)} beats ${computerChoice}. Great move!`;
  } else if (outcome === "lose") {
    resultTitleEl.textContent = "💻 Computer wins!";
    resultMessageEl.textContent = `${capitalize(computerChoice)} beats ${playerChoice}. Try again!`;
  } else {
    resultTitleEl.textContent = "🤝 It's a draw!";
    resultMessageEl.textContent = "You both chose the same move. Play another round!";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => playRound(button.dataset.choice));
});

document.getElementById("reset-button").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  resultTitleEl.textContent = "Make your move!";
  resultMessageEl.textContent = "First to make a move starts the game.";
  playerMoveEl.textContent = "You: —";
  computerMoveEl.textContent = "Computer: —";
});
