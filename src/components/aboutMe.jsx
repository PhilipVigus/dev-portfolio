import React from "react";
import "./aboutMe.css";

function AboutMe() {
  function greeting() {
    const dateNow = new Date(Date.now());
    const localHours = dateNow.getHours();

    if (localHours >= 0 && localHours < 12) {
      return "morning";
    } else if (localHours >= 12 && localHours < 17) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  return (
    <div className="about-me-container">
      <div className="about-me-text">
        <p>
          Good {greeting()}! I&apos;m Phil, a full stack developer living in
          London.
        </p>
      </div>
      <img
        className="photo"
        src="Scaled.jpg"
        alt="A photograph of Phil Vigus"
      />
    </div>
  );
}

export default AboutMe;
