import React, { Component } from 'react'
import './products.css'

class Product extends Component {
  state = {
    products: [
      {
        id: '123',
        name: '提拉米苏',
        price: 12
      },
      {
        id: '342',
        name: '黑森林',
        price: 13
      },
      {
        id: '456',
        name: '半熟芝士',
        price: 15
      }
    ]
  }

  handleClick = (id) => {
    console.log(id)
  }
  
  render () {
    const { products } = this.state
    let productList = products.map(t => (
      <div key={t.id} className='product'>
        <h1>{t.name}</h1>
        <p>{t.price}</p>
        <button onClick={() => this.handleClick(t.id)}>
          购买
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
