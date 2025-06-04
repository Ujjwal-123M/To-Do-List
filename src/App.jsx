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
    setTodos([...todos, input]);
    setInput(""); 
  };
  const handleDelete=(index)=>{
    const newTodos=todos.filter((_,i)=> i!==index);
    setTodos(newTodos);
    console.log(newTodos);
  }

  

  return (
    <div>
      <h1>Task Manager</h1>
      <div className='container'>
        <input
          type='text'
          placeholder='Add a new task'
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>

        {todos.map((task, index) => (

          <div key={index}>
            
          <li>{task}</li>
           
          <button onClick={()=>handleDelete(index)}>Delete</button> 

        
          </div>
        
        ))}
      </ul> 
    </div>
  );
}

export default App;
