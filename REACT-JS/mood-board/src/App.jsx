import React, { useState } from "react";
import "./App.css";

function App() {
  const [moods, setMoods] = useState([
    { mood: "Happy", emoji: "😊", color: "#ffeb3b" },
    { mood: "Sad", emoji: "😢", color: "#90caf9" },
    { mood: "Angry", emoji: "😡", color: "#ef5350" },
  ]);

  const [selectedMood, setSelectedMood] = useState(null);
  const [newMood, setNewMood] = useState("");
  const [newEmoji, setNewEmoji] = useState("");

  // handle mood selection
  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  // handle adding new mood
  const handleAddMood = () => {
    if (newMood.trim() === "" || newEmoji.trim() === "") return;
    const newItem = { mood: newMood, emoji: newEmoji, color: "#d1c4e9" };
    setMoods([...moods, newItem]);
    setNewMood("");
    setNewEmoji("");
  };

  return (
    <div className="container">
      <h1>🎭 Emoji Mood Board</h1>
      <p>Select a mood or create your own!</p>

      {/* mood list rendered with map() */}
      <div className="mood-list">
        {moods.map((m, index) => (
          <button
            key={index}
            className="mood-btn"
            style={{ backgroundColor: m.color }}
            onClick={() => handleMoodClick(m)}
          >
            {m.emoji} {m.mood}
          </button>
        ))}
      </div>

      {/* conditional rendering */}
      {selectedMood ? (
        <div className="selected" style={{ background: selectedMood.color }}>
          <h2>{selectedMood.emoji}</h2>
          <p>You’re feeling <strong>{selectedMood.mood}</strong> today!</p>
        </div>
      ) : (
        <p className="empty">No mood selected yet 😶</p>
      )}

      {/* add custom mood */}
      <div className="add-section">
        <input
          type="text"
          placeholder="Mood name (e.g. Excited)"
          value={newMood}
          onChange={(e) => setNewMood(e.target.value)}
        />
        <input
          type="text"
          placeholder="Emoji (e.g. 🤩)"
          value={newEmoji}
          onChange={(e) => setNewEmoji(e.target.value)}
        />
        <button onClick={handleAddMood}>Add Mood</button>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   const isLoggedIn = true;

  // What is Conditional Rendering in React?

  // Definition:
  // Conditional rendering means showing (or hiding) parts of your UI based on a condition — just like “if-else” in JavaScript.

  // React lets you use normal JS logic (if, ? :, &&) inside JSX to decide what to display.

  // if (isLoggedIn) {
  //   return <h1>Welcome Back! 👋</h1>
  // } else {
  //   return <h1>Please Log In 🔐</h1>;
  // }

  // return isLoggedIn ?  <h1>Welcome Back! 👋</h1> : <h1>Please Log In 🔐</h1>;

  
  // const hasNotification = true;

  // return (
  //   <div>
  //     <h1>Dashboard</h1>
  //     {hasNotification && <p>🔔 You have new notifications!</p>}
  //   </div>
  // );

//   👉 && means “if left side is true, show right side.”
// If hasNotification is false → nothing is shown.


// }

// export default App