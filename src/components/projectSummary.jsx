import React from "react";
import PropTypes from "prop-types";
import "./projectSummary.css";

function ProjectSummary({ title, summaryText, skills, github, deployLink }) {
  return (
    <div className="project-summary-container">
      <h2 className="project-summary-container__heading">{title}</h2>
      <div className="project-summary-container__text">
        <div>{summaryText}</div>
        <div className="project-summary__skills-container">
          {skills.map((skill) => (
            <div className="project-summary__skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="project-summary__links-container">
        <a
          className="project-summary__link"
          href={github}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Source
        </a>
        <a
          className="project-summary__link"
          href={deployLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

ProjectSummary.propTypes = {
  title: PropTypes.string.isRequired,
  summaryText: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
};

export default ProjectSummary;
