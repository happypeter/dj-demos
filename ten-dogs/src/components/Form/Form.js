import React, { Component } from 'react'
import './form.css'
import axios from 'axios'

class Form extends Component {

  state = {
    imgUrl: ''
  }

  handleChange = (e) => {
    this.setState({
      imgUrl: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state.imgUrl)
    const imgUrl = this.state.imgUrl
    axios.post('http://localhost:3008/dogs', { imgUrl })
    .then(
      res => {
        console.log(res.data)
      }
    )
    this.props.hideForm()
  }

  render () {
    return (
      <div className='form'>
        <input value={this.state.imgUrl}
        onChange={this.handleChange}
        type='text' />
        <button onClick={this.handleSubmit} >
        添加
        </button>
      </div>
    )
  }
}

export default Form
