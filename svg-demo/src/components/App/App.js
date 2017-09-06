import React, { Component } from 'react'
import './app.css'
import logo from './bag.svg'
import Logo from '../Logo'

class App extends Component {

  render () {
    return (
      <div className='app'>
        <img className='logo'
          src={logo} alt='logo' />
        <Logo fill='deeppink' size='32' />
      </div>
    )
  }
}

export default App
