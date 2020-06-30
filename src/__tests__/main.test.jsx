import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Main from "../components/main";

describe("Main", () => {
  describe("Redirects from the loading screen", () => {
    it("redirects to the about me page when the loading screen finishes displaying", async () => {
      jest.useFakeTimers();
      render(
        <Router>
          <Main />
        </Router>
      );

      act(() => {
        jest.runAllTimers();
      });

      expect(
        await screen.findByText(/(full stack developer)/)
      ).toBeInTheDocument();
      jest.useRealTimers();
    });

    it("redirects to the about me page when you click", () => {
      render(
        <Router>
          <Main />
        </Router>
      );
      const node = screen.getByText("phil@awesome-dev");
      fireEvent.click(node);
      expect(screen.getByText(/(full stack developer)/)).toBeInTheDocument();
    });
  });

  describe("Nav bar links", () => {
    it("navigates to the project page", () => {
      render(
        <Router>
          <Main />
        </Router>
      );
      let node = screen.getByText("phil@awesome-dev");
      fireEvent.click(node);

      node = screen.getByRole("link", { name: "Projects" });
      fireEvent.click(node);

      expect(
        screen.getByRole("heading", { name: "WhatStack" })
      ).toBeInTheDocument();
    });

    it("navigates to the skills page", () => {
      render(
        <Router>
          <Main />
        </Router>
      );
      let node = screen.getByText("phil@awesome-dev");
      fireEvent.click(node);

      node = screen.getByRole("link", { name: "Skills" });
      fireEvent.click(node);

      expect(
        screen.getByRole("heading", { name: "Technical" })
      ).toBeInTheDocument();
    });
  });
});
