import MenuSvg from "@/assets/icons/menu";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

export const MenuButton = ({
  navigation,
  ...props
}: PressableProps & { navigation: any }) => {
  const [clicked, setClicled] = useState<boolean>(false);

  return (
    <Pressable
      {...props}
      onPressIn={() => setClicled(true)}
      onPressOut={() => setClicled(false)}
      onPress={() => navigation.toggleDrawer()}
      style={{
        ...style.button,
        backgroundColor: clicked ? Colors.violetDark : Colors.blackLight,
      }}
    >
      <MenuSvg />
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
  },
});
