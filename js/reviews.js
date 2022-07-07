let reviews = document.querySelector('.reviews');

reviews.addEventListener('click', (event) => {
    if (event.target.closest('.reviews__view--all')) {
        const button = event.target.parentElement;
        const review = button.parentElement;

        let startReview = review.querySelector('.reviews__text');
        let endReview = review.querySelector('.reviews__text-hidden');

        let textStartReview = startReview.innerHTML;
        let textEndReview = endReview.innerHTML;

        let textAllReview = textStartReview.replace('...', ' ');
        textAllReview = [textStartReview, textEndReview].join(' ');

        const allReview = document.createElement('p');
        allReview.innerHTML = textAllReview;
    }
});

