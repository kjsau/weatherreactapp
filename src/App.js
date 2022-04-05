import React from "react";
import City from "./City";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <City defaultCity="London" />
    </div>
  );
}

export default App;
