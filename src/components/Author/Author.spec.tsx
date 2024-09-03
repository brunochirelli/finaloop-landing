import { render, screen } from "@testing-library/react";
import Author from "./Author";

describe("Author", () => {
  it("Should render without errors with default elements", () => {
    render(<Author />);

    expect(screen.getByText(Author component")).toBeInTheDocument();
  });
});