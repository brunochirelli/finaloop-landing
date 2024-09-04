import type { Meta, StoryObj } from "@storybook/react";

import LogosCarousel from "./LogosCarousel";

const meta = {
  title: "Component/LogosCarousel",
  component: LogosCarousel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      router: {
        basePath: "/",
      },
    },
  },
} satisfies Meta<typeof LogosCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
  },
};
