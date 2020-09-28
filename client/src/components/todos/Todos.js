import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getTodos } from '../../actions/todo';
//import {Spiner} from '../layout/Spinner';

const Todos = ({getTodos, todo: {todos, loading}}) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);


  return (
    <div>
      
    </div>
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
