document.addEventListener('DOMContentLoaded', function () {
    // Get the movie title from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get('movie');

    // Update the movie title in the header
    document.getElementById('movie-title').textContent = movieTitle;

    // Set the movie image source
    const moviePoster = document.getElementById('movie-poster');
    moviePoster.src = `images/${movieTitle}.png`; // Assuming your image filenames are like "Avengers.png"

    // Display reviews
    const reviewsList = document.getElementById('reviews-list');

    // Load reviews for the specific movie from local storage or set to an empty array
    const reviewsKey = `${movieTitle}-reviews`;
    const reviews = JSON.parse(localStorage.getItem(reviewsKey)) || [];

    // Display loaded reviews
    reviews.forEach(review => {
        const newReviewLi = document.createElement('li');
        newReviewLi.innerHTML = `<h3>${review.user}</h3><p>${review.review}</p>`;
        reviewsList.appendChild(newReviewLi);
    });

    // Handle leaving a review
    document.getElementById('leave-review-button').addEventListener('click', function () {
        const userName = document.getElementById('user-name').value;
        const userReview = document.getElementById('user-review').value;

        if (userName && userReview) {
            // Add the new review to the list
            const newReview = { user: userName, review: userReview };
            reviews.push(newReview);

            // Save reviews to local storage
            localStorage.setItem(reviewsKey, JSON.stringify(reviews));

            // Display the new review
            const newReviewLi = document.createElement('li');
            newReviewLi.innerHTML = `<h3>${userName}</h3><p>${userReview}</p>`;
            reviewsList.appendChild(newReviewLi);

            // Clear the form
            document.getElementById('user-name').value = '';
            document.getElementById('user-review').value = '';
        } else {
            alert('Please enter your name and review before submitting.');
        }
    });
});
