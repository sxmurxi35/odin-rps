let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * options.length);

  return options[computerChoice];
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, paper or scissors?");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  const humanChoiceCase = humanChoice.toLowerCase();

  if (humanChoiceCase !== computerChoice) {
    if (
      (humanChoiceCase === "rock" && computerChoice === "scissors") ||
      (humanChoiceCase === "paper" && computerChoice === "rock") ||
      (humanChoiceCase === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoiceCase} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoiceCase}`);
      computerScore++;
    }
  } else {
    console.log("Tie!");
  }
}

playRound(getHumanChoice(), getComputerChoice());
