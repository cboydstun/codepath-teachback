import React, { useState } from 'react';

// Container component
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Hooks", completed: false },
    { id: 3, text: "Build a Todo app", completed: false }
  ]);

  function handleTodoComplete(todoId) {
    // update state immutably
    const newTodos = todos.map(todo => {
        if (todo.id === todoId) {
            return {...todo, completed: true};
        }
        return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={handleTodoComplete}
        />
      ))}
    </div>
  );
}

// Presentation component
function TodoItem({ todo, onComplete }) {
  return (
    <div>
      <p style={{textDecoration: todo.completed ? 'line-through': 'none'}}>
        {todo.text}
      </p>
      <button onClick={() => onComplete(todo.id)}>
        Mark as Completed
      </button>
    </div>
  );
}
