import React from "react";
import './../styles/App.css';

const App = () => {
  
  const temperature = 25;
  const conditions = "Sunny";
  const threshold = 20;

  // Determine the color based on the temperature
  const temperatureColor = temperature > threshold ? 'red' : 'blue';

  return (
    <div>
      <h2>Weather App</h2>
      <p>
        Temperature: <span style={{ color: temperatureColor }}>{temperature}°C</span>
      </p>
      <p>Conditions: {conditions}</p>
    </div>
  );
}

export default App