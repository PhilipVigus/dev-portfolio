import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      Navigation bar
      <Link to="about">About Me</Link>
      <Link to="projects">Projects</Link>
      <Link to="contact">Contact</Link>
    </div>
  );
}

export default NavBar;
