import React from "react";
import { render, screen } from "@testing-library/react";
import ContactMe from "../components/contactMe";

test("renders the static components", () => {
  render(<ContactMe />);
  expect(screen.getByText("Contact me")).toBeInTheDocument();
});
