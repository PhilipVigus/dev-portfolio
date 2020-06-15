import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../components/login";

test("renders learn react link", () => {
  render(<Login />);
  expect(screen.getByText("This is the login screen")).toBeInTheDocument();
});
