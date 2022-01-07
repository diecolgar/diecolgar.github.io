// ----- VARIABLES -----

    // GLOBAL DEFINITIONS
const content = document.querySelector(".content")
const section = document.querySelectorAll("section")
const nav = document.querySelector("nav")

    // LOCAL DEFINITIONS
const home = document.querySelector(".home")
const aboutme = document.querySelector(".aboutme")
const mywork = document.querySelector(".mywork")
const contact = document.querySelector(".contact")

const navMenu = document.querySelector("nav .right .menu")
const displayableMenu = document.querySelector(".displayable-menu")

    // HYPERLOCAL DEFINITIONS
const titleimage = document.querySelector(".titleimage");
const separator = document.querySelector(".separator");

    // WEB DISPLACEMENT VARIABLES
let allowDisplacement = true
let displaced = 0
let currentSlide = 0

// ----- FUNCTIONS -----

    // This function, inside a TimeOut, enables the displacement to prevent fast sliding
function enableDisplacement() {
    allowDisplacement = true
}

// ACTIVATING FIRST PAGE WHEN LOADING
function activateHome() {
    home.classList.add("active")
}
setTimeout(activateHome, 100)

// ACTIVATING ANY PAGE WHEN SLIDING
function activateSlide() {
    section.forEach((section, id) => {
        section.classList.remove('active')
        if (currentSlide == id) {
            console.log(id)
            section.classList.add('active')
            id == 0 ? nav.classList.add('hidden') : nav.classList.remove('hidden')
        }
    });
}

// SCREEN PARAMETERS
let screen_height = screen.height
let screen_width = screen.width

// THIS WEB PAGE BEHAVIOUR IS ESSENTIALLY DIFFERENT FOR MOBILE (SLIDING) AND COMPUTER (MOUSEWHEEL/TOUCHPAD) DEVICES
// DUE TO THE INEFFICIENT SNAP SCROLLING THAT CSS PROVIDES FOR PC AND MY DESIRE OF DEVELOPING MYSELF THE SLIDING EFFECT
// INSTEAD OF USING LIBRARIES

window.addEventListener("resize", function(event) {
    console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');

    if (document.body.clientWidth < 800) { allowDisplacement = false} else { allowDisplacement = true }
})

// MOUSE WHEEL EVENT LISTENER
window.addEventListener("wheel", event => {

    firsttopPosition = home.getBoundingClientRect().top
    lasttopPosition = contact.getBoundingClientRect().top
    
    // SLIDE DOWN
    if ((event.deltaY > 0)  && (lasttopPosition > 100) && (allowDisplacement)) { 
        allowDisplacement = false
        content.style.transform = `translateY(${-100 - currentSlide*100}vh)`
        currentSlide++
        setTimeout(enableDisplacement, 1000)
        setTimeout(activateSlide, 500)
        
    // SLIDE UP
    } else if ((event.deltaY < 0) && (firsttopPosition < -100) && (allowDisplacement)) {
        allowDisplacement = false
        content.style.transform = `translateY(${100 - currentSlide*100}vh)`
        currentSlide--
        setTimeout(enableDisplacement, 1000)
        setTimeout(activateSlide, 500)
    }
})

// MENU CLICK EVENT LISTENER

navMenu.addEventListener("click", event => {
    displayableMenu.classList.toggle('hidden')
})
