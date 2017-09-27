import { createStore } from 'redux'

const initState = {
  selectedKeys: ['/dashboard/dishes/new']
}

const rootReducer = (state=initState, action) => {
  switch (action.type) {
    case 'LOAD_SELECTED_KEYS':
      console.log('LOAD_SELECTED_KEYS', action.path)
      return { ...state, selectedKeys: [action.path] }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store
