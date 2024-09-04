import type { Meta, StoryObj } from "@storybook/react";

import CTAOffer from "./CTAOffer";

const meta = {
  title: "Component/CTAOffer",
  component: CTAOffer,
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
} satisfies Meta<typeof CTAOffer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

