import { StyleSheet, Text, View } from "react-native";
import { User } from "../../model/user.model";
import { Avatar } from "../Avatar/Avatar";
import { Colors } from "@/constants/Colors";
import { FontFamily, FontSize, Gap } from "@/constants/Styles";

export function UserMenu({ profile }: { profile: User | null }) {
  return (
    <View style={style.container}>
      <Avatar image={profile?.photo ? profile.photo : null} />
      <Text style={style.text}>{profile?.name}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginBottom: 50,
    marginTop: 50,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    gap: Gap.g10,
  },
  text: {
    color: Colors.white,
    fontSize: FontSize.fs18,
    fontFamily: FontFamily.firaSansRegular,
  },
});
