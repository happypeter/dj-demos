import React, { Component } from 'react'
import './todo.css'

class TodoList extends Component {

  handleClick = (i) => {
    this.props.complete(i)
  }
  
  render () {
    const { todos } = this.props
    const todoList = todos.map(t => (
      <div onClick={() => this.handleClick(t.id)}
        className={`todo-item ${t.completed && 'completed'}`}
        key={t.id}>
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
