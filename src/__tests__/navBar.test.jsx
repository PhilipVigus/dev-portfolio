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
  expect(screen.getByText("Navigation bar")).toBeInTheDocument();
});
