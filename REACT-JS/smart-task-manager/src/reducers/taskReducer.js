// Reducer handles all state changes using action types
export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // Add new task to array
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "TOGGLE_TASK":
      // Toggle (mark done / undone)
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };

    case "CLEAR_TASKS":
      // Clear all tasks
      return { ...state, tasks: [] };

    default:
      return state;
  }
};
