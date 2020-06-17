import React from 'react';
import { useInput } from '../hooks/useInput';


const TodoForm = () => {
    const [inputedTodo, setInputedTodo, handleChanges] = useInput('');

    

    return (
        <form>
            <label htmlFor="todo-input">New Task </label>
            <input 
            type="text"
            name="inputedTodo"
            placeholder="new todo"
            onChange={ e => handleChanges(e.target.value)}
            value={inputedTodo}
            />

            <button>Add Task</button>
        </form>
    )

};

export default TodoForm;