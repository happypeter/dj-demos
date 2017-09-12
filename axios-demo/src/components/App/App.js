import React, { Component } from 'react'
import './app.css'
import axios from 'axios'

class App extends Component {

  state = {
    username: '',
    avatar: ''
  }

  componentDidMount = () => {
    axios.get('https://api.github.com/users/happypeter').then(res => {
      console.log(res.data)
      this.setState({
        username: res.data.login,
        avatar: res.data.avatar_url
      })
    })
  }
  render () {
    return (
      <div className='app'>
        <img src={this.state.avatar} alt='avatar'/>
        <h1>
          {this.state.username}
        </h1>
      </div>
    )
  }
}

export default App
