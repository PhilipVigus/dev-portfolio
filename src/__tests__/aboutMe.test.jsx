import React from "react";
import { render, screen } from "@testing-library/react";
import AboutMe from "../components/aboutMe";

describe("AboutMe", () => {
  describe("time specific greetings", () => {
    test("renders the the correct greeting in the morning", () => {
      jest
        .spyOn(global.Date, "now")
        .mockImplementation(() => new Date(2020, 6, 23).valueOf());
      render(<AboutMe />);
      expect(screen.getByText(/morning/)).toBeInTheDocument();
    });

    test("renders the the correct greeting in the afternoon", () => {
      jest
        .spyOn(global.Date, "now")
        .mockImplementation(() => new Date(2020, 6, 23, 12, 0, 0).valueOf());
      render(<AboutMe />);
      expect(screen.getByText(/afternoon/)).toBeInTheDocument();
    });

    test("renders the the correct greeting in the evening", () => {
      jest
        .spyOn(global.Date, "now")
        .mockImplementation(() => new Date(2020, 6, 23, 17, 0, 0).valueOf());
      render(<AboutMe />);
      expect(screen.getByText(/evening/)).toBeInTheDocument();
    });
  });
});
