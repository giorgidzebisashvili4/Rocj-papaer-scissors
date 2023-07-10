function getComputerChoice(x){
    if (x=="0"){
        alert("Rock");
    } else if (x=="1") {
        alert("Paper");
    } else {
        alert("Scissors");}
}

getComputerChoice(Math.floor(Math.random() * 3));

playerSelection
computerSelection
