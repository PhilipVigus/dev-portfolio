import React from "react";

function ProjectSummary({ title, image, imageAltText, summaryText, skills }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <img width="100%" src={`./${image}`} alt={imageAltText} />
      </div>
      <div>{summaryText}</div>
      <div>{skills}</div>
    </div>
  );
}

export default ProjectSummary;
