import React from "react";
import CommandPrompt from "./commandPrompt";
import Cursor from "./cursor";
import TypedCommand from "./typedCommand";
import SystemMessage from "./systemMessage";
import "./loadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
      <CommandPrompt />
      <SystemMessage message="Message" />
      <Cursor />
    </div>
  );
}

export default LoadingScreen;
