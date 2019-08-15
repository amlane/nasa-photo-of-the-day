import React from "react";
import "./App.css";
import PhotoOfTheDay from "./components/PhotoOfTheDay.js";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        <PhotoOfTheDay />
      </p>
    </div>
  );
}

export default App;
