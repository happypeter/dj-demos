import React, { Component } from 'react'
import './todo.css'

class TodoList extends Component {
  render () {
    const { todos } = this.props
    const todoList = todos.map((t, i) => (
      <div className={`todo-item ${t.completed && 'completed'}`}
        key={i}>
        {t.text}
      </div>
    ))
    return (
      <div className='todo-list'>
        {todoList}
      </div>
    )
  }
}

export default TodoList
