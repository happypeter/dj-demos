import { createStore } from 'redux'

const initState = {
  selectedKeys: ['/dashboard/dishes/new']
}

const rootReducer = (state=initState, action) => {
  switch (action.type) {
    case 'LOAD_SELECTED_KEYS':
      return { ...state, selectedKeys: [action.path] }
    case 'UPDATE_SELECTED_KEYS':
      return { ...state, selectedKeys: [action.path] }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store
