import React from 'react';

const todo = props => {

    const handleClick = () => {
        props.completeTodo(props.todo.id)
    }

    return (
        <div className="todo-container">
            <h4>Todo's</h4>
        </div>
    )
}
export default todo;