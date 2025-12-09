import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout Component", () => {
  it("shows children content", () => {
    // Render Layout with some test content
    render(
      <Layout>
        <div>My Test Content</div>
      </Layout>
    );

    // Check if the content appears on the page
    expect(screen.getByText("My Test Content")).toBeInTheDocument();
  });

  it("shows blog title", () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    // Check if the blog title is visible
    expect(screen.getByText(/Julia's Tech Blog/i)).toBeInTheDocument();
  });

  it("shows navigation menu", () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    // Check if all navigation links are present
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Notes")).toBeInTheDocument();
    expect(screen.getByText("Learning Journey")).toBeInTheDocument();
  });

  it("shows footer with current year", () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    // Get current year
    const currentYear = new Date().getFullYear();

    // Check if footer shows the year and author name
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument();
    expect(screen.getByText(/Julia Dmytrenko/i)).toBeInTheDocument();
  });
});
