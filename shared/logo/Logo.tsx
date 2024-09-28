import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Gap } from "@/constants/Styles";

export default function Logo() {
  return (
    <View style={style.container}>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{ width: 40, height: 40 }}
        resizeMode="center"
      />
      <Text style={{ color: "#ffffff", fontSize: FontSize.fs22 }}>
        PurpleSchool
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: Gap.g10,
    color: "#ffffff",
  },
});
