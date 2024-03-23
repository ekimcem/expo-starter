import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "../constants/Colors";

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: "outlined" | "filled";
  style?: ViewStyle;
}

export const Button = ({
  onPress,
  label,
  variant = "filled",
  style,
}: ButtonProps) => {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? darkColors : lightColors;

  const containerStyle =
    variant === "outlined"
      ? [styles.outlinedContainer, { borderColor: colors.text }]
      : [styles.filledContainer, { backgroundColor: colors.text }];
  const textStyle =
    variant === "outlined"
      ? [
          styles.outlinedText,
          { color: colorScheme === "dark" ? colors.text : colors.background },
        ]
      : [
          styles.filledText,
          { color: colorScheme === "dark" ? colors.background : colors.text },
        ];

  return (
    <TouchableOpacity style={[containerStyle, style]} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outlinedContainer: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  filledContainer: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 8,
  },
  outlinedText: { fontSize: 16, fontWeight: "bold" },
  filledText: { fontSize: 16, fontWeight: "bold" },
});
