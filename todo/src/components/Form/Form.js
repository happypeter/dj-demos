import React, { Component } from 'react'
import './form.css'
import addIcon from './add.svg'

class Form extends Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = () => {
    const { text } = this.state
    console.log({ text })
    this.props.addTodo({ text })
    this.setState({
      text: ''
    })
  }

  render () {
    const { text } = this.state
    return (
      <div className='form'>
        <input type='text' value={text}
          onChange={this.handleChange} />
        <div className='add-btn-wrap' onClick={this.handleSubmit}>
          <img src={addIcon} alt='add' />
        </div>
      </div>
    )
  }
}

export default Form
