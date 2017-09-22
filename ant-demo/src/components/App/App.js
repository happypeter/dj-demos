import React, { Component } from 'react'
import './app.css'
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  render () {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default App
