import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";

export default function TasksScreen({
  navigation,
}: RootTabScreenProps<"TasksTab">) {
  return (
    <View style={styles.container}>
      <Text>This is Tasks Tab.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
