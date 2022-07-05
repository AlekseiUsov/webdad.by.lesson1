let headerBurger = document.querySelector('.header__burger');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let phone = document.querySelector('.header__phone');
let body = document.querySelector('body');
let headerLinks = document.querySelectorAll('.header__link');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    header.classList.toggle('header--active');
    body.classList.toggle('body__noscroll');
    menu.classList.toggle('hidden');
    phone.classList.toggle('hidden');
});

headerLinks.forEach((link) => {
    link.addEventListener('click', () => {

    })
});
