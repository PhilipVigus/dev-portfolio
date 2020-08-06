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
            After qualifying with a degree in Computer Science, the early part
            of my career was spent in the tech industry, initially as a
            developer before moving into business development. After that I
            trained as an ICT teacher and then took a role in educational
            quality assurance. This involved working with clients across London
            to improve the quality of their educational provision.
          </p>
          <p>
            I have now changed direction, returning to my roots in technology. I
            recently completed the bootcamp at Maker's Academy to prepare myself
            for a return to software development. In addition to the technical
            knowledge required to work as a developer, I have excellent
            communication and general interpersonal skills from my various
            client-facing roles. This gives me the perfect combination of skills
            and experience.
          </p>
          <p>
            I love the blend of creative and analytical skills required from a
            developer, and seeing an application grow before my eyes really
            excites me. I am happiest when I&apos;m learning, and the constantly
            changing tech landscape means that there will always be something
            new to understand.
          </p>
          <div className="about-me-link-container">
            <a
              className="about-me__link"
              href="https://github.com/PhilipVigus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            |
            <a
              className="about-me__link"
              href="https://www.linkedin.com/in/philvigus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            |
            <a
              className="about-me__link"
              href="https://medium.com/@philvigus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            |
            <a
              className="about-me__link"
              href="./Phil Vigus CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
