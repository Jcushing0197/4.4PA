import logo from './logo.svg';
import './App.css';
import Button from './Button';
import React, { useState } from 'react';
import TextField from './TextField';
import TodoList from './TodoList';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <div className="App"> 
      <header className="App-header">
        <h1>Simple Counter</h1>
        <Button /> 
        <TextField value={inputValue} onChange={handleChange} />
        <p>{inputValue}</p>
        <p>Todo list </p>
          <TodoList />
      </header>
    </div>
  );
}

export default App;
