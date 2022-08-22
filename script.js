// Create function that has 3 coices in it and it return one of them at random
// create function where player decide rock papper scissor and competes againt the computer.ALso return who won


function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let item = choice[Math.floor(Math.random()*choice.length)]
    return item
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLocaleLowerCase()
    if (computerSelection === "rock" && playerSelection === "rock") {
    return "You tie! Rock ties with Rock"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You Lose! Paper beats Rock"
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You Win! scissors loses to Rock"
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        return "You tie! Paper ties with Paper"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! scissors beats paper"
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! rock loses to paper"
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Paper loses to scissors"
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "You tie! scissors ties scissors"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! rock beats scissors"
    } else {
        return "Invalid Text"
    }
}

const playerSelection = "SciSsors"
const computerSelection = getComputerChoice()
console.log(playRound(computerSelection, playerSelection))