import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@/shared/button/Button";
import { useSetAtom } from "jotai";
import { logoutAtom } from "@/entites/auth/model/auth.state";
import Logo from "@/shared/logo/Logo";

export default function MyProfile() {
  const logout = useSetAtom(logoutAtom);
  return (
    <View style={style.container}>
      <Text>MyProfile</Text>
      <Button text="Log out" onPress={logout} />
      <Logo />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
  },
});
