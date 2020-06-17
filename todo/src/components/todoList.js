import React, { useReducer } from 'react';
import { todos, reducer } from '../reducers'


const TodoList = () => {

    const [state, dispatch ] = useReducer( reducer, todos)

    return(
        <div className="todoList-container">
           {todos.map(todo => (
               <h3 >{todo.item}</h3>
           ))}
        </div>
    )

}
export default TodoList;