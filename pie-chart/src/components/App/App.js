import React, { Component } from 'react'
import './app.css'
import {PieChart, Pie, Tooltip, Cell} from 'recharts'

const COLORS = ['#f4baba', '#e0cd84', '#91e1dd', '#a48ad4'];


class App extends Component {

  state = {
    items: []
  }

  clickCell = (entry, index) => {
    this.setState({
      items: [ ...this.state.items,
        {
          name: entry.name,
          value: entry.value,
          color: COLORS[index]
        }
      ]
    });
  }


  render () {
    console.log('render...', this.state.items)
    const data = [{name: '水分', value: 100}, {name: '蛋白质', value: 201},
                      {name: '碳水化物', value: 100}, {name: '淀粉', value: 111}]

    const items = this.state.items.map((item, i) => (
      <div key={item.color} className="legend">
        <div className="legend-name" style={{ 'background' : item.color}}>
          {item.name}
        </div>
        <div className="legend-value" style={{ 'border' : `3px solid ${item.color}`}}>
          {item.value} mg
        </div>
      </div>
    ))

    return (
      <div className='app'>
      	<PieChart className='pie-chart'
          width={300} height={300}>
          <Pie data={data} cx={150} cy={150}
            dataKey='value'
            innerRadius={60} outerRadius={90} fill="#82ca9d"
            >
            {
              data.map((entry, index) => {
                return (<Cell
                          key={index}
                          onClick={() => this.clickCell(entry, index)}
                          fill={COLORS[index]}/>)
              })
            }
          </Pie>
         </PieChart>
         {items}
      </div>
    )
  }
}

export default App
