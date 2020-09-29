import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getTodos } from '../../actions/todo';
//import {Spiner} from '../layout/Spinner';
import TodoItem from './TodoItem'; 
import TodoForm from './TodoForm';


const Todos = ({getTodos, todo: {todos, loading}}) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
  <Fragment> 
  <h1 className="large text-primary">Todos</h1>
  <p className="lead">
  </p>
  <TodoForm/>
  <div className="todos">
  {todos.map(todo => (
    <TodoItem key={todo._id} todo={todo} />
  ))}
  </div>
  </Fragment>
  )
}

 


Todos.propTypes = {
getTodos: PropTypes.func.isRequired,
todo: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, {getTodos})(Todos)
