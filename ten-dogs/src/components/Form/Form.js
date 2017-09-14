import React, { Component } from 'react'
import './form.css'

class Form extends Component {
  render () {
    return (
      <div className='form'>
        <input type='text' />
        <button onClick={this.props.hideForm}>
        添加
        </button>
      </div>
    )
  }
}

export default Form
