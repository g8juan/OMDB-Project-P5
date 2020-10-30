const defaultState = {
    movies: [],
    selectedMovie: {},
    user: '',
    password: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'SEARCH_MOVIES':
      return {...state, movies: action.movies}
    case 'USER_LOGIN':
      return {...state, user: action.user}
    case 'PASSWORD_LOGIN':
      return {...state, password: action.password}
    case 'SELECT_MOVIE':
      return {...state, selectedMovie: action.selectedMovie}
    default:
      return state;
    }
  }