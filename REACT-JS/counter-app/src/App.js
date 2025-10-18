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

  // this is array 
//   const [count, setCount] = useState(0);

//   // this is arrow function
//   const increament = () => setCount(count + 1)
//   const decrement = () => setCount(count -1 )
//   const reset = () => setCount(0)



//   return (
//   <>
//     <h1>{count}</h1>

//     <button onClick={increament}>+</button>
//     <button onClick={decrement}>-</button>
//     <button onClick={reset}>!</button>
//   </>
//   )
// }

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


// /*
// 🧠 Concept: State & Events in React

// State: Keeps track of data that changes over time (like a counter value or input text).

// useState Hook: Lets you declare and update state in functional components.

// Events: React’s way to handle user actions like clicks, typing, etc.
// */
