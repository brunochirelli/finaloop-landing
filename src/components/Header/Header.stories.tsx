import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

const meta = {
  title: "Layout/Header",
  component: Header,
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
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
