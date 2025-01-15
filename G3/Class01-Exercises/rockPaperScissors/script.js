// Array of choices
const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
  // Get a random choice for the computer
  let index = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[index];
  console.log(computerChoice);

  // Determine the result
  let result = "";
  if (playerChoice === computerChoice) {
    result = `It's a tie! You both chose ${playerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    result = `You lose! ${computerChoice} beats ${playerChoice}`;
  }

  // Display the result
  document.getElementById("result").textContent = result;
}

// Add event listeners to the buttons
document.getElementById("rock").addEventListener("click", function () {
  playGame("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  playGame("scissors");
});
