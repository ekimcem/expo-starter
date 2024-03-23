import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface BadgeProps {
  label: string;
  onPress?: () => void;
}

const Badge: React.FC<BadgeProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
});

export default Badge;
