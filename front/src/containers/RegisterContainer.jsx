import React from "react";
import axios from 'axios'
import Register from '../components/Register'

export default class RegisterContainer extends React.Component {

    constructor(){
        super()
        this.state = { email: '', password: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        if(e.target.name == 'username') this.setState({email: e.target.value})
        if (e.target.name == 'password') this.setState({password: e.target.value})
    }

    handleSubmit(e) {
      e.preventDefault()
      return axios.post('/api/register', this.state)
      .then(() => this.props.history.push("/"))
      .catch(err => err)
    }
    
    render(){
        return(
            <Register
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
        )
    }
}