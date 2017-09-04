import React, { Component } from 'react'
import './app.css'

class App extends Component {

  sayHello = () => {
    console.log('hello')
  }
  render () {
    return (
      <div className='app'>
        <div onClick={this.sayHello} className='click'>
          click me
        </div>
      </div>
    )
  }
}

export default App
