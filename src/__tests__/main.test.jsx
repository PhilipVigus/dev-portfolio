import React from "react";
import {
  act,
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Main from "../components/main";

test("redirects to the about me page when the loading screen finishes displaying", async () => {
  jest.useFakeTimers();
  render(
    <Router>
      <Main />
    </Router>
  );

  act(() => {
    jest.runAllTimers();
  });

  expect(await screen.findByText(/(full stack developer)/)).toBeInTheDocument();
  jest.useRealTimers();
});

test("redirects to the about me page when you click", () => {
  render(
    <Router>
      <Main />
    </Router>
  );
  const node = screen.getByText("phil@awesome-dev");
  fireEvent.click(node);
  expect(screen.getByText(/(full stack developer)/)).toBeInTheDocument();
});
