let headerBurger = document.querySelector('.header__burger');
let header = document.querySelector('.header');
let menu = document.querySelector('.header__menu');
let phone = document.querySelector('.header__phone');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    header.classList.toggle('white');
    menu.classList.toggle('hidden');
    phone.classList.toggle('hidden');
});