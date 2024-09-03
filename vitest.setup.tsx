import "@testing-library/jest-dom/vitest";

vi.mock("next/navigation", () => require("next-router-mock"));

vi.mock("tailwindcss-intersect", () => ({
  handler: () => {},
  Observer: {
    start: () => vi.fn(),
    observe: () => vi.fn(),
    getThreshold: (element: HTMLElement) => 0,
  },
}));

vi.mock("next/image", () => ({
  default: () => <div />,
}));

vi.mock("react-fast-marquee", () => ({
  __esModule: true,
  default: () => {
    return () => <div />;
  },
}));
