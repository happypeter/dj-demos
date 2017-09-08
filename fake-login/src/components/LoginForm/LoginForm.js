import React, { Component } from 'react'
import './login-form.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: ''
  }

  changeUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state.userName)
    // 发 axios 请求，把数据提交到服务器
    this.props.login(this.state.userName)
  }

  render () {
    const { hideLoginForm } = this.props
    const { userName, password } = this.state
    return (
      <div className='login-form'>
        <input value={userName}
          onChange={this.changeUserName}
          type='text' />
        <input value={password}
          onChange={this.changePassword}
          type='password' />
        <button onClick={this.handleSubmit}
          className='login-button'>
          登录
        </button>
        <button className='login-cancel'
          onClick={hideLoginForm}>
          取消
        </button>
      </div>
    )
  }
}

export default LoginForm
