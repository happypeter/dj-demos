import React, { Component } from 'react'
import './app.css'

class App extends Component {
  state = {
    activeIndex: 0,
    sizes: [
      {
        size: 'X'
      },
      {
        size: 'XL'
      },
      {
        size: 'XXL'
      }
    ]
  }

  handleClick = (i) => {
    console.log(i)
    this.setState({
      activeIndex: i
    })
  }

  render () {

    const list = this.state.sizes.map((t, i) => (
      <div onClick={() => this.handleClick(i)}
        className={`size ${this.state.activeIndex===i&& 'active'}`}
        key={i}>{t.size}</div>
    ))
    return (
      <div className='app'>
        {list}
      </div>
    )
  }
}

export default App
