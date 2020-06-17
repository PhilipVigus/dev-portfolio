import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import LoadingScreen from "../components/loadingScreen";

test("renders learn react link", () => {
  render(<LoadingScreen />);
  expect(screen.getByText("phil@awesome-dev")).toBeInTheDocument();
});

test("renders all of the system messages eventually", async () => {
  render(<LoadingScreen />);

  await waitFor(
    () => {
      expect(screen.getByText("slowly but surely...")).toBeInTheDocument();
    },
    { timeout: 10000 }
  );
});
