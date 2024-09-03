import { render, screen } from "@testing-library/react";
import CTAOffer from "./CTAOffer";

describe("CTAOffer", () => {
  it("Should render without errors with default elements", () => {
    render(<CTAOffer />);

    expect(screen.getByText("CTAOffer component")).toBeInTheDocument();
  });
});
