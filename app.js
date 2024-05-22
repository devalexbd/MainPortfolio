// Create an observer variable that detects whenever a
// new element enters the viewport. If that new element
// has intersected with the viewport, show it and if not
// then hide it.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
            console.log('Showing')
        } else {
            entry.target.classList.remove('show')
            console.log('Not showing')
        }
    });
})

// Identify element in DOM that should be observed
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

/**
 * Redirects page
 */
function redirect(link){
    window.location.replace(link)
}



// Changing the Header colour when scrolling
const header = document.querySelector('header')
const headerButton = document.getElementsByClassName('header-button')
console.log(headerButton)
// Creating a new div at the top of screen
// Use if for when it goes off or on screen,
//changes other element accordingly
const scrollWatcher = document.createElement('div')

scrollWatcher.setAttribute('data-scroll-watcher', '')
header.before(scrollWatcher)

const navObserver = new IntersectionObserver((entries) => {
    // As it is, this observer function only applies the class when
    // it IS intersecting with the top div.
    // Except I want the colour to show when they are NOT intersecting
    // , this is why "entries[0].isIntersecting" has an "!" before it
    // E.g.
    // if Intersect = False (not NOT intersecting), remove class
    // if Intersect = True (NOT intersecting), add class
    header.classList.toggle('nav-change', !entries[0].isIntersecting)

    // Because "headerButton" comprises of multiple elements, using
    // getElementsByClassName returns an Array. Therefore, if I want
    // to apply my classList toggle to each one I must cycle through
    // each entry in the Array. To do this, I have used a for loop:
    for(i=0; i<headerButton.length; i++) {
        headerButton[i].classList.toggle('header-button-change', !entries[0].isIntersecting)
    }

    // headerButton.classList.toggle('header-button-change', !entries[0].isIntersecting)
})

navObserver.observe(scrollWatcher)