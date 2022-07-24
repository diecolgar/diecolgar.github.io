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
let horizontalPosition = 0

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
        if (currentSlide >= id) {
            section.classList.add('active')
            // Events that occur on slide activation, depending on the current page
            id == 0 ? nav.classList.add('hidden') : nav.classList.remove('hidden')
            // My work tab
            id != 2 ? myworkselectablecontainer.classList.remove("minimized") : ""
            id != 2 ? myworkselectablecontainer.style.opacity = 0 : myworkselectablecontainer.style.opacity = 1
            id != 2 ? myworkcloser.classList.remove("active") : ""
            id != 2 ? myworkdisplayables.forEach((displayable) => {displayable.classList.remove('active')}) : ""
            id != 3 ? contact.classList.remove('opened') : ""
        }
    });
    // document.querySelector('nav .sliding .ball').style.transform = `translateY(${-2.6 + currentSlide*1.75}rem)`
}

// RESET HORIZONTAL POSITION
function resetHorizontalItems() {
    // myStoryButton is horizontal position dependent, so it has to be toggled
    if (horizontalPosition !== 30) {
        myStoryButton.classList.remove('opened')
        aboutMeBlur.classList.remove('opened')
    }
}

// MOVING SLIDES
function moveSlide() {
    allowDisplacement = false
    resetHorizontalItems() // this resets horizontal items for the current moveSlide() call
    content.style.transform = `translateY(${-currentSlide * 100}vh) translateX(${-horizontalPosition}vw)`
    horizontalPosition = 0 // this resets horizontal position for the next moveSlide() call
    setTimeout(enableDisplacement, 1000)
    setTimeout(activateSlide, 500)
}

// HANDLE MENU
function menuHandler() {
    displayableMenu.classList.toggle('hidden')
    displayableMenu.classList.contains('hidden') ? allowDisplacement = true : allowDisplacement = false;
    navMenu.classList.toggle('closed')
}

// THIS WEB PAGE BEHAVIOUR IS ESSENTIALLY DIFFERENT FOR MOBILE (SLIDING) AND COMPUTER (MOUSEWHEEL/TOUCHPAD) DEVICES
// DUE TO THE INEFFICIENT SNAP SCROLLING THAT CSS PROVIDES FOR PC AND MY DESIRE OF DEVELOPING MYSELF THE SLIDING EFFECT
// INSTEAD OF USING LIBRARIES
window.addEventListener("resize", function (event) {
    console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight + ' high');

    if (document.body.clientWidth < 800) { allowDisplacement = false } else { allowDisplacement = true }
})

// MOUSE WHEEL EVENT LISTENER
window.addEventListener("wheel", event => {
    console.log('wheeeelin')

    firsttopPosition = home.getBoundingClientRect().top
    lasttopPosition = contact.getBoundingClientRect().top

    // SLIDE DOWN
    if ((event.deltaY > 0) && (lasttopPosition > 100) && (allowDisplacement)) {
        currentSlide++
        moveSlide()

        // SLIDE UP
    } else if ((event.deltaY < 0) && (firsttopPosition < -100) && (allowDisplacement)) {
        currentSlide--
        moveSlide()
    }
})


// --------- EVENTS IN THE MENU -------- //

// MENU DISPLAY EVENT LISTENER
navMenu.addEventListener("click", () => {
    menuHandler()
})

// MENU ITEM CLICK EVENT LISTENER
menuItem.forEach((menuItem, id) => {
    menuItem.addEventListener("click", () => {
        menuHandler()
        currentSlide = id
        moveSlide()
    })
})

// NAV BRAND CLICK EVENT LISTENER
navBrand.addEventListener("click", () => {
    currentSlide = 0
    moveSlide()
    if (!displayableMenu.classList.contains('hidden')) {
        menuHandler()
    }
})

