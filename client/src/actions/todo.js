import axios from 'axios';
import {  setAlert } from './alert';
import {
  DELETE_TODO,
  GET_TODOS,
  TODO_ERROR,
  ADD_TODO
} from './types'

export const getTodos = () => async dispatch => {
  try {
    const res = await axios.get('/api/todos')
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: {msg: err.response.stausText, status: err.response.status}
    });
  }
};

// Delete Too

export const deleteTodo = id =>async dispatch => {
  try {
    await axios.delete(`api/todos/${id}`);

    dispatch({
      type: DELETE_TODO,
      payload: id
    });

    dispatch(setAlert('Post has been removed', 'success'))
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: {msg: err.response.stausText, status: err.response.status }
    });
  }
};

// Add Todo

export const addTodo = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
     const res = await axios.post('api/todos', formData, config);

    dispatch({
      type: ADD_TODO,
      payload: res.data
    });

    dispatch(setAlert('Post created', 'success'))
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: err.response.stausText, status: err.response.status }
    });
  }
};
