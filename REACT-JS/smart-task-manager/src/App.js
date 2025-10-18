import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

const App = () => {
  return (
    // Wrap the app in global TaskProvider (Context)
    <TaskProvider>
      <div className="app">
        <h1>🧠 Smart Task Manager</h1>
        <TaskInput />   {/* Add new task */}
        <TaskStats />   {/* Show total task count */}
        <TaskList />    {/* Show tasks and toggle them */}
      </div>
    </TaskProvider>
  );
};

export default App;
