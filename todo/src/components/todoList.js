import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers'


const TodoList = () => {

    const [state, dispatch ] = useReducer( reducer, initialState)

    return(
        <div className="todoList-container">
           {state.todos.map(todo => (
               <h3 >{todo.item}</h3>
           ))}
        </div>
    )

}
export default TodoList;