//create random number
let randoNum = 0
console.log(randoNum)
//access the display h3 html
let guessDisplay = document.getElementById('guess-display')
//access the guess temperature h2 html
let guesstempDisplay = document.getElementById('guess-temp')

//access the input
let guessInput = document.getElementById('guess-input')
//access the guess button
let guessBtn = document.getElementById('guess-button')
//access the reset button
let guessBtn2 = document.getElementById('guess-reset')
//access the start button
let guessBtn3 = document.getElementById('guess-start')
//start user's attempts at 0
let guessAttempts = 0
//the colour variables
let blue = 0
let red = 256

//what the guess button does
guessBtn.addEventListener('click', ()=>{
    //access the user's input on click
    let guess = guessInput.value
    //logging the value type of the input
    console.log(typeof guessInput)

    //first check the user's attempts, if it's 6 then the button shouldn't work
    if(guessAttempts == 6){
        guessDisplay.innerHTML = `The answer was ${randoNum}. You lose.`
        guessDisplay.style.color = 'red'
        // btn.classList.add('deactivate')
        document.getElementById('guess-button').disabled = true;
        document.getElementById('guess-input').disabled = true;
    } else {
        //if not 6, run the checkNum function
        checkTemp(guess)
    }
})

//reset button, if pressed resets the game
guessBtn2.addEventListener('click', ()=>{
    //reset attempts
    guessAttempts = 0
    document.getElementById('guess-start').disabled = false;
    document.getElementById('guess-reset').disabled = true;
    document.getElementById('guess-input').disabled = true;
    guessInput.value = ''
    guessDisplay.innerHTML = null
    guesstempDisplay.innerHTML = null
})

//the start button
guessBtn3.addEventListener('click', ()=>{
    //generates the random number
    randoNum = Math.floor(Math.random()*100)
    console.log(randoNum)
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-start').disabled = true;
    document.getElementById('guess-reset').disabled = false;
    document.getElementById('guess-button').disabled = false;
    guessDisplay.style.color = 'black'
    guessDisplay.innerHTML = "What number am I thinking of?"
})

/**
 * Verifies if user guess matches random number
 * @param userInput The number to check
 * @returns "WIN" if user input matches random number, or "TOO HIGH" / "TOO LOW"
 */
function checkTemp(userInput){
    numDiff = randoNum - userInput
    if(numDiff == 0){
        guesstempDisplay.innerHTML = "WIN!"
        guesstempDisplay.style.color = 'red'
        document.getElementById('guess-input').disabled = true
        document.getElementById('guess-button').disabled = true
    } else if(numDiff < 0){
        guesstempDisplay.innerHTML = "&uarr; TOO HIGH"
        blue = Math.abs(numDiff) * 3.56
        red -= Math.abs(numDiff) * 1.56 
        guesstempDisplay.style.color = 'rgb(' + red + ', 0,' + blue + ')'
        guessAttempts += 1
    } else {
        guesstempDisplay.innerHTML = "&darr; TOO LOW"
        blue = numDiff * 3.56
        red -= numDiff * 1.56
        guesstempDisplay.style.color = 'rgb(' + red + ', 0,' + blue + ')'
        guessAttempts += 1
    }
}