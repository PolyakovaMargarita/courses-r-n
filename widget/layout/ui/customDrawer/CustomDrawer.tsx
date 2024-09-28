import CoursesIcon from "@/assets/icons/menu/courses";
import ProfileIcon from "@/assets/icons/menu/profile";
import { Colors } from "@/constants/Colors";
import { routers } from "@/constants/routes";
import { Gap } from "@/constants/Styles";
import { logoutAtom } from "@/entites/auth/model/auth.state";
import { loadProfileAtom } from "@/entites/user/model/user.state";
import { UserMenu } from "@/entites/user/ui/UserMenu/UserMenu";
import CloseDrawer from "@/features/layout/ui/CloseDrawer/CloseDrawer";
import { CustomLink } from "@/shared/customLink/CustomLink";
import Logo from "@/shared/logo/Logo";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { MenuItem } from "../../../../entites/layout/ui/MenuItem/MenuItem";

const MENU = [
  { text: "Курсы", icon: <CoursesIcon />, path: "index" },
  { text: "Профиль", icon: <ProfileIcon />, path: "profile" },
];

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const logout = useSetAtom(logoutAtom);
  const [profile, loadProfile] = useAtom(loadProfileAtom);

  useEffect(() => {
    loadProfile();
  }, []);

  console.log("profile", profile.profile?.photo);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={style.container}>
      <View style={style.content}>
        <CloseDrawer {...props.navigation} />
        <UserMenu profile={profile.profile} />
        {MENU.map((menu) => (
          <MenuItem key={menu.path} {...menu} drawer={props} />
        ))}
      </View>
      <View style={style.footer}>
        <CustomLink onPress={logout} text="Log out" href={routers.login} />
        <Logo />
      </View>
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
  },
  footer: {
    alignItems: "center",
    marginBottom: 50,
  },
});
