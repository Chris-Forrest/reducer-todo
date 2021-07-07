import React, { useState, useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers';
import './components/todo.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App () {

  const [state, dispatch] = useReducer(reducer, initialState)

 

 return (
      <div className="App">
       <h1>Reducer todo list</h1>
       < TodoList  state={state} dispatch={dispatch} />
       < TodoForm state={state} dispatch={dispatch} />
       
     </div>
    )
  
}

export default App;