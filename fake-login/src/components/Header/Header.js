import React, { Component } from 'react'
import './header.css'

class Header extends Component {

  render () {
    const { showLoginForm, currentUser, logout } = this.props
    const logoutStr = (
      <div className='logout-str'>
        {currentUser} |
        <span onClick={logout}
          className='logout-button'>
          退出
        </span>
      </div>
    )

    const loginStr = (
      <div onClick={showLoginForm}
      className='header-login-button'>
        登录
      </div>
    )
    return (
      <div className='header'>
        <div className='header-main'>
        </div>
        {currentUser ? logoutStr : loginStr}
      </div>
    )
  }
}

export default Header
