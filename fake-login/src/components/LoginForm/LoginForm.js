import React, { Component } from 'react'
import './login.css'

class LoginForm extends Component {

  state = {
    userName: ''
  }

  handleChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.userName)
    this.props.login(this.state.userName)
  }

  render () {
    const { show } = this.props
    console.log('xxxx', show)
    return (
      <div className={`login-form ${show&&'show'} `}>
        <form onSubmit={this.handleSubmit} >
          <input value={this.state.userName}
          onChange={this.handleChange}
          type='text' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default LoginForm
