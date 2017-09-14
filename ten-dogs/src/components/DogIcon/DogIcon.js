import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import './dog-icon.css'

class DogIcon extends Component {
  render () {
    const { dog } = this.props
    return (
      <div className='dog-icon'>
        <Link to={`/dog/${dog.id}`}>
           <div style={{
               backgroundImage: `url(${dog.imgUrl})`
             }}
             className='dog-img'>
           </div>
        </Link>
      </div>
    )
  }
}

export default DogIcon
