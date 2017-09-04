import React, { Component } from 'react'
import './button.css'

class Button extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='button'>
        {children}
      </div>
    )
  }
}

export default Button
