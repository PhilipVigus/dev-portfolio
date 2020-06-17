import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import TypedCommand from "../components/typedCommand";

test("doesn't initially render the command", async () => {
  const { queryByText } = render(
    <TypedCommand command="Command" onFinishDisplay={() => {}} speed="50" />
  );

  expect(queryByText("Command")).toBeNull();
});

test("renders the command eventually", async () => {
  render(
    <TypedCommand command="Command" speed="50" onFinishDisplay={() => {}} />
  );

  await waitFor(() => {
    expect(screen.getByText("Command")).toBeInTheDocument();
  });
});
