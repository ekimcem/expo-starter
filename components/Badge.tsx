import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "../constants/Colors";

interface BadgeProps {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const Badge: React.FC<BadgeProps> = ({ label, onPress, style }) => {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? darkColors : lightColors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors.secondary }, style]}
    >
      <Text style={[styles.label, { color: colors.secondaryForeground }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Badge;
