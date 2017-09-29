import React, { Component } from 'react'
import './app.css'
import CommentBox from '../CommentBox/CommentBox'
import PostBody from '../PostBody/PostBody'

class App extends Component {

  render () {
    return (
      <div className='app'>
        <div className="upper">
          <PostBody />
        </div>
        <div className="lower">
          <CommentBox />
        </div>
      </div>
    )
  }
}

export default App
