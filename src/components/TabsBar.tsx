import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const TabsBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View
              style={{
                height: 80,
                backgroundColor: "#fff",
                justifyContent: "space-between",
                alignItems: "center",
                borderTopColor: isFocused ? Colors.mainAppColor : "#E4E4E4",
                borderTopWidth: isFocused ? 5 : 2,
                padding: 10,
                paddingBottom: 20,
              }}
            >
              {icon()}
              <Text
                style={{
                  color: isFocused ? Colors.mainAppColor : "#000",
                  fontWeight: isFocused ? "bold" : "normal",
                }}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabsBar;
