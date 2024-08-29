let menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");

menuBtn.addEventListener('click', () => {

    navbar.classList.toggle("active");

});


let touch = document.querySelector(".touch");
let links = document.querySelector(".links");

touch.addEventListener('click', () => {

    links.classList.toggle("open-close");

})


let navItems = document.getElementsByClassName("nav-item");

for (let i = 0; i < navItems.length; i++) {

    navItems[i].addEventListener('click', () => {

        navbar.classList.toggle("active");

    });
}


document.addEventListener('scroll', () => {
    
    links.classList.remove("open-close");
    navbar.classList.remove("active");


})
