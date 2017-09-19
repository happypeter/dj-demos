import React, { Component } from 'react'
import './app.css'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'

class App extends Component {

  state = {
    productsInCart: [
      {
        id: '123',
        name: '提拉米苏',
        price: 12,
        count: 0
      },
      {
        id: '342',
        name: '黑森林',
        price: 13,
        count: 0
      }
    ]
  }

  minus = (id) => {
    console.log(id)
    const newProductsInCart = this.state.productsInCart.map(t => {
      if(id === t.id && t.count !== 0) {
        return {...t, count: t.count - 1}
      }
      return t;
    })
    this.setState({
      productsInCart: newProductsInCart
    })
  }

  add = (id) => {
    console.log(id)
    const newProductsInCart = this.state.productsInCart.map(t => {
      if(id === t.id) {
        return {...t, count: t.count + 1}
      }
      return t;
    })
    this.setState({
      productsInCart: newProductsInCart
    })
  }

  render () {
    const { productsInCart } = this.state
    return (
      <div className='app'>
        <div className='products'>
           <Products />
        </div>
        <div className='cart'>
           <Cart
             add={this.add}
             minus={this.minus}
             productsInCart={productsInCart}/>
        </div>
      </div>
    )
  }
}

export default App
