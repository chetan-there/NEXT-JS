import React, { useState } from "react";
import "./App.css";

function App() {

  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2)


  const getStatus = () => {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 24.9) return "Normal weight";
    else if (bmi < 29.9) return "Overweight";
    else return "Obese"
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <div className="slider">
        <label>Height: {height} cm</label>
        <input
          type="range"
          min="100"
          max="220"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>

      <div className="slider">
        <label>Weight: {weight} kg</label>
        <input
          type="range"
          min="30"
          max="150"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>

      <div className="result">
        <h2>Your BMI: {bmi}</h2>
        <p>Status: <strong>{getStatus()}</strong></p>
      </div>
    </div>
  );
}

export default App;