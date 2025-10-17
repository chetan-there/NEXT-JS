function TaskList() {
  const tasks = ["Learn React", "Build Project", "Post on GitHub"];

  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet! 🎯</p>
      ) : (
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList