import { createStore } from 'redux'

const initState = [
    {
      id: 1,
      text: 'hello'
    },
    {
      id: 2,
      text: 'hi'
    }
]
const rootReducer = (state=initState, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text
        }
      ]
    default:
      return state
  }
}
const store = createStore(rootReducer)

export default store
