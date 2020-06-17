/****************initialState todoList ******************************/

export const todos = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      },
      {
        item: 'Bake Sourdough Bread',
        completed: false,
        id: 3892987432
      },
      {
        item: 'Learn Redux',
        completed: false,
        id: 3892987555
      }
]

/************************Reducer  ********************************************/

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }
            return {
                ...state,
                todos:[...state.todos, newTodo ]
            }
        default:
                return state;
    };
   
};
