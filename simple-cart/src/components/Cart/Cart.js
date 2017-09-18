import React, { Component } from 'react'
import './cart.css'

class Cart extends Component {
  state = {
    total: 0,
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

  calTotal = (products) => {
    const total = products.reduce((sum, t) => {
      return sum + t.price*t.count
    }, 0)
    return total
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
      productsInCart: newProductsInCart,
      total: this.calTotal(newProductsInCart)
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
      productsInCart: newProductsInCart,
      total: this.calTotal(newProductsInCart)
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
