console.log("hello world")

function getComputerChoice(){
    const options = [ "Rock", "Paper", "Scissors"];
    let answer = options [Math.floor(Math.random() * 3)];
    return answer
}
let computerSelection = getComputerChoice()
console.log("computer:" + computerSelection)

// player chose return first capitilised 
function getPlayerChoice(){
    let text = prompt(" chose ‘Rock’, ‘Paper’ or ‘Scissors’");
    let capitalized = text.charAt(0).toUpperCase() + text.substr(1,text.length-1)
    return capitalized
}

let playerSelection = getPlayerChoice()
console.log("player:" + playerSelection)

//one round played, display winner

function oneRound(player,computer){
    if(
    player === computer){
        return `it is tie! ${player} vs ${computer}`
    }else if(
    player === "Rock" && computer === "Scissors" ||
    player === "Paper" && computer === "Rock" ||
    player === "Scissors" && computer === "Paper")
    {
        return `You win! ${player} beats ${computer}`
    }else{return `You lose! ${computer} beats ${player}`}
}

let winner = oneRound(playerSelection,computerSelection)
console.log(winner)