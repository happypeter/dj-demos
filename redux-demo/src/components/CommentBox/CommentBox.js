import React, { Component } from 'react'
import './comment-box.css'
import store from '../../store'

class CommentBox extends Component {
  state = {
    comment: '',
    comments: []
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { comment } = this.state
    this.setState({
      comment: ''
    })
    store.dispatch({ type: 'ADD_COMMENT', text: comment })
  }

  render () {
    const comments = store.getState()
    const commentList = comments.map(t => (
      <div className='comment-item' key={t.id}>
        {t.text}
      </div>
    ))
    return (
      <div className='comment-box'>
        <div className='comment-list'>
          {commentList}
        </div>
        <div className='comment-form'>
          <input type='text' value={this.state.comment}
            onChange={this.handleChange}
           />
          <button onClick={this.handleSubmit}
          >发布</button>
        </div>
      </div>
    )
  }
}

export default CommentBox
