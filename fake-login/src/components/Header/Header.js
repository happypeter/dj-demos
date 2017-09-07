import React, { Component } from 'react'
import './header.css'

class Header extends Component {

  render () {
    const { showLoginForm, currentUser } = this.props
    let loginStr = (
          <div onClick={showLoginForm}
            className="login">
            Login
          </div>
        )
    return (
      <div className='header'>
        <div className='header-main'>
        </div>
        <div className='header-login'>
          {currentUser || loginStr}
        </div>
      </div>
    )
  }
}

export default Header
