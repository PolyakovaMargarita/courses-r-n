import CloseIcon from "@/assets/icons/close";
import { Colors } from "@/constants/Colors";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { Pressable, StyleSheet, View } from "react-native";

const CloseDrawer = (navigation: DrawerNavigationHelpers) => {
  return (
    <Pressable onPress={() => navigation.closeDrawer()}>
      <View style={style.container}>
        <View style={style.icon}>
          <CloseIcon />
        </View>
      </View>
    </Pressable>
  );
};

export default CloseDrawer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    right: 20,
    top: 20
  },
  icon: {
    backgroundColor: Colors.violetDark,
    borderRadius: 50,
    width: 30,
    height: 30,
    padding: 5,
  },
});
