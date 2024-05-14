let image = document.getElementById('image')

//asynchronus - happens alongside the main sequence of the program
//We don't know how long it will take ot retrieve the info so we'll do the retrieval alongside the rest of the program

/**
 * Uses an API to grab random images using a JSON
 * @returns Random dog images
 */
async function getRandomDog(){
    //retrieve the JSON data
    const response = await fetch('https://dog.ceo/api/breeds/image/random')

    //convert the response into data the JS can understand
    //and store it in a varable
    let dogApiData = await response.json()

    //use dot notation to access the message field specifically
    console.log(dogApiData.message)
    image.src = dogApiData.message
}

getRandomDog()

/**
 * Uses an API to grab random images using a JSON
 * @returns Random fox images
 */
async function getRandomFox(){
    const response = await fetch('https://randomfox.ca/floof/')

    let foxApiData = await response.json()

    console.log(foxApiData.image)
    image.src = foxApiData.image
}

let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')

btn.addEventListener('click', ()=>{
    getRandomDog()
})

btn2.addEventListener('click', ()=>{
    getRandomFox()
})

let btnBig = document.getElementById('btn-big')
let btnSmall = document.getElementById('btn-small')
let style = window.getComputedStyle(image)

btnBig.addEventListener('click', ()=>{
    height = style.getPropertyValue('height').replace("px", '')
    image.style.height = height * 1.10 + 'px'  
})

btnSmall.addEventListener('click', ()=>{
    height = style.getPropertyValue('height').replace("px", '')
    image.style.height = height * 0.90 + 'px'
})