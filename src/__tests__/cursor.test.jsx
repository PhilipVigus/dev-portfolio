import React from "react";
import { render, screen } from "@testing-library/react";
import Cursor from "../components/cursor";

test("renders the cursor", () => {
  render(<Cursor />);
  expect(screen.getByText(/\u{2588}/u)).toBeInTheDocument();
});
