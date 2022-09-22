// Show and remove menu
let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu")
let links = document.querySelectorAll(".link")

toggle.addEventListener("click", () => menu.classList.toggle("show-menu"));
links.forEach(link => link.addEventListener("click", () => menu.classList.remove("show-menu")));

// Dark / light theme
let themeSwitch = document.querySelector("#themeSwitch");

themeSwitch.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        themeSwitch.classList.add("bx-toggle-left")
        themeSwitch.classList.remove("bx-toggle-right")
    } else {
        document.body.classList.add("dark");
        themeSwitch.classList.add("bx-toggle-right");
        themeSwitch.classList.remove("bx-toggle-left");
    }
});


