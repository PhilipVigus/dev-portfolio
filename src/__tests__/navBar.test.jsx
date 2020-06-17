import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/navBar";

test("renders the static components", () => {
  render(<NavBar />);
  expect(screen.getByText("Navigation bar")).toBeInTheDocument();
});
