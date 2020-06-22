import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/navBar";

test("renders the static components", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  expect(screen.getByRole("link", { name: "About Me" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Skills" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
});
