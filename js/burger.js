let headerBurger = document.querySelector('.header__burger');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let phone = document.querySelector('.header__phone');
let body = document.querySelector('body');
let headerLinks = document.querySelectorAll('.header__link');

function toggle() {
    headerBurger.classList.toggle('active');
    header.classList.toggle('header--active');
    body.classList.toggle('body__noscroll');
    menu.classList.toggle('hidden');
    phone.classList.toggle('hidden');
}

headerBurger.addEventListener('click', toggle);

header.addEventListener('click', function (event) {
    if (event.target.closest('.header__link')) {
        toggle();
    }
});





