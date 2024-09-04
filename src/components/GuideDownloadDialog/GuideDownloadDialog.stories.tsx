import { Meta, StoryObj } from "@storybook/react";

import GuideDownloadDialog from "./GuideDownloadDialog";

const meta = {
  title: "Component/GuideDownloadDialog",
  component: GuideDownloadDialog,
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
} satisfies Meta<typeof GuideDownloadDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

