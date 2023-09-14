let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

// chouse random rock papaer scissors

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// turn off bottoms after someone wins 5 times

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        // all player wins 
        playerScore += 1
        // score change
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        // all the text that shows
        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        // if player wins 5 times stop
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    // if tie nothing changes, show old score with tie text
    else {
        computerScore += 1
    // when computer wins his score add 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    // what text to show 
        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            // what text show if comp wins
            disableButtons()
            // stop when computer score is 5
        }
    }

    document.getElementById('result').innerHTML = result
    return
    // shoves final result
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

// selects player choice and moves in function


// console.log('hello world');

// const options = ["rock", "paper","scissors"];

// function getComputerChoice(){
//     const choice = options [Math.floor(Math.random()* options.length)];
//     return choice;
// }

// // returns random (rock paper scissors)

// function checkWinner(playerSelection, computerSelection){
//     if(playerSelection == computerSelection){
//         return "Tie";
//     } else if (
//         (playerSelection == "rock" && computerSelection == "scissors") ||
//         (playerSelection == "paper" && computerSelection == "rock") ||
//         (playerSelection == "scissors" && computerSelection == "paper")
//     ){
//         return "player";
//     } 
//     else {
//         return "computer";
//     }
//     }

// // returns who win tie player computer


// function playerRound(playerSelection, computerSelection){
//     const result = checkWinner(playerSelection, computerSelection);
//     if(result == "Tie"){
//         return "It's a Tie!";
//     }
//     else if(result == "player"){
//         return `You win! ${playerSelection} beats ${computerSelection}`;
//     }
//     else{
//         return `You lose! ${computerSelection} beats ${playerSelection}`;
//     }
// }

// // returns more interesting text with details


// // function getPlayerChoice(){
// //     let validatedInput = false;
// //     while(validatedInput == false){
// //         const choice = prompt("Rock Paper Scissors");
// //         if(choice == null){
// //             continue;
// //         }
// //         const choiceInLower = choice.toLowerCase();
// //         if(options.includes(choiceInLower)){
// //             validatedInput = true;
// //             return choiceInLower;
// //         }
// //     }
// // }


// // prompt to wite your move

// //  function game(){
// //     let scorePlayer = 0;
// //     let scoreComputer = 0;
// //     console.log("Welcome!")
// //     for (let i=0; i<5; i++){
// //         const playerSelection = getPlayerChoice();
// //         const computerSelection = getComputerChoice();
// //         console.log(playerRound(playerSelection, computerSelection));
// //         console.log("------------------")
// //         if(checkWinner(playerSelection, computerSelection) == "PLayer"){
// //             scorePlayer++;
// //         }
// //         else if(checkWinner(playerSelection, computerSelection) == "Computer"){
// //             scoreComputer++;
// //     }    
// //     }
// //     console.log("Game Over")
// //     if(scorePlayer > scoreComputer){
// //         console.log("Player was the winner");
// //     }
// //     else if(scorePlayer < scoreComputer){
// //         console.log("Computer was the winner");
// //     }
// //     else{
// //         console.log("We have a tie!");
// //     }
// // }

// // game()