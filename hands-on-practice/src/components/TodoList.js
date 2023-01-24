import React, { useState } from 'react';

// Container component
export default function TodoList() {
    /* A state hook. It is a function that returns an array with two elements. The first element is the
    current state value, and the second element is a function that lets you update it. You can call this
    function from an event handler or somewhere else. It’s similar to this.setState in a class, except
    it doesn’t merge the old and new state together. (There’s a useState hook with a second argument if
    you want that behavior.) */
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Learn Hooks", completed: false },
        { id: 3, text: "Build a Todo app", completed: false }
    ]);

    /**
     * "If the todo's id matches the todoId passed in, return a new todo object with the same properties as
     * the original todo, but with the completed property set to true. Otherwise, return the original
     * todo."
     * 
     * The ...todo syntax is called the spread operator. It's a way to copy all of the properties of an
     * object into a new object
     * @param todoId - The id of the todo that was completed.
     */
    function handleTodoComplete(todoId) {
        // update state immutably
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, completed: true };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    /* Returning a div with a h2 and a list of todo items. */
    return (
        <div>
            <h2>Todo List</h2>
            {/* Mapping over the todos array and returning a TodoItem component for each todo. */}
            {todos.map(todo => (
                /* Returning a TodoItem component for each todo. */
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
            {/* It's a ternary operator. It's a shorthand way of writing an if/else statement. */}
            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </p>
            {/* It's a ternary operator. It's a shorthand way of writing an if/else statement. */}
            <button onClick={() => onComplete(todo.id)}>
                Mark as Completed
            </button>
        </div>
    );
}
