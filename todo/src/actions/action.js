export const addNewTask = "ADD_NEW_TASK";

export function addTask(newTask) {
  return {
    type: addNewTask,
    payload: newTask
  };
}

export const markComplete = "TASK_COMPLETED";
// mark is what's being passed - simply the item ID.  Just pass it along as the payload
export function markCompleted(mark) {
  return {
    type: markComplete,
    payload: mark
  };
}
