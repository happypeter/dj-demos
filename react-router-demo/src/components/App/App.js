import React, { Component } from 'react'
import './app.css'
import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'
 import Post from '../Post/Post'

import Home from '../Home/Home'


class App extends Component {

  state = {
    posts: [
      {
        id: '134',
        title: 'Git 使用技巧',
        content: 'main content'
      },
      {
        id: '256',
        title: '命令使用技巧',
        content: 'main content'
      },
      {
        id: '545',
        title: 'Github 基础',
        content: 'main content'
      }
    ]
  }

  render () {

    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/post/:id' component={Post} />
        </div>
      </Router>
    )
  }
}

export default App
