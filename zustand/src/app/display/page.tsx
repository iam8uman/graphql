"use client";

import React from 'react';
import useStore from '@/store/counterState'; // Import the correct path to your Zustand store

const DisplayTodos: React.FC = () => {
  const { todos, deleteTodo, toggleTodo } = useStore((state) => ({
    todos: state.todos,
    deleteTodo: state.deleteTodo,
    toggleTodo: state.toggleTodo,
  }));

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayTodos;
