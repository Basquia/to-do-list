import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, addTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          onDelete={() => {
            /* Delete functionality */
          }}
          onToggle={() => {
            /* Toggle completion functionality */
          }}
        />
      ))}
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => addTodo(e.target.value)}
      />
    </ul>
  );
}

export default TodoList;
