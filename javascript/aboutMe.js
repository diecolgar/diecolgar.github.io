const myStoryButton = document.querySelector('.mystorybutton')
const myStory = document.querySelector('.mystory')
const aboutMeBlur = document.querySelector('.blur')

myStoryButton.addEventListener('click', () => {
    myStoryButton.classList.toggle('opened')
    aboutMeBlur.classList.toggle('opened')
    if (myStoryButton.classList.contains('opened')) {
        horizontalPosition = 30
    }
    moveSlide()
})