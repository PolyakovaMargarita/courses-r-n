import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export const MyCourses = () => {
  const { alias } = useLocalSearchParams();
  return (
    <View>
      <Text>{alias}</Text>
    </View>
  );
};
