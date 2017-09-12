import React, { Component } from 'react'
import './app.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Post extends Component {
  render () {
    const { title } = this.props.match.params
    return (
      <div className='Post'>
        <h1>
          {title}
        </h1>
      </div>
    )
  }
}


class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <Link to='/post/git'>Git 文章</Link>
          <Link to='/post/cli'>Cli 文章</Link>
          <Route path='/post/:title' component={Post} />
        </div>
      </Router>
    )
  }
}

export default App
