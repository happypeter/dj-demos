import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import store from './store'


const render = () => {
  console.log('store 改变了！')
  ReactDOM.render(<App />, document.getElementById('root'))
}
render()
store.subscribe(render)
