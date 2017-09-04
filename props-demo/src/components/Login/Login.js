import React, { Component } from 'react'
import './login.css'
import Button from '../Button/Button'

class Login extends Component {
  render () {
    return (
      <div className='login'>
        Login
        <Button text='登录' />
      </div>
    )
  }
}

export default Login
