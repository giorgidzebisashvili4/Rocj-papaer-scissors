let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    const options = [ "Rock", "Paper", "Scissors"];
    let answer = options [Math.floor(Math.random() * 3)];
    return answer
}
// player chose return first capitilised 
// function getPlayerChoice(){
//     let text = prompt(" chose ‘Rock’, ‘Paper’ or ‘Scissors’");
//     let capitalized = text.charAt(0).toUpperCase() + text.substr(1,text.length-1).toLowerCase();
//     return capitalized
// }

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
// player chose buttons

const buttons = document.querySelectorAll('button');
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            
        checkWinner(button.id);
        })
    })


//one round played, display winner


function checkWinner(player){
    


console.log("player:" + player);
    let computer = getComputerChoice();
console.log("computer:" + computer);
let result= "";

    if(
        player === computer){
            result = ('It\'s a tie. You both chose ' + player
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        }else if(
        player === "Rock" && computer === "Scissors" ||
        player === "Paper" && computer === "Rock" ||
        player === "Scissors" && computer === "Paper")
        {
            playerScore += 1
            // score change
            result = ('You win! ' + player + ' beats ' + computer
                + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
            // all the text that shows
            if (playerScore == 5) {
                result += '<br><br>You won the game! Reload the page to play again'
                disableButtons()
        }}else{
           
            computerScore += 1
            // when computer wins his score add 1
                result = ('You lose! ' + computer + ' beats ' + player
                    + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
            // what text to show 
                if (computerScore == 5) {
                    result += '<br><br>I won the game! Reload the page to play again'
                    // what text show if comp wins
                    disableButtons()};
            

    document.getElementById('container').innerHTML = result
    return
    }
}
    




console.log("welcome!")




// function game(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     console.log("welcome!")
//     for(let i=0;i<5;i++){
//         let computerSelection = getComputerChoice();
//     console.log("computer:" + computerSelection);
//         let playerSelection = getPlayerChoice();
//     console.log("player:" + playerSelection);
//     let winner = checkWinner(playerSelection,computerSelection);
//     console.log(winner);
//     let winnerText = oneRound(playerSelection,computerSelection);
//     console.log(winnerText);
//     if (winner === "Player"){
//         scorePlayer++;
//     }else if(winner === "Computer"){
//         scoreComputer++
//     }
//     }
//     console.log("---------------------------")
//     console.log(scorePlayer)
//     console.log(scoreComputer)
//     if(scorePlayer > scoreComputer){
//         console.log("you Win!!!")
//     }else if(scorePlayer< scoreComputer){
//         console.log("you lose!!!")
//     }else{
//         console.log("it's tie")
//     }
// }
// game()