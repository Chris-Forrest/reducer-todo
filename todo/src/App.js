import React from 'react';
import TodoForm from './components/todoForm';
import './App.css';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <h1>Reducer Todo-App</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
