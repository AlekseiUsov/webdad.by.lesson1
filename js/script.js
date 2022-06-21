let headerBurger = document.querySelector('.header__burger');
let header = document.querySelector('.header');
headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    header.classList.toggle('white');
});