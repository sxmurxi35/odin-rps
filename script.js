const gamesNumber = Number(prompt("How many times do you want to play?"));
const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * options.length);

  return options[computerChoice];
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, paper or scissors?");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanChoiceCase = humanChoice.toLowerCase();
    if (
      humanChoiceCase === options[0] ||
      humanChoiceCase === options[1] ||
      humanChoiceCase === options[2]
    ) {
      if (humanChoiceCase !== computerChoice) {
        if (
          (humanChoiceCase === "rock" && computerChoice === "scissors") ||
          (humanChoiceCase === "paper" && computerChoice === "rock") ||
          (humanChoiceCase === "scissors" && computerChoice === "paper")
        ) {
          console.log(`You win! ${humanChoiceCase} beats ${computerChoice}`);
          ++humanScore;
        } else {
          console.log(`You lose! ${computerChoice} beats ${humanChoiceCase}`);
          ++computerScore;
        }
      } else {
        console.log("Tie!");
      }
    } else {
      console.log("you should pick rock, paper or scissors!");
    }
  }

  for (let i = 0; i < gamesNumber; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Current score
      Player: ${humanScore}
      Computer: ${computerScore}
      `);
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a draw!");
  }
}

playGame();
