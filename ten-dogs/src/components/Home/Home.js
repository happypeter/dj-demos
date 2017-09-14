import React, { Component } from 'react'
import './home.css'
import axios from 'axios'
import addIcon from './add.svg'
import DogIcon from '../DogIcon/DogIcon'
import Form from '../Form/Form'

class Home extends Component {
  state = {
    dogs: [],
    showForm: true
  }

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  hideForm = () => {
    this.setState({
      showForm: false
    })
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
      <DogIcon key={t.id} dog={t} />
    ))
    return (
      <div className='home'>
        <div className='form-wrap'>
          {this.state.showForm && <Form hideForm={this.hideForm}/> }
        </div>
        <div className='dog-list'>
          {dogList}
        </div>
        <div className='add-button'>
          <img onClick={this.showForm}
            src={addIcon} alt='add' />
        </div>
      </div>
    )
  }
}

export default Home
