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

    let userName = 'happypeter'
    const { currentUser, showForm } = this.state
    return (
      <div className='app'>
        <Header
          showLoginForm={this.showLoginForm}
          currentUser={currentUser}/>
        <LoginForm
          login={this.login}
          show={showForm} />
      </div>
    )
  }
}

export default App
