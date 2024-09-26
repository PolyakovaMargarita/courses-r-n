import { Colors } from "@/constants/Colors";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { authAtom } from "@/entites/auth/model/auth.state";
import { routers } from "@/constants/routes";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { access_token } = useAtomValue(authAtom);

  if (!access_token) {
    return <Redirect href={routers.login} />;
  }

  return (
    <>
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
      ></Stack>
    </>
  );
}
