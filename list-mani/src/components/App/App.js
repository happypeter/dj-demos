import React, { Component } from 'react'
import './app.css'

class App extends Component {
  state = {
    activeIndex: 1,
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

  render () {

    const list = this.state.sizes.map((t, i) => (
      <li style={{
          background: `${this.state.activeIndex === i ? 'yellow': 'red'}`
        }}
        onClick={() => console.log(i) } key={i}>{t.size}</li>
    ))
    return (
      <div className='app'>
        {list}
      </div>
    )
  }
}

export default App
