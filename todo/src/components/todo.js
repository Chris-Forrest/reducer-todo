import React from 'react';

/*****************not using this component at all did it all in todoList.js *****************************/

const Todo = ({ taskName, completed, id, toggleCompleted}) => {

   console.log("taskNames go here", taskName);

    return (
        
            <h4
            onClick={() => {
                toggleCompleted(id);
            }}
            className={ completed === true ? "completed" : ""}
            >{taskName}name of task goes here</h4>
        
    )
}
export default Todo;