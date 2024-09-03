import { render, screen } from "@testing-library/react";
import Experts from "./Experts";

describe("Experts", () => {
  it("Should render without errors with default elements", () => {
    render(<Experts />);

    expect(screen.getByText(Experts component")).toBeInTheDocument();
  });
});