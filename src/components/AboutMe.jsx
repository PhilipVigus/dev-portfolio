import React from "react";
import styled from "styled-components";

const AboutMeContainer = styled.section`
  display: flex;
  padding: 30px;

  @media (max-width: 768px) {
    & {
      flex-direction: column-reverse;
    }
  }
`;

const AboutMeHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const AboutMeLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const AboutMeLink = styled.div`
  font-size: 1.6rem;
  margin: 0 10px;
  position: relative;

  @media (hover: hover) {
    &:before {
      background-color: var(--darkest-shade);
      bottom: 1px;
      content: "";
      height: 1px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: all 0.2s ease-in-out;
      visibility: hidden;
      width: 100%;
    }

    &:hover:before {
      transform: scaleX(1);
      visibility: visible;
    }
  }
`;

const AboutMe = () => {
  const getTimeOfDay = () => {
    const dateNow = new Date(Date.now());
    const currentHours = dateNow.getHours();

    if (currentHours >= 0 && currentHours < 12) {
      return "morning";
    } else if (currentHours >= 12 && currentHours < 17) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  return (
    <AboutMeContainer>
      <div>
        <AboutMeHeader>
          Good {getTimeOfDay()}! I&apos;m Phil, a full stack developer
        </AboutMeHeader>
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
            recently completed the bootcamp at Maker&apos;s Academy to prepare
            myself for a return to software development. In addition to the
            technical knowledge required to work as a developer, I have
            excellent communication and general interpersonal skills from my
            various client-facing roles. This gives me the perfect combination
            of skills and experience.
          </p>
          <p>
            I love the blend of creative and analytical skills required from a
            developer, and seeing an application grow before my eyes really
            excites me. I am happiest when I&apos;m learning, and the constantly
            changing tech landscape means that there will always be something
            new to understand.
          </p>
          <AboutMeLinkContainer>
            <AboutMeLink
              href="https://github.com/PhilipVigus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </AboutMeLink>
            |
            <AboutMeLink
              href="https://www.linkedin.com/in/philvigus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </AboutMeLink>
            |
            <AboutMeLink
              href="https://medium.com/@philvigus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </AboutMeLink>
            |
            <AboutMeLink
              href="./Phil Vigus CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </AboutMeLink>
          </AboutMeLinkContainer>
        </div>
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
