import React, { Component } from 'react'
import './app.css'
import TodoList from '../TodoList/TodoList'
import Form from '../Form/Form'
import Actions from '../Actions/Actions'

class App extends Component {

  state = {
    todos: [
      {
        text: '遛狗',
        completed: true
      },
      {
        text: '吃饭',
        completed: false
      }
    ]
  }

  addTodo = (todo) => {
    console.log(todo)
  }

  filter = (str) => {
    console.log(str)
  }

  render () {
    const { todos } = this.state
    return (
      <div className='app'>
        <div className="main">
          <h1 className="title">Todo</h1>
          <div className="todo-list-wrap">
            <TodoList todos={todos} />
          </div>
          <div className="form-wrap">
            <Form addTodo={this.addTodo}/>
          </div>
          <div className="actions-wrap">
            <Actions filter={this.filter}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
