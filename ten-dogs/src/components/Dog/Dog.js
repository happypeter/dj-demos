import React, { Component } from 'react'

class Dog extends Component {
  render () {
    return (
      <div className='Dog'>
        {this.props.match.params.id}
      </div>
    )
  }
}

export default Dog
