import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectSummary from "../components/projectSummary";

test("renders the static components", () => {
  render(
    <ProjectSummary
      title="A project summary"
      image="trailers-screenshot.png"
      imageAltText="image alt text"
      summaryText="Project summary text"
      skills="Project skills"
      github="www.link-to-github.com"
      deployLink="www.link-to-deploy.com"
    />
  );

  expect(
    screen.getByRole("heading", { name: "A project summary" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: "image alt text" })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "GitHub" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "See it in action" })
  ).toBeInTheDocument();
  expect(screen.getByText("Project summary text")).toBeInTheDocument();
  expect(screen.getByText("Project skills")).toBeInTheDocument();
});
