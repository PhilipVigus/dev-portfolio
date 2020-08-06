import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/main";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Main />
      </div>
    </Router>
  );
}

export default App;
