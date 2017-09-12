import React, { Component } from 'react'
import './dog-img.css'

class DogImg extends Component {
  render () {
    let style = {
      backgroundImage: `url(${this.props.imgUrl})`
    }
    return (
      <div className='dog-img'>
        <div style={style}
        className='dog-img-icon'>
        </div>
      </div>
    )
  }
}

export default DogImg
