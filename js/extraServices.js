const formTitlleWrapper = document.querySelector('.form__checkboxes-title-wrapper');
const checkboxes = document.querySelectorAll('.form__checkbox');
const formCheckboxTitle = document.querySelector('.form__checkboxes-title');

const toggleExtraServices = (event) => {
    for (let i = 0; i < checkboxes.length; i += 1) {
        checkboxes[i].classList.toggle('form__checkbox-active');
        formCheckboxTitle.classList.toggle('form__checkboxes-title-active')
    }
}

formTitlleWrapper.addEventListener('click', toggleExtraServices);
