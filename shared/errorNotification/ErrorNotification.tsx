import { useEffect, useState } from "react";
import { ErrorNotificationProps } from "./ErrorNotification.props";
import { Animated, Dimensions, StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import { FontSize } from "@/constants/Styles";

export const ErrorNotification = ({ error }: ErrorNotificationProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const animatedValue = new Animated.Value(-100);

  const onEnter = () => {
    console.log("isShow", isShow);

    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!error) {
      setIsShow(false);
      return;
    }

    if (error) {
      setIsShow(true);

      const timerId = setTimeout(() => {
        setIsShow(false);
      }, 3000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [error]);

  if (!isShow) {
    return <></>;
  }

  return (
    <Animated.View
      style={{ ...styles.error, transform: [{ translateY: animatedValue }] }}
      onLayout={onEnter}
    >
      <Text style={styles.errorText}>{error}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  error: {
    position: "absolute",
    top: 50,
    width: Dimensions.get("screen").width,
    backgroundColor: Colors.red,
    padding: 15,
  },
  errorText: {
    color: Colors.white,
    fontSize: FontSize.fs16,
    textAlign: "center",
    fontFamily: "FiraSansRegular",
  },
});
