import React, { useState } from "react";

import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "@/shared/input/Input";
import { FontSize, Gap } from "@/constants/Styles";
import { Button } from "@/shared/button/Button";
import { ErrorNotification } from "@/shared/errorNotification/ErrorNotification";
import { RESTORE } from "@/constants/routes";
import { CustomLink } from "@/shared/customLink/CustomLink";

export default function Login() {
  const [error, setError] = useState<string | undefined>("");

  const alert = () => {
    setError("Uncorrect password");
    setTimeout(() => {
      setError("");
    }, 4000);
  };
  
  return (
    <View style={style.container}>
      <ErrorNotification error={error} />

      <View style={style.content}>
        <View style={style.logo}>
          <Image
            source={require("../assets/images/react-logo.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="center"
          />
          <Text style={{ color: "#ffffff", fontSize: FontSize.fs22 }}>
            PurpleSchool
          </Text>
        </View>
        <View style={style.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Password" />
          <Button text="Log In" onPress={alert} />
        </View>
        <CustomLink href={RESTORE} text="Recover password" />
      </View>
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
