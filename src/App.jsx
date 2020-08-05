import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoadingScreen from "./components/loadingScreen";
import Projects from "./components/projects";
import NavBar from "./components/navBar";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content-container">
          <Route path="/about" exact component={AboutMe} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/" exact component={LoadingScreen} />
        </div>
      </div>
    </Router>
  );
}

export default App;
