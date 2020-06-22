import React from "react";
import { Link } from "react-router-dom";

function NavBarLink({ link, text }) {
  return <Link to={link}>{text}</Link>;
}

export default NavBarLink;
