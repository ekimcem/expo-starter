import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { Text as DefaultText, TextStyle, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import { darkColors, lightColors } from "../constants/Colors";

type TextProps = {
  style?: TextStyle;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  font?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
};

const Text = ({
  style,
  size = "md",
  font = "400",
  children,
  ...otherProps
}: TextProps) => {
  const colorScheme = useColorScheme();
  const colorStyles = useMemo(
    () => (colorScheme === "dark" ? darkColors : lightColors),
    [colorScheme]
  );

  const textSizeStyle = useMemo(() => {
    switch (size) {
      case "sm":
        return { fontSize: 14 };
      case "lg":
        return { fontSize: 24 };
      default:
        return { fontSize: 18 };
    }
  }, [size]);

  const fontStyles = useMemo(() => {
    const fontWeight = font;
    return { fontWeight };
  }, [font]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        text: {
          color: colorStyles.text,
          ...textSizeStyle,
          ...fontStyles,
          ...style,
        },
      }),
    [colorStyles, textSizeStyle, fontStyles, style]
  );

  return (
    <DefaultText style={styles.text} {...otherProps}>
      {children}
    </DefaultText>
  );
};

export default Text;
