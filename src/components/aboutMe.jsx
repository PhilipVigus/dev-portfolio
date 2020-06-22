import React from "react";

function AboutMe() {
  function greeting() {
    const localHours = new Date().getHours();
    if (localHours >= 0 && localHours < 12) {
      return "morning";
    } else if (localHours >= 12 && localHours < 17) {
      return "afternoon";
    } else {
      return "evening";
    }
  }
  return (
    <div>
      <h2>About me</h2>
      <img src="Scaled.jpg" width="100px" alt="A photograph of Phil Vigus" />
      <p>
        Good {greeting()} and welcome to my portfolio. My name&apos;s Phil and
        I&apos;m a full stack developer. My language of choice is JavaScript,
        and I am passionate about writing clean code.
      </p>
    </div>
  );
}

export default AboutMe;
