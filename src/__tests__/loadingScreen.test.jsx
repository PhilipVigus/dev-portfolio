import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import LoadingScreen from "../components/loadingScreen";

test("renders command prompt", () => {
  render(
    <Router>
      <LoadingScreen />
    </Router>
  );
  expect(screen.getByText("phil@awesome-dev")).toBeInTheDocument();
});

test("renders all of the system messages eventually", async () => {
  jest.setTimeout(8000);
  render(
    <Router>
      <LoadingScreen />
    </Router>
  );

  await waitFor(
    () => {
      expect(
        screen.getByText("Ready for awesomeness overload . . . . . . . . . .")
      ).toBeInTheDocument();
    },
    { timeout: 8000 }
  );
});
