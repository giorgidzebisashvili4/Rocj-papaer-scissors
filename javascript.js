console.log("hello world")

let getComputerChoice = function(){
    const options = [ "Rock", "Paper", "Scissors"];
    let answer = options [Math.floor(Math.random() * 3)];
    return answer
}
let computerSelection = getComputerChoice()
console.log(computerSelection)

// player chose return first capitilised 
let  getPlayerChoice = function(){
    let text = prompt(" chose ‘Rock’, ‘Paper’ or ‘Scissors’");
    let capitilised = text.charAt(0).toUpperCase() + text.substr(1,text.length-1)
    
    return capitilised

}

let playerSelection = getPlayerChoice()
console.log(playerSelection)


