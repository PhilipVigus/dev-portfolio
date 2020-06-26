import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoadingScreen from "./components/loadingScreen";
import LoadingScreen2 from "./components/loadingScreen2";
import Projects from "./components/projects";
import NavBar from "./components/navBar";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-content-container">
        <Route path="/about" exact component={AboutMe} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/" exact component={LoadingScreen2} />
      </div>
    </Router>
  );
}

export default App;
