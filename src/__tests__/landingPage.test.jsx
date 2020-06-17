import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "../components/landingPage";

test("renders the static components", () => {
  render(<LandingPage />);
  expect(screen.getByText("Landing Page")).toBeInTheDocument();
});
