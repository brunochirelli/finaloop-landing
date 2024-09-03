import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("Should render without errors with default elements", () => {
    render(<Footer />);

    expect(screen.getByText("Finaloop, Inc.")).toBeInTheDocument();
  });
});
