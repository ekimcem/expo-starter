import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Badge from "./Badge";

const meta = {
  title: "Badge",
  component: Badge,
  args: {
    label: "Badge",
  },
  argTypes: {
    label: {
      type: "string",
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, width: "auto" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Outlined: Story = {};
