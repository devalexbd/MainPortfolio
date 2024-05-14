// =========PASSWORD PAGE=========

let password = "password123"
let userAttempts = 0
let btn = document.getElementById('btn')
let loginDisplay = document.getElementById('login-display')

/**
 * Verifies if password matches
 * @param userInput The password to check
 * @returns True if match, false if not
 */
function checkPW(userInput){
    if(userInput == password){
        loginDisplay.innerHTML = "Login Success."
        loginDisplay.style.color = 'green'
        console.log("Logged in.")
    } else {
        loginDisplay.innerHTML = "Login Failed. Please try again"
        loginDisplay.style.color = 'red'        
        console.log("Incorrect.")
        userAttempts += 1
    }
}

btn.addEventListener('click', ()=>{
    let pwInput = document.getElementById('loginInput').value
    if(userAttempts == 3){
        loginDisplay.innerHTML = "Login Failed. Too many failed attempts."
        loginDisplay.style.color = 'red'
        btn.classList.add('deactivate')
    } else {
        checkPW(pwInput)
    }
})