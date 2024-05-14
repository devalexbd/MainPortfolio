let image2 = document.getElementById('image2')
let seed = "test"
let authorText = document.getElementById('author')
let idText = document.getElementById('seed-id')
let picsumBtn2 = document.getElementById('picsum-btn2')

/**
 * Uses an API to grab JSON to show random images
 * @param imgSeed The seed the user inputs.
 * @returns The image, the author and the id.
 */
async function getImage(imgSeed){
    const response = await fetch(`https://picsum.photos/seed/${imgSeed}/info`)
    let randoImage = await response.json()
    image2.src = randoImage.download_url
    authorText.innerHTML = `by ${randoImage.author}`
    idText.innerHTML = `ID: ${randoImage.id}`
}

getImage(seed)

let picsumBtn = document.getElementById('picsum-btn')

picsumBtn.addEventListener('click', ()=>{
    seed = Math.floor(Math.random()*9999)
    getImage(seed)
})

picsumBtn2.addEventListener('click', ()=>{
    let ownSeed = document.getElementById('own-seed').value
    seed = ownSeed
    getImage(seed)
})