import React, { Component } from 'react'
import './app.css'
import add from './add.svg'
import {
  Router,
  Link
} from 'react-router-dom'
import axios from 'axios'
import Form from '../Form/Form'

class App extends Component {

  state = {
    dogs: [],
    showForm: false
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

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  addImgToList = (img) => {
    console.log(img)
    let dogs = [...this.state.dogs, img]
    this.setState({ dogs })
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
        <div className='img-list'>
          {dogList}
        </div>
        <div  onClick={this.showForm} >
          <img src={add} alt='add' />
        </div>
        {this.state.showForm && <Form addImgToList={this.addImgToList}/>}
      </div>
    )
  }
}

export default App
