import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./systemMessage.css";

function SystemMessage({ message, onFinishDisplay, speed }) {
  const [displayedMessage, setDisplayedMessage] = useState(message);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (displayedMessage.length - message.length < 20) {
      const timer = setTimeout(() => {
        setDisplayedMessage(`${displayedMessage} .`);
      }, speed);
      return () => clearTimeout(timer);
    }
    onFinishDisplay();
  }, [displayedMessage, onFinishDisplay, message.length, speed]);

  return <span className="system-message">{`${displayedMessage}`}</span>;
}

SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onFinishDisplay: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired,
};

export default SystemMessage;
