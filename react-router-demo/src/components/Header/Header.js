import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
      </div>
    )
  }
}

export default Header
