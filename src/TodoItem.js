import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  const classes = ['todo-item'];
  if (todo.completed) {
    classes.push('completed');
  }

  return (
    <li className={classes.join(' ')}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        {todo.text}
      </label>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
