import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Projects from "../components/projects";

test("renders the static components", () => {
  render(
    <Router>
      <Projects />
    </Router>
  );
  expect(screen.getByText("Projects page")).toBeInTheDocument();
});
