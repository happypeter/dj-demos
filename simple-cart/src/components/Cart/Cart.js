import React, { Component } from 'react'
import './cart.css'

class Cart extends Component {
  state = {
    total: '23.1',
    productsInCart: [
      {
        id: '123',
        name: '提拉米苏',
        price: 12,
        count: 2
      },
      {
        id: '342',
        name: '黑森林',
        price: 13,
        count: 2
      }
    ]
  }

  minus = (id) => {
    console.log(id)
    const newProductsInCart = this.state.productsInCart.map(t => {
      if(id === t.id) {
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
    const { total, productsInCart } = this.state
    const productList = productsInCart.map(t => (
      <div key={t.id} className='product-in-cart'>
        {t.name}--{t.price}
        <div className='count-wrap'>
          <div onClick={() => this.minus(t.id)}
          className='btn minus'>
            -
          </div>
          {t.count}
          <div onClick={() => this.add(t.id)}
          className='btn add'>
            +
          </div>
        </div>
      </div>
    ))
    return (
      <div className='cart'>
        <div className='total'>
          {total}
        </div>
        <div className='cart-product-list'>
          {productList}
        </div>
      </div>
    )
  }
}

export default Cart
