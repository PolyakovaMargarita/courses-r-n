import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, View } from "react-native";
import { Gap } from "@/constants/Styles";
import { Button } from "@/shared/button/Button";
import { useSetAtom } from "jotai";
import { logoutAtom } from "@/entites/auth/model/auth.state";

export default function MyCourses() {
  const logout = useSetAtom(logoutAtom)
  return (
    <View style={style.container}>
      <Button text="Log out" onPress={logout} />
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
  content: {
    alignItems: "center",
    gap: Gap.g50,
    width: "100%",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    color: "#ffffff",
  },
  form: {
    alignSelf: "stretch",
    gap: Gap.g10,
  },
});
