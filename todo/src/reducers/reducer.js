import { addNewTask } from "../actions/action";


const initialState = {
   // garbage tassks: [skadjfhksdf]
  todos: [
    { value: "take out garbage", completed: false },
    { value: "water plants", completed: false },
    { value: "shop for food", completed: false }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addNewTask:
        const newTask = {
            value: action.payload,
            completed: false
        }
      return {
        ...state,
        // we put in ... state to say "copy state - all state - 
        // in case there's more than just todos in there
        
        // ... todos[] = replace todos with this
        todos: [...state.todos, newTask]
        // spread existing todos in, add newTask
      };

    default:
      return state;
  }
};
