import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div>
      <h2 className="skills-heading">Technical</h2>
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
              work is on <strong>Github</strong>, which I am comfortable using
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
              along with the <strong>React testing library</strong> if I&apos;m
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
      <h2 className="skills-heading">Non-technical</h2>
      <table className="tech-skills-table">
        <tbody>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Communication</td>
            <td className="tech-skills-description">
              <p>
                Coming from my background as a teacher and then in educational
                quality assurance, I excel with verbal and written
                communication, and am able to break complex concepts down into
                small chunks so they can be easily discussed and understood.
              </p>
              <p>
                I receive regular positive feedback about the way I communicate
                during group projects and in pair programming. I am also
                passionate about ensuring everyone gets a say in the direction a
                project takes, and take pride in my ability to facilitate this.
              </p>
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Problem solving</td>
            <td className="tech-skills-description">
              <p>
                I have a thorough, methodical approach to solving problems. With
                bugs I make minimal and incremental changes that I understand
                the impact of, which makes it easier to isolate the section of
                code to focus on.
              </p>
              <p>
                I also have excellent research skills, establishing whether
                someone else has already solved the same or a similar problem. I
                check official documentation and read around the subject, making
                sure I fully understand the issue and its context. I then break
                the problem down into the smallest possible pieces and solve
                these micro-problems one at a time.
              </p>
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">
              An excellent understanding of how learning works
            </td>
            <td className="tech-skills-description">
              <p>
                This helps me to learn quickly, independently and effectively,
                and allows me to facilitate the learning of those around me.
              </p>
              <p>
                Before starting at Makers Academy I created a Trailers website,
                teaching myself to build and deploy a full stack project using
                Express, MongoDB and the PUG templating language.
              </p>
              <p>
                At Makers Academy I taught myself React alongside the standard
                curriculum. I was given regular, extremely positive feedback by
                team members and pair partners on how well I facilitated their
                learning without spoonfeeding them solutions. I also mentored
                two members of a later cohort, helping them get the most out of
                the course by offering technical and pastoral advice based on my
                experience.
              </p>
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">
              High emotional intelligence
            </td>
            <td className="tech-skills-description">
              <p>
                I am extremely self-aware, and am able to empathize effectively
                with others.
              </p>
              <p>
                At the end of one project at Makers Academy there was a split in
                the group. One side was focused on getting as much done as
                possible, with one person adding a lot of code that others did
                not understand. The other side was more interested in ensuring
                that the work represented the entire group. I identified this
                problem quickly, and helped the group reach a compromise that
                everyone was happy with.
              </p>
              <p>
                I give constructive, critical feedback when pair programming,
                and quickly identify when I make mistakes and am very receptive
                to feedback on how to improve.
              </p>
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">Leadership</td>
            <td className="tech-skills-description">
              <p>I have strong leadership skills.</p>
              <p>
                At Makers Academy I often took leadership roles during critical
                times and received unanimous positive feedback on my ability to
                keep groups on task, ensure that all team members had a voice,
                and help the team reach consensus when there were disagreements.
                I led our final project for the first couple of days,
                establishing solid foundations such as a team charter, consensus
                on the details of the project, and broadly what the two weeks of
                the project would look like.
              </p>
              <p>
                In educational quality assurance, I regularly led teams of
                moderators when visiting clients. I was responsible for
                coordinating their efforts and ensuring that work was completed
                to extremely tight schedules in challenging and sometimes
                unfriendly environments.
              </p>
            </td>
          </tr>
          <tr className="tech-skills-row">
            <td className="tech-skills-category">
              Determination and persistence
            </td>
            <td className="tech-skills-description">
              <p>I don&apos;t know when or how to give up.</p>
              <p>
                During the final project at Makers Academy the group had huge
                difficulty working out how to test the WebSocket-based
                components of the code. We spent hours on it without success. I
                refused to give up, and finally managed to write a successful
                test on the morning of the last day of the project.
              </p>
              <p>
                I spent four years unable to work due to ill-health. Recovery
                was a long, difficult path with plenty of obstacles, but I never
                once thought that I would not be able to make it back to
                full-time employment.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Skills;
