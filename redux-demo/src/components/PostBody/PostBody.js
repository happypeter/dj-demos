import React, { Component } from 'react'
import './post-body.css'
import store from '../../store'

class PostBody extends Component {
  render () {
    const comments = store.getState()
    return (
      <div className='post-body'>
        <div className="comment-no">
          {comments.length} 评论
        </div>
      </div>
    )
  }
}

export default PostBody
