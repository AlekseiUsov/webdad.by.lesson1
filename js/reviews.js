let reviews = document.querySelector('.reviews');

reviews.addEventListener('click', (event) => {
    if (event.target.closest('.reviews__view--all')) {
        const review = event.target.parentElement;
        let startReview = review.querySelector('.reviews__text');
        let endReview = review.querySelector('.reviews__text-hidden');

        let textStartReview = startReview.innerHTML;
        let textEndReview = endReview.innerHTML;
        let textForAllReview = textStartReview.substing(0, textStartReview - 2);
    }
});