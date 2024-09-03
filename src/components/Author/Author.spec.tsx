import { render, screen } from "@testing-library/react";
import Author from "./Author";

describe("Author", () => {
  it("Should render without errors with default elements", () => {
    render(
      <Author
        author={{
          name: "name",
          description: "Author component",
          image: "/image.jpg",
        }}
      />,
    );

    expect(screen.getByText("Author component")).toBeInTheDocument();
  });
});
