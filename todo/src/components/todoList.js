import React,{ useReducer } from 'react';
//import { reducer, initialState } from '../reducers';
import './todo.css';


const TodoList = ({ state, dispatch}) => {

   // const [ state, dispatch] = useReducer(reducer, initialState)

    //console.log("todoList stuff", state.todos)
    return(
        <div className="todoList-container">
           {state.todos.map(todo => (
               <div className={todo.completed ? 'completed' : ''}>
                   <h3 onClick={() => {
                       dispatch({ type: "TOGGLE_TODO", payload: todo.id });
                       console.log('clicked')
                   }}
                   key={todo.id}>{todo.taskName}</h3>
               </div>
           ))}
           <button onClick={() => {
               dispatch({ type: "CLEAR_COMPLETED"});
           }}>Clear Completed Todo</button>
        </div>
    )

}
export default TodoList;