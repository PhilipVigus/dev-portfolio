import React from "react";
import CommandPrompt from "./commandPrompt";
import Cursor from "./cursor";
import TypedCommand from "./typedCommand";
import "./loadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
      <CommandPrompt />
      <TypedCommand command="This is a command" speed="100" />
      <Cursor />
    </div>
  );
}

export default LoadingScreen;
