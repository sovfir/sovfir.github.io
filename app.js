const computerChoiseDisplay = document.getElementById("Computer choice")
const userChoiseDisplay = document.getElementById("User choice")
const resultDisplay = document.getElementById("Result")
const possibleChoises = document.querySelectorAll('button')
let userChoise;
let computerChoise;
let result;


function generateComputerChoise(){
    const randomNumber = Math.floor(Math.random() * possibleChoises.length) + 1
    if (randomNumber === 1)
    {
        computerChoise = "rock"
    }
    if (randomNumber === 2)
    {
        computerChoise = "paper"
    }
    if (randomNumber === 3)
    {
        computerChoise = "scissors"
    }
    computerChoiseDisplay.innerHTML = computerChoise
}

function getResult() {
    if (computerChoise === userChoise)
    {
        result = 'its a draw!'
    }
    if (computerChoise === 'rock' && userChoise === 'paper')
    {
        result = 'you win!'
    }
    if (computerChoise === 'rock' && userChoise === 'scissors')
    {
        result = 'you loose!'
    }
    if (computerChoise === 'paper' && userChoise === 'scissors')
    {
        result = 'you win!'
    }
    if (computerChoise === 'paper' && userChoise === 'rock')
    {
        result = 'you loose!'
    }
    if (computerChoise === 'scissors' && userChoise === 'rock')
    {
        result = 'you win!'
    }
    if (computerChoise === 'scissors' && userChoise === 'paper')
    {
        result = 'you loose!'
    }
    resultDisplay.innerHTML = result
}

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click', (e) => {userChoise = e.target.id
userChoiseDisplay.innerHTML = userChoise
generateComputerChoise()
getResult()}))
