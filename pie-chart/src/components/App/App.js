import React, { Component } from 'react'
import './app.css'
import {PieChart, Pie, Tooltip} from 'recharts'

class App extends Component {

  render () {
    const data02 = [{name: '水分', value: 100}, {name: '蛋白质', value: 201},
                      {name: '碳水化物', value: 100}, {name: '淀粉', value: 111}]

    return (
      <div className='app'>
      	<PieChart className='pie-chart'
          width={300} height={300}>
          <Pie data={data02} cx={150} cy={150}
            dataKey='value'
            innerRadius={60} outerRadius={90} fill="#82ca9d"
            />
          <Tooltip/>
         </PieChart>
      </div>
    )
  }
}

export default App
