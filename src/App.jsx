import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoadingScreen from "./components/loadingScreen";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <Router>
      <Route path="/landing-page" exact component={LandingPage} />
      <Route path="/" exact component={LoadingScreen} />
    </Router>
  );
}

export default App;
