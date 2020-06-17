import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ContactMe from "../components/contactMe";

test("renders the static components", () => {
  render(
    <Router>
      <ContactMe />
    </Router>
  );
  expect(screen.getByText("Contact me")).toBeInTheDocument();
});
