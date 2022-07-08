const reviews = document.querySelector('.reviews');
const buttons = document.querySelectorAll('.reviews__view--all');

const openReview = (event) => {
    const el = event.target;
    const button = el.parentElement;
    const blockReview = button.parentElement;
    const textReview = blockReview.querySelector('.reviews__wrapper-text');

    for (let i = 0; i < buttons.length; i += 1) {
        if (buttons[i] === button) {
            button.classList.toggle('reviews__view--all-active');
            textReview.classList.toggle('reviews__wrapper-text-active');
        }
    }
}

reviews.addEventListener('click', openReview);


