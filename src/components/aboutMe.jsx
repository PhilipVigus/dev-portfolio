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
      <div className="about-me-text-container">
        <h1 className="about-me-heading">
          Good {greeting()}! I&apos;m Phil, a full stack developer
        </h1>
        <div>
          <p>
            After qualifying with a degree in Computer Science, I&apos;ve spent
            much of my career in education, initially as an ICT teacher before
            moving into quality assurance, where I worked with clients across
            London to improve the quality of their educational provision. I have
            now changed direction, returning to my roots in technology. I
            recently completed the bootcamp at Makers Academy to prepare myself
            for a career in software development. I love the blend of creative
            and analytical skills required, and seeing an application grow
            before my eyes really excites me. I am happiest when I&apos;m
            learning, and the constantly changing tech landscape means that as a
            developer there will always be something new to understand.
          </p>
        </div>
      </div>
      <img
        className="about-me-photo"
        src="Scaled.jpg"
        alt="A photograph of Phil Vigus"
      />
    </div>
  );
}

export default AboutMe;
