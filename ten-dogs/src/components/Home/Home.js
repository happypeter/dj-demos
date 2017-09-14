import React, { Component } from 'react'
import './home.css'
import axios from 'axios'

import DogIcon from '../DogIcon/DogIcon'

class Home extends Component {
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
      <DogIcon key={t.id} dog={t} />
    ))
    return (
      <div className='home'>
        <div className='dog-list'>
          {dogList}
        </div>
      </div>
    )
  }
}

export default Home
