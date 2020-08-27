import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="app-container">
        <Main />
      </div>
    </Router>
  );
}

export default App;
