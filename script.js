let playerChoice;
let playerScore=0;
let computerScore=0;
let result;
let roundResult;

const divButtons=document.querySelector('.buttons');
const rockButton=divButtons.querySelector('.rock');
rockButton.addEventListener('click',function(){
    playerChoice="ROCK";
    game();
});
const paperButton=divButtons.querySelector('.paper');
paperButton.addEventListener('click',function(){
    playerChoice="PAPER";
    game();
});
const scissorsButton=divButtons.querySelector('.scissors');
scissorsButton.addEventListener('click',function(){
    playerChoice="SCISSORS";
    game();
});

const results=document.querySelector('.results');
const winner=document.querySelector('.winner');

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
       if(computerSelection==="Rock") return "draw";
       else if(computerSelection==="Paper") return "Lose";
       else return"WIN";
    }
    if(playerSelection==="PAPER")
    {
       if(computerSelection==="Paper") return "draw";
       else if(computerSelection==="Scissors") return "Lose";
       else return"WIN";
    }
    if(playerSelection==="SCISSORS")
    {
       if(computerSelection==="Scissors") return "draw";
       else if(computerSelection==="Rock") return "Lose";
       else return"WIN";
    }
}

function game()
{
    if(playerScore===0&&computerScore===0) winner.style.cssText='background-color: rgba(0, 0, 0, 0); color: rgba(0, 0, 0, 0); text-shadow: 0 0 rgba(0, 0, 0, 0);';
    if(playRound(playerChoice,getComputerChoice())==="WIN")
    {
        playerScore+=1;
    }
    else if(playRound(playerChoice,getComputerChoice())==="draw")
    {
        playerScore+=0;
        computerScore+=0;
    }
    else
    {
        computerScore+=1;
    }
    result=playerScore.toString()+":"+computerScore.toString();
    results.textContent="POINTS\n"+result;

if(playerScore===5)
{
    winner.textContent="YOU WIN!";
    winner.style.cssText='justify-content: center;align-items: center;background-color: rgb(115,137,174);';
    playerScore=0;
    computerScore=0;
}
if(computerScore===5)
{
    winner.textContent="YOU LOSE!";
    winner.style.cssText='justify-content: center;background-color: rgb(115,137,174);';
    playerScore=0;
    computerScore=0;
}
}

