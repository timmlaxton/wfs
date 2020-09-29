import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {  connect } from 'react-redux';
import {deleteTodo} from '../../actions/todo'


const TodoItem =  ({ deleteTodo, todo: { message, name, date, _id }}) => ( <div className="post bg-white p-1 my-1">
    <div>
      <Link to="profile.html">
        
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1">
        {message} 
      </p>
       <p className="post-date">
          Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
      </p>
      <button onClick={e => deleteTodo(_id)} type="button" className="btn btn-danger"> 
      <i className="fas fa-times"></i>
    </button>
    </div>
  </div>
);

TodoItem.propTypes = {
todo: PropTypes.object.isRequired,
deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps, {deleteTodo})(TodoItem)
