let menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");


menuBtn.addEventListener('click', () => {

    navbar.classList.toggle("active");
})


let touch = document.querySelector(".touch");

let links = document.querySelector(".links");

touch.addEventListener('click', () => {

    links.classList.toggle("active-links");
})