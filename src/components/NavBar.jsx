import React from "react";
import NavBarLink from "./NavBarLink";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav__link-container">
        <NavBarLink link="about" text="About" />
        <NavBarLink link="projects" text="Projects" />
        <a
          href="mailto:philipvigus@yahoo.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="nav__link">Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
