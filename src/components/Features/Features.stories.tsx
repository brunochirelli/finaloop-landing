import { Meta, StoryObj } from "@storybook/react";
import Features from "./Features";

const meta = {
  title: "Component/Features",
  component: Features,
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
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

