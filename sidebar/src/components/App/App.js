import React, { Component } from 'react'
import './app.css'

class App extends Component {
  state = {
    open: true
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render () {
    return (
      <div className='app'>
        <div onClick={this.handleClick}
          className='burger'>
        </div>
        <div className={`sidebar ${this.state.open && 'show'}`}>

        </div>
      </div>
    )
  }
}

export default App
