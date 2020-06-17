/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

function CommandPrompt() {
  return (
    <span>
      <span style={{ color: "lawngreen" }}>phil@awesome-dev</span>:
      <span style={{ color: "mediumturquoise" }}>~</span>
      <span style={{ whiteSpace: "pre" }}>$ </span>
    </span>
  );
}

export default CommandPrompt;
