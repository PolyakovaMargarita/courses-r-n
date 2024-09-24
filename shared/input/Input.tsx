import { Colors } from "@/constants/Colors";
import { FontSize, Radius } from "@/constants/Styles";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

//icons
import EyeClosedIcon from "@/assets/icons/eye_closed";
import EyeOpennedIcon from "@/assets/icons/eye_openned";

export const Input = ({
  isPassword,
  ...props
}: TextInputProps & { isPassword?: boolean }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <View>
      <TextInput
        secureTextEntry={isPassword && !isPasswordVisible}
        style={style.input}
        placeholderTextColor={Colors.gray}
        {...props}
      />
      {isPassword && (
        <Pressable
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={style.password}
        >
          {!isPasswordVisible ? <EyeClosedIcon /> : <EyeOpennedIcon />}
        </Pressable>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    paddingHorizontal: 24,
    height: 58,
    borderRadius: Radius.r10,
    backgroundColor: Colors.violetDark,
    fontSize: FontSize.fs16,
    color: Colors.gray,
    fontFamily: "FiraSansRegular",
  },
  password: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});
