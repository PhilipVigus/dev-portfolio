import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../components/projects";

test("renders the static components", () => {
  render(<Projects />);
  expect(screen.getByText("WhatStack")).toBeInTheDocument();
  expect(screen.getByText("Trailers")).toBeInTheDocument();
  expect(screen.getByText("Bowling")).toBeInTheDocument();
});
