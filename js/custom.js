const burger = document.querySelector(".burger i")
const nav = document.querySelector(".nav")
console.log(nav)

function showHamburger() {
  
  burger.classList.toggle("fa-bars");

  nav.classList.toggle("nav-active");
  burger.classList.toggle("fa-times");
}
const latteBurger = document.querySelector(".latte-burger i")
const latteNav = document.querySelector(".latte-nav")

