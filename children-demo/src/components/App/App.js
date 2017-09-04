import React, { Component } from 'react'
import './app.css'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Signup />
        <Login />
      </div>
    )
  }
}

export default App
