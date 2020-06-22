import React from "react";
import NavBarLink from "./navBarLink";
import "./navBar.css";

function NavBar() {
  return (
    <nav>
      <NavBarLink link="about" text="About Me" />
      <NavBarLink link="projects" text="Projects" />
      <NavBarLink link="skills" text="Skills" />
      <NavBarLink link="contact" text="Contact" />
    </nav>
  );
}

export default NavBar;
