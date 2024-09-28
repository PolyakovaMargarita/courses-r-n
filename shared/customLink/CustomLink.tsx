import { Colors } from "@/constants/Colors";
import { FontFamily, FontSize } from "@/constants/Styles";
import { StyleSheet, Text } from "react-native";

import { Href, Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";
import { routers } from "@/constants/routes";

export const CustomLink = ({
  text,
  href,
  ...props
}: LinkProps<any> & {
  text: string;
  href: string | Href<string>;
}) => {
  return (
    <Link
      href={href ? href : routers.main}
      style={style.container}
      {...props}
    >
      <Text>{text}</Text>
    </Link>
  );
};

const style = StyleSheet.create({
  container: {
    fontSize: FontSize.fs18,
    color: Colors.link,
    fontFamily: FontFamily.firaSansRegular,
  },
});
