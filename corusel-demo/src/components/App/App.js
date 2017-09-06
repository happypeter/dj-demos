import React, { Component } from 'react'
import './app.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

class App extends Component {

  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: false,
      autoplay: true
    }

    let slideStr = [
      <div className='dish-card-wrap' key='1'>
        <div className='dish-card'>
          hh
        </div>
      </div>,
      <div className='dish-card-wrap' key='2'>
        <div className='dish-card'>
          bb
        </div>
      </div>,
      <div className='dish-card-wrap' key='33'>
        <div className='dish-card'>
          cc
        </div>
      </div>
    ]

    let slides = (
      <Slider {...settings}>
        { slideStr}
      </Slider>
    )
    return (
      <div className='app'>
        {slides}
      </div>
    )
  }
}

export default App
