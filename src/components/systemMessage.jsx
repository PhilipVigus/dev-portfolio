import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function SystemMessage({ message }) {
  const [dots, setDots] = useState(0);
  const [displayedMessage, setDisplayedMessage] = useState(message);

  useEffect(() => {
    if (dots < 3) {
      const timer = setTimeout(() => {
        setDots(dots + 1);
        setDisplayedMessage(`${displayedMessage}.`);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [dots, displayedMessage]);

  return <div>{`${displayedMessage}`}</div>;
}

SystemMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SystemMessage;
