import { Colors } from "@/constants/Colors";
import { MAIN } from "@/constants/routes";
import { FontFamily, FontSize } from "@/constants/Styles";
import { CustomLink } from "@/shared/customLink/CustomLink";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function UnmachedRouter() {
  return (
    <View style={style.container}>
      <Image source={require("../assets/images/react-logo.png")} />
      <Text style={style.text}>Something wrong</Text>
      <CustomLink href={MAIN} text="Go to main" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: Colors.red,
    fontSize: FontSize.fs22,
    fontFamily: FontFamily.firaSansSemiBold,
    marginBottom: 20,
    marginTop: 20,
  },
  textBack: {
    color: Colors.link,
    textDecorationLine: "underline",
    fontSize: FontSize.fs22,
    fontFamily: FontFamily.firaSansSemiBold,
    marginBottom: 20,
    cursor: "pointer",
  },
});
