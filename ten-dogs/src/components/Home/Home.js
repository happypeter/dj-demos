import React, { Component } from 'react'
import './home.css'

import DogIcon from '../DogIcon/DogIcon'

class Home extends Component {
  state = {
    "dogs": [
      {
        "id": "1",
        "imgUrl": "http://img0.imgtn.bdimg.com/it/u=4088053820,899019662&fm=27&gp=0.jpg"
      },
      {
        "id": "2",
        "imgUrl": "http://img0.imgtn.bdimg.com/it/u=4088053820,899019662&fm=27&gp=0.jpg"
      },
      {
        "id": "3",
        "imgUrl": "http://img0.imgtn.bdimg.com/it/u=4088053820,899019662&fm=27&gp=0.jpg"
      },
      {
        "id": "4",
        "imgUrl": "http://img0.imgtn.bdimg.com/it/u=4088053820,899019662&fm=27&gp=0.jpg"
      },
      {
        "id": "5",
        "imgUrl": "http://img0.imgtn.bdimg.com/it/u=4088053820,899019662&fm=27&gp=0.jpg"
      },
      {
        "id": "6",
        "imgUrl": "http://img0.imgtn.bdimg.com/it/u=4088053820,899019662&fm=27&gp=0.jpg"
      },
      {
        "id": "7",
        "imgUrl": "http://img0.imgtn.bdimg.com/it/u=4088053820,899019662&fm=27&gp=0.jpg"
      }
    ]
  }
  render () {
    const dogList = this.state.dogs.map(t => (
      <DogIcon dog={t} />
    ))
    return (
      <div className='home'>
        <div className='dog-list'>
          {dogList}
        </div>
      </div>
    )
  }
}

export default Home
