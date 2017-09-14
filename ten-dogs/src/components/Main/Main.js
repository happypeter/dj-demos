import React, { Component } from 'react'
import Home from '../Home/Home'
import Dog from '../Dog/Dog'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/dog/:id' component={Dog} />
        </div>
      </Router>
    )
  }
}

export default Main
