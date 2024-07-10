import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, addTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.text} todo={todo} onDelete={() => { /* Delete funtionality */} } onToggle={() => { /* Toggle completion funtionality */} } />
            ))}
            <input type="text" placeholder="add a new todo" onChange={(e) => addTodo(e.target.value)} />
        </ul>    
    );
}

export default TodoList;