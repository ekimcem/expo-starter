import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

const IntroLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name="index"></Stack.Screen>
    </Stack>
  );
};

export default IntroLayout;
