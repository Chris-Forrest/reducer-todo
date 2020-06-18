/****************initialState todoList ******************************/

export const initialState = {
   // inputValue:'',
    todos: [
    {
        task: 'Learn about Reducers',
        completed: false,
        id: 3892987589
      },
      {
        task: 'Bake Sourdough Bread',
        completed: false,
        id: 3892987432
      },
      {
        task: 'Learn Redux',
        completed: false,
        id: 3892987555
      }
  ]
}

/************************Reducer  ********************************************/
export const reducer = (state, action) => {

    switch(action.type){
        case "ADD_TODO":
            const newTodo ={
                name: action.payload,
                completed:false,
                id: Date.now(),
            }
            return {
                ...state,
                todos:[...state.todos, newTodo],
            }
        case 'TOGGLE_TODO':

      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

        case 'CLEAR_COMPLETED':
         return {
           ...state,
            todos: state.todos.filter(todo => !todo.completed),
      };
    }

};



/*
export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        if (state.inputValue) {
          return {
            ...state,
            todos: [
              ...state.todos,
              {
                task: state.inputValue,
                id: Date.now(),
                completed: false,
              },
            ],
          }
        }
      case "INPUT_TEXT":
        return {
          ...state,
          inputValue: action.payload,
        }
      default:
        return state;
    }
  } */