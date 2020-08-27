import React from "react";
import styled from "styled-components";
import NavBarLink, { StyledNavBarLink } from "./NavBarLink";

const StyledNav = styled.nav`
  background-color: var(--darkest-shade);
  color: var(--lightest-shade);
  font-size: 2rem;
  height: 100vh;
  padding: 10px 3%;
  width: auto;
`;

const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;
  justify-content: space-between;
  margin-top: 25px;

  @media (max-width: 48em) {
    & {
      flex-direction: row;
      height: auto;
      justify-content: space-around;
      margin-top: 0;
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNav>
      <NavLinkContainer>
        <NavBarLink link="about" text="About" />
        <NavBarLink link="projects" text="Projects" />
        <a
          href="mailto:philipvigus@yahoo.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledNavBarLink>Contact</StyledNavBarLink>
        </a>
      </NavLinkContainer>
    </StyledNav>
  );
};

export default NavBar;
