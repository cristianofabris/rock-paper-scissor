let playerScore=0;
let computerScore=0;
let numRound=0;

playRound();

function playRound(){
    while(numRound<5)
    {
        let playerChoice=prompt("rock, paper, or scissors?").toLowerCase();
        let computerChoice= getComputerChoice();
        console.log("Nel round "+(numRound+1)+" il computer ha scelto: "+computerChoice);
        console.log("Nel round "+(numRound+1)+" Il giocatore ha scelto: "+playerChoice);       
        console.log("Il vincitore del round "+(numRound+1)+" è: "+getWinner(playerChoice, computerChoice));

        numRound++;
    }
    if(playerScore>computerScore){
        alert("Il giocatore ha vinto!");
    }else if(playerScore<computerScore){
        alert("Il computer ha vinto!");
    }else{
        alert("Pareggio!");
    }   
}
function getComputerChoice(){
    c=Math.random();

    if(c<0.33){
        return "rock";
    }

    if(c<0.66 && c>=0.33)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getWinner(playerChoice, computerChoice){

    if(playerChoice=="rock" && computerChoice=="scissors")
    {
        playerScore++;
        return "player";
    }
    else if(playerChoice=="scissors" && computerChoice=="paper")
    {
        playerScore++;
        return "player";
    }
    else if(playerChoice=="paper" && computerChoice=="rock")
    {
        playerScore++;
        return "player";
    }
    else if(playerChoice=="rock" && computerChoice=="paper")
    {
        computerScore++;
        return "computer";
    }
    else if(playerChoice=="paper" && computerChoice=="scissors")
    {
        computerScore++;
        return "computer";
    }else if(playerChoice=="scissors" && computerChoice=="rock")
    {
        computerScore++;
        return "computer";
    }
    else
    {
        return "tie";
    }

}