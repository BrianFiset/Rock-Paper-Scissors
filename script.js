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
const gameResult = document.querySelector('.game-result')
const playerScoreText = document.querySelector('.player-score')
const computerScoreText = document.querySelector('.computer-score')
const newGameBtn = document.querySelector('.new-game')

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

    if (playerScore >= 5 || computerScore >= 5){return}

    if (playerWin === true) {
        gameResult.textContent = "Result: You Win"
        playerScore += 1
    } else if (computerWin === true) {
        gameResult.textContent = "Result: You Lose"
        computerScore += 1
    } else  if(playerWin === false && computerWin === false) {
        gameResult.textContent = 'Result: Tied'
    }

    if(playerScore === 5){
        gameResult.textContent = "You Win The Game"
    } else if (computerScore === 5) {
        gameResult.textContent = "The Computer Won The game"
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

function newGame() {
    playerScore === 0
    computerScore === 0
    playerScoreText.textContent = 'Player: '
    computerScoreText.textContent = 'Computer: '
    gameResult.textContent = 'Status: '
}

newGameBtn.addEventListener('click', newGame)