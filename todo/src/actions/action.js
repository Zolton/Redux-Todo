

export const addNewTask = "ADD_NEW_TASK"

export function addTask (newTask) {
    return {
        type: addNewTask,
        payload: newTask
    }
}

export const markComplete = "TASK_COMPLETED"

export function markCompleted (mark) {
    return {
        type: markComplete,
        payload: mark
    }
    
}