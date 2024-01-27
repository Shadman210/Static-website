var elemContainer = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

elemContainer.addEventListener("mouseenter", function() {
    fixed.style.display = "block"
})

elemContainer.addEventListener("mouseleave", function() {
    fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem")
elems.forEach((e) => {
    e.addEventListener("mouseenter", ()=> {
        var image = e.getAttribute("data-image")
        console.log(image);
        fixed.style.backgroundImage = `url(${image})`;
    })
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


