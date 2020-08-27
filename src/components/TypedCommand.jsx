import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTypedCommand = styled.span`
  white-space: pre;
`;

const TypedCommand = ({ command, speed, onFinishDisplay }) => {
  const [position, setPosition] = useState(0);

  const getSpeedVariance = () => {
    return Math.floor(Math.random() * 10);
  };

  useEffect(() => {
    const variableSpeed = getSpeedVariance() + parseInt(speed, 10);

    if (position < command.length) {
      const timer = setTimeout(() => {
        setPosition(position + 1);
      }, variableSpeed);
      return () => clearTimeout(timer);
    }

    onFinishDisplay();
    return () => {};
  }, [onFinishDisplay, command.length, position, speed]);

  return <StyledTypedCommand>{command.slice(0, position)}</StyledTypedCommand>;
};

TypedCommand.propTypes = {
  command: PropTypes.string.isRequired,
  onFinishDisplay: PropTypes.func.isRequired,
  speed: PropTypes.string.isRequired,
};

export default TypedCommand;
