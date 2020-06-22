import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NavBarLink from "../components/navBarLink";

test.only("renders the static components", () => {
  render(
    <Router>
      <NavBarLink text="A Link" link="link" />
    </Router>
  );
  expect(screen.getByText("A Link")).toBeInTheDocument();
});
