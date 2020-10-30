import React from "react";

const SingleMovie = ({selectedMovie, handleClick, user}) => {
    
    const favoriteButton = () => {
        if(user !== '') {
          return (
            <button onClick={handleClick} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            ADD TO FAVORITE
            </button>
        )}
      }

    return (
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--4-col"></div>
        <div class="mdl-cell mdl-cell--4-col">
        <img src={selectedMovie.Poster}/>
        <ul class="demo-list-three mdl-list">
          <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
              <span>Title:</span>
              <span class="mdl-list__item-text-body">
              {selectedMovie.Title}
              </span>
            </span>  
          </li>
          <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
              <span>Year:</span>
              <span class="mdl-list__item-text-body">
              {selectedMovie.Year}
              </span>
            </span>
          </li>
          <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
              
              <span>Rating:</span>
              <span class="mdl-list__item-text-body">
              {selectedMovie.imdbRating}
              </span>
            </span> 
          </li>
          <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
              
              <span>Director:</span>
              <span class="mdl-list__item-text-body">
              {selectedMovie.Director}
              </span>
            </span>
          </li>
          <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
              
              <span>Actors:</span>
              <span class="mdl-list__item-text-body">
              {selectedMovie.Actors}
              </span>
            </span>
          </li>
          <li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
              
              <span>Description:</span>
              <span class="mdl-list__item-text-body">
              {selectedMovie.Plot}
              </span>
            </span> 
          </li>
        </ul>
            {favoriteButton()}
        </div>
        <div class="mdl-cell mdl-cell--4-col"></div>
      </div> 
    )
}

export default SingleMovie

{/* <ul>
    <li> Title: {selectedMovie.Title}</li>
    <li> Year: {selectedMovie.Year}</li>
    <li> Rating: {selectedMovie.imdbRating}</li>
    <li> Director: {selectedMovie.Director}</li>
    <li> Actors: {selectedMovie.Actors}</li>
    <li> Description: {selectedMovie.Plot}</li>
</ul> */}