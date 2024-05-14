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