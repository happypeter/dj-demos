import React, { Component } from 'react'
import rightIcon from './right.svg'
import listIcon from './list.svg'
import './actions.css'

class Actions extends Component {

  handleClick = (str) => {
    this.props.filter(str)
  }

  render () {
    return (
      <div className='actions'>
        <img className='actions-left'
          onClick={() => this.handleClick('all')}
          src={listIcon}
        />
        <img className='actions-right'
          onClick={() => this.handleClick('completed')}
          src={rightIcon}
        />
      </div>
    )
  }
}

export default Actions
