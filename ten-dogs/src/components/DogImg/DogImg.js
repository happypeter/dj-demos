import React, { Component } from 'react'
import './dog-img.css'
import deleteIcon from './delete.svg'

class DogImg extends Component {
  render () {
    let style = {
      backgroundImage: `url(${this.props.imgUrl})`
    }
    return (
      <div className='dog-img'>
        <img className='delete-icon'
        src={deleteIcon} alt='img' />
        <div style={style}
        className='dog-img-icon'>
        </div>
      </div>
    )
  }
}

export default DogImg
