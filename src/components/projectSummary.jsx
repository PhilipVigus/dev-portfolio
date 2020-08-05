import React from "react";
import PropTypes from "prop-types";
import "./projectSummary.css";

function ProjectSummary({ title, summaryText, skills, github, deployLink }) {
  return (
    <div className="project-summary-container">
      <h2 className="project-summary-heading">{title}</h2>
      <div className="project-summary-text-container">
        <div>{summaryText}</div>
        <div>{skills}</div>
      </div>
      <div className="project-summary-links-container">
        <a
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="project-summary-link project-summary-link-source"
        >
          <span>View Source</span>
        </a>
        <a
          href={deployLink}
          rel="noopener noreferrer"
          target="_blank"
          className="project-summary-link project-summary-link-demo"
        >
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
}

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  summaryText: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
};

export default ProjectSummary;
