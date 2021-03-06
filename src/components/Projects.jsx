import React from "react";
import styled from "styled-components";
import ProjectSummary from "./ProjectSummary";

const SummariesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

const Projects = () => {
  return (
    <div>
      <SummariesContainer>
        <ProjectSummary
          title="Weather"
          summaryText="A weather forecast app using Redux and Styled Components."
          skills={[
            "JavaScript",
            "React",
            "Redux",
            "Styled Components",
            "Express",
            "Jest",
            "React testing library",
            "Circle CI",
            "Netlify",
            "Heroku",
          ]}
          github="https://github.com/PhilipVigus/weather-app"
          deployLink="https://weather-phil.netlify.app/"
        />
        <ProjectSummary
          title="Chitter"
          summaryText="A Twitter clone written in Typescript."
          skills={[
            "Typescript",
            "React",
            "Express",
            "PostgreSQL",
            "Jest",
            "React testing library",
            "Circle CI",
            "Netlify",
            "Heroku",
          ]}
          github="https://github.com/PhilipVigus/chitter"
          deployLink="https://chitter.netlify.app/"
        />
        <ProjectSummary
          title="WhatStack"
          summaryText="A cross between WhatsApp and Stack Overflow. Our final group project
        at Makers Academy."
          skills={[
            "JavaScript",
            "React",
            "Express",
            "WebSockets",
            "MongoDB",
            "Auth0",
            "Jest",
            "React testing library",
            "Heroku",
          ]}
          github="https://github.com/PhilipVigus/WhatStack"
          deployLink="http://whatstack.herokuapp.com/"
        />
        <ProjectSummary
          title="Trailers"
          summaryText="A website I built to help my wife and I track the films we want
          to watch based off of trailers we watch."
          skills={["JavaScript", "Express", "MongoDB", "PUG", "Heroku"]}
          github="https://github.com/PhilipVigus/trailers-express"
          deployLink="http://trailers-express.herokuapp.com/"
        />
        <ProjectSummary
          title="Bowling"
          image="bowling-screenshot-full.png"
          imageAltText="bowling project screenshot"
          summaryText="A client-side bowling card with automated scoring."
          skills={["JavaScript", "Jasmine"]}
          github="https://github.com/PhilipVigus/bowling-challenge"
          deployLink="http://phils-bowlingcard.surge.sh/"
        />
      </SummariesContainer>
    </div>
  );
};

export default Projects;
