import { render, screen } from "@testing-library/react";
import Experts from "./Experts";

describe("Experts", () => {
  it("Should render without errors with default elements", () => {
    render(
      <Experts
        title="title"
        authors={[
          {
            name: "name",
            description: "Experts component",
            image: "/image.jpg",
          },
        ]}
      />,
    );

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("Experts component")).toBeInTheDocument();
  });
});
