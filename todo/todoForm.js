import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo, status }, ref) => (
  <div className="todo-form">
    <input type="text" ref={ref} />
    <button
      type="button"
      onClick={addTodo}
      disabled={status.some(
        x => x.status === 'add_todo_request',
      )}>
      Add Todo
    </button>
  </div>
));

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  status: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default memo(TodoForm);
