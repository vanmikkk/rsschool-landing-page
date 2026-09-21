let themeButton = document.querySelector("#theme");
let themeCircle = document.querySelector(".theme_circle");
let logo = document.querySelector(".logo img");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            if (logo) {
                logo.src = "./images/logo-dark.png";
            }
        } else {
            if (logo) {
                logo.src = "./images/logo.png";
            }
        }
    });
}