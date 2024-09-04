import type { Meta, StoryObj } from "@storybook/react";

import Experts from "./Experts";

const meta = {
  title: "Component/Experts",
  component: Experts,
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
} satisfies Meta<typeof Experts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
    authors: [
      {
        description: "Experts component",
        image: "/image.jpg",
        name: "name",
      },
    ],
  },
};
