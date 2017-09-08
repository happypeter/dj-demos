import React, { Component } from 'react'
import './login-form.css'

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
    return (
      <div className={`login-form ${show&&'show'} `}>
          <input value={this.state.userName}
          onChange={this.handleChange}
          type='text' />
          <input type='password' />
          <button onClick={this.handleSubmit}
            type='submit'>登录</button>
        <button className='login-cancel'
          onClick={hideForm}>取消</button>
      </div>
    )
  }
}

export default LoginForm
