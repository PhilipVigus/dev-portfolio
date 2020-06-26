import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div>
      <h3>Technical</h3>
      <table className="tech-skills-table">
        <tbody>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Languages</td>
            <td className="tech-skills-description">
              My strongest language is <strong>JavaScript</strong>, but I also
              have experience with <strong>Ruby</strong>. One of the main
              focuses of the course at Makers Academy was teaching us how to
              learn new languages, and I am confident that I can pick up
              anything needed quickly and efficiently. In addition, I am also
              comfortable with <strong>HTML</strong> and <strong>CSS</strong>.
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Frameworks</td>
            <td className="tech-skills-description">
              I am familiar with <strong>React</strong> and{" "}
              <strong>Express</strong>, having built a website using the{" "}
              <strong>MERN</strong> stack. I have also used{" "}
              <strong>Rails</strong> and <strong>Sinatra</strong>.
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Databases</td>
            <td className="tech-skills-description">
              I have used basic <strong>SQL</strong> in conjunction with the{" "}
              <strong>PostgreSQL</strong> database, and have also worked with{" "}
              <strong>MongoDB</strong>.
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Workflow</td>
            <td className="tech-skills-description">
              I am very familiar with <strong>Git</strong>, using master, dev
              and feature branches as part of my day-to-day workflow. All of my
              work is on
              <strong>Github</strong>, which I am comfortable using
              collaboratively as part of a team with pull requests and code
              reviews. I have set up <strong>CI/CD</strong> for several projects
              using <strong>Travis CI</strong> and <strong>Heroku</strong>, and
              my IDE of choice is <strong>VS Code</strong>.
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Testing</td>
            <td className="tech-skills-description">
              When working with JavaScript, I mainly use <strong>Jest</strong>,
              along with the <strong>React testing library</strong> if I'm
              developing with the React framework, but have also used{" "}
              <strong>Jasmine</strong>. With Ruby, I use <strong>RSpec</strong>{" "}
              and <strong>Capybara</strong>.
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Methodologies</td>
            <td className="tech-skills-description">
              I use <strong>TDD/BDD</strong> on all of my projects as
              appropriate. All Makers Academy group projects were structured to
              use <strong>Agile/Scrum/XP</strong> rituals, so I am familiar
              working with things like standups, kanban boards and
              retrospectives. I also understand basic <strong>OOP</strong> and{" "}
              <strong>MVC</strong> design principles and practices.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Non-technical</h3>
      <h4>Communication</h4>
      <p>
        I excel with verbal and written communication, and am able to break
        complex concepts down into small chunks so they can be easily discussed
        and understood.
      </p>
      <h4>Problem solving</h4>
      <p>I have a thorough, methodical approach to solving problems.</p>
      <h4>An excellent understanding of how learning works</h4>
      <p>
        This helps me to learn quickly, independently and effectively, and
        allows me to facilitate the learning of those around me.
      </p>
      <h4>High emotional intelligence</h4>
      <p>
        I am extremely self-aware, and am able to empathize effectively with
        others.
      </p>
      <h4>Leadership</h4>
      <p>I have strong leadership skills.</p>
      <h4>Determination and persistence</h4>
      <p>I don&apos;t know when or how to give up.</p>
    </div>
  );
}

export default Skills;
