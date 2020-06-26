import React from "react";
import PropTypes from "prop-types";
import "./projectSummary.css";

function ProjectSummary({
  title,
  image,
  imageAltText,
  summaryText,
  skills,
  github,
  deployLink,
}) {
  return (
    <div className="project-summary-container">
      <h2 className="project-summary-heading">{title}</h2>
      <div>
        <img
          className="project-summary-image"
          src={`./${image}`}
          alt={imageAltText}
        />
      </div>
      <div className="project-summary-text-container">
        <div>{summaryText}</div>
        <div>{skills}</div>
      </div>
      <div className="project-summary-links-container">
        <span className="project-summary-link project-summary-link-source">
          <a href={github} rel="noopener noreferrer" target="_blank">
            View Source
          </a>
        </span>
        <span className="project-summary-link project-summary-link-demo">
          <a href={deployLink} rel="noopener noreferrer" target="_blank">
            Live Demo
          </a>
        </span>
      </div>
    </div>
  );
}

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  summaryText: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
};

export default ProjectSummary;
