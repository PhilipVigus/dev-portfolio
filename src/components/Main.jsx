import React from "react";
import { Route } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import Projects from "./Projects";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import "./Main.css";

function Main() {
  return (
    <>
      <NavBar />
      <div className="main-content-container">
        <Route path="/about" exact component={AboutMe} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/" exact component={LoadingScreen} />
      </div>
    </>
  );
}

export default Main;
