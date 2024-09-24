import { MAIN } from "@/constants/routes";
import { CustomLink } from "@/shared/customLink/CustomLink";
import { View } from "react-native";

export default function Restore() {
  return (
    <View>
      <CustomLink href={MAIN} text="Restore" />
    </View>
  );
}
