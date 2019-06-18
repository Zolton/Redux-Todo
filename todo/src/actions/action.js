
//type
export const addNewTask = "ADD_NEW_TASK"

export function addTask (newTask) {
    return {
        type: addNewTask,
        payload: newTask
    }
}