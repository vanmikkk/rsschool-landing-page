let themeButton = document.querySelector("#theme");
let themeSircle = document.querySelector(".theme_circle");
let body = document.querySelector("body");

themeButton.addEventListener('click', () => {
     if(themeSircle.style.left == "45px"){
        themeSircle.style.left = 2 + "px"
        body.style.backgroundColor = "#E1D4C9"
    } else {
        themeSircle.style.left = 45 + "px"
        body.style.backgroundColor = "#292826"
    }
})