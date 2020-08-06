import React from "react";
import { render, screen } from "@testing-library/react";
import Cursor from "../components/Cursor";

test("renders the cursor", () => {
  render(<Cursor />);
  expect(screen.getByText(/\u{2588}/u)).toBeInTheDocument();
});
