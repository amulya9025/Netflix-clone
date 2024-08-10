document.addEventListener('DOMContentLoaded', () => {
    const movieData = [
        { title: "Movie 1" },
        { title: "Movie 2" },
        { title: "Movie 3" },
        { title: "Movie 4" },
        { title: "Movie 5" }
    ];

    const movieRow = document.querySelector('.movie-row');

    movieData.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.textContent = movie.title;
        movieRow.appendChild(movieElement);
    });
});
