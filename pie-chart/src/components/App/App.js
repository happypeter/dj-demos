import React, { Component } from 'react'
import './app.css'
import {PieChart, Pie, Tooltip} from 'recharts'

class App extends Component {

  render () {
    const data02 = [{name: '水分', value: 100}, {name: '蛋白质', value: 201},
                      {name: '碳水化物', value: 100}, {name: '淀粉', value: 111}]

    return (
      <div className='app'>
      	<PieChart width={800} height={400}>
          <Pie data={data02} cx={500} cy={200}
            dataKey='value'
            innerRadius={40} outerRadius={80} fill="#82ca9d"
            />
          <Tooltip/>
         </PieChart>
      </div>
    )
  }
}

export default App
