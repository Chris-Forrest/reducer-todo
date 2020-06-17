/****************initialState todoList ******************************/

export const initialState = [
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
        item: 'Clean Garage',
        completed: false,
        id: 3892987555
      }
]

/************************Reducer  ********************************************/

export const addTodo = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return;
        default:
                return state;
    };
   
};
