import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {

  state = {
    imgUrl: ''
  }

  handleSubmit = () => {
    axios.post('http://localhost:3008/dogs', this.state).then(
      res => {
        console.log(res.data)
      }
    )
    console.log(this.state)

  }

  handleChange = (e) => {
    this.setState({
      imgUrl: e.target.value
    })
  }

  render () {
    return (
      <div className='form'>
        <input
          value={this.state.imgUrl}
          onChange={this.handleChange}
          type='text' />
        <button onClick={this.handleSubmit}>
          添加
        </button>
      </div>
    )
  }
}

export default Form
