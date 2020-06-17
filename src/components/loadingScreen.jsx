import React, { useState } from "react";
import CommandPrompt from "./commandPrompt";
import Cursor from "./cursor";
import TypedCommand from "./typedCommand";
import SystemMessage from "./systemMessage";
import "./loadingScreen.css";

function LoadingScreen() {
  const systemMessages = ["\nportfolio now loading", "\nslowly but surely"];

  const [displayedMessages, setDisplayedMessages] = useState([
    <TypedCommand
      key="0"
      command="load awesome portfolio"
      speed="100"
      onFinishDisplay={displayNextMessage}
    />,
  ]);

  const [messageNumber, setMessageNumber] = useState(1);

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
        key={messageNumber}
        message={message}
        onFinishDisplay={displayNextMessage}
      />
    );

    setDisplayedMessages((displayedMessages) => [
      ...displayedMessages,
      messageComponent,
    ]);

    setMessageNumber(messageNumber + 1);
  }

  return (
    <div className="loading-screen-container">
      <span>
        <CommandPrompt />
        {displayedMessages}
        <Cursor />
      </span>
    </div>
  );
}

export default LoadingScreen;
