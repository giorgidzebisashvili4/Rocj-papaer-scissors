console.log("hello world")

let getComputerChoice = function(){
    const options = [ "Rock", "Paper", "Scissors"];
    let answer = options [Math.floor(Math.random() * 3)];
    return answer
}
getComputerChoice()
