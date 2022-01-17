const myWorkItems = document.querySelectorAll('.mywork .container .item')
const myWorkItemsContent = document.querySelector('.mywork .content')

let itemsLength = myWorkItems.length

let motion
let newPosition

let positionArray = ['first', 'second', 'third', 'fourth', 'fifth']

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
            console.log(newPosition)
            if ( (4 >= newPosition) && (newPosition >= 0) ) {
                item2.classList.add(positionArray[newPosition])
            } else if ( newPosition < 0) {
                console.log('woww')
                item2.classList.add(positionArray[5 + newPosition])
            } else if ( newPosition > 4) {
                console.log('wowaaaw')
                item2.classList.add(positionArray[newPosition - 5])   
            }
        })

    })
})