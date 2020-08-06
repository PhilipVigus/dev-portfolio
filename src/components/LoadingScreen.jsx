import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import CommandPrompt from "./CommandPrompt";
import Cursor from "./Cursor";
import TypedCommand from "./TypedCommand";
import SystemMessage from "./SystemMessage";
import messageData from "./messageData";
import "./LoadingScreen.css";

function LoadingScreen() {
  const history = useHistory();
  const systemMessages = messageData;
  const [displayCursor, setDisplayCursor] = useState(true);

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
      setTimeout(() => {
        history.push("/about");
      }, 1500);

      return;
    }

    setDisplayCursor(false);
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
    <Link to="/about">
      <div className="loading-screen-container">
        <span style={{ padding: "6vw" }}>
          <CommandPrompt />
          {displayedMessages}
          {displayCursor && <Cursor />}
        </span>
      </div>
    </Link>
  );
}

export default LoadingScreen;
