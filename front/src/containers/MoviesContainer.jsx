import React from "react";
import { connect } from 'react-redux'
import { searchMovies } from "../store/movies_actions";
import Movies from '../components/Movies'

const mapStateToProps = (state) => ({ movies : state.movies })
const mapDispatchToProps = (dispatch) => ({ searchMovies : (title) => dispatch(searchMovies(title))})

class MoviesContainer extends React.Component {
  constructor(props){
      super(props)
       this.state = {inputMovie: ''}
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
    }
 
    handleChange(e){
        e.preventDefault()
        this.setState({inputMovie: e.target.value})
    }

    handleSubmit(e){
      e.preventDefault()
      this.props.searchMovies(this.state.inputMovie)
    }

  render() {
    const {movies} = this.props
    return (
        <div>
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--4-col"></div>
            <div class="mdl-cell mdl-cell--4-col">
              <form action="#" onSubmit={this.handleSubmit}>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input class="mdl-textfield__input" type="text" id="sample3" onChange={this.handleChange}/>
                  <label class="mdl-textfield__label" for="sample3">Search a movie...</label>
                </div>
              </form>
            </div>
            <div class="mdl-cell mdl-cell--4-col"></div>
          </div>
            <Movies movies={movies}/>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)