import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]); // Array to store to-do items

  // Function to add a new to-do item
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
