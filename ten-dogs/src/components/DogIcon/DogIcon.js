import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import './dog-icon.css'
import deleteIcon from './delete.svg'
import axios from 'axios'

class DogIcon extends Component {

  handleDelete = () => {
    console.log('delete a dog')
    axios.delete(`http://localhost:3008/dogs/${this.props.dog.id}`)
          .then(
            res => {
              console.log('deleted!')
              this.props.removeDog(this.props.dog.id)
            }
          )
  }

  render () {
    const { dog } = this.props
    return (
      <div className='dog-icon'>
         <img onClick={this.handleDelete}
           className='delete-icon'
         src={deleteIcon} alt='delete' />
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
