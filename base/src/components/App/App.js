import React, { Component } from 'react'
import './app.css'

class App extends Component {

  state = {
    active: false
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render () {
    return (
      <div className='app'>
        <div onClick={this.handleClick}
          className={`button ${this.state.active&&'active'}`}>
          click me
        </div>
      </div>
    )
  }
}

export default App
