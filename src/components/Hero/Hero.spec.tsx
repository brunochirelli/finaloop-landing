import { render, screen, waitFor } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("Should render without errors with default elements", async () => {
    render(<Hero title="title" />);

    await waitFor(() => {
      expect(screen.getByText("title")).toBeInTheDocument();
    });
  });
});
