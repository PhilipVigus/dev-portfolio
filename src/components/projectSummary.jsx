import React, { useState } from "react";
import PropTypes from "prop-types";
import "./projectSummary.css";

function ProjectSummary({ title, summaryText, skills, github, deployLink }) {
  const [showingDetails, setShowingDetails] = useState(true);

  if (!showingDetails) {
    return (
      <div
        className="project-summary-container__hidden"
        onMouseLeave={() => {
          setShowingDetails(true);
        }}
      >
        <h2 className="project-summary-container__heading">{title}</h2>
      </div>
    );
  } else {
    return (
      <div
        className="project-summary-container__hidden"
        onMouseEnter={() => {
          setShowingDetails(false);
        }}
      >
        <h2 className="project-summary-container__heading-hidden">{title}</h2>
      </div>
    );
  }
}

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  summaryText: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
};

export default ProjectSummary;
