import React from "react";

function Skills() {
  return (
    <div>
      <h2>My skills</h2>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Languages</td>
            <td>Javascript, Ruby, SQL, CSS, HTML</td>
          </tr>
          <tr>
            <td>Frameworks</td>
            <td>React, Express, Rails, Sinatra</td>
          </tr>
          <tr>
            <td>Databases</td>
            <td>PostgreSQL, MongoDB</td>
          </tr>
          <tr>
            <td>Workflow</td>
            <td>Git, Github, Travis CI/CD, Heroku, VSCode</td>
          </tr>
          <tr>
            <td>Testing</td>
            <td>Jest, Jasmine, RSpec, Capybara, React testing library</td>
          </tr>
          <tr>
            <td>Methodologies</td>
            <td>OOP, MVC, TDD/BDD, Agile/Scrum/XP</td>
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
