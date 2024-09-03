import { render, screen } from "@testing-library/react";
import FeatureItem from "./FeatureItem";

describe("FeatureItem", () => {
  it("Should render without errors with default elements", () => {
    render(<FeatureItem />);

    expect(screen.getByText(FeatureItem component")).toBeInTheDocument();
  });
});