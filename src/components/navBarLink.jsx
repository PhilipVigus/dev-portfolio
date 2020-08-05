import React from "react";
import { Link } from "react-router-dom";

function NavBarLink({ link, text }) {
  return (
    <div>
      <Link to={link}>{text}</Link>
    </div>
  );
}

export default NavBarLink;
