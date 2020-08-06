import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SystemMessage from "../components/SystemMessage";

test("renders the full message eventually", async () => {
  render(
    <SystemMessage message="Message" onFinishDisplay={() => {}} speed={30} />
  );

  await waitFor(
    () => {
      expect(
        screen.getByText("Message . . . . . . . . . .")
      ).toBeInTheDocument();
    },
    { timeout: 2000 }
  );
});
