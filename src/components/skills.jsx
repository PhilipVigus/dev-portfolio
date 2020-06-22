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
    </div>
  );
}

export default Skills;
