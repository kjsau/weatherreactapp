import React from "react";
import City from "./City";
import "./App.css";

function App() {
  return (
    <div className="App">
      <City defaultCity="Perth" />
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
