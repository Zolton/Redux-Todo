import { addTask } from "../actions/action";


const initialState = {
    todos: [
        {value: "take out garbage", completed: false},
        {value: "water plants", completed: false},
        {value: "shop for food", completed: false},
    ]
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
    case addTask:
        return {
            ...state,
            todos: [
                ...state.todos, 
                action.payload
            ]
        }

        default: return state
    }
}