let themeButton = document.querySelector("#theme");
let themeCircle = document.querySelector(".theme_circle");
let logo = document.querySelector(".logo img");
let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger_menu");
let burderLinks = document.querySelectorAll(".burger_links a")

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("theme") == "dark"){
        document.body.classList.toggle("dark");
        logo.src = "./images/logo-dark.png";
    }
})

if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            if (logo) {
                logo.src = "./images/logo-dark.png";
            }
            localStorage.setItem("theme", "dark")
        } else {
            if (logo) {
                logo.src = "./images/logo.png";
            }
            localStorage.setItem("theme", "light")
        }
    });
}

let burgerLinks = document.querySelectorAll('.burger_links a')

burgerLinks.forEach(lick => {
    lick.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
        document.body.style.overflowY = "auto"
    })
})

let spans = document.querySelectorAll(".burger span")

burger.addEventListener('click', () => {
    if(burgerMenu.classList.contains('active')){
        document.body.style.overflowY = "auto"
    } else {
        document.body.style.overflowY = "hidden"
    }
    burgerMenu.classList.toggle('active')
    spans.forEach(span => {
        span.classList.toggle('active')
    })
    burger.classList.toggle('active')
    
})


window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.style.overflowY == "hidden") {
    burgerMenu.classList.remove('active')
    document.body.style.overflowY = "auto"
  }
});

burderLinks.forEach(el => {
    el.addEventListener('click', () => {
        burgerMenu.classList.remove('active')
    })
})