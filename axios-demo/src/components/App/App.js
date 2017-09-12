import React, { Component } from 'react'
import './app.css'
import axios from 'axios'

class App extends Component {


  componentDidMount = () => {
    let data = {

    }
    axios.post('http://localhost:3008/posts', data).then(res => {
      console.log(res.data)
    })
  }
  render () {
    return (
      <div className='app'>
        hh
      </div>
    )
  }
}

export default App
