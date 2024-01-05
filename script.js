let menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");


menuBtn.addEventListener('click', () => {

    navbar.classList.toggle("active");
    menuBtn.classList.toggle("color");

});


let touch = document.querySelector(".touch");
let links = document.querySelector(".links");

touch.addEventListener('click', () => {

    links.classList.toggle("open-close");

})