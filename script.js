const mobileMenu = document.querySelector(".hamburger__box");
const menuList = document.querySelector(".header__menu.desktop");
mobileMenu.addEventListener('click', function() {
    menuList.classList.toggle("visible");
});