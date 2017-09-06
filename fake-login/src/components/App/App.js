import React, { Component } from 'react'
import './app.css'
import LoginForm from '../LoginForm/LoginForm'

class App extends Component {

  state = {
    currentUser: '',
    showForm: false
  }

  showLoginForm = () => {
    this.setState({
      showForm: true
    })
  }

  login = (userName) => {
    if (!userName) {
      return
    }
    this.setState({
      currentUser: userName,
      showForm: false
    })
  }

  render () {
    let loginStr = (
      <div onClick={this.showLoginForm}
        className="login">
        Login
      </div>
    )
    let userName = 'happypeter'
    const { currentUser, showForm } = this.state
    return (
      <div className='app'>
        <LoginForm
          login={this.login}
          show={showForm} />
        {currentUser || loginStr}
      </div>
    )
  }
}

export default App
