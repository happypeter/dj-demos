import React, { Component } from 'react'
import './button.css'

class Button extends Component {
  render () {
    const { text } = this.props
    return (
      <div className='button'>
        {text}
      </div>
    )
  }
}

export default Button
