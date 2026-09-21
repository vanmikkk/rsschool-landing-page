let themeButton = document.querySelector("#theme");
let themeCircle = document.querySelector(".theme_circle");
let logo = document.querySelector(".logo img");

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