
function getComputerChoice()
{
    let computerChoice;
    computerChoice=Math.floor(Math.random()*100);
    if(computerChoice>=0 && computerChoice<=33)
    {
        return "Rock";
    }
    if(computerChoice>=34 && computerChoice<=66)
    {
        return "Paper";
    }
    if(computerChoice>=67 && computerChoice<=99)
    {
        return "Scissors";
    }
}

function playRound(playerSelection,computerSelection)
{
    if(playerSelection==="ROCK")
    {
       if(computerSelection==="Rock") return "It's a draw!";
       else if(computerSelection==="Paper") return "You Lose! Paper beats Rock!";
       else return"You WIN! Rock beats Scissors";
    }
}

let playerChoice;
playerChoice=prompt("Select a weapon!");
playerChoice=playerChoice.toUpperCase();
alert(playRound(playerChoice,getComputerChoice()));