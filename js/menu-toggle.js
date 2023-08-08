// js/menu-toggle.js

const closeButton = document.getElementById("navbar-close-btn");
const menuToggle = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    closeButton.classList.toggle("hide");
});

// Close menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeButton.classList.add("hide");
    });
});

