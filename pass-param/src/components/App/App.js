import React, { Component } from 'react'
import './app.css'

class App extends Component {
  handleClick = (name) => {
    console.log(`hello ${name}`)
  }


  render () {
    let name = 'happypeter'
    return (
      <div className='app'>
        <div onClick={() => this.handleClick(name)}
          className='button'>
          click me
        </div>
      </div>
    )
  }
}

export default App
