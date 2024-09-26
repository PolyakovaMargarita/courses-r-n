import React, { useEffect, useState } from "react";

import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "@/shared/input/Input";
import { FontSize, Gap } from "@/constants/Styles";
import { Button } from "@/shared/button/Button";
import { ErrorNotification } from "@/shared/errorNotification/ErrorNotification";
import { CustomLink } from "@/shared/customLink/CustomLink";
import { routers } from "@/constants/routes";
import { loginAtom } from "@/entites/auth/model/auth.state";
import { useAtom } from "jotai";
import { Redirect, router } from "expo-router";

//a@a.ru
//1

export default function Login() {
  const [errorLocal, setErrorLocal] = useState<string | undefined>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);

  const submit = () => {
    if (!email) {
      setErrorLocal("Enter email");
      return;
    }
    if (!password) {
      setErrorLocal("Enter password");
      return;
    }
    login({ email, password });
  };

  useEffect(() => {
    error && setErrorLocal(error);
  }, [error]);

  useEffect(() => {
    if (access_token) {
      router.replace(routers.main);
    }
  }, [access_token]);

  console.log("access_token", access_token);

  return (
    <View style={style.container}>
      <ErrorNotification error={errorLocal} />

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
          <Input placeholder="Email" onChangeText={setEmail} />
          <Input isPassword placeholder="Password" onChangeText={setPassword} />
          <Button text="Log In" onPress={submit} />
        </View>
        <CustomLink href={routers.restore} text="Recover password" />
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
