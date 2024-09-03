import { Meta, StoryObj } from "@storybook/react";
import Author from "./Author";

const meta = {
  title: "Component/Author",
  component: Author,
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
} satisfies Meta<typeof Author>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

