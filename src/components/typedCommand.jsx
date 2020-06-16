import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function TypedCommand({ command, speed }) {
  const [position, setPosition] = useState(0);

  function getSpeedVariance() {
    return Math.floor(Math.random() * 5);
  }

  useEffect(() => {
    const variableSpeed = getSpeedVariance() + parseInt(speed, 10);
    if (position < command.length) {
      const timer = setTimeout(() => {
        setPosition(position + 1);
      }, variableSpeed);
      return () => clearTimeout(timer);
    }
  }, [command.length, position, speed]);

  return <div>{command.slice(0, position)}</div>;
}

TypedCommand.propTypes = {
  command: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
};

export default TypedCommand;
