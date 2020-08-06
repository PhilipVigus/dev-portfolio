import React from "react";

const CommandPrompt = () => {
  return (
    <span>
      <span style={{ color: "lawngreen" }}>phil@awesome-dev</span>:
      <span style={{ color: "mediumturquoise" }}>~</span>
      <span style={{ whiteSpace: "pre" }}>$ </span>
    </span>
  );
};

export default CommandPrompt;
