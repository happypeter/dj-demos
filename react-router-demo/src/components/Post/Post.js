import React, { Component } from 'react'

class Post extends Component {
  render () {
    return (
      <div className='Post'>
        {this.props.match.params.id}
      </div>
    )
  }
}

export default Post
