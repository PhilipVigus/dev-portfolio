import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AboutMe from "../components/aboutMe";

test("renders the static components", () => {
  render(
    <Router>
      <AboutMe />
    </Router>
  );

  expect(screen.getByText("About me")).toBeInTheDocument();
});
