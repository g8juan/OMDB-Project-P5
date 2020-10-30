import React from "react";
import { connect } from 'react-redux'
import { loginAction } from "../store/users_actions";
import Login from '../components/Login'

const mapStateToProps = (state) => ({ user : state.user })
const mapDispatchToProps = (dispatch) => ({ loginAction : (userInfo) => dispatch(loginAction(userInfo))})

class LoginContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {email: '', password: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        console.log(e.target.value)
        if(e.target.name == 'username') this.setState({email: e.target.value})
        if (e.target.name == 'password') this.setState({password: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.loginAction(this.state)
        this.props.history.push("/")
    }
    
    render() {
        return (
        <div>
            <Login
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
