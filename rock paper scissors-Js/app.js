const computerChoiseDisplay = document.getElementById('computer-choise');
const userChoiseDisplay = document.getElementById('user-choise');
const resultDisplay = document.getElementById('result');
const computerScoreDisplay = document.getElementById('computer-score');
const userScoreDisplay = document.getElementById('user-score');

const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;
let computerScore = 0;
let userScore = 0;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=> {
    userChoice = e.target.id //tıkladığımız ifadenin id'sini userChoice içince saklmak istiyorum sonra ekrana bastıracağız.
    userChoiseDisplay.innerHTML = userChoice;
    genarateComputerChoice()
    getResult()
}))

function genarateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length+1)
    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'paper'
    }
    if(randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiseDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
    result = "Berabere";
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = "Malesef Kaybettiniz";
        computerScore++;
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = "Malesef Kaybettiniz";
        computerScore++;
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = "Tebrikler Kazandınız";
        userScore++;
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = "Tebrikler Kazandınız";
        userScore++;
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = "Malesef Kaybettiniz";
        computerScore++;
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = "Tebrikler Kazandınız";
        userScore++;
    }
    resultDisplay.innerHTML = result;
    updateScore();
}
function updateScore() {
    computerScoreDisplay.textContent = computerScore;
    userScoreDisplay.textContent = userScore;
}