import React, { Component } from 'react'
import './comment-box.css'

class CommentBox extends Component {
  state = {
    comment: '',
    comments: [
      {
        id: 1,
        text: 'hello'
      },
      {
        id: 2,
        text: 'hi'
      }
    ]
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
      comments: [ ...this.state.comments,
        {
          id: this.state.comments.length + 1,
          text: comment
        }
      ],
      comment: ''
    })
  }

  render () {
    const commentList = this.state.comments.map(t => (
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
