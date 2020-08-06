import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectSummary from "../components/ProjectSummary";

test("renders the static components", () => {
  render(
    <ProjectSummary
      title="A project summary"
      image="trailers-screenshot.png"
      imageAltText="image alt text"
      summaryText="Project summary text"
      skills={["Project skills"]}
      github="www.link-to-github.com"
      deployLink="www.link-to-deploy.com"
    />
  );

  expect(
    screen.getByRole("heading", { name: "A project summary" })
  ).toBeInTheDocument();
});
