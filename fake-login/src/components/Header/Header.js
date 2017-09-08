import React, { Component } from 'react'
import './header.css'

class Header extends Component {

  render () {
    const { showLoginForm, currentUser } = this.props
    const logoutStr = (
      <div className='logout-str'>
        {`${currentUser} | 退出`}
      </div>
    )
    return (
      <div className='header'>
        <div className='header-main'>
        </div>
        {logoutStr}
        <div onClick={showLoginForm}
        className='header-login-button'>
          登录
        </div>
      </div>
    )
  }
}

export default Header
