import React from "react";
import ProjectSummary from "./projectSummary";
import "./projects.css";

function Projects() {
  return (
    <div>
      <div className="project-summaries-container">
        <ProjectSummary
          title="Chitter"
          summaryText="A Twitter clone written in Typescript."
          skills="Typescript, React, Express, PostgreSQL, Jest, React testing library, Circle CI, Netlify, Heroku"
          github="https://github.com/PhilipVigus/chitter"
          deployLink="https://chitter.netlify.app/"
        />

        <ProjectSummary
          title="WhatStack"
          summaryText="A cross between WhatsApp and Stack Overflow. Our final group project
        at Makers Academy."
          skills="Javascript, MongoDB, Express, React, Node, WebSockets, Jest,
        Auth0, React testing library, Heroku"
          github="https://github.com/PhilipVigus/WhatStack"
          deployLink="http://whatstack.herokuapp.com/"
        />
        <ProjectSummary
          title="Trailers"
          summaryText="A website I built to help my wife and I track the films we want
          to watch based off of trailers we watch."
          skills="Javascript, MongoDB, Express, Node, PUG, Heroku"
          github="https://github.com/PhilipVigus/trailers-express"
          deployLink="http://trailers-express.herokuapp.com/"
        />
        <ProjectSummary
          title="Bowling"
          image="bowling-screenshot-full.png"
          imageAltText="bowling project screenshot"
          summaryText="A client-side bowling card with automated scoring."
          skills="Javascript, Jasmine"
          github="https://github.com/PhilipVigus/bowling-challenge"
          deployLink="http://phils-bowlingcard.surge.sh/"
        />
      </div>
    </div>
  );
}

export default Projects;
