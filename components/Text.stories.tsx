import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Text from "./Text";

const meta = {
  title: "Text Component",
  component: Text,
  args: {
    children: "Hello, world!",
    variant: "primary",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
