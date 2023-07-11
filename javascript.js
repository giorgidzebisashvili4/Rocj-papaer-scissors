console.log('hello world');

const options = ["rock", "paper","scissors"];

function getComputerChoice(){
    const choice = options [Math.floor(Math.random()* options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "player";
    } 
    else {
        return "computer";
    }
    }

function playerRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!";
    }
    else if(result == "player"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPLayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput =true;
            return choiceInLower;
        }
    }
}

function game(){
    console.log("Welocme!")
    for (let i=0; i<5; i++){
        const playerSelection = getComputerChoice();
        const computerSelection = getComputerChoice();
        console.log(playerRound(playerSelection, computerSelection));
    }
    console.log("Game Over")
}

game()