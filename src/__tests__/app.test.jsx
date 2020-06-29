import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("Contains some static text", async () => {
  render(<App />);
  expect(screen.getByText(/(Loading screen 2)/)).toBeInTheDocument();
});

test("redirects to the about me page after the loading screen is fully displayed", async () => {
  expect.assertions(1);
  jest.useFakeTimers();
  render(<App />);
  act(() => jest.advanceTimersByTime(1000));
  expect(await screen.findByText(/(full stack developer)/)).toBeInTheDocument();
});

test("redirects to the about me page when you click", async () => {
  expect.assertions(1);
  render(<App />);
  const node = await screen.findByText(/(Loading screen 2)/);
  fireEvent.click(node);
  expect(await screen.findByText(/(full stack developer)/)).toBeInTheDocument();
});
