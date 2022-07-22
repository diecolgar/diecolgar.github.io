const myworkselectables = document.querySelectorAll(".myworkselectables .selectable");
const myworktitle = document.querySelector(".mywork .title")
const myworkselectablecontainer = document.querySelector(".myworkselectables");
const myworkdisplayables = document.querySelectorAll(".workdisplayed");
const myworkcloser = document.querySelector(".myworkcloser");



// window.addEventListener('mousemove', function(event)
// {
//     var x = event.clientX;
//     var y = event.clientY;
//     windowX = window.innerWidth;
//     windowY = window.innerHeight;
    // myworkselectables.forEach((selectable, id) => {
    //     var selRect = selectable.getBoundingClientRect();
    //     var selectX = (selRect.left + selRect.right)/2;
    //     var selectY = (selRect.top + selRect.bottom)/2;
    //     var distanceX = Math.abs(x - selectX);
    //     var distanceY = Math.abs(y - selectY);
        // if ((x-10 <= 0) || (y-10 <= 0) || (x+10 >= windowX) || (y+10 >= windowY)) {
        //     selectable.style.opacity = 0.0;
        // } else {
        //     // selectable.style.opacity = 0.7 - distance*0.02;
        //     selectable.style.opacity = 1;
        // }
    // });
// })

myworkselectables.forEach((selectable, id) => {
        selectable.addEventListener('click', () => {
            myworkselectables.forEach((selectable2) => {
                selectable2.classList.remove('active');
            })
            selectable.classList.add('active');
            myworkselectablecontainer.classList.add("minimized")
            myworkcloser.classList.add("active")
            // myworktitle.style.opacity = 0;
            myworkdisplayables.forEach((displayable, idd) => {
                if (id === idd) {
                    displayable.classList.add('active');
                } else {
                    displayable.classList.remove('active');
                }
            })

    })
});

myworkcloser.addEventListener('click', () => {
    myworkselectablecontainer.classList.remove("minimized")
    myworktitle.style.opacity = 1;
    myworkdisplayables.forEach((displayable) => {displayable.classList.remove('active')})
    myworkcloser.classList.remove("active")
})





