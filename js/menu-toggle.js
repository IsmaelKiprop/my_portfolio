// js/menu-toggle.js

const closeButton = document.getElementById("navbar-close-btn");
const menuToggle = document.querySelector(".navbar-toggler");

menuToggle.addEventListener("click", () => {
    closeButton.classList.toggle("hide");
});
