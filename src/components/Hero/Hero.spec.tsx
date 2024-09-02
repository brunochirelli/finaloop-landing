import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("Should render without errors with default elements", () => {
    render(<Hero />);

    expect(
      screen.getByRole("button", { name: "Get Your Full Guide" }),
    ).toBeInTheDocument();
  });
});
