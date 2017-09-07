import React, { Component } from 'react'
import './app.css'
import Header from '../Header/Header'
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

  hideForm = () => {
    this.setState({
      showForm: false
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

  logout = () => {
    this.setState({
      currentUser: ''
    })
  }

  render () {

    let userName = 'happypeter'
    const { currentUser, showForm } = this.state
    return (
      <div className='app'>
        <Header
          logout={this.logout}
          showLoginForm={this.showLoginForm}
          currentUser={currentUser}/>
        <LoginForm
          login={this.login}
          show={showForm}
          hideForm={this.hideForm}
          />
      </div>
    )
  }
}

export default App
