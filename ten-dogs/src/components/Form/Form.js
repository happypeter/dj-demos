import React, { Component } from 'react'
import axios from 'axios'
import './form.css'


class Form extends Component {

  state = {
    imgUrl: ''
  }

  handleSubmit = () => {
    axios.post('http://localhost:3008/dogs', this.state).then(
      res => {
        console.log(res.data)
        this.props.addImgToList(res.data)
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
        <div className='input-wrap'>
          <input
            value={this.state.imgUrl}
            onChange={this.handleChange}
            type='text' />
          <button onClick={this.handleSubmit}>
            添加
          </button>
        </div>
      </div>
    )
  }
}

export default Form
