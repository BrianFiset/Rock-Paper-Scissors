// Create function that has 3 coices in it and it return one of them at random
// create function where player decide rock papper scissor and competes againt the computer.ALso return who won

let playerWin = false
let computerWin = false
let playerScore = 0
let computerScore = 0
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let item = choice[Math.floor(Math.random()*choice.length)]
    return item
}

const btn = document.querySelectorAll('button')
const scissor = document.querySelector('.scissors')
const paper = document.querySelector('.paper')
const rock = document.querySelector('.rock')
const gameResult = document.querySelector('.game_result')
const playerScoreText = document.querySelector('.player_score')
const computerScoreText = document.querySelector('.computer_score')

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLocaleLowerCase()
    playerWin = false
    computerWin = false
    if (computerSelection === "scissors" && playerSelection === "rock"||
        computerSelection === "rock" && playerSelection === "paper"||
        computerSelection === "paper" && playerSelection === "scissors"){
            playerWin = true
    } else if ( computerSelection === "paper" && playerSelection === "rock"||
                computerSelection === "scissors" && playerSelection === "paper"||
                computerSelection === "rock" && playerSelection === "scissors") {
                    computerWin = true
    } else if (computerSelection === "rock" && playerSelection === "rock" ||
               computerSelection === "paper" && playerSelection === "paper" ||
               computerSelection === "scissors" && playerSelection === "scissors") {
    }
    console.log(playerSelection,computerSelection)
}




function playButton(choice) {
    playRound(getComputerChoice(),choice)

    if (playerWin === true) {
        gameResult.textContent = "You Win"
        playerScore += 1
    } else if (computerWin === true) {
        gameResult.textContent = "You Lose"
        computerScore += 1
    } else {
        gameResult.textContent = 'Tied'
    }
    playerScoreText.textContent = 'Player: ' + playerScore
    computerScoreText.textContent = 'Computer: ' + computerScore
}

scissor.addEventListener('click', function(e){
 playButton('scissors')
})
paper.addEventListener('click', function(e){
    playButton('paper')
})
rock.addEventListener('click', function(e){
    playButton('rock')
})