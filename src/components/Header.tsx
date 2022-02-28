import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import AddIcon from "../icons/AddIcon";
import FilterIcon from "../icons/FilterIcon";
import PeopleIcon from "../icons/PeopleIcon";
import SearchIcon from "../icons/SearchIcon";
import { View } from "./Themed";

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <View style={styles.icons}>
          <SearchIcon />
        </View>
        <View style={styles.icons}>
          <FilterIcon />
        </View>
        <View style={styles.icons}>
          <PeopleIcon />
        </View>
        <View style={styles.icons}>
          <Pressable
            onPress={() => navigation.navigate("AddTaskScreen")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <AddIcon />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    height: 80,
    backgroundColor: Colors.mainAppColor,
    paddingTop: 20,
  },

  title: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 24,
    textDecorationLine: "underline",
    textDecorationColor: "#fff",
  },

  container: {
    flexDirection: "row",
    backgroundColor: Colors.mainAppColor,
  },

  icons: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mainAppColor,
  },
});

export default Header;
