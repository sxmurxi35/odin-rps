const selectBtns = document.querySelectorAll(".selectBtns");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * options.length);

  return options[computerChoice];
}

selectBtns.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;

      case "paper":
        playRound("paper", getComputerChoice());
        break;

      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }
  });
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanScore == 5) {
    return (results.textContent = `You won! You scored 5 points first! \n\ 
      Refresh to play again!`);
  } else if (computerScore == 5) {
    return (results.textContent = `You lose! Computer outscored you!\n\ 
      Refresh to play again!`);
  } else {
    if (humanChoice !== computerChoice) {
      if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        ++humanScore;
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        score.textContent = `Your score ${humanScore} vs Computer score ${computerScore}`;
      } else {
        ++computerScore;
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        score.textContent = `Your score ${humanScore} vs Computer score ${computerScore}`;
      }
    } else {
      results.textContent = "Tie!";
    }
  }
}
