import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <div className='header'>
          <Link to='/'>首页</Link>
        </div>
        {this.props.children}
        <div className='footer'>
          footer
        </div>
      </div>
    )
  }
}

export default Layout
