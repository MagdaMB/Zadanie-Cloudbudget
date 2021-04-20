const mobileMenu = document.querySelector(".hamburger__box");
const menuList = document.querySelector(".header__menu.desktop");
mobileMenu.addEventListener('click', function() {
    menuList.classList.toggle("visible");
});

// const form = document.getElementById("form");
// const firstName = document.querySelector(".name");
// const surname = document.querySelector(".surname");
// const phone = document.querySelector(".phone");
// const errorMessage = document.querySelector(".validationErrorMessage");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     let arrErrorMessage =[];

//     if(firstName.value.length<=3) {
//         arrErrorMessage.push("Podaj poprawne imię");
//     }

//     if(surname.value.length<=3) {
//         arrErrorMessage.push("Podaj poprawne nazwisko");
//     }

//     const reg = /^(\d{9})$/;
//     if(!reg.test(phone.value)) {
//         arrErrorMessage.push("Podaj poprawny nr telefonu");
//     }

//     if(!arrErrorMessage.length) {
//         e.target.submit();
//     } else {
//         arrErrorMessage.innerHTML = `<p>Występują błędy w formularzu</p>`;
//     }
// });
