import React from "react";
import ProjectSummary from "./projectSummary";
import "./projects.css";

function Projects() {
  return (
    <div>
      <div className="project-summaries-container">
        <ProjectSummary
          title="WhatStack"
          image="whatstack-screenshot-full.png"
          imageAltText="whatstack project screenshot"
          summaryText="A cross between WhatsApp and Stack Overflow. Our final group project
        at Makers Academy."
          skills="Using - Javascript, MongoDB, Express, React, Node, WebSockets, Jest,
        Auth0, React testing library, Heroku, CSS, HTML"
          github="https://github.com/PhilipVigus/WhatStack"
          deployLink="http://whatstack.herokuapp.com/"
        />
        <ProjectSummary
          title="Trailers"
          image="trailers-screenshot-full.png"
          imageAltText="trailers project screenshot"
          summaryText="A website I built to help my wife and I track the films we want
          to watch based off of trailers we watch."
          skills="Using - Javascript, MongoDB, Express, Node, PUG, Heroku, CSS, HTML"
          github="https://github.com/PhilipVigus/trailers-express"
          deployLink="http://trailers-express.herokuapp.com/"
        />
        <ProjectSummary
          title="Bowling"
          image="bowling-screenshot-full.png"
          imageAltText="bowling project screenshot"
          summaryText="A client-side bowling card with automated scoring."
          skills="Using - Javascript, Jasmine, CSS, HTML"
          github="https://github.com/PhilipVigus/bowling-challenge"
          deployLink="http://phils-bowlingcard.surge.sh/"
        />
      </div>
    </div>
  );
}

export default Projects;
