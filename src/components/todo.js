/**
 * Created by appBakerz - 05 on 11-Feb-17.
 */


import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
        >
        {text}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo