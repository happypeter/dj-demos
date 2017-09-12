import React, { Component } from 'react'
import './dog-img.css'
import deleteIcon from './delete.svg'

class DogImg extends Component {

  deleteIcon = () => {
    console.log('deleteIcon...')
    this.props.deleteIcon(this.props.dog.id)
  }

  render () {
    let style = {
      backgroundImage: `url(${this.props.dog.imgUrl})`
    }
    return (
      <div className='dog-img'>
        <img onClick={this.deleteIcon}
        className='delete-icon'
        src={deleteIcon} alt='img' />
        <div style={style}
        className='dog-img-icon'>
        </div>
      </div>
    )
  }
}

export default DogImg
