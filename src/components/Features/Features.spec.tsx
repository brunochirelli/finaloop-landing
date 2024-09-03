import { render, screen } from "@testing-library/react";
import Features from "./Features";

describe("Features", () => {
  it("Should render without errors with default elements", () => {
    render(<Features title="title" />);

    expect(screen.getByText("title")).toBeInTheDocument();
  });
});
