import React, { Component } from 'react'
import './app.css'

class App extends Component {

  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    return (
      <div onClick={this.handleClick} className='app'>
        <div id="count" className='count'>
          {this.state.count}
        </div>
      </div>
    )
  }
}

export default App
