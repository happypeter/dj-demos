import React, { Component } from 'react'
import './app.css'

class App extends Component {

  state = {
    initVal: 200
  }

  tick = () => {
    this.setState({
      initVal: this.state.initVal -1
    })
  }
  componentDidMount = () => {
    console.log('didmount')
    window.setInterval(this.tick, 1000)
  }

  render () {
    return (
      <div className='app'>
        {this.state.initVal}
      </div>
    )
  }
}

export default App
