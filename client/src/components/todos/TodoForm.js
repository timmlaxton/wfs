import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addTodo} from '../../actions/todo';

const TodoForm = ({ addTodo}) => {
  const [message, setMessage] = useState('');


  return (
          <Fragment> 
        <form className="form my-1" onSubmit={e => {
          e.preventDefault();
          addTodo({message});
          setMessage('');
        }}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Add a todo"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      
      </Fragment>
  )
}

TodoForm.propTypes = {
addTodo: PropTypes.func.isRequired,
}

export default connect(null, {addTodo})(TodoForm)
