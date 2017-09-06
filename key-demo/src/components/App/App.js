import React, { Component } from 'react'
import './app.css'

class App extends Component {

  state = {
    sizes: [
      {
        size: 'M'
      },
      {
        size: 'L'
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
    // const sizeList = [
    //   <div key='1' className="size">M</div>,
    //   <div key='2' className="size">L</div>,
    //   <div key='3' className="size">XL</div>,
    //   <div key='4' className="size">XXL</div>
    // ]
    const sizeList = this.state.sizes.map((item, i) => (<div key={i}
                  className="size">
                  {item.size}
              </div>)
    )
    return (
      <div className='app'>
        <div className="sizes">
          {sizeList}
        </div>
      </div>
    )
  }
}

export default App
