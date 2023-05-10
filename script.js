console.log("Hello Console!");

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