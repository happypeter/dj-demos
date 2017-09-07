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
    const { show, hideForm } = this.props
    console.log('xxxx', show)
    return (
      <div className={`login-form ${show&&'show'} `}>
        <form onSubmit={this.handleSubmit} >
          <input value={this.state.userName}
          onChange={this.handleChange}
          type='text' />
        <button type='submit'>登录</button>
        <button onClick={hideForm}>取消</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
