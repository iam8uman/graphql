import React, { useState } from 'react';
import useStore from '@/store/counterState'; // Import the correct path to your Zustand store

const TodosControl: React.FC = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState<string>('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodosControl;
