import { Meta, StoryObj } from "@storybook/react";

import HubspotForm from "./HubspotForm";

const meta = {
  title: "Component/HubspotForm",
  component: HubspotForm,
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
} satisfies Meta<typeof HubspotForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

