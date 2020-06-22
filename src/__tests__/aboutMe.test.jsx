import React from "react";
import { render, screen } from "@testing-library/react";
import AboutMe from "../components/aboutMe";

test("renders the static components", () => {
  render(<AboutMe />);

  expect(screen.getByText("About me")).toBeInTheDocument();
});
