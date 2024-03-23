import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DefaultTheme,
  ThemeProvider,
  DarkTheme,
  useTheme,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, createContext, useState } from "react";
import { useColorScheme } from "react-native";
import { lightColors, darkColors } from "@/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/providers/AuthProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export const ThemeContext = createContext("");

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
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

  const LightThemeBro = {
    ...DefaultTheme,
    colors: {
      ...lightColors,
    },
    dark: true,
  };

  const DarkThemeBro = {
    ...DarkTheme,
    colors: {
      ...darkColors,
    },
  };
  return (
    <AuthProvider>
      <ThemeProvider value={theme == "dark" ? DarkThemeBro : LightThemeBro}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: true }} />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
}
