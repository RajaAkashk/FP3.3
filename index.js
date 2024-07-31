const movies = [

  { id: 1, title: 'Movie 1', genre: 'action' },

  { id: 2, title: 'Movie 2', genre: 'drama' },

  { id: 3, title: 'Movie 3', genre: 'action' },

  { id: 4, title: 'Movie 4', genre: 'comedy' },

];

const movieList = document.querySelector('#movieList')

const genreGroups = document.querySelector('#genreGroups')

//generte movie list
const moviesListGenerate = movies.map(movie => {
  const liElement = document.createElement('li')
  liElement.textContent = `${movie.title} - ${movie.genre}`
  movieList.appendChild(liElement)
})

// genre group

// to get the list of movie title
const generateMovieGenreList = (word) => movies.reduce((accumulator,currentValue) =>{
  if(currentValue.genre === word){
    accumulator.push(currentValue.title)
  }
  return accumulator
},[]).join(", ");

// storing the movie title list
const actionMovies = generateMovieGenreList("action");
const dramaMovies = generateMovieGenreList("drama");
const comedyMovies = generateMovieGenreList("comedy");

// generate genre group in dom 
const generateMovieList = (genre,list) => {
  genreGroups.innerHTML += ` <p><strong>Genre:</strong> ${genre}</p>
  <p><strong>Movies:</strong> ${list}</p>
  <hr>`
}

generateMovieList("action",actionMovies);
generateMovieList("drama",dramaMovies);
generateMovieList("comedy",comedyMovies);

