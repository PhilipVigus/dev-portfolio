import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div>
      Projects page
      <div className="project-summaries-container">
        <div>
          WhatStack
          <div>
            <img
              width="100%"
              src="./whatstack-screenshot.png"
              alt="whatstack project screenshot"
            />
          </div>
          <div>
            A cross between WhatsApp and Stack Overflow. Our final group project
            at Makers Academy.
          </div>
          <div>
            Using - Javascript, MongoDB, Express, React, Node, WebSockets, Jest,
            Auth0, React testing library, Heroku, CSS, HTML
          </div>
        </div>
        <div>
          Trailers
          <div>
            <img
              width="100%"
              src="./trailers-screenshot.png"
              alt="trailers project screenshot"
            />
          </div>
          <div>
            A website I implement to help my wife and I track the films we want
            to watch based off of trailers we see.
          </div>
          <div>
            Using - Javascript, MongoDB, Express, Node, PUG, Heroku, CSS, HTML
          </div>
        </div>
        <div>
          Bowling
          <div>
            <img
              width="100%"
              src="./bowling-screenshot.png"
              alt="bowling project screenshot"
            />
          </div>
          <div>A client-side bowling card with automated scoring.</div>
          <div>Using - Javascript, Jasmine, CSS, HTML</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
