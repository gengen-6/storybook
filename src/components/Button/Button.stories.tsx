import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "登録",
  },
};

export const Default: Story = {
  args: {
    children: "キャンセル",
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    children: "削除",
  },
};