function Print(Target) {
    console.log(Target);
}

let Nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    // Print("I am printing")
    if (window.scrollY > window.innerHeight) {
        Nav.classList.add("Active");
    } else {
        Nav.classList.remove("Active");
    }
})

let Toggle_btn = document.querySelector(".Toggle");
let Ul = document.querySelector(".Navigation ul");
let Clicked = false;
Toggle_btn.addEventListener("click", () => {
    if (Clicked == false) {
        Ul.classList.add("Clicked");
        Toggle_btn.classList.add("Active")
        Clicked = true;
    } else {
        Ul.classList.remove("Clicked");
        Toggle_btn.classList.remove("Active")
        Clicked = false;
    }
})





$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })



});