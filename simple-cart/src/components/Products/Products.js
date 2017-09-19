import React, { Component } from 'react'
import './products.css'

class Product extends Component {
  state = {
    products: [
      {
        id: '123',
        name: '提拉米苏',
        price: 12,
        isInCart: false
      },
      {
        id: '342',
        name: '黑森林',
        price: 13,
        isInCart: false
      },
      {
        id: '456',
        name: '半熟芝士',
        price: 15,
        isInCart: false
      }
    ]
  }

  handleClick = (id) => {
    console.log(id)
    this.setState({
      products: this.state.products.map(t => {
        if(t.id === id) return { ...t, isInCart: true}
        return t
      })
    })
    const product = this.state.products
                    .find(t => t.id === id)
    this.props.addToCart(product)
  }

  render () {
    const { products } = this.state
    let productList = products.map(t => (
      <div key={t.id} className='product'>
        <h1>{t.name}</h1>
        <p>{t.price}</p>
        <button disabled={t.isInCart}
          className={t.isInCart && 'disabled'}
          onClick={() => this.handleClick(t.id)}>
          {t.isInCart ? '已购' : '购买'}
        </button>
      </div>
    ))
    return (
      <div className='products'>
        {productList}
      </div>
    )
  }
}

export default Product
