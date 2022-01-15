const myStoryButton = document.querySelector('.mystorybutton')
const myStory = document.querySelector('.mystory')
const Story = document.querySelectorAll('.story')
const aboutMeBlur = document.querySelector('.blur')
const iteratorBall = document.querySelectorAll('.iterator-ball')
const iteratorBallFilled = document.querySelector('.iterator-ball-filled')

myStoryButton.addEventListener('click', () => {
    myStoryButton.classList.toggle('opened')
    aboutMeBlur.classList.toggle('opened')
    if (myStoryButton.classList.contains('opened')) {
        horizontalPosition = 30
    }
    moveSlide()
})

iteratorBall.forEach((iteratorBall, id) => {
    iteratorBall.addEventListener('click', () => {
        iteratorBallFilled.style.left = `${(id*2.1)}vw`
        Story.forEach((Story, storyId) => {
            Story.style.opacity = 0
            if (id == storyId) {
                Story.style.opacity = 1
            }
        })
    })

})