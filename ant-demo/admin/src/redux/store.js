import { createStore } from 'redux'


const initState = {
  selectedState: '/dashboard/dishes'
}

const rootReducer = (state=initState, action) => {
  switch (action.type) {
    case 'XXX':
      return state
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store
