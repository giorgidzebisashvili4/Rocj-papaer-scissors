const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}










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