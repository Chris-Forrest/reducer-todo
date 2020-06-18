/****************initialState todoList ******************************/

export const initialState = {
    todos: [
    {
        taskName: 'Learn about Reducers',
        completed: false,
        id: 3892987589
      },
      {
        taskName: 'Bake Sourdough Bread',
        completed: false,
        id: 3892987432
      },
      {
        taskName: 'Learn Redux',
        completed: false,
        id: 3892987555
      }
  ]
}

/************************Reducer  ********************************************/
export const reducer = (state, action) => {

    switch(action.type){
        case "ADD_TODO":
          const newTodo = {
              taskName: action.payload,
              completed:false,
              id: Date.now(),
          }
          return {
              ...state,
              todos:[...state.todos, newTodo],
          }
          case "TOGGLE_TODO":
              return {
                  ...state,
                  todos: state.todos.map( todo =>
                    todo.id === action.payload
                    ? { ...todo, completed: !todo.completed}
                    : todo
                    ),
              };
              case "CLEAR_COMPLETED":
                  return{
                      ...state,
                      todos: state.todos.filter( todo => !todo.completed),
                  }
         default:
             return state;
    }

};

