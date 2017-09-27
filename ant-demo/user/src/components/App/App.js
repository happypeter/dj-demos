import React, { Component } from 'react'
import './app.css'
import axios from 'axios'

class App extends Component {

  state = {
    dishes: []
  }

  componentDidMount () {
    axios.get(`http://localhost:3008/dishes`).then(res => {
      console.log(res.data)
      this.setState({
        dishes: res.data
      })
    })
  }

  order = (id) => {
    console.log(id)
    const dish = this.state.dishes.find(t => t.id === id)

    const data = {
      name: dish.name,
      price: dish.price,
      poster: "https://avatars3.githubusercontent.com/u/72467?v=4&s=460",
      completed: false
    }

    console.log('dish-----', data)

    axios.post(`http://localhost:3008/orders`, data).then(
      res => {
        console.log(res.data)
        alert('购买成功')
      }
    )
  }
  render () {
    const { dishes } = this.state
    const dishList = dishes.map( t => (
      <div key={t.id} className='dish'>{t.name}--{t.price}
        <button onClick={() => this.order(t.id)}
          >购买</button>
      </div>
    ))
    return (
      <div className='app'>
        <h1>欢迎来到 Peter 的甜品店</h1>
        {dishList}
      </div>
    )
  }
}

export default App
