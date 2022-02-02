const displayableItems = document.querySelectorAll('.mywork .displayer div')

const iosDisplayable = document.querySelector('.mywork .displayer .ios')
const minipeopleDisplayable = document.querySelector('.mywork .displayer .minipeople')

const myWorkItems = document.querySelectorAll('.mywork .container .item')
const myWorkItemsContent = document.querySelector('.mywork .content')

let itemsLength = myWorkItems.length

let motion
let newPosition

let positionArray = ['first', 'second', 'third', 'fourth', 'fifth']

function displayCurrentItem() {

    displayableItems.forEach( dispItem => {
        dispItem.classList.remove('active')
    })

    myWorkItems.forEach((item,id) => {
        if (item.classList.contains('third')) {
            if(item.classList.contains('ios')) {
                iosDisplayable.classList.add('active')
            }
            if(item.classList.contains('minipeople')) {
                minipeopleDisplayable.classList.add('active')
            }
        }
    })
}


myWorkItems.forEach((item,id) => {
    item.addEventListener('click', () => {
        motion = 2 - id
        console.log(motion)

        myWorkItems.forEach((item2,id2) => {
            item2.classList.remove('first')
            item2.classList.remove('second')
            item2.classList.remove('third')
            item2.classList.remove('fourth')
            item2.classList.remove('fifth')
            newPosition = id2 + motion
            if ( (4 >= newPosition) && (newPosition >= 0) ) {
                item2.classList.add(positionArray[newPosition])
            } else if ( newPosition < 0) {
                item2.classList.add(positionArray[5 + newPosition])
            } else if ( newPosition > 4) {
                item2.classList.add(positionArray[newPosition - 5])   
            }
        })
        displayCurrentItem()
    })
})