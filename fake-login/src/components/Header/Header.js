import React, { Component } from 'react'
import './header.css'

class Header extends Component {

  render () {
    const { showLoginForm } = this.props
    return (
      <div className='header'>
        <div className='header-main'>
        </div>
        <div onClick={showLoginForm}
        className='header-login-button'>
          登录
        </div>
      </div>
    )
  }
}

export default Header
