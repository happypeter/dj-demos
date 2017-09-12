import React, { Component } from 'react'
import './app.css'
import add from './add.svg'
import DogImg from '../DogImg/DogImg'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'
import Form from '../Form/Form'
import Dog from '../Dog/Dog'

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
    this.setState({ dogs, showForm: false })
  }

  filterList = (id) => {
    console.log('id', id)
    const { dogs } = this.state
    this.setState({
      dogs: dogs.filter(item => item.id !== id )
    })
  }

  deleteIcon = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3008/dogs/${id}`).then(
      res => {
        console.log(res)
        this.filterList(id)
      }
    )
  }

  render () {
    const dogList = this.state.dogs.map(t => (
      <DogImg key={t.id} deleteIcon={this.deleteIcon}
      dog={t} />
    ))
    return (
      <Router>
        <div className='app'>
          <div className='img-list'>
            {dogList}
          </div>
          <div  onClick={this.showForm} >
            <img src={add} alt='add' />
          </div>
          {this.state.showForm && <Form addImgToList={this.addImgToList}/>}
          <Route path='/dog/:id' component={Dog} />
        </div>
      </Router>
    )
  }
}

export default App
