const sliderOptions = document.querySelector('.slider__options');
const sliderCircles = document.querySelector('.slider__circles');
const options = document.querySelectorAll('.slider__option');
const circles = document.querySelectorAll('.slider__circle');
const slides = document.querySelectorAll('.slider__slide');


const activeOption = (event) => {
    const option = event.target;

    for (let i = 0; i < options.length; i += 1) {
        if (options[i] === option || circles[i] === option) {
            circles[i].classList.add('slider__circle--active')
            options[i].classList.add('slider__option-active')
            slides[i].classList.add('slider__slide-active')
        } else {
            options[i].classList.remove('slider__option-active')
            slides[i].classList.remove('slider__slide-active')
            circles[i].classList.remove('slider__circle--active')
        }
    }
}
sliderOptions.addEventListener('click', activeOption)
sliderCircles.addEventListener('click', activeOption)