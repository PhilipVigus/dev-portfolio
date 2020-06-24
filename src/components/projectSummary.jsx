import React from "react";
import "./projectSummary.css";

function ProjectSummary({
  title,
  image,
  imageAltText,
  summaryText,
  skills,
  github,
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
    </div>
  );
}

export default ProjectSummary;
