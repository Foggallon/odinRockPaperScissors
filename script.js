
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
    let roundNumber;
    for(i=1;i<=5;i++)
    {
        roundNumber=i.toString();
        console.log("Round ",roundNumber);
        playerChoice=prompt("Select a weapon!");
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
    console.log("Your score is: ",playerScore);
    console.log("Computer's score is: ",computerScore);
    if(playerScore>computerScore)
    {
        console.log("You WIN!")
    }
    else if(computerScore>playerScore)
    {
        console.log("You LOSE!");
    }
    else
    {
        console.log("It's a draw.");
    }
}

game();

