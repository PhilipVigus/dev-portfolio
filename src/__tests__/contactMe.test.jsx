import React from "react";
import { render, screen } from "@testing-library/react";
import ContactMe from "../components/contactMe";

test("renders the static components", () => {
  render(<ContactMe />);
  expect(
    screen.getByRole("link", { name: "My Github account" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "My LinkedIn profile" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "My Medium blog" })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "My CV" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Email me" })).toBeInTheDocument();
});
