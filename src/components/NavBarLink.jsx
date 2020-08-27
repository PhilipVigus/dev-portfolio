import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavBarLink = styled.span`
  font-size: 3rem;
  position: relative;

  @media (hover: hover) {
    &:before {
      background-color: var(--highlight-colour);
      bottom: -3px;
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
      visibility: hidden;
      width: 100%;
    }

    &:hover:before {
      transform: scaleX(1);
      visibility: visible;
    }
  }
`;

const NavBarLink = ({ link, text }) => {
  return (
    <Link to={link}>
      <StyledNavBarLink>{text}</StyledNavBarLink>
    </Link>
  );
};

NavBarLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavBarLink;
