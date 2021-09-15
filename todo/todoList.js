import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({
  todoList,
  toggleCompleteTodo,
  deleteTodo,
  status,
}) => (
  <div className="todo-list-wrapper">
    {todoList.map(item => (
      <div key={item.id} className="todo-list">
        <input
          type="checkbox"
          name="isDone"
          checked={item.isDone}
          disabled={status.some(
            x =>
              x.status === 'update_todo_request' &&
              x.id === item.id,
          )}
          onChange={() => toggleCompleteTodo(item)}
        />
        <span
          style={{
            textDecoration: item.isDone
              ? 'line-through'
              : 'none',
          }}>
          {item.text}
        </span>
        <button
          type="button"
          disabled={status.some(
            x =>
              x.status === 'delete_todo_request' &&
              x.id === item.id,
          )}
          onClick={() => deleteTodo(item)}>
          Delete
        </button>
      </div>
    ))}
  </div>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  toggleCompleteTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  status: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default memo(TodoList);
