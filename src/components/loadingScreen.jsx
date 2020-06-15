import React from "react";
import CommandPrompt from "./commandPrompt";
import "./loadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
      <CommandPrompt />
      <span>&#9608;</span>
    </div>
  );
}

export default LoadingScreen;
