import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    setTodos(
      todos.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <div className="task-box">
        <h1>Task Manager</h1>
        <div className="input-section">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleAdd}>Add Task</button>
        </div>
        <ul>
          {todos.map((task, index) => (
            <li key={index}>
              <span className="check-icon" onClick={() => handleComplete(index)}>
                ✓
              </span>
              <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>
              <button className="delete" onClick={() => handleDelete(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
