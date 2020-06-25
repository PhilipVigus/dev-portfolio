import React from "react";
import NavBarLink from "./navBarLink";
import "./navBar.css";

function NavBar() {
  return (
    <nav>
      <NavBarLink link="about" text="About Me" />
      <NavBarLink link="projects" text="Projects" />
      <NavBarLink link="skills" text="Skills" />
      <a
        href="mailto:philipvigus@yahoo.co.uk"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
    </nav>
  );
}

export default NavBar;
