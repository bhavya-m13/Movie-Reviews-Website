
function filter(c) {
    var x = document.getElementsByClassName("filterDiv");
    var b = document.getElementsByClassName("btn");
    
    for (var i = 0; i < x.length; i++) {
        if (c == "all" || c == "alphabetical") {
            x[i].style.display = "block";
        } else {
            if (x[i].classList.contains(c)) {
                x[i].style.display = "block";
            } else {
                x[i].style.display = "none";
            }
        }
    }

    if (c == "alphabetical") {
        var list = document.getElementById("movies");
        var divs = list.getElementsByTagName("div");
        var listItems = [];
        
        for (var i = 0; i < divs.length; i++) {
            listItems.push(divs.item(i));
        }

        listItems.sort(function(a,b) {
            var A = a.getAttribute('id');
            var B = b.getAttribute('id');
            return (A < B) ? -1 : (A > B) ? 1 : 0;
        });

        for (var i = 0; i < listItems.length; i++) {
            list.appendChild(listItems[i]);
        }
    }
    
    for (var i = 0; i < b.length; i++) {
        if (b[i].classList.contains("active") && !(b[i].classList.contains(c))) { // button is active but not filter selected
            b[i].classList.remove("active");
        } else if (b[i].classList.contains(c) && !(b[i].classList.contains("active"))) { // button is not active but is filter selected
            b[i].classList.add("active");
        }
    }
}

function search() {
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var list = document.getElementById("movies")
    var divs = list.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        var id = divs.item(i).getAttribute('id').toUpperCase();
        if (id.indexOf(filter) > -1) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Handle movie clicks on the home page
    const movieLinks = document.querySelectorAll('#movies a');
    movieLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior
            const movieTitle = this.getAttribute('data-movie');
            window.location.href = `review_page.html?movie=${encodeURIComponent(movieTitle)}`;
        });
    });

    // Get the movie title from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get('movie');

    // Update the movie title in the header
    document.getElementById('movie-title').textContent = movieTitle;

    // Set the movie image source
    const moviePoster = document.getElementById('movie-poster');
    moviePoster.src = `images/${movieTitle}.png`; // Assuming your image filenames are like "Avengers: Infinity War.png"

    // Dummy array 
    const reviews = [
        { user: 'User 1', review: 'Review goes here' },
        { user: 'User 2', review: 'Review goes here' },
        { user: 'User 3', review: 'Review goes here' },
    ];

    // Display reviews
    const reviewsList = document.getElementById('reviews-list');
    reviews.forEach(review => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${review.user}</h3><p>${review.review}</p>`;
        reviewsList.appendChild(li);
    });

    document.getElementById('leave-review-button').addEventListener('click', function () {
        alert('Implement your logic to handle leaving a review');
    });
});
