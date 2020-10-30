import React from "react";
import {Link} from "react-router-dom";

export default ({movies}) => (
  <div>
    <div class="mdl-grid">
    {movies.map(movie =>
        <div class="mdl-cell mdl-cell--3-col">
          <Link to={`/movies/${movie.imdbID}`}><img src={movie.Poster}/></Link>
          <Link to={`/movies/${movie.imdbID}`}><p>Title: {movie.Title}</p></Link>
          <p>Year: {movie.Year}</p>
        </div>
      )}
    </div>
  </div>
)