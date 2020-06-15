import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingScreen from "../components/loadingScreen";

test("renders learn react link", () => {
  render(<LoadingScreen />);
  expect(screen.getByText("phil@awesome-dev")).toBeInTheDocument();
});
