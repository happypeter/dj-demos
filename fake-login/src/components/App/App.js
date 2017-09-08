import React, { Component } from 'react'
import './app.css'
import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'

class App extends Component {

  state = {
    showForm: true,
    currentUser: ''
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

  login = (userName) => {
    this.setState({
      currentUser: userName
    })
  }

  render () {
    const { showForm, currentUser  } = this.state
    return (
      <div className='app'>
        <Header
          currentUser={currentUser}
          showLoginForm={this.showLoginForm}
          />
        {showForm && <LoginForm
            login={this.login}
            hideLoginForm={this.hideLoginForm}
          />}
      </div>
    )
  }
}

export default App
