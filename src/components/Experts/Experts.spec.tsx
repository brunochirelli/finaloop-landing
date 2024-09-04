import { render, screen } from "@testing-library/react";

import Experts from "./Experts";

describe("Experts", () => {
  it("Should render without errors with default elements", () => {
    render(
      <Experts
        authors={[
          {
            name: "name",
            description: "Experts component",
            image: "/image.jpg",
          },
        ]}
        title="title"
      />,
    );

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("Experts component")).toBeInTheDocument();
  });
});
