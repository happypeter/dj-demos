import React, { Component } from 'react'
import './app.css'
import Home from '../Home/Home';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  render () {
    return (
      <Router>
        <div className='app'>
          <Route path='/' component={Home} />
        </div>
      </Router>
    )
  }
}

export default App
