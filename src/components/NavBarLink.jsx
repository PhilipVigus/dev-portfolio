import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBarLink = ({ link, text }) => {
  return (
    <Link to={link}>
      <span className="nav__link">{text}</span>
    </Link>
  );
};

NavBarLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavBarLink;
