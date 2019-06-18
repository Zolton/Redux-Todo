import { addNewTask } from "../actions/action";
import {markComplete} from "../actions/action"


const initialState = {
   // garbage tassks: [skadjfhksdf]
  todos: [
    { value: "take out garbage", completed: false, id: 0 },
    { value: "water plants", completed: false, id: 1  },
    { value: "shop for food", completed: false, id: 2  }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addNewTask:
        const newTask = {
            value: action.payload,
            completed: false,
            id: Math.random()
        }
      return {
        ...state,
        // we put in ... state to say "copy state - all state - 
        // in case there's more than just todos in there

        // ... todos[] = replace todos with this
        todos: [...state.todos, newTask]
        // spread existing todos in, add newTask
      };

      case markComplete:
          // create new array which we can mutate as desired
         const newTodo = [...state.todos]
         newTodo.forEach(target => {
              if (target.id === action.payload) {
                  target.completed = true
              }
            
          })
            return {
                ...state,
                todos: newTodo
              };
      


    default:
      return state;
  }
};

