import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux'
import { logOutAction } from '../store/users_actions'

const mapStateToProps = (state) => ({ user : state.user })
const mapDispatchToProps = (dispatch) => ({ logOutAction : () => dispatch(logOutAction())})

class UsersContainer extends React.Component {

  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.props.logOutAction()
    this.props.history.push("/")
  }

  isLogged() {
    if(this.props.user !== '') {
      return (
        <div class="mdl-grid">
            <div class="mdl-layout-spacer"></div>
              <div class="mdl-cell mdl-cell--3-col">
                <h4 class="mdl-typography--text-center"> Right now you're signed in as: {(this.props.user).toUpperCase()}</h4>
                <button onClick={this.handleClick} class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                  LogOut
                </button>
              </div>
            <div class="mdl-layout-spacer"></div>
        </div>
      )
    } else {
      return (
        <div>
            <h4 class="mdl-typography--text-center">USER ACCESS</h4>
            <div class="mdl-typography--text-center"><Link to='/users/login'> Click here to Sign In </Link></div>
            <div class="mdl-typography--text-center"><Link to='/users/register'> Dont have an User? Click here to register </Link></div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.isLogged()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)




  

