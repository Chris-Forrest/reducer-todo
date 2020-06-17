import React from 'react';


const TodoForm = (props) => {


    return (
        <form>
            <label htmlFor="todo-input">New Task </label>
            <input 
            type="text"
            name="newTodo"
           
            />

            <button>Add Task</button>
        </form>
    )

};

export default TodoForm;