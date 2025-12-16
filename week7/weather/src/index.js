import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import WeatherMoodWidget from "./WeatherMoodWidget";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <WeatherMoodWidget weather="Sunny" emoji="☀️" />
      <WeatherMoodWidget weather="Rainy" emoji="🌧️" />
      <WeatherMoodWidget weather="Cloudy" emoji="☁️" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
