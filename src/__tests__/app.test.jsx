import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from "../App";

test("redirects to the about me page when you click", () => {
  render(<App />);
  const node = screen.getByText("phil@awesome-dev");
  fireEvent.click(node);
  expect(screen.getByText("About me")).toBeInTheDocument();
});

test("redirects to the about me page after the loading screen is fully displayed", async () => {
  jest.setTimeout(20000);
  render(<App />);

  await waitFor(
    () => {
      expect(screen.getByText("About me")).toBeInTheDocument();
    },
    { timeout: 20000 }
  );
});
