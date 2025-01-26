function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * options.length);

    return options[computerChoice];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt('Rock, paper or scissors?')
    return humanChoice
}

console.log(getHumanChoice())