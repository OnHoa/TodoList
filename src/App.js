import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      if (editIndex !== null) {
        setTodos(todos.map((todo, i) => (i === editIndex ? inputValue : todo)));
        setEditIndex(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>
        {editIndex !== null ? 'Save' : 'Add'}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li className="todo" key={index}>
            {todo }{' '}
            <button onClick={() => handleEditTodo(index)}>Edit</button>{' '}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
