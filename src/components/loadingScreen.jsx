import React, { useState } from "react";
import CommandPrompt from "./commandPrompt";
import Cursor from "./cursor";
import TypedCommand from "./typedCommand";
import SystemMessage from "./systemMessage";
import "./loadingScreen.css";

function LoadingScreen() {
  const systemMessages = [
    { content: "\nDemystifying corporate tax affairs", speed: 300 },
    { content: "\nWrangling squirrel code", speed: 250 },
    { content: "\nDiscombobulating ineffective colour choices", speed: 200 },
    { content: "\nNormalising application uncertainties", speed: 150 },
    { content: "\nCodifying wibbly line lengths", speed: 120 },
    { content: "\nFinagling metaphoric page auras", speed: 110 },
    { content: "\nMulching page debris", speed: 100 },
    { content: "\nEmbiggening attribute importance", speed: 90 },
    { content: "\nManipulating skill matrix cromulance", speed: 80 },
    { content: "\nReady for awesomeness overload", speed: 80 },
  ];

  const [displayedMessages, setDisplayedMessages] = useState([
    <TypedCommand
      key="load awesome portfolio"
      command="load awesome portfolio"
      speed="95"
      // eslint-disable-next-line no-use-before-define
      onFinishDisplay={displayNextMessage}
    />,
  ]);

  function displayNextMessage() {
    if (systemMessages.length === 0) {
      return;
    }

    const nextMessage = systemMessages.shift();

    const messageComponent = (
      <SystemMessage
        key={nextMessage.content}
        message={nextMessage.content}
        onFinishDisplay={displayNextMessage}
        speed={nextMessage.speed}
      />
    );

    // eslint-disable-next-line no-shadow
    setDisplayedMessages((displayedMessages) => [
      ...displayedMessages,
      messageComponent,
    ]);
  }

  return (
    <div className="loading-screen-container">
      <span style={{ padding: "6vw" }}>
        <CommandPrompt />
        {displayedMessages}
        <Cursor />
      </span>
    </div>
  );
}

export default LoadingScreen;
