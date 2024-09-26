import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    FiraSansRegular: require("../assets/fonts/FiraSans-Regular.ttf"),
    FiraSansSemiBold: require("../assets/fonts/FiraSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          statusBarColor: Colors.black,
          contentStyle: {
            backgroundColor: Colors.black,
            // paddingTop: insets.top,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="restore" />
      </Stack>
    </SafeAreaProvider>
  );
}
