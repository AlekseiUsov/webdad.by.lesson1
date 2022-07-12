const sliderOptions = document.querySelector('.slider__options');
const sliderCircles = document.querySelector('.slider__circles');

const options = document.querySelectorAll('.slider__option');
const circles = document.querySelectorAll('.slider__circle');
const slides = document.querySelectorAll('.slider__slide');

const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');


const activeOption = (event) => {
    const option = event.target.closest('.slider__option');
    const circle = event.target.closest('.slider__circle');

    for (let i = 0; i < options.length; i += 1) {
        if (options[i] === option || circles[i] === circle) {
            circles[i].classList.add('slider__circle--active')
            options[i].classList.add('slider__option-active')
            slides[i].classList.add('slider__slide-active')
        } else if (option !== null || circle !== null) {
            options[i].classList.remove('slider__option-active')
            slides[i].classList.remove('slider__slide-active')
            circles[i].classList.remove('slider__circle--active')
        }
    }
}

let index = 0;

const activeSlide = (n) => {
    for (let i = 0; i < slides.length; i += 1) {
        slides[i].classList.remove('slider__slide-active');
    }
    slides[n].classList.add('slider__slide-active')
}

const nextSlide = () => {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index += 1;
        activeSlide(index);
    }
}

const prevSlide = (n) => {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index -= 1;
        activeSlide(index);
    }
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
sliderOptions.addEventListener('click', activeOption);
sliderCircles.addEventListener('click', activeOption);