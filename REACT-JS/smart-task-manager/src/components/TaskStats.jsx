import { useLayoutEffect } from "react";
import { useTask } from "./context/TaskContext";

const TaskStats = () => {
  const { state } = useTask();

  // 🔹 useLayoutEffect runs synchronously before the screen paints
  // Used here to update document title quickly
  useLayoutEffect(() => {
    document.title = `Tasks (${state.tasks.length})`;
  }, [state.tasks.length]);

  return <p>Total Tasks: {state.tasks.length}</p>;
};

export default TaskStats;
