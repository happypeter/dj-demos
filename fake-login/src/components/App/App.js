import React, { Component } from 'react'
import './app.css'
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'

class App extends Component {

  state = {
    showForm: true
  }

  showLoginForm = () => {
    this.setState({
      showForm: true
    })
  }

  hideLoginForm = () => {
    console.log('hideLoginForm...')
    this.setState({
      showForm: false
    })
  }

  render () {
    const { showForm } = this.state
    return (
      <div className='app'>
        <Header
          showLoginForm={this.showLoginForm}
          />
        {showForm && <LoginForm
            hideLoginForm={this.hideLoginForm}
          />}
      </div>
    )
  }
}

export default App
