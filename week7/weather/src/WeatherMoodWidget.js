// WeatherMoodWidget.js
import React, { useState } from "react";

function WeatherMoodWidget({ weather, emoji }) {
  // useState Hook to keep track of how many times user clicks the button
  const [count, setCount] = useState(0);

  // function to update the count
  const handleMoodClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.widgetBox}>
      <h2>{weather}</h2>
      <div style={styles.emoji}>{emoji}</div>

      <p>You clicked: {count} times</p>

      <button onClick={handleMoodClick} style={styles.button}>
        Click to Share Mood
      </button>
    </div>
  );
}

// Simple inline styles for a clean look
const styles = {
  widgetBox: {
    width: "200px",
    background: "#f2f2f2",
    padding: "20px",
    margin: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 0px 8px rgba(0,0,0,0.15)",
  },
  emoji: {
    fontSize: "48px",
    margin: "10px 0",
  },
  button: {
    padding: "8px 12px",
    marginTop: "10px",
    cursor: "pointer",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
  },
};

export default WeatherMoodWidget;