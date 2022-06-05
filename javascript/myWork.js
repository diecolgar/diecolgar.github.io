const myworkselectables = document.querySelectorAll(".myworkselectables .selectable")


window.addEventListener('mousemove', function(event)
{
    var x = event.clientX;
    var y = event.clientY;
    windowX = window.innerWidth;
    windowY = window.innerHeight;
    console.log(`hor ${x} and width ${windowX}`);
    console.log(`ver ${y} and width ${windowY}`);
    myworkselectables.forEach((selectable, id) => {
        var selRect = selectable.getBoundingClientRect();
        var selectX = (selRect.left + selRect.right)/2;
        var selectY = (selRect.top + selRect.bottom)/2;
        var distanceX = Math.abs(x - selectX);
        var distanceY = Math.abs(y - selectY);
        selectable.style.opacity = 0.5 - distanceX*0.0004 - distanceY*0.0004;
    });
})






