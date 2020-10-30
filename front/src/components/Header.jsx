import React from "react";
import { connect } from 'react-redux'
import {Link} from "react-router-dom";

const mapStateToProps = (state) => ({ user : state.user })

class Header extends React.Component {

  isLogged() {
    if(this.props.user !== '')
      return (
      <Link to='/users'>
        <button class="mdl-button mdl-js-button mdl-button--raised">
          {(this.props.user).toUpperCase()}
        </button>
      </Link>
      )
  }

  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <Link to='/home'><a class="mdl-layout-title mdl-navigation__link">OMDB</a></Link>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <Link to='/movies'><a class="mdl-navigation__link">MOVIES</a></Link>
              <Link to='/users'><a class="mdl-navigation__link">USERS</a></Link>
            </nav>
            {this.isLogged()}
          </div>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Header)