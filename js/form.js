const selects = document.querySelectorAll('.form__select');
const selectsBlock = document.querySelector('.form__select-wrapper');

const inputs = document.querySelectorAll('.form__input');
const inputBlock = document.querySelector('.form__inputs');

const formbutton = document.querySelector('.form__button');
const accept = document.querySelector('.form__accept');
const acceptInput = document.querySelector('.form__accept-checkbox');

const toggeleSelect = (event) => {
    const el = event.target.closest('.form__select');
    console.log(el)

    for (let i = 0; i < selects.length; i += 1) {
        if (selects[i] === el) {
            el.classList.toggle('form__select-active');
        }
    }
}

const inputCheck = (el) => {
    const inputValue = el.value;
    const inputReg = el.getAttribute('data-reg');
    const reg = new RegExp(inputReg);
    console.log(reg.test(inputValue))
    if (!reg.test(inputValue)) {
        el.classList.remove('form__input-valid')
        el.classList.add('form__input-invalid')
    } else {
        el.classList.remove('form__input-invalid')
        el.classList.add('form__input-valid')
    }
}

const inputHandler = (event) => {
    const target = event.target;
    for (let i = 0; i < inputs.length; i += 1) {
        if (inputs[i] === target && target.hasAttribute('data-reg')) {
            inputCheck(target);
        }
    }
}

const buttonHandler = (event) => {
    if (acceptInput.checked !== true) {
        accept.classList.add('form__accept-invalid')
    } else {
        accept.classList.remove('form__accept-invalid')
    }

    const arrInputs = Array.from(inputs);
    for (let i = 0; i < arrInputs.length; i += 1) {
        if (!arrInputs[i].classList.contains('form__input-valid')) {
            arrInputs[i].classList.add('form__input-invalid');
            event.preventDefault();
        }
    }
    event.preventDefault();
}


selectsBlock.addEventListener('click', toggeleSelect);
inputBlock.addEventListener('input', inputHandler);
formbutton.addEventListener('click', buttonHandler)
