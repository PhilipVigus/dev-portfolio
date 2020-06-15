import React from "react";
import CommandPrompt from "./commandPrompt";
import Cursor from "./cursor";
import "./loadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
      <CommandPrompt />
      <Cursor />
    </div>
  );
}

export default LoadingScreen;
