/* ThemeContext */

import React, { createContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create context
const ThemeContext = createContext({
  theme: "light" || "dark",
  toggleTheme: (newTheme: string) => {},
});

export const ThemeProvider = ({ children }: { children: any }) => {
  // Get system color scheme
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Load saved theme from storage
    const getTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        // If no saved theme, set theme based on system preference
        if (savedTheme) {
          setTheme(savedTheme);
        } else if (savedTheme === null) {
          if (colorScheme === "dark") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }
      } catch (error) {
        // Error loading theme
        console.log("Error loading theme:", error);
      }
    };
    getTheme();
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    // Save selected theme to storage
    AsyncStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
