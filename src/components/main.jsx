import React from "react";
import { Route } from "react-router-dom";
import LoadingScreen from "./loadingScreen";
import Projects from "./projects";
import NavBar from "./navBar";
import AboutMe from "./aboutMe";
import Skills from "./skills";

function Main() {
  return (
    <div>
      <NavBar />
      <div className="main-content-container">
        <Route path="/about" exact component={AboutMe} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/" exact component={LoadingScreen} />
      </div>
    </div>
  );
}

export default Main;
