import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./typedCommand.css";

function TypedCommand({ command, speed, onFinishDisplay }) {
  const [position, setPosition] = useState(0);

  function getSpeedVariance() {
    return Math.floor(Math.random() * 10);
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const variableSpeed = getSpeedVariance() + parseInt(speed, 10);
    if (position < command.length) {
      const timer = setTimeout(() => {
        setPosition(position + 1);
      }, variableSpeed);
      return () => clearTimeout(timer);
    }

    onFinishDisplay();
  }, [onFinishDisplay, command.length, position, speed]);

  return <span className="typed-command">{command.slice(0, position)}</span>;
}

TypedCommand.propTypes = {
  command: PropTypes.string.isRequired,
  onFinishDisplay: PropTypes.func.isRequired,
  speed: PropTypes.string.isRequired,
};

export default TypedCommand;
