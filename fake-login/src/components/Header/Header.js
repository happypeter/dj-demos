import React, { Component } from 'react'
import './header.css'

class Header extends Component {

  render () {
    const { showLoginForm, currentUser, logout } = this.props
    let loginStr = (
          <div onClick={showLoginForm}
            className="login">
            Login
          </div>
        )
    let logoutStr = (
      <div>
        {currentUser} | 
        <span onClick={logout}>
          退出
        </span>
      </div>

    )
    return (
      <div className='header'>
        <div className='header-main'>
        </div>
        <div className='header-login'>
          {currentUser ? logoutStr : loginStr}
        </div>
      </div>
    )
  }
}

export default Header
