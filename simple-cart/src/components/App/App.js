import React, { Component } from 'react'
import './app.css'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'

class App extends Component {

  render () {
    return (
      <div className='app'>
        <div className='products'>
           <Products />
        </div>
        <div className='cart'>
           <Cart />
        </div>
      </div>
    )
  }
}

export default App
