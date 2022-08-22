// Create function that has 3 coices in it and it return one of them at random
// create function where player decide rock papper scissor and competes againt the computer.ALso return who won

let playerScore = 0
let computerScore = 0
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let item = choice[Math.floor(Math.random()*choice.length)]
    return item
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLocaleLowerCase()
    if (computerSelection === "rock" && playerSelection === "rock") {
        playerScore += 0
        computerScore += 0
        return "You tie! Rock ties with Rock"
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        playerScore += 0
        computerScore += 1
        return "You Lose! Paper beats Rock"
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore += 1
        computerScore += 0
        return "You Win! scissors loses to Rock"
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        playerScore += 0
        computerScore += 0
        return "You tie! Paper ties with Paper"
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        playerScore += 0
        computerScore += 1
        return "You Lose! scissors beats paper"
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore += 1
        computerScore += 0
        return "You Win! rock loses to paper"
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore += 1
        computerScore += 0
        return "You Win! Paper loses to scissors"
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        playerScore += 0
        computerScore += 0
        return "You tie! scissors ties scissors"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        playerScore += 0
        computerScore += 1
        return "You Lose! rock beats scissors"
    } else {
        return "Invalid Text"
    }
}

const playerSelection = "SciSsors"

function game() {
    for (let i = 0; i < 5 ; i++) {
        console.log(playRound(getComputerChoice(), prompt("Rock Paper Scissors")))
    }
    console.log("Player: " + playerScore)
    console.log("Computer: " + computerScore)
    if(playerScore > computerScore){
        console.log("You Win")
    } else if(playerScore < computerScore) {
        console.log("You lose")
    } else {
        console.log("You tied")
    }
}

game()