import React from "react";
import MoviesContainer from '../containers/MoviesContainer'
import SingleMovieContainer from '../containers/SingleMovieContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'
import UsersContainer from '../containers/UsersContainer'
import Home from './Home'
import Header from './Header'
import {Redirect, Switch, Route} from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header/>
        <div class="page-content">
        <Switch>
          <Route path='/home' component={Home}/>
          <Route exact path='/users' component={UsersContainer}/>
          <Route path='/users/login' component={LoginContainer}/>
          <Route path='/users/register' component={RegisterContainer}/>
          <Route exact path='/movies' component={MoviesContainer}/>
          <Route path='/movies/:id' component={SingleMovieContainer}/>
          <Redirect from="/" to="/home" />
        </Switch>
        </div>
    </div>
  )
}

export default Main