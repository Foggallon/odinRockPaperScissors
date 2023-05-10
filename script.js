
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
    if(playerSelection==="PAPER")
    {
       if(computerSelection==="Paper") return "It's a draw!";
       else if(computerSelection==="Scissors") return "You Lose! Paper beats Rock!";
       else return"You WIN! Paper beats Rock";
    }
    if(playerSelection==="SCISSORS")
    {
       if(computerSelection==="Scissors") return "It's a draw!";
       else if(computerSelection==="Rock") return "You Lose! Rock beats Scissors!";
       else return"You WIN! Scissors beat Paper";
    }
}


let playerChoice;
let playerScore=0;
let computerScore=0;

function game()
{
    for(i=1;i<=5;i++)
    {
        playerChoice=prompt("Round", i ,"Select a weapon!");
        playerChoice=playerChoice.toUpperCase();
        if(playRound(playerChoice,getComputerChoice())==="You WIN! Scissors beat Paper" ||playRound(playerChoice,getComputerChoice())==="You WIN! Paper beats Rock"||playRound(playerChoice,getComputerChoice())==="You WIN! Rock beats Scissors")
        {
            playerScore+=1;
        }
        else if(playRound(playerChoice,getComputerChoice())==="It's a draw!")
        {
            playerScore+=1;
            computerScore+=1;
        }
        else
        {
            computerScore+=1;
        }
    }
    alert(playerScore,computerScore);
}

alert(playRound(playerChoice,getComputerChoice()));

