import { render, screen } from "@testing-library/react";
import LogosCarousel from "./LogosCarousel";

describe("LogosCarousel", () => {
  it("Should render without errors with default elements", () => {
    render(<LogosCarousel />);

    expect(screen.getByText("LogosCarousel component")).toBeInTheDocument();
  });
});
