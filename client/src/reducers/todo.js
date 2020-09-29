
import {
  GET_TODOS,
  TODO_ERROR,
  DELETE_TODO,
  ADD_TODO
} from '../actions/types'

const initialState = {
  todos: [],
  todo: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false
      }
      case ADD_TODO:
        return {
          ...state,
          todos: [payload, ...state.todos],
          loading: false
        }
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo._id !== payload),
          loading: false
        }
      case TODO_ERROR:
      return {
        ...state,
        ERROR: payload,
        loading: false
      };
      default: 
      return state
  }
}