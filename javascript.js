
function getComputerChoice(){
    const options = [ "Rock", "Paper", "Scissors"];
    let answer = options [Math.floor(Math.random() * 3)];
    return answer
}

// player chose return first capitilised 
function getPlayerChoice(){
    let text = prompt(" chose ‘Rock’, ‘Paper’ or ‘Scissors’");
    let capitalized = text.charAt(0).toUpperCase() + text.substr(1,text.length-1).toLowerCase();
    return capitalized
}

//one round played, display winner


function checkWinner(player,computer){
    if(
        player === computer){
            return `tie`
        }else if(
        player === "Rock" && computer === "Scissors" ||
        player === "Paper" && computer === "Rock" ||
        player === "Scissors" && computer === "Paper")
        {
            return `Player`
        }else{
           
            return `Computer`}
    }

function oneRound(player,computer){

    let winner = checkWinner(player,computer)

    if(
    winner == "tie" ){
        return `it is tie! ${player} vs ${computer}`
    }else if(
        winner == "Player")
    {
        return `You win! ${player} beats ${computer}`
    }else{
       
        return `You lose! ${computer} beats ${player}`}
}


function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome!")
    for(let i=0;i<5;i++){
        let computerSelection = getComputerChoice();
    console.log("computer:" + computerSelection);
        let playerSelection = getPlayerChoice();
    console.log("player:" + playerSelection);
    let winner = checkWinner(playerSelection,computerSelection);
    console.log(winner);
    let winnerText = oneRound(playerSelection,computerSelection);
    console.log(winnerText);
    if (winner === "Player"){
        scorePlayer++;
    }else if(winner === "Computer"){
        scoreComputer++
    }
    }
    console.log("---------------------------")
    console.log(scorePlayer)
    console.log(scoreComputer)
    if(scorePlayer > scoreComputer){
        console.log("you Win!!!")
    }else if(scorePlayer< scoreComputer){
        console.log("you lose!!!")
    }else{
        console.log("it's tie")
    }
}
game()