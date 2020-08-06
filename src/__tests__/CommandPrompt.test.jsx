import React from "react";
import { render, screen } from "@testing-library/react";
import CommandPrompt from "../components/CommandPrompt";

test("renders the command prompt", () => {
  render(<CommandPrompt />);
  expect(screen.getByText("phil@awesome-dev")).toBeInTheDocument();
});
