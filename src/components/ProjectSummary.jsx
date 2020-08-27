import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectSummaryContainer = styled.section`
  background-color: var(--background-colour);
  border-radius: 3px;
  border: 1px solid var(--background-colour);
  box-shadow: 4px 4px 3px grey;
  color: var(--lightest-shade);
  display: flex;
  flex: 0 0 25%;
  flex-direction: column;
  height: 350px;
  margin: 1%;
  min-width: 250px;
  max-width: 300px;
  width: 300px;

  @media (hover: hover) {
    &:hover {
      background-color: var(--mid-shade);
    }
  }
`;

const ProjectSummaryHeading = styled.h2`
  text-align: center;
`;

const ProjectSummaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 10px;
`;

const ProjectSummarySkillsList = styled.div`
  text-align: center;
`;

const ProjectSummarySkill = styled.div`
  background-color: var(--highlight-colour);
  border-radius: 6px;
  color: var(--darkest-shade);
  display: inline-block;
  margin: 3px 10px;
  padding: 3px;
`;

const ProjectSummaryLinksList = styled.div`
  background-color: var(--highlight-colour-dark);
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
`;

const ProjectSummaryLink = styled.a`
  text-align: center;
  font-size: 1.2em;
  flex: 1 1 100%;
  padding: 10px 0;

  @media (hover: hover) {
    &:hover {
      background-color: var(--highlight-colour);
    }
  }
`;

function ProjectSummary({ title, summaryText, skills, github, deployLink }) {
  return (
    <ProjectSummaryContainer>
      <ProjectSummaryHeading>{title}</ProjectSummaryHeading>
      <ProjectSummaryTextContainer>
        <div>{summaryText}</div>
        <ProjectSummarySkillsList>
          {skills.map((skill) => (
            <ProjectSummarySkill key={skill}>{skill}</ProjectSummarySkill>
          ))}
        </ProjectSummarySkillsList>
      </ProjectSummaryTextContainer>
      <ProjectSummaryLinksList>
        <ProjectSummaryLink
          href={github}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Source
        </ProjectSummaryLink>
        <ProjectSummaryLink
          href={deployLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          Live Demo
        </ProjectSummaryLink>
      </ProjectSummaryLinksList>
    </ProjectSummaryContainer>
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
