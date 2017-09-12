import React, { Component } from 'react'
import './dog-img.css'
import deleteIcon from './delete.svg'
import {
  Link
} from 'react-router-dom'

class DogImg extends Component {

  deleteIcon = () => {
    console.log('deleteIcon...')
    this.props.deleteIcon(this.props.dog.id)
  }

  render () {
    const { id, imgUrl } = this.props.dog

    let style = {
      backgroundImage: `url(${imgUrl})`
    }
    return (
      <div className='dog-img'>
        <Link to={`/dog/${id}`}>
          <img onClick={this.deleteIcon}
          className='delete-icon'
          src={deleteIcon} alt='img' />
          <div style={style}
          className='dog-img-icon'>
          </div>
        </Link>
      </div>
    )
  }
}

export default DogImg
