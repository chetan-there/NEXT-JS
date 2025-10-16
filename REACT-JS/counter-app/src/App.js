import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>🧮 Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button style={styles.btn} onClick={increment}>➕ Increment</button>
        <button style={styles.btn} onClick={decrement}>➖ Decrement</button>
        <button style={styles.btn} onClick={reset}>🔁 Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  btn: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default App;
