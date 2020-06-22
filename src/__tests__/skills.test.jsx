import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "../components/skills";

test("renders the static components", () => {
  render(<Skills />);
  expect(screen.getByText("Skills page")).toBeInTheDocument();
});
