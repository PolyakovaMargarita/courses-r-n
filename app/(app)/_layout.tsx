import { Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useAtomValue } from "jotai";
import { authAtom } from "@/entites/auth/model/auth.state";
import { routers } from "@/constants/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from "@/constants/Colors";
import { FontFamily, FontSize } from "@/constants/Styles";
import { MenuButton } from "@/features/layout/ui/MenuButton/MenuButton";
import { CustomDrawer } from "@/widget/layout/ui/customDrawer/CustomDrawer";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { access_token } = useAtomValue(authAtom);

  if (!access_token) {
    return <Redirect href={routers.login} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          headerLeft: () => {
            return <MenuButton navigation={navigation} />;
          },
          headerStyle: {
            backgroundColor: Colors.blackLight,
            shadowOpacity: 0,
            shadowColor: Colors.blackLight,
          },
          headerTitleStyle: {
            color: Colors.white,
            fontSize: FontSize.fs18,
            fontFamily: FontFamily.firaSansRegular,
          },
          headerTitleAlign: "center",
          sceneContainerStyle: {
            backgroundColor: Colors.black,
          },
        })}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "My courses",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "My profile",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
