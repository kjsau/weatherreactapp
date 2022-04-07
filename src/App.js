import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Perth" />
      <footer>
        <a
          href="https://github.com/kjsau/weatherreactapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>{" "}
        by Katherine Scott
      </footer>
    </div>
  );
}

export default App;
