import React, { Component } from 'react'
import './app.css'

class App extends Component {

  state = {
    background: 'none'
  }

  handleClick = () => {
    this.setState({
      background: 'yellow'
    })
  }

  render () {
    return (
      <div className='app'>
        <div onClick={this.handleClick}
          style={{
            background: this.state.background
          }}
          className='button'>
          click me
        </div>
      </div>
    )
  }
}

export default App
