import React from "react";
import NavBarLink from "./navBarLink";
import "./navBar.css";

function NavBar() {
  return (
    <nav>
      <div className="nav__link-container">
        <NavBarLink link="about" text="About" />
        <NavBarLink link="projects" text="Projects" />
        <NavBarLink link="skills" text="Skills" />
        <a
          href="mailto:philipvigus@yahoo.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
