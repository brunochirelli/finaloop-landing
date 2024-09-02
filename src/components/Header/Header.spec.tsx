import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("Should render without errors with default elements", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Finaloop" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Get started" }),
    ).toBeInTheDocument();
  });
});
