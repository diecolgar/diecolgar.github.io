const myStoryButton = document.querySelector('.mystorybutton')
const myStory = document.querySelector('.mystory')

myStoryButton.addEventListener('click', () => {
    myStoryButton.classList.toggle('opened')
    if (myStoryButton.classList.contains('opened')) {
        horizontalPosition = 30
    }
    moveSlide()
})