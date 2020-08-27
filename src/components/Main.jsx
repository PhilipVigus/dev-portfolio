import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import LoadingScreen from "./LoadingScreen";
import Projects from "./Projects";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";

const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
`;

function Main() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <Route path="/about" exact component={AboutMe} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/" exact component={LoadingScreen} />
      </MainContainer>
    </>
  );
}

export default Main;
