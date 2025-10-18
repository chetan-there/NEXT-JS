import { useState, useRef, useCallback } from "react";
import { useTask } from "./context/TaskContext";

const TaskInput = () => {
  const { dispatch } = useTask(); // useContext hook to get global dispatch
  const [task, setTask] = useState(""); // useState for input value
  const inputRef = useRef(null); // useRef to focus input after adding

  // useCallback memoizes the function (prevents re-creation)
  const addTask = useCallback(() => {
    if (!task.trim()) return; // Ignore empty input

    // Dispatch ADD_TASK action
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text: task, done: false },
    });

    setTask(""); // clear input
    inputRef.current.focus(); // focus input again using useRef
  }, [task, dispatch]);

  return (
    <div className="task-input">
      {/* Controlled input using useState */}
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      {/* Button triggers addTask function */}
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TaskInput;
