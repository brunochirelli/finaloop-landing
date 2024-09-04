import { render, screen } from "@testing-library/react";

import GuideDownloadDialog from "./GuideDownloadDialog";

describe("GuideDownloadDialog", () => {
  it("Should render without errors with default elements", () => {
    render(<GuideDownloadDialog />);

    expect(screen.getByText("Get Your Full Guide")).toBeInTheDocument();
  });
});
