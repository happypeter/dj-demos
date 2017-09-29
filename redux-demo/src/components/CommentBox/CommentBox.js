import React, { Component } from 'react'

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
      <div className='CommentBox'>
        <div className='comment-list'>
          {commentList}
        </div>
        <input type='text' value={this.state.comment}
          onChange={this.handleChange}
         />
        <button onClick={this.handleSubmit}
        >发布</button>
      </div>
    )
  }
}

export default CommentBox
