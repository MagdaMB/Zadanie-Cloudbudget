const mobileMenu = document.querySelector(".hamburger__box");
const menuList = document.querySelector(".header__menu.desktop");
mobileMenu.addEventListener('click', function () {
    menuList.classList.toggle("visible");
});

let form = document.getElementById("form");
let firstName = document.querySelector(".name");
let surname = document.querySelector(".surname");
let phone = document.querySelector(".phone");
let errorMessage = document.querySelector(".validationErrorMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let arrErrorMessage =[];

    if(firstName.value.length<3) {
        arrErrorMessage.push("Podaj poprawne imię");
    }

    if(surname.value.length<3) {
        arrErrorMessage.push("Podaj poprawne nazwisko");
    }

    let reg = /^(\d{9})$/;
    if(!reg.test(phone.value)) {
        arrErrorMessage.push("Podaj poprawny nr telefonu");
    }

    if(!arrErrorMessage.length) {
        e.target.submit();
    } else {
        errorMessage.innerHTML = `<ul>${arrErrorMessage.map(elem => `<li>${elem}</li>`).join("")}</ul>`;
    }
});

let liItems = document.querySelectorAll(".menu__items a");

liItems.forEach(aLink => {
    aLink.addEventListener('click', function() {
        liItems.forEach(elem => elem.classList.remove("active"));
        this.classList.add("active");
    })
})