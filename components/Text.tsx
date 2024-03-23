import React, { ReactNode, useEffect, useState } from "react";
import { Text as DefaultText, TextStyle, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "../constants/Colors";

type TextProps = {
  style?: TextStyle;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  variant?: "primary" | "secondary";
  font?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
};

export default function Text(props: TextProps) {
  const { style, variant = "primary", size, children, ...otherProps } = props;
  const colorScheme = useColorScheme();
  const [colorStyles, setColorStyles] = useState(
    colorScheme === "dark" ? darkColors : lightColors
  );

  useEffect(() => {
    setColorStyles(colorScheme === "dark" ? darkColors : lightColors);
  }, [colorScheme]);

  let textSizeStyle = {};

  if (size === "sm") {
    textSizeStyle = { fontSize: 14 };
  } else if (size === "md") {
    textSizeStyle = { fontSize: 18 };
  } else if (size === "lg") {
    textSizeStyle = { fontSize: 24 };
  }

  const styles = StyleSheet.create({
    text: { color: colorStyles.text, ...textSizeStyle, ...style },
  });

  return (
    <DefaultText style={styles.text} {...otherProps}>
      {children}
    </DefaultText>
  );
}
