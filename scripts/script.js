//vars
const compChoiceButton = document.getElementById('compButton');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorButton = document.getElementById('scissorButton');
const lizardButton = document.getElementById('lizardButton');
const spockButton = document.getElementById('spockButton');
const generate = document.getElementById('generate');
const choiceArr = ["rock","paper","scissors","lizard","spock"];
var compChoice;
var playerChoice;
var displayScore = document.getElementById('display');

compChoiceButton.addEventListener('click',function(){
    compChoice = Math.round(Math.random()*4);
    let i = compChoice;
    console.log(compChoice);
    displayScore.innerText = `computer chose ${choiceArr[i]}`
    setTimeout(() => {
        if(compChoice == playerChoice){
            displayScore.innerText = `this is a draw`;
        }
        else if(compChoice == 0 && playerChoice == 1 || compChoice == 0 && playerChoice == 4){
            displayScore.innerText = `you win`;
        }
        else if(compChoice == 1 && playerChoice == 2 || compChoice == 1 && playerChoice ==3 ){
            displayScore.innerText = `you win`;
        }
        else if(compChoice == 2 && playerChoice == 0 || compChoice == 2 && playerChoice == 4){
            displayScore.innerText = `you win`;
        }
        else if(compChoice == 3 && playerChoice == 0 || compChoice == 3 && playerChoice == 2){
            displayScore.innerText = `you win`;
        }
        else if (compChoice == 4 && playerChoice == 1 || compChoice == 4 && playerChoice == 3){
            displayScore.innerText = `you win`;
        }
        else{
            displayScore.innerText = `you loose`;
        }
    }, 2000); 
})
rockButton.addEventListener('click',()=>{
    playerChoice =0;
    let i = playerChoice;
    displayScore.innerText= `you chose ${choiceArr[i]}`;
})
paperButton.addEventListener('click',()=>{
    playerChoice = 1;
    let i = playerChoice;
    displayScore.innerText= `you chose ${choiceArr[i]}`;
})
scissorButton.addEventListener('click',()=>{
    playerChoice = 2;
    let i = playerChoice;
    displayScore.innerText= `you chose ${choiceArr[i]}`;
})
lizardButton.addEventListener('click',()=>{
    playerChoice = 3;
    let i = playerChoice;
    displayScore.innerText= `you chose ${choiceArr[i]}`;
})
spockButton.addEventListener('click',()=>{
    playerChoice = 4;
    let i = playerChoice;
    displayScore.innerText= `you chose ${choiceArr[i]}`;
})

