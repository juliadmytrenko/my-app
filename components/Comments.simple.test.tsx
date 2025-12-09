import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Comments from "./Comments";

describe("Comments Component", () => {
  it("renders without crashing", () => {
    // Just check if the component renders without errors
    const { container } = render(<Comments />);

    // Check if the container div exists
    expect(container.querySelector(".mt-8")).toBeInTheDocument();
  });
});
