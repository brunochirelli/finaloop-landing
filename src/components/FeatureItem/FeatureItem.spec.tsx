import { render, screen } from "@testing-library/react";
import FeatureItem from "./FeatureItem";

describe("FeatureItem", () => {
  it("Should render without errors with default elements", () => {
    render(<FeatureItem description="description" icon="icon" title="title" />);

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
  });
});
