import React from "react";
import {addFavorite, selectMovieAction} from '../store/movies_actions'
import { connect } from 'react-redux'
import SingleMovie from '../components/SingleMovie'

const mapStateToProps = (state) => ({ selectedMovie: state.selectedMovie, user: state.user })
const mapDispatchToProps = (dispatch) => ({ 
  selectMovieAction : (movieId) => dispatch(selectMovieAction(movieId)),
  addFavorite : (movieId) => dispatch(addFavorite(movieId))
})

class SingleMovieContainer extends React.Component {
  
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
  
    componentDidMount() {
        return this.props.selectMovieAction(this.props.match.params.id)
    }

    favoriteButton() {
      if(this.props.user !== '') {
        return <button onClick={this.handleClick} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
        ADD TO FAVORITE
      </button>
      }
    }

    handleClick(e) {
      e.preventDefault()
      this.props.addFavorite(this.props.match.params.id)
    }
 
    render() {
      const { selectedMovie, user} = this.props
      return (
        <SingleMovie
        selectedMovie={selectedMovie}
        handleClick={this.handleClick}
        user={user}
        />
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovieContainer)
