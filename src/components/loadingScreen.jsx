import React from "react";
import "./loadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen-container">
      <span style={{ color: "lawngreen" }}>phil@awesome-dev</span>:
      <span style={{ color: "mediumturquoise" }}>~</span>$<span>&#9608;</span>
    </div>
  );
}

export default LoadingScreen;
