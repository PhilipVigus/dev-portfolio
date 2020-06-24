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
      <div>{summaryText}</div>
      <div>{skills}</div>
      <div>
        <a href={github} rel="noopener noreferrer" target="_blank">
          GitHub
        </a>
      </div>
      <div>
        <a href={deployLink} rel="noopener noreferrer" target="_blank">
          See it in action
        </a>
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
