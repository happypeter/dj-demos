import React, { Component } from 'react'
import './login-form.css'

class LoginForm extends Component {
  render () {
    const { hideLoginForm } = this.props
    return (
      <div className='login-form'>
        <input type='text' />
        <input type='password' />
        <button className='login-button'>
          登录
        </button>
        <button className='login-cancel'
          onClick={hideLoginForm}>
          取消
        </button>
      </div>
    )
  }
}

export default LoginForm
