import { render, screen } from "@testing-library/react";
import HubspotForm from "./HubspotForm";

describe("HubspotForm", () => {
  it("Should render without errors with default elements", () => {
    render(<HubspotForm />);

    expect(screen.getByText("HubspotForm component")).toBeInTheDocument();
  });
});