import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import LoadingScreen from "../components/loadingScreen";

test("renders learn react link", () => {
  render(<LoadingScreen />);
  expect(screen.getByText("phil@awesome-dev")).toBeInTheDocument();
});

test("renders all of the system messages eventually", async () => {
  jest.setTimeout(20000);
  render(<LoadingScreen />);

  await waitFor(
    () => {
      expect(
        screen.getByText("Ready for awesomeness overload . . . . . . . . . .")
      ).toBeInTheDocument();
    },
    { timeout: 20000 }
  );
});
