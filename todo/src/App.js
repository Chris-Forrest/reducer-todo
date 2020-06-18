import React, { useState, useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers';
import './components/todo.css';

function App () {

  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeHandler = (e) => {
    setName(e.target.value) 
   }

  return (
      <div className="App">
       <h1>Reducer todo list</h1>
       <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({
            type: 'ADD_TODO',
            payload: name,
          });
        }}>
        <input type='text' name='todo' value={name} onChange={changeHandler} />
        <button>Add</button>
      </form>
      <button
        onClick={() => {
          dispatch({ type: 'CLEAR_COMPLETED' });
        }}>
        Clear Completed
      </button>
      {state.todos.map(todo => (
        <div className={`todo-item${todo.completed ? ' completed' : ''}`}>
          <p
            onClick={() => {
              dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
              console.log('clicked');
            }}>
            {todo.name}
          </p>
        </div>
      ))}
     </div>
    )
  
}

export default App;