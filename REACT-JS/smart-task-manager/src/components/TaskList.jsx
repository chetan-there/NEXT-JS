import { useEffect, useMemo } from "react";
import { useTask } from "./context/TaskContext";

const TaskList = () => {
  const { state, dispatch } = useTask();

  // 🔹 useEffect runs after every render when tasks change
  // Here, we save tasks to localStorage automatically
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  // 🔹 useMemo caches computed value (completed task count)
  const completedCount = useMemo(
    () => state.tasks.filter((t) => t.done).length,
    [state.tasks]
  );

  return (
    <div>
      <h3>✅ Completed: {completedCount} / {state.tasks.length}</h3>
      <ul>
        {state.tasks.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => dispatch({ type: "TOGGLE_TASK", payload: t.id })}
            />
            {t.text}
          </li>
        ))}
      </ul>
      {/* Button to clear all tasks */}
      <button onClick={() => dispatch({ type: "CLEAR_TASKS" })}>Clear All</button>
    </div>
  );
};

export default TaskList;
