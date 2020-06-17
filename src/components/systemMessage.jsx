import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./systemMessage.css";

function SystemMessage({ message, onFinishDisplay }) {
  const [displayedMessage, setDisplayedMessage] = useState(message);

  useEffect(() => {
    if (displayedMessage.length - message.length < 3) {
      const timer = setTimeout(() => {
        setDisplayedMessage(`${displayedMessage}.`);
      }, 300);
      return () => clearTimeout(timer);
    }
    onFinishDisplay();
  }, [displayedMessage, onFinishDisplay, message.length]);

  return <span className="system-message">{`${displayedMessage}`}</span>;
}

SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SystemMessage;
