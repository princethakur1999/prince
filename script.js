let menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");


menuBtn.addEventListener('click', () => {

    navbar.classList.toggle("active");
})