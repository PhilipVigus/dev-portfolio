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
