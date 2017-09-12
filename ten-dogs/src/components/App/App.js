import React, { Component } from 'react'
import './app.css'
import {
  Router
} from 'react-router-dom'
import axios from 'axios'
import Form from '../Form/Form'

class App extends Component {

  state = {
    dogs: []
  }

  componentDidMount () {
    axios.get('http://localhost:3008/dogs').then(
      res => {
        console.log(res.data)
        this.setState({
          dogs: res.data
        })
      }
    )
  }

  render () {
    const dogList = this.state.dogs.map(t => (
      <div className='dog-img'
        style={{
          backgroundImage: `url(${t.imgUrl})`
        }}
        key={t.id}  alt='dog' />
    ))
    return (
      <div className='app'>
        {dogList}
        <Form />
      </div>
    )
  }
}

export default App
