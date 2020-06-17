import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SystemMessage from "../components/systemMessage";

test("renders the message without the dots to start with", async () => {
  render(<SystemMessage message="Message" />);
  expect(screen.getByText("Message")).toBeInTheDocument();
});

test("renders the full message eventually", async () => {
  render(<SystemMessage message="Message" onFinishDisplay={() => {}} />);

  await waitFor(
    () => {
      expect(screen.getByText("Message...")).toBeInTheDocument();
    },
    { timeout: 2000 }
  );
});
