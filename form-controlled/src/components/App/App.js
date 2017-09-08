import React, { Component } from 'react'
import './app.css'

class App extends Component {

  state = {
    username: ''
  }

  handleSubmit = (e) => {
    // 提交数据到后台，未来我们用 axios
    console.log(this.state.username)
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  render () {
    const { username } = this.state
    return (
      <div className='app'>
      <input
        onChange={this.handleChange}
        value={username}
        type='text'/>
      <button onClick={this.handleSubmit}
        type='submit'>登录</button>
      </div>
    )
  }
}

export default App
