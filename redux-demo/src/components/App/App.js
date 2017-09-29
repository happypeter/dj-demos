import React, { Component } from 'react'
import './app.css'
import CommentBox from '../CommentBox/CommentBox'

class App extends Component {

  render () {
    return (
      <div className='app'>
        <CommentBox />
      </div>
    )
  }
}

export default App
