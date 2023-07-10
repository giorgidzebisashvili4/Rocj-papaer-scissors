function getComputerChoice(x){
    if (x=="0"){
        return "Rock";
    } else if (x=="1") {
        return "Paper";
    } else {
        return "Scissors";}
}
let result=getComputerChoice(Math.floor(Math.random() * 3));
alert(result);

playerSelection
computerSelection
