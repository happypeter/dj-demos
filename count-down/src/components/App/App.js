import React, { Component } from 'react'
import './app.css'

// https://derams.github.io/fenzhi/js/index.js

class App extends Component {

  state = {
    date: '0',
    hour: '0',
    min: '0',
    sec: '0'
  }

  tick = () => {
    var taagetDate=31,targetHours=0,targetMinutes=0,targetSeconds=0;
        var date=new Date()
        var nowDate=date.getDate()
        var nowHours=date.getHours()
        var nowminutes=date.getMinutes()
        var nowSeconds=date.getSeconds()
        //计算当前距最终是时间
        var showDate=taagetDate-nowDate
        var showSecond=targetSeconds-nowSeconds
        var showMinute=targetMinutes-nowminutes
        var showHour=targetHours-nowHours
        if(targetSeconds < nowSeconds){
            showSecond=showSecond+60
            showMinute=showMinute-1
        }
        if(targetMinutes<nowminutes){
            showMinute=showMinute+60
            showHour=showHour-1
          }
        if(targetHours<nowHours){
          showHour=showHour+24
          // taagetDate=nowDate-24
        }
        if(showDate<10){
            showDate='0'+showDate
          }
        if(showHour<10){
            showHour='0'+showHour
          }
        if(showMinute<10){
          showMinute='0'+showMinute
        }
        if(showSecond<10){
          showSecond='0'+showSecond
        }
        this.setState({
          date: showDate,
          hour: showHour,
          min: showMinute,
          sec: showSecond
        })
  }


  componentDidMount = () => {
    window.setInterval(this.tick, 1000)
  }

  render () {
    const { date, hour, min, sec } = this.state
    return (
      <div className='app'>
        {`${date}:${hour}:${min}:${sec}`}
      </div>
    )
  }
}

export default App
