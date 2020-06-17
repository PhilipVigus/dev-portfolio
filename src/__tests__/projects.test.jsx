import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../components/projects";

test("renders the static components", () => {
  render(<Projects />);
  expect(screen.getByText("Projects page")).toBeInTheDocument();
});
