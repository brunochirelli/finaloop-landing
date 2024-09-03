import { Meta, StoryObj } from "@storybook/react";
import FeatureItem from "./FeatureItem";

const meta = {
  title: "Component/FeatureItem",
  component: FeatureItem,
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
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "description",
    icon: "icon",
    title: "title",
  },
};
