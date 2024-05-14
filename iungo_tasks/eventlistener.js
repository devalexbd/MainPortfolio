// ====INPUT COLOURS====
let input = document.getElementById('colourInput')
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')

btn.addEventListener('click', ()=>{
    input.style.backgroundColor = null
    input.style.color = null
})

// ====COUNTING GAME====
let numberP = document.getElementById('number')
let number = Number(numberP.textContent)

btn2.addEventListener('click', ()=>{
    number = 0
    numberP.textContent = number
})

// ====COLOUR BOX TASK====
//Create variable for the box div
let box = document.getElementById('box')
let box2 = document.getElementById('box2')

//Create event listener to detect key press
document.addEventListener('keydown', (e)=>{
    //Detect which key and apply each colour
    switch(e.key){
        case 'r':
            //Grab the box, check its classes and add the new colour class
            // box.classList.add('red');

            //Or, simply change the css from here and add a colour
            box.style.backgroundColor = 'red'
            box2.style.backgroundColor = 'green'
        //Break to avoid performing the subsequent cases
        break;
        case 't':
            // box.classList.add('blue');
            box.style.backgroundColor = 'blue'
            box2.style.backgroundColor = 'orange'
        break;
        case 'y':
            // box.classList.add('green');
            box.style.backgroundColor = 'pink'
            box2.style.backgroundColor = 'green'
        break;
        case 'w':
            box.style.backgroundColor = 'green'
            box2.style.backgroundColor = 'pink'
        break;
        case 'e':
            // box.classList.add('pink');
            box.style.backgroundColor = 'black'
            box2.style.backgroundColor = 'white'
        break;
    }

    // ==== INPUT COLOUR ====
    if(e.key === 'ArrowUp'){
        input.style.backgroundColor = 'yellow'
        input.style.color = 'red'
    }

    // ==== COUNTING GAME ====
    console.log(number)
    if(e.key === 'ArrowRight'){
        number++
        numberP.textContent = number
    } else if(e.key === 'ArrowLeft'){
        number--
        numberP.textContent = number
    } else if(e.key === 'i'){
        number = number-100
        numberP.textContent = number
    } else if(e.key === 'o'){
        number = number+100
        numberP.textContent = number
    } else if(e.key === 'k'){
        number = number-100000000
        numberP.textContent = number
    } else if(e.key === 'l'){
        number = number+100000000
        numberP.textContent = number
    }
})

// ==== RANDOM COLOUR BUTTON (RGB VERSION + COMPLIMENTARY) ====
let colourR = 0
let colourG = 0
let colourB = 0
let colourR2 = 255
let colourG2 = 255
let colourB2 = 255
let randoColour = `rgb( ${colourR}, ${colourG}, ${colourB})`
let randoColour2 = `rgb(${colourR2}, ${colourG2}, ${colourB2})`
console.log(randoColour)
box.style.backgroundColor = 'black'
box2.style.backgroundColor = 'white'


let btn3 = document.getElementById('btn3')
btn3.addEventListener('click', ()=>{
    colourR = Math.floor(Math.random()*257)
    colourG = Math.floor(Math.random()*257)
    colourB = Math.floor(Math.random()*257)
    randoColour = `rgb( ${colourR}, ${colourG}, ${colourB})`
    console.log(randoColour)
    box.style.backgroundColor = randoColour
    colourR2 = 255 - colourR
    colourG2 = 255 - colourG
    colourB2 = 255 - colourB
    randoColour2 = `rgb(${colourR2}, ${colourG2}, ${colourB2})`
    box2.style.backgroundColor = randoColour2
})