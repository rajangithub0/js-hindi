let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector('.resultparas')


const p = document.createElement('p')


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    //check valid number
    if (isNaN(guess)) {
        alert("please enter a valid number")
    } else if (guess < 1) {
        alert("please enter a number greater then 1")
    } else if (guess > 100) {
        alert("please enter a number less then 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMassge(`game Over .random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    //match the check number if match low,high
    if (guess === randomNumber) {
        displayMassge(`your guessed is right ${guess}`)
        endGame()
    } else if (guess < randomNumber) {
        displayMassge(`number is tooo low`)
    } else if (guess > randomNumber) {
        displayMassge(`number is toooo high`)
    }
}

function displayGuess(guess) {
    // value clean , gusse update remining display
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMassge(message) {
    //attrictive with dom
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    //end the playing game 
    userInput.value = ''
    userInput.setAttribute('disabled', "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame"> start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame() {
    // start the new game
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.replaceChild(p)
        playGame = true
    })

}
