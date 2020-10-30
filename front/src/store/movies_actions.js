import axios from "axios" 

export const moviesFinded = (movies) => {
    return { type: 'SEARCH_MOVIES', movies: movies }
}

export const selectMovie = (selectedMovie) => {
    return { type: 'SELECT_MOVIE', selectedMovie: selectedMovie }
}

export const searchMovies = (title) => (dispatch) => {
    return axios.get(`https://www.omdbapi.com/?apikey=d1dd9e30&s=${title}`)
        .then((res) => res.data.Search)
        .then((results) => { dispatch(moviesFinded(results)) })
        .catch(err => err)
    }

export const selectMovieAction = (movieId) => (dispatch) => {
    return axios.get(`https://www.omdbapi.com/?apikey=d1dd9e30&i=${movieId}`)
    .then(res => res.data)
    .then(movie => { dispatch(selectMovie(movie)) })
    .catch(err => err)
}

export const addFavorite = (movieId) => (dispatch) => {
    return axios.post('/api/favorite/add', {movieId : movieId})
    .then(favorite => console.log(favorite))
}  


