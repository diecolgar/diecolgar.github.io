// ---------- VARIABLES ---------- //

    // GLOBAL DEFINITIONS
const content = document.querySelector(".content")
const section = document.querySelectorAll("section")
const nav = document.querySelector("nav")
const menuItem = document.querySelectorAll(".menu-button")

    // LOCAL DEFINITIONS
const home = document.querySelector(".home")
const aboutme = document.querySelector(".aboutme")
const mywork = document.querySelector(".mywork")
const contact = document.querySelector(".contact")

const navBrand = document.querySelector("nav .left")
const navMenu = document.querySelector("nav .right .menu")
const displayableMenu = document.querySelector(".displayable-menu")

    // HYPERLOCAL DEFINITIONS
const titleimage = document.querySelector(".titleimage");
const separator = document.querySelector(".separator");

    // WEB DISPLACEMENT VARIABLES
let allowDisplacement = true
let displaced = 0
let currentSlide = 0

// ---------- FUNCTIONS ---------- //

// ENABLING DISPLACEMENT
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

// MOVING SLIDES
function moveSlide() {
    content.style.transform = `translateY(${-currentSlide*100}vh)`
    setTimeout(enableDisplacement, 1000)
    setTimeout(activateSlide, 500)
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
        currentSlide++
        moveSlide()
        
    // SLIDE UP
    } else if ((event.deltaY < 0) && (firsttopPosition < -100) && (allowDisplacement)) {
        allowDisplacement = false
        currentSlide--
        moveSlide()
    }
})

// MENU DISPLAY EVENT LISTENER
navMenu.addEventListener("click", () => {
    displayableMenu.classList.toggle('hidden')
})

// MENU ITEM CLICK EVENT LISTENER
menuItem.forEach((menuItem, id) => {
    menuItem.addEventListener("click", () => {
        displayableMenu.classList.toggle('hidden')
        currentSlide = id
        moveSlide()
    })
})

// NAV BRAND CLICK EVENT LISTENER
navBrand.addEventListener("click", () => {
    currentSlide = 0
    moveSlide()
})

