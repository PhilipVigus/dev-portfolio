import React, { useState } from "react";
import CommandPrompt from "./commandPrompt";
import Cursor from "./cursor";
import TypedCommand from "./typedCommand";
import SystemMessage from "./systemMessage";
import "./loadingScreen.css";

function LoadingScreen() {
  const systemMessages = [
    "\nDemystifying corporate tax affairs",
    "\nWrangling squirrel code",
    "\nDiscombobulating ineffective colour choices",
    "\nNormalising application uncertainties",
    "\nCodifying wibbly line lengths",
    "\nFenagling metaphoric page auras",
    "\nMulching page debris",
    "\nEmbiggening attribute importance",
    "\nManipulating skill matrix cromulance",
    "\nReady for awesomeness overload",
  ];

  const [displayedMessages, setDisplayedMessages] = useState([
    <TypedCommand
      key="load awesome portfolio"
      command="load awesome portfolio"
      speed="100"
      onFinishDisplay={displayNextMessage}
    />,
  ]);

  function displayNextMessage() {
    if (systemMessages.length === 0) {
      return;
    }

    const nextMessage = systemMessages.shift();
    addSystemMessage(nextMessage);
  }

  function addSystemMessage(message) {
    const messageComponent = (
      <SystemMessage
        key={message}
        message={message}
        onFinishDisplay={displayNextMessage}
      />
    );

    setDisplayedMessages((displayedMessages) => [
      ...displayedMessages,
      messageComponent,
    ]);
  }

  return (
    <div className="loading-screen-container">
      <span style={{ padding: "2vw" }}>
        <CommandPrompt />
        {displayedMessages}
        <Cursor />
      </span>
    </div>
  );
}

export default LoadingScreen;
