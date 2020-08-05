import React from "react";
import { Route } from "react-router-dom";
import LoadingScreen from "./loadingScreen";
import Projects from "./projects";
import NavBar from "./navBar";
import AboutMe from "./aboutMe";

function Main() {
  return (
    <div>
      <NavBar />
      <div className="main-content-container">
        <Route path="/about" exact component={AboutMe} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/" exact component={LoadingScreen} />
      </div>
    </div>
  );
}

export default Main;
