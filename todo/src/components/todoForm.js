import React,{ useState, useReducer } from 'react';
//import { reducer, initialState } from '../reducers';

const TodoForm = ({ dispatch, state }) => {

    const [taskName, setTaskName] = useState('');
   // const [state, dispatch] = useReducer( reducer, initialState)

   const submitTodo = e => {
       e.preventDefault();
       if(taskName){
           dispatch({ type: "ADD_TODO", payload: taskName});
           clearForm();
           console.log('new todo from form', taskName)
       }
   }

    const changeHandler = e => {
        setTaskName(e.target.value)
    }

    const clearForm = () => {
        setTaskName('');
    }
    
    return (
        <form onSubmit={submitTodo} >
            <label htmlFor="todo-input">New Task </label>
            <input 
            type="text"
            name="todoInput"
            placeholder="new todo"
            onChange={changeHandler}
            value={taskName}
            />
           <button>Add Task</button>
          
        </form>
    )

};

export default TodoForm;