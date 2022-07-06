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

headerBurger.addEventListener('click', () => {
    toggle();
})

headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        toggle();
    })
})

/* body.addEventListener('click', () => {
    if (header.classList.contains('header--active')) {
        toggle();
    }
}) */




