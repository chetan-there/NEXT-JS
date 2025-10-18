// 🔹 Importing hooks and reducer
import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

// 🔹 Create a new Context (global state)
const TaskContext = createContext();

// 🔹 Provider component wraps the whole app
export const TaskProvider = ({ children }) => {
  // useReducer = for managing complex state (better than useState for arrays/objects)
  const [state, dispatch] = useReducer(taskReducer, {
    // Load saved tasks from localStorage if available
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  });

  // 🔹 Provide state and dispatch globally
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// 🔹 Custom hook to access global context easily
export const useTask = () => useContext(TaskContext);
