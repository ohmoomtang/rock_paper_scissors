function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection,computerSelection){
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    switch(playerChoice){
        case 'paper':
            if(computerChoice === "scissors"){
                return "You Lose! Scissors beats Paper" ;
            }
            else if(computerChoice === "rock"){
                return "You Win! Paper beats Rock" ;
            }
            else{
                return "Draw";
            }

        case 'rock' :
            if(computerChoice === "scissors"){
                return "You Win! Rock beats Scissors" ;
            }
            else if(computerChoice === "paper"){
                return "You Lose! Paper beats Rock" ;
            }
            else{
                return "Draw";
            }

        case 'scissors':
            if(computerChoice === "rock"){
                return "You Lose! Rock beats Scissors";
            }
            else if(computerChoice === "paper"){
                return "You Win! Scissors beats Paper";
            }
            else{
                return "Draw";
            }

        default: break;
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter selection between \"Rock\", \"Paper\", \"Scissors\" ?");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
     }
}

game();
